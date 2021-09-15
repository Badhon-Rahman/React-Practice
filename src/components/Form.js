import axios from 'axios';
import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: '',
         email_1: '',
         mobile_1: null,
         password: '',
         about: '',
         group_id:'1',
         isFavorite: ''
      };
    //   axios.get('http://127.0.0.1:8000/api/token')
    //   .then(res =>{
    //       this.state.token = res.data;
    //   })
    //   .catch(err =>{
    //       return err;
    //   })
    };

    // handleUserName = (event) => {
    //     this.setState({
    //         userName: event.target.value
    //     });
    // }
    
    // handleEmail = (event) =>{
    //     this.setState({
    //         email: event.target.value
    //     });
    // }
    // handleMobile = (event) =>{
    //     this.setState({
    //         mobile: event.target.value
    //     });
    // }
    // handleAbout = (event) =>{
    //     this.setState({
    //         about: event.target.value
    //     });
    // }
    // handleExperties = (event) =>{
    //     this.setState({
    //         expert: event.target.value
    //     });
    // }

    handleCheckBox = (event) =>{
        this.setState({
            isFavorite: event.target.value
            
        });
        console.log(event.target.value);
    } 

    handleInputChanges = (event) =>{
            this.setState({
                [event.target.name]: event.target.value
            });
       
    }
    handleForm = (event) =>{
        //alert(`${this.state.userName},${this.state.email}, ${this.state.mobile}, ${this.state.about}, ${this.state.expert}`);
        event.preventDefault();
        axios.post('http://127.0.0.1:8000/api/add-user-contact', this.state)
        .then(res =>{
            console.log(res);
        })
        .catch(err =>{
            return err;
        })
    }
    
  render() {
    const {name, email_1, mobile_1, about, group_id, password, isFavorite} = this.state;
    return (
      <form onSubmit={this.handleForm}> 
          <div>
            <label>User Name :</label>
            <input type='text' name='name' value={name}  onChange={this.handleInputChanges} />
          </div>
          <div>
            <label>Email Address:</label>
            <input type='text' name='email_1' value={email_1} onChange={this.handleInputChanges} />
          </div>
          <div>
            <label>Mobile Number:</label>
            <input type='text' name='mobile_1' value={mobile_1} onChange={this.handleInputChanges}/>
          </div>
          <div>
              <label>About you:</label>
              <textarea type='text' name='about' value={about} onChange={this.handleInputChanges} />
          </div>
          <div>
              <label>Expert In:</label>
              <select value={group_id} name='group_id' onChange={this.handleInputChanges}>
                  <option value="1">Group A</option>
                  <option value="2">Group B</option>
                  <option value="3">Group C</option>
              </select>
          </div>
          <div>
              <label>Password</label>
              <input type='password' name='password' value={password} onChange={this.handleInputChanges}/>
          </div>
          <div>
              <label>Is Favorite:</label>
              <input type='checkbox' name='isFavorite' value={isFavorite} onChange={this.handleInputChanges} />
          </div>
          <div>
              <button type='submit'>Submit</button>
          </div> 
      </form>
    );
  }
}

export default Form;
