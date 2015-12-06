import _ from 'lodash';
import React from 'react';
import Reflux from 'reflux';
import { History } from 'react-router';

import alphabetQuestionActions from 'actions/alphabetQuestion';

import alphabetQuestionStore from 'stores/alphabetQuestionStore';

export default React.createClass( {

    mixins: [
        History,
        Reflux.connect( alphabetQuestionStore, 'questions' )
    ],

    getInitialState() {
        return {
        };
    },

    componentDidMount() {
        alphabetQuestionActions.getAlphabetQuestions();
    },

    render() {
        return (
            <div id="alphabet-questions">
                { this.renderQuestions() }
            </div>
        );
    },

    renderQuestions() {
        let questions = this.state.questions || [];

        return (
            <div className="user-profile">
                <ul>
                    {questions.map(function(question) {
                        return (<li>{question}</li>)
                    })}
                </ul>
            </div>
        );
    },
} );
