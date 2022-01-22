import React from 'react';



 const getDate = () => {
     const date = new Date()
     return date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds()
 }

 const inputChange = () => {
    console.log('I was Changed using ArrowFunction')
 }

class Header extends React.Component {

    state = {
        keywords:'',
        count : 0
    }
    
     inputChangedMethod(event){
         console.log('I was Changed using Method & the value is : ' + event.target.value)
         this.setState({keywords: event.target.value})
     }

     addOne(){
         this.setState({count : this.state.count + 1})
     }

     reset(){
        this.setState({count : 0})
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
             onChange={(event)=>this.inputChangedMethod(event)/* inputChange *//* (event)=>this.inputChangedMethod(event) *//* ()=>{console.log('I was Changed')} */}
        ></input>
        <div>The Keyword Valus is : </div>
        <div>{this.state.keywords}</div>
        <button onClick={()=>this.addOne()}>Add One</button>
        <button onClick={()=>this.reset()}>reset</button>
        <div>{this.state.count}</div>
    </header>
    }
}

export default Header