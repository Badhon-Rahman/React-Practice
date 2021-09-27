import React, { Component } from 'react';
import axios from 'axios';
import PersonView from './PersonView';

class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         search:'',
         searchData:[]
      };
    };
    
    //change search string
    handleSearch = (event) =>{
        this.setState({
            search: event.target.value
        });
    }

    //get filtered data
    getSearchData = (event) =>{
        event.preventDefault();
        if(this.state.search){
            axios.get('http://127.0.0.1:8000/api/search/'+ this.state.search)
                .then(result =>{
                    this.state.searchData = result.data;
                    const filteredData = this.state.searchData.map(res => (<PersonView key={res.id} person={res} />));
                    console.log(filteredData);
                    return filteredData;
                })
                .catch(error =>{
                    return error;
                })
        }
    }

   

  render() {
    return (
        <div>
            <form onSubmit={this.getSearchData}>
                <input name='search' value={this.state.search} onChange={this.handleSearch}/>
                <button type='submit'>Search</button>
            </form>
            
        </div>
      
    );
  }
}

export default Search;
