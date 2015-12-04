import React from 'react';
import Helmet from 'react-helmet';
import config from 'config';

export default React.createClass({
    getDefaultProps() {
        return {
            questions: []
        };
    },
    render() {
        return (
             <ul>
                {this.props.questions.map(function (question) {
                    return (
                        <tr>{question.text}</tr>
                    );
                })}
             </ul>
        );
    }
});
