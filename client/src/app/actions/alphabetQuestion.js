import Reflux from 'reflux';

import {
    getAlphabetQuestionsFromJSON
} from 'resources/alphabetQuestion';

let actions = Reflux.createActions( {
    getAlphabetQuestions: { asyncResult: true }
} );

export default actions;

actions.getAlphabetQuestions.listenAndPromise( getAlphabetQuestionsFromJSON );
