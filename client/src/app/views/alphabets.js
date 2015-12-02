import _ from 'lodash';
import React from 'react/addons';
import cx from 'classnames';
import { Button } from 'react-bootstrap';
import DocTitle from 'components/docTitle';
import resetActions from 'actions/reset';

import ValidateEmail from 'services/validateEmail';
import ValidateRequiredField from 'services/validateRequiredField';

export default React.createClass( {

    mixins: [
        React.addons.LinkedStateMixin,
    ],

    getInitialState() {
        return {
            step: 'SendPasswordResetEmail',
            errors: {}
        };
    },

    render() {
        return (
            <div id="alphabets">
                <DocTitle
                    title="Learn Alphabets"
                />

                { this.renderSendPasswordResetEmail()}
                { this.renderCheckEmail() }
            </div>
        );
    }
} );
