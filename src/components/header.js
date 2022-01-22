import React from 'react';


 const getDate = () => {
     const date = new Date()
     return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
 }

 const inputChange = () => {
    console.log('I was Changed using ArrowFunction')
 }

class Header extends React.Component {

    
    
     inputChangedMethod(event){
         console.log('I was Changed using Method & the value is : ' + event.target.value)
     }

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
        <div className='logo'
            onClick={()=>{console.log('I was Clicked')}}
        >Im The LOGO in Header</div>

        <div className='logo'>The Time is : {getDate()}</div>
        <input
             onChange={this.inputChangedMethod/* inputChange *//* (event)=>this.inputChangedMethod(event) *//* ()=>{console.log('I was Changed')} */}
        ></input>
    </header>
    }
}

export default Header