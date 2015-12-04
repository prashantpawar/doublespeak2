import Reflux from 'reflux';

import {
    getAlphabets
} from 'resources/alphabets';

let actions = Reflux.createActions( {
    getAlphabets: { asyncResult: true }
} );

export default actions;

actions.getAlphabets.listenAndPromise( getAlphabets );
