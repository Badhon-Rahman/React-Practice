import React, { Component } from 'react';
import axios from 'axios';

class HttpRequest extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       getData: []
    };
  };

  componentDidMount(){
    axios.get('http://127.0.0.1:8000/api/search/jo')
    .then((res) =>{
      this.setState({
        getData: res.data
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }
  
  render() {
    const {getData} = this.state;
    return (
      <div>{}</div>
    );
  }
}

export default HttpRequest;
