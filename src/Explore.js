import React from "react"
import { WorldMap } from "react-svg-worldmap"

export class Explore extends React.Component {
    render() {
    const data =
        [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 },  // united states
        { country: "id", value: 264935824 },  // indonesia
        { country: "pk", value: 210797836 },  // pakistan
        { country: "br", value: 210301591 },  // brazil
        { country: "ng", value: 208679114 },  // nigeria
        { country: "bd", value: 161062905 },  // bangladesh
        { country: "ru", value: 141944641 },  // russia
        { country: "mx", value: 127318112 }   // mexico
        ]

    return (
        <div className="new-div-here" >
            <WorldMap color="blue" value-suffix="people" size="lg" data={data} />
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 432 275"></svg>
        </div>
    );
    }
}