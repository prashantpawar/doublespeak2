import Reflux from 'reflux';
import alphabetActions from 'actions/alphabet';

import { getAlphabets } from 'resources/alphabets';
import Debug from 'debug';
let debug = new Debug("stores:alphabet");


export default Reflux.createStore( {

    store: null,

    init() {
        this.listenTo( alphabetActions.getAlphabets.completed, gotAlphabets.bind( this ) );
        this.loadAlphabets();
    },

    getInitialState() {
        return this.store;
    },

    loadAlphabets() {
        debug('loadAlphabets');
        return getAlphabets()
            .then(gotAlphabets.bind(this));
    },

    getAlphabetQuestions() {
        console.log("getAlphabetQuestions called", this.store);
        return this.store.questions;
    },

    isAlphabetQuestionsLoaded() {
        return this.store;
    }
} );

///////////////////
////

function gotAlphabets( alphabets ) {
    this.store = alphabets;
    doTrigger.call( this );
}

function doTrigger() {
    this.trigger( this.store );
}
