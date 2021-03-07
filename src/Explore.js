import React from "react"
import { WorldMap } from "react-svg-worldmap"
import {Table1} from './Table1.js'
import {Table2} from './Table2.js'
import {Table3} from './Table3.js'



export class Explore extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            map_shown: 'friendship',
        }
        this.changeMapShown = this.changeMapShown.bind(this);
    }
    changeMapShown(new_map) {
        this.setState({ map_shown: new_map});
    }



    render() {

        const data1 =
        [
        { country: "cn", value: 2 }, // china
        { country: "gl", value: 4 }, // india
        { country: "us", value: 6 },  // united states
        { country: "id", value: 4 },  // indonesia
        { country: "pk", value: 8 },  // pakistan
        { country: "br", value: 4 },  // brazil
        { country: "ng", value: 3 },  // nigeria
        { country: "bd", value: 4 },  // bangladesh
        { country: "ru", value: 1 },  // russia
        { country: "mx", value: 9 },   // mexico
        { country: "fr", value: 8 },   // france
        { country: "de", value: 4 },
        { country: "fi", value: 1 },
        { country: "bd", value: 3 },
        { country: "au", value: 12},
        { country: "af", value: 9},
        { country: "is", value: 3 },
        { country: "ca", value: 14},
        { country: "gb", value: 8 },
        { country: "dk", value: 8 },
        { country: "no", value: 4 },
        { country: "se", value: 10 },
        { country: "ar", value: 3 },
        { country: "pe", value: 8 }
        ];
        const data2 =
        [
        { country: "cn", value: 153 }, // china
        { country: "in", value: 50 }, // india
        { country: "us", value: 250 },  // united states
        { country: "id", value: 100 },  // indonesia
        { country: "pk", value: 50 },  // pakistan
        { country: "br", value: 130 },  // brazil
        { country: "ng", value: 74 },  // nigeria
        { country: "bd", value: 83 },  // bangladesh
        { country: "ru", value: 92 },  // russia
        { country: "mx", value: 150 },   // mexico
        { country: "au", value: 123},
        { country: "af", value: 90},
        { country: "is", value: 301 },
        { country: "ca", value: 143},
        { country: "gb", value: 80 },
        { country: "dk", value: 80 },
        { country: "no", value: 44 },
        { country: "se", value: 100 },
        { country: "ar", value: 33 },
        { country: "pe", value: 80 }
        ];
        const data3 =
        [
        { country: "cn", value: 50 }, // china
        { country: "gl", value: 20 }, // india
        { country: "us", value: 30 },  // united states
        { country: "id", value: 43 },  // indonesia
        { country: "pk", value: 82 },  // pakistan
        { country: "br", value: 94 },  // brazil
        { country: "ng", value: 10 },  // nigeria
        { country: "bd", value: 49 },  // bangladesh
        { country: "ru", value: 42 },  // russia
        { country: "mx", value: 93 },   // mexico
        { country: "fr", value: 74 },   // france
        { country: "de", value: 39 },
        { country: "fi", value: 39 },
        { country: "bd", value: 91 },
        { country: "au", value: 12},
        { country: "af", value: 93},
        { country: "is", value: 30 },
        { country: "ca", value: 14},
        { country: "gb", value: 82 },
        { country: "dk", value: 84 },
        { country: "no", value: 41 },
        { country: "se", value: 104 },
        { country: "ar", value: 30 },
        { country: "pe", value: 83 }
        ];



        let content;
        let content2;
        if(this.state.map_shown === 'friendship') {
            content = (<div class="new-div-here" >
                        <h1 class="heading-map">Time Spent on Friendship per Week</h1>
                        <h2 class="heading-map-sub">(Global)</h2>
                        <WorldMap color="green" value-suffix="people" size="lg" data={data1} />
                        <h1 class="disclaimer">Discliamer: These values were completely made up for the purpose of demonstration</h1>
                    </div>
                    );
            content2 = (
                <>
                    <h2 class="heading-map-sub2">(Local)</h2>
                    <div class="tables">
                        <Table1 />
                    </div>
                </>
            );
        }
        else if(this.state.map_shown === 'physical_safety') {
            content = (<div class="new-div-here" >
                        <h1 class="heading-map">Money Spent on Physical Safety per Week</h1>
                        <h2 class="heading-map-sub">(Global)</h2>
                        <WorldMap color="red" value-suffix="people" size="lg" data={data2} />
                        <h1 class="disclaimer">Discliamer: These values were completely made up for the purpose of demonstration</h1>
                    </div>
                );
            content2 = (
                <>
                    <h2 class="heading-map-sub2">(Local)</h2>
                    <div class="tables">
                        <Table2 />
                    </div>
                </>
            );
        }
        else if(this.state.map_shown === 'hydration') {
            content = (<div class="new-div-here" >
                        <h1 class="heading-map">Money Spent on Hydration per Week</h1>
                        <h2 class="heading-map-sub">(Global)</h2>
                        <WorldMap color="blue" value-suffix="people" size="lg" data={data3} />
                        <h1 class="disclaimer">Discliamer: These values were completely made up for the purpose of demonstration</h1>
                    </div>
                    );
            content2 = (
                <>
                    <h2 class="heading-map-sub2">(Local)</h2>
                    <div class="tables">
                        <Table3 />
                    </div>
                </>
            );
        }


            return (
                <>
                    <div class="scroll-container">
                        <div id="survey-main-content2">
                            <ChooseMapShown changeMapShown={this.changeMapShown} />
                            <div class="map-and-table">
                                <span class="here-are-the-maps">{content}</span>
                                <span class="here-are-the-tables">{content2}</span>
                            </div>
                        </div>
                    </div>
                </>
            );

    }
}

class ChooseMapShown extends React.Component {
    constructor(props) {
        super(props);
        this.changeValueFunction = this.changeValueFunction.bind(this);
        this.state = {value: ''}
    }
    changeValueFunction(event) {
        this.setState({ value: event.target.value });
        this.props.changeMapShown(event.target.value);
    }
    render() {
        return (
            <>
                <div class="form-deciding-which-survey2">
                    <form>
                        <label for="schema_choice">Choose a Need to Show:</label>
                        <select name="schema_choice" id="cars" onChange={this.changeValueFunction}>
                            <option value="friendship">Friendship</option>
                            <option value="physical_safety">Physical Safety</option>
                            <option value="hydration">Hydration</option>
                        </select>
                    </form>
                </div>
            </>
        );
    }
}


