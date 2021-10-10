// import React, { Component } from 'react'

// export default class Welcome extends Component<IWelcomeProps> {

//     renderName = ''
//     constructor(props:IWelcomeProps){
//         super(props)
//          this.renderName = 'Techii'+this.props.name
//         // this.props.name = 'Techii'+this.props.name
//     }
//     render() {
//         return (
//             <div>
//                 <p>Welcome {this.renderName}</p>
//                <span>{this.props?.details?.address}</span>
//                <span>{this.props?.details?.pincode}</span>
                
//             </div>
//         )
//     }
// }

import React from 'react';

export default function Welcome(props:IWelcomeProps) {
    let isLoggedIn  = true
    function clickMe(name:string){
        console.log('click me button clicked')
        console.log(name)
    }
    let detailRender 
    if(props?.details){
        detailRender =  <p>{props?.details?.address}</p>
    }
    else {
        detailRender =  <p>no Detail</p>
    }
     return (
        <div>
            <p>I'm {props.name}</p>
            {detailRender}
            <button type="submit" onClick={(e)=> clickMe(props.name)}>Click me</button>
            The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
        </div>
    )
}


interface IWelcomeProps {
    name : string
    details? : {
        address : string
        pincode : number
    }
}