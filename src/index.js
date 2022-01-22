import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header'
import NewsList from './components/news-list';

class App extends React.Component {

    render(){
  
    return (
        <>
            <Header/>
            <NewsList/>
        </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))