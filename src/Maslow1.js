//In your react App.js or yourComponent.js file add these lines to import
import React from 'react';
import * as Survey from "survey-react";
import "survey-react/survey.css";

export class Maslow1 extends React.Component {
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
            "title": "Maslow's Hierarchy of Needs",
            "templateElements": [
             {
              "type": "dropdown",
              "name": "relativeType",
              "title": "Need",
              "isRequired": true,
              "choices": [
               {
                "value": "hydration-val",
                "text": "Hydration"
               },
               {
                "value": "salt-val",
                "text": "Salt"
               },
               {
                "value": "sugar-val",
                "text": "Sugar"
               },
               {
                "value": "protein-val",
                "text": "Protein"
               },
               {
                "value": "fat-val",
                "text": "Fat"
               },
               {
                "value": "calcium-val",
                "text": "Calcium"
               }, {
                "value": "oxygen-val",
                "text": "Oxygen"
               }, {
                "value": "ph-balance-val",
                "text": "Ph Balance"
               }, {
                "value": "body-temp-val",
                "text": "Body Temp"
               }, {
                "value": "job-val",
                "text": "Job with Tenure"
               }, {
                "value": "savings-val",
                "text": "Savings Account"
               }, {
                "value": "insurance-val",
                "text": "Insurance"
               }, {
                "value": "physical-safety-val",
                "text": "Physical Safety"
               }, {
                "value": "giving-attention-val",
                "text": "Giving Attention"
               }, {
                "value": "receiving-affection-val",
                "text": "Receiving Affection"
               }, {
                "value": "belonging-val",
                "text": "Belonging"
               }, {
                "value": "friendship-val",
                "text": "Friendship"
               }, {
                "value": "strength-val",
                "text": "Strength"
               }, {
                "value": "acheivement-val",
                "text": "Acheivement"
               }, {
                "value": "adequacy-val",
                "text": "Adequacy"
               }, {
                "value": "confidence-val",
                "text": "Confidence"
               }, {
                "value": "independence-val",
                "text": "Independence"
               }, {
                "value": "freedom-val",
                "text": "Freedom"
               }, {
                "value": "reputation-val",
                "text": "Reputation"
               }, {
                "value": "prestige-val",
                "text": "Prestige"
               }, {
                "value": "recognitition-val",
                "text": "Recognition"
               }, {
                "value": "attention-val",
                "text": "Attention"
               }, {
                "value": "importance-val",
                "text": "Importance"
               }, {
                "value": "appreciation-val",
                "text": "Appreciation"
               }, {
                "value": "creativity-val",
                "text": "Creativity"
               }, {
                "value": "actualization-val",
                "text": "Actualization"
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
            "panelCount": 1,
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