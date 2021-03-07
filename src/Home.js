import React from 'react';
import logo from './benjamin-voros-phIFdC6lA4E-unsplash.jpg'
import {Maslow1} from './Maslow1.js'
import {Maslow2} from './Maslow2.js'
import {LoveLanguages} from './LoveLanguages.js'
export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main_content:  'home',
            schema_shown: 'maslow1',
        }
        this.changeSchema = this.changeSchema.bind(this);
    }
    changeSchema(new_schema) {
        this.setState({ schema_shown: new_schema});
    }



    render() {

    

        let content;
        if(this.state.schema_shown === 'maslow1') {
            content = <Maslow1 />;
        }
        else if(this.state.schema_shown === 'maslow2') {
            content = <Maslow2 />;
        }
        else if(this.state.schema_shown === 'love-languages') {
            content = <LoveLanguages />;
        }


            return (
                <>
                    <div class="background-image" style={{backgroundImage: `url(${logo})` , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "60vw"}}>
                    </div>
                    <div class="text-in-background">
                        <div class="quote-container">
                            
                        </div>
                    </div>
                    <div class="skip-section-div">
                        <section id="skip-section" class="skip-section-class">
                            <a href="#survey-main-content"><span></span><p>Scroll</p></a>
                        </section>
                    </div>
                    <div class="scroll-container">
                        <div id="survey-main-content">
                            <div class="choose-schema-design">
                                <ChooseSchema changeSchema={this.changeSchema} />
                            </div>
                            <div class="here-are-the-surveys">{content}</div>
                        </div>
                    </div>
                </>
            );

    }
}

class ChooseSchema extends React.Component {
    constructor(props) {
        super(props);
        this.changeValueFunction = this.changeValueFunction.bind(this);
        this.state = {value: ''}
    }
    changeValueFunction(event) {
        this.setState({ value: event.target.value });
        this.props.changeSchema(event.target.value);
    }
    render() {
        return (
            <>
                <div class="form-deciding-which-survey">
                    <form>
                        <label>Choose Schema</label>
                        <select name="schema_choice" id="cars" onChange={this.changeValueFunction}>
                            <option value="maslow1">Maslow 1943</option>
                            <option value="maslow2">Maslow 1943 Reduced</option>
                            <option value="love-languages">Love Languages</option>
                        </select>
                    </form>
                </div>
            </>
        );
    }
}
