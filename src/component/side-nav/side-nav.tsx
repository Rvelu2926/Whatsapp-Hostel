import React from 'react';
import './side-nav.css';

export default function SideNav(props:ISidenavProp){
    function buttonClick():void{
        console.log('button click')
    }

    function inputBlur():void{
        console.log('input bulr happens')
    }

    return(
        <>      
        <p>{props.name}</p>
        <p>{props.work}</p>
        <p >Hi side nav component shown </p>
        <input type="text" name="examlpeInput" id="examlpeInput" onBlur={inputBlur} />
        <button onClick={buttonClick}>button click tutorial</button>
        </>
    )
}

export interface ISidenavProp {
    name : string
    work : string
    newprop : string
}


