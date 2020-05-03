import React from 'react';

function MyInfo(){

    const firstName = "Shelly";
    const lastName =" Handa"
    const styles ={
                    fontSize : 30,
                    color :'#D900a0'
                  }

    return(
        <div>
            <h1 style={styles}>I am {firstName} {lastName}</h1>
            <p>I am a fighter</p>
            <ol>
                <li>Punjab</li>
                <li>UP</li>
                <li>Delhi</li>
            </ol>
        </div>
    );

}

export default MyInfo;