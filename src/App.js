import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
import jsonData from '../src/Assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Model from './component/model';

class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      data : jsonData,
      show : false,
      details: undefined,
      oneBeast:null,
      oneBeastlikes:0
    }
  }
  
  viewBeast = (e,likes)=>{
    console.log(this.state.data);
    let filteredBeast = this.state.data.filter(beast => {
     
      return beast.image_url === e;
      
    });

    this.setState({
      
      show : true,
      oneBeast : filteredBeast,
      oneBeastlikes : likes
      
      // details : e

    
    });
console.log(e);
  }
  closing = ()=>{
    this.setState({
      show: false,
      details: undefined
    });
  }

  render()
  {
    return (
      <div>
        <Model closing ={this.closing} state={this.state} />
        <Header />
        <Main viewBeast={this.viewBeast} />
        <Footer/>
      </div>
    )

  };
}

export default App;