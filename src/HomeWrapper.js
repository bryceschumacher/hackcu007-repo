import React from 'react';
import {Home} from './Home.js'
import {SurveyResponses} from './SurveyResponses.js'
import './index.css'

export class HomeWrapper extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            main_content: 'home',
        }

        this.changeMainContent = this.changeMainContent.bind(this);
    }

    changeMainContent(content) {
        this.setState({ main_content: content });
    }
    changeTaco(new_word) {
        this.setState({taco: new_word});
    }
    render() {

        let content;
        if (this.state.main_content === 'home') {
            content = <div><Home /></div>;
        }
        else if (this.state.main_content === 'survey_responses') {
            content = <div><SurveyResponses /></div>;
        }
        return (
            //previously classname home
            <div className="home-wrapper">
                <Menu changeMainContent={this.changeMainContent} some_attribute = {this.state.main_content} />
                <div className="main-content">{content}</div>
            </div>
        );
    }


}

class Menu extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(id, to) {
        this.setState({ selected: id });
        this.props.changeMainContent(to);
        console.log(to);
    }

    render() {
        return (
            <>
                <div class="nav">
                    <div class="left-column">
                        <div class="nav-wrapper">
                            <img src=""></img>
                            <MenuItem id={0} onClick={this.handleClick} some_attribute_again={this.props.some_attribute} text='Home' to='home' />
                        </div>
                        <div class="nav-wrapper">
                            <img src=""></img>
                            <MenuItem id={2} onClick={this.handleClick} some_attribute_again={this.props.some_attribute} text='Survey Responses' to='survey_responses' />
                        </div>
                    </div>
                    <div class="right-column">
                        <div class="nav-wrapper2">
                            ReSatisfy
                        </div>
                    </div>
                </div>

            </>
        );
    }

}

class MenuItem extends React.Component {


    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick(this.props.id, this.props.to);
    }

    render() {
        console.log(this.props.some_attribute_again);
        let selected_style;
        if(this.props.some_attribute_again == 'home') {
            selected_style = {
                color: "rgb(255, 255, 255)"

            }
        }
        
        return (
			
            <div class ='menu-item-wrapper'>
                <div class ='menu-item' style={selected_style} onClick={this.handleClick}>
                    <div class ='menu-item-content'>
                        <div class ='primary-text'>{this.props.text}</div>
                    </div>
                </div>
            </div>
			
        )
    }
}