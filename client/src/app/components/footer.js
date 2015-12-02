import React from 'react';

export default React.createClass({

    shouldComponentUpdate() {
        return false;
    },

    render() {
        return (
            <footer className="footer hidden-print">
                <div className="container">
                    <div className="row">

                        <div className="content col-md-12 col-sm-12 text-center">
                            <div>DoubleSpeak2 is a new way to learn a new language.</div>
                            <div>
                                Get the source code at <a href="https://github.com/prashantpawar/doublespeak2" target="_blank">GitHub</a>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-12 hidden-sm hidden-xs">
                            <div className="pull-right">

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

} );
