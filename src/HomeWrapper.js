import React from 'react';

export class HomeWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {main_content: 'home'};
        this.changeMainContent = this.changeMainContent.bind(this);
    }
    changeMainContent(new_content) {
        this.setState({ main_content: new_content });
    }
    render() {
        let content_displayed;
        if(this.state.main_content == 'home') {
            content_displayed = <Home />
        }
        else if(this.state.main_content == 'survey_responses') {
            content_displayed = <SurveysResponses />
        }
        return (
            
        );
    }
}