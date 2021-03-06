import React from 'react';

export class SurveyResponses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main_content:  'survey_responses',
        }

    }
    render() {
        return (
            <div>
                <p>Survey Responseseee</p>
            </div>
        );
    }
}