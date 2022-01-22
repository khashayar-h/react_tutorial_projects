import React from 'react';

 const getDate = () => {
     const date = new Date()
     return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
 }

const Header = () => {
    return <div>
        <h1>Im The Header</h1>
        <h1>The Time is : {getDate()}</h1>
    </div>
}

export default Header