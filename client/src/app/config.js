import _ from 'lodash';

let env = process.env;

let config = {

    general: {
        title: 'Doublespeak2',
        description: 'Doublespeak2 app lets you learn a new language',
        apiUrl: '/api/v1/'
    },

    development: {
        env: "development"
    },

    production: {
        env: "production"
    }
};

export default _.extend( {}, config.general, config[ env.NODE_ENV ] );
