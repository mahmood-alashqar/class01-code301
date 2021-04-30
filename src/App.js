import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Main from './component/main';
import Header from './component/header';
import Footer from './component/footer';
import jsonData from '../src/Assets/data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import selectedBeast from './component/selectedBeast';
import Form from 'react-bootstrap/Form';

class App extends React.Component {


  constructor(props){
    super(props);

    this.state = {
      data : jsonData,
      show : false,
      details: undefined,
      oneBeast:null,
      oneBeastlikes:0,
     
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

  reset = () =>{
    this.setState({data : jsonData});
    console.log(this.data);
    
  }

update = (event) =>{
   let filteredData=[];

  this.state.data.filter(i => {
    if (Number(event.target.value) === i.horns)
    {
      filteredData.push(i);
      console.log(i);
    }
    else if (event.target.value === 'Choose Number Of Horns'){
      filteredData.push(i);
      console.log(i);
    }
    return filteredData;
  })
  this.setState({data : filteredData});
}
  render()
  {
    return (
      <div>
        <Header  />
        <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Choose Number Of Horns</Form.Label>
    <Form.Control onChange={this.update} onInput={this.reset} as="select" >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>100</option>
      
    </Form.Control>
  </Form.Group>
</Form>
<selectedBeast closing ={this.closing} state={this.state} />

        <Main viewBeast={this.viewBeast} data ={this.state.data} />
        <Footer/>
      </div>
    )

  };
}

export default App;