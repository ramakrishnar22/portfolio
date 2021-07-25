import React from "react";
import {BsFillAwardFill} from 'react-icons/bs';
import './Dashboard.scss';
export class Dashboard extends React.Component{
    
    render(){
        return (
            React.createElement(
                "div",
                {
                    "className":'dashboard-wrap'
                },
               React.createElement(
                   React.Fragment,
                   null,
                   React.createElement(
                       "div",
                       {
                           "className":'navbar'
                       },
                       React.createElement(
                           "div",
                           {
                               "className":'left'
                           },
                           <BsFillAwardFill size="30"/>
                       ),
                       React.createElement(
                           "ul",
                           {
                               "className":'navlist'
                           },
                           React.createElement(
                               "li",
                               {
                                   "className":''
                               },
                               "About"
                           ),
                           React.createElement(
                            "li",
                            {
                                "className":''
                            },
                            "Home"
                        ),
                        React.createElement(
                            "li",
                            {
                                "className":''
                            },
                            "Contact"
                        )
                       )
                   )
               )
            )
        )
    }
}