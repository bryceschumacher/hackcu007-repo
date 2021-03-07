import React, { Component } from 'react';
import cytoscape from 'cytoscape';
import cydagre from 'cytoscape-dagre';

cydagre(cytoscape);

let cyStyle = {
    height: '800px',
    display: 'block'
};

let conf = {
        "elements": {
            "nodes": [{
                "data": {
                    "id": "a",
                    "parent": "b",
                    "label": "Physical\nConnection",
                    "fontsize": 8,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 100,
                    "y": 200
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "c",
                    "parent": "b",
                    "label": "Coop-\neration",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 100,
                    "y": 250
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "b",
                    "label": "",
                    "fontsize": 10,
                    "color": "rgb(65, 82, 101)",
                    "opacity": "0.2",
                    "textcolor": "rgb(44, 41, 51)"
                },
                "position": {
                    "x": 100,
                    "y": 225
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "f",
                    "parent": "e",
                    "label": "Hunger",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 100,
                    "y": 110
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": ""
            },
            {
                "data": {
                    "id": "g",
                    "parent": "e",
                    "label": "Thirst",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 100,
                    "y": 60
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": ""
            },
            {
                "data": {
                    "id": "e",
                    "label": "",
                    "fontsize": 10,
                    "color": "rgb(65, 82, 101)",
                    "opacity": "0.2",
                    "textcolor": "rgb(44, 41, 51)"
                },
                "position": {
                    "x": 100,
                    "y": 85
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": ""
            },
            {
                "data": {
                    "id": "n1",
                    "label": "Eating\nFood",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 210,
                    "y": 110
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "n2",
                    "label": "Drinking\nWater",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 210,
                    "y": 60
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "n3",
                    "label": "Playing\nBasketball",
                    "fontsize": 8,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 210,
                    "y": 270
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "n4",
                    "label": "Drinking\nAlcohol",
                    "fontsize": 10,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 210,
                    "y": 220
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            },
            {
                "data": {
                    "id": "n5",
                    "label": "Receiving\nMassage",
                    "fontsize": 9,
                    "color": "rgb(41, 52, 64)",
                    "opacity": "1",
                    "textcolor": "rgb(200, 200, 200)"
                },
                "position": {
                    "x": 210,
                    "y": 170
                },
                "group": "nodes",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": false,
                "classes": "multiline-manual"
            }],
            "edges": [{
                "data": {
                    "id": "fn1",
                    "source": "f",
                    "target": "n1",
                    "color": "rgb(157, 170, 189)",
                    "width": 4,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "gn1",
                    "source": "g",
                    "target": "n1",
                    "color": "rgb(194, 109, 104)",
                    "width": 2,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "gn2",
                    "source": "g",
                    "target": "n2",
                    "color": "rgb(157, 170, 189)",
                    "width": 4,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "cn3",
                    "source": "c",
                    "target": "n3",
                    "color": "rgb(157, 170, 189)",
                    "width": 4,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "an4",
                    "source": "a",
                    "target": "n4",
                    "color": "rgb(194, 109, 104)",
                    "width": 2,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "an5",
                    "source": "a",
                    "target": "n5",
                    "color": "rgb(128, 184, 122)",
                    "width": 4,
                    "style": "dashed"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            },
            {
                "data": {
                    "id": "an1",
                    "source": "a",
                    "target": "n1",
                    "color": "rgb(194, 109, 104)",
                    "width": 6,
                    "style": "solid"
                },
                "position": {
                    "x": 0,
                    "y": 0
                },
                "group": "edges",
                "removed": false,
                "selected": false,
                "selectable": true,
                "locked": false,
                "grabbable": true,
                "pannable": true,
                "classes": ""
            }]
        },
        "style": [{
            "selector": "node",
            "style": {
                "label": "data(label)",
                "text-valign": "center",
                "text-halign": "center",
                "font-size": "data(fontsize)",
                "color": "data(textcolor)",
                "height": "45px",
                "width": "45px",
                "background-color": "data(color)",
                "background-opacity": "data(opacity)",
                "text-wrap": "wrap",
                "text-max-width": "45px"
            }
        },
        {
            "selector": ":parent",
            "style": {
                "text-valign": "top",
                "text-halign": "center"
            }
        },
        {
            "selector": ".multiline-manual",
            "style": {
                "text-wrap": "wrap"
            }
        },
        {
            "selector": "edge",
            "style": {
                "curve-style": "bezier",
                "target-arrow-shape": "triangle",
                "line-color": "data(color)",
                "target-arrow-color": "data(color)",
                "width": "data(width)",
                "line-style": "data(style)"
            }
        },
        {
            "selector": ".eh-handle",
            "style": {
                "background-color": "rgb(128,184,122)",
                "width": "12px",
                "height": "12px",
                "shape": "ellipse",
                "overlay-opacity": "0",
                "border-width": "12px",
                "border-opacity": "0"
            }
        },
        {
            "selector": ".eh-hover",
            "style": {
                "background-color": "rgb(128,184,122)"
            }
        },
        {
            "selector": ".eh-source",
            "style": {
                "border-width": "2px",
                "border-color": "rgb(128,184,122)"
            }
        },
        {
            "selector": ".eh-target",
            "style": {
                "border-width": "2px",
                "border-color": "rgb(128,184,122)"
            }
        },
        {
            "selector": ".eh-preview",
            "style": {
                "background-color": "rgb(157,170,189)",
                "line-color": "rgb(157,170,189)",
                "target-arrow-color": "rgb(157,170,189)",
                "source-arrow-color": "rgb(157,170,189)",
                "width": "4px"
            }
        },
        {
            "selector": ".eh-ghost-edge",
            "style": {
                "background-color": "rgb(157,170,189)",
                "line-color": "rgb(157,170,189)",
                "target-arrow-color": "rgb(157,170,189)",
                "source-arrow-color": "rgb(157,170,189)",
                "width": "4px"
            }
        }],
        "data": {
            
        },
        "zoomingEnabled": true,
        "userZoomingEnabled": true,
        "zoom": 3.1284916201117317,
        "minZoom": 1e-50,
        "maxZoom": 1e+50,
        "panningEnabled": true,
        "userPanningEnabled": true,
        "pan": {
            "x": 493.07262569832403,
            "y": -38.21229050279328
        },
        "boxSelectionEnabled": false,
        "renderer": {
            "name": "canvas"
        },
        layout: {
            name: 'preset',
            padding: 40
          }
};

export class SurveyResponses extends Component {
    constructor(props) {
        super(props);
        this.state = { cy: {} }
    }

    componentDidMount() {
        conf.container = this.cyRef;
        //conf.elements = this.props.data;
        const cy = cytoscape(conf);

        this.state = { cy };
        // cy.json();
    }

    shouldComponentUpdate() {
        return false;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.cy) {
            this.state.cy.destroy();
        }
        conf.container = this.cyRef;
        conf.elements = nextProps.data;
        const cy = cytoscape(conf);

        this.state = { cy };
    }

    componentWillUnmount() {
        //if (this.state.cy) {
        //    this.state.cy.destroy();
        //}
    }

    render() {
        return <div style={cyStyle} ref={(cyRef) => {
            this.cyRef = cyRef;
        }}/>
    }
}

//export default SurveyResponses;


/*
export class SurveyResponses extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            main_content:  'survey_responses',
        }

    }
    render() {
        return(
        <h1>yooo</h1>
        );
    }
}
*/