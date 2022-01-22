import React from 'react';

 const getDate = () => {
     const date = new Date()
     return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
 }

class Header extends React.Component {
    render(){
/*         let styles = {
            header:{
                background:'#03a9f4'
            },
            logo:{
                color:'#fff',
                textAlign:'center'
            }
        } */
    return <header>
        <div className='logo'>Im The LOGO in Header</div>
        <div className='logo'>The Time is : {getDate()}</div>
        <input></input>
    </header>
    }
}

export default Header