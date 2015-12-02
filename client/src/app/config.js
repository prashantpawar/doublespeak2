import _ from 'lodash';

let env = process.env;

let config = {

    general: {
        title: 'DoubleSpeak2',
        description: 'DoubleSpeak2 is a new way to learn a language.',
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
