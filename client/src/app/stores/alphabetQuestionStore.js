import Reflux from 'reflux';
import alphabetQuestionActions from 'actions/alphabetQuestion';

export default Reflux.createStore( {

    store: null,

    init() {
        this.listenTo( alphabetQuestionActions.getAlphabetQuestions.completed, gotAlphabetQuestions.bind( this ) );
    },

    getInitialState() {
        return this.store;
    }

} );

///////////////////
////

function gotAlphabetQuestions( alphabetQuestions ) {
    this.store = alphabetQuestions.questions;
    doTrigger.call( this );
}


function doTrigger() {
    this.trigger( this.store );
}
