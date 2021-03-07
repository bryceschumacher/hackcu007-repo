//In your react App.js or yourComponent.js file add these lines to import
import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

export class LoveLanguages extends React.Component {
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "paneldynamic",
            "name": "Needs",
            "title": "Love Languages",
            "templateElements": [
             {
              "type": "dropdown",
              "name": "relativeType",
              "title": "Need",
              "isRequired": true,
              "choices": [
               {
                "value": "words-of-affirmation-val",
                "text": "Words of Affirmation"
               },
               {
                "value": "aos-val",
                "text": "Acts of Service"
               },
               {
                "value": "gifts-val",
                "text": "Gifts"
               },
               {
                "value": "qual-time-val",
                "text": "Quality Time"
               },
               {
                "value": "phys-touch-val",
                "text": "Physical Touch"
               }
              ]
             },
             {
              "type": "text",
              "name": "question2",
              "startWithNewLine": false,
              "title": "How well satisfied is this need? (0-100)",
              "inputType": "number",
              "min": "0",
              "max": "100"
             },
             {
              "type": "panel",
              "name": "moreInfo",
              "elements": [
               {
                "type": "matrixdynamic",
                "name": "relativeillness",
                "title": "Enter the ways in which you satisfy this need",
                "columns": [
                 {
                  "name": "Satisfier",
                  "title": "Satisfier",
                  "cellType": "text",
                  "isRequired": true
                 },
                 {
                  "name": "frequency",
                  "title": "How often do you do this activity? (hours/week)",
                  "cellType": "text",
                  "isRequired": true
                 },
                 {
                  "name": "satisfaction",
                  "title": "How much does this contribute to your satisfaction of the need? (0-100)",
                  "cellType": "text",
                  "isRequired": true,
                  "inputType": "number"
                 }
                ],
                "rowCount": 0
               }
              ],
              "title": "Detail Information about: {panel.relativeType}",
              "state": "expanded"
             }
            ],
            "templateTitle": "Information about: {panel.relativeType}",
            "panelCount": 2,
            "panelAddText": "Add Another Need Entry",
            "panelRemoveText": "Clear this need",
            "renderMode": "progressTop"
           }
          ]
         }
        ]
       }


 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {

  var model = new Survey.Model(this.json);
  return (<Survey.Survey model={model} onComplete={this.onComplete}/>);

 }
} 