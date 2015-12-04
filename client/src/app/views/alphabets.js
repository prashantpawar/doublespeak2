import _ from 'lodash';
import React from 'react/addons';
import Reflux from 'reflux';
import DocTitle from 'components/docTitle';
import Quiz from 'components/quiz';

import alphabetStore from 'stores/alphabet';

export default React.createClass( {

    mixins: [
        Reflux.connect( alphabetStore, 'alphabet')
    ],

    getInitialState() {
        return {
            questions: alphabetStore.getAlphabetQuestions() 
        };
    },

    componentDidMount() {
        
    },

    render() {
        return (
            <div id="alphabets">
                <DocTitle
                    title="Learn Alphabets"
                />
                <Quiz
                    questions={this.props.questions}
                />
            </div>
        );
    }
} );
