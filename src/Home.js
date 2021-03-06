import React from 'react';
import logo from './benjamin-voros-phIFdC6lA4E-unsplash.jpg'

export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main_content:  'home',
        }
    }
    render() {
        return (
            <>
                <div class="background-image" style={{backgroundImage: `url(${logo})` , backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "60vw"}}>
                </div>
                <div class="survey-main-content">
                    Surveys gonna go here
                </div>
            </>
        );
    }
}