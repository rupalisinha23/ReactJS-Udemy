import React from 'react';
import ReactDOM from 'react-dom';

function getTime(){
    return(new Date()).toLocaleTimeString()
}


const App = () => {

const buttonText = {text:'Click Me!'}

    return (
        <div>
            <label className="label" htmlFor = "name">Enter Name: </label>
            <input id="name" type="text" />
            <button style={{background:'blue', color:'white'}}>{buttonText.text}</button>
            <br/>
            <h3> Current Time: <b>{getTime()} </b></h3>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));