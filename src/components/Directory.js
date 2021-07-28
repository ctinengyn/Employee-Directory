import api from "../utils/api";
import React, { Component } from "react";
import EmployeeTable from "./EmployeeTable";
import SearchBox from "./SearchBox"

class Directory extends Component {
  state = {
    users: [],
    filterUsers: [],
    search: "",
    order: "",
  };



  // Loads all the data
  // componentDidMount() {
  //   api.getUser().then((res) => {
  //     console.log(res);
  //     this.setState({
  //       users: res.data.results,
  //       filterUsers: res.data.results,
  //     });
  //   });
  // };

  componentDidMount() {
    api.getUsers().then(res => this.setState({

      users: res.data.results,
      filterUsers: res.data.results

    })).catch(err => console.log(err))
  }



  // ASC stands for ascending and the DESC stands for descending
  sortEmployee = () => {
      const filter = this.state.filterUsers;
      if (this.state.order === "asc") {
          const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)

          console.log(sorts)

          this.setState({
              filterUsers: sorts,
              order: "desc"
          })
      } else {

        const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1) 
        
        console.log(sorts)

        this.setState({
          filterUsers: sorts,
          order: "asc"
        })

      };
  };


  // Shows on screen when the names match

  inputChange = event => {

    const users = this.state.users;
    const UserInput = event.target.value;
    const filterUsers = users.filter(users => users.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)

    this.setState ({
      filterUsers,
    });
  };

  searchEmployee = () => {
    api.getUsers().then(res => this.setState({

      filterUsers:res.data.results,
      users: res.data.results
    }))

    .catch(err => console.log(err))
  }

  searchBtn = event => {
    event.preventDefault();
    if (!this.state.search) {
      alert("Please enter a name")
    }

    const { search, users} = this.state;
    const filterUsers = users.filter(employee => employee.name.first.toLowerCase().includes(search.toLocaleLowerCase()));

    this.setState({
      filterUsers
    });
  };


  render() {
    return (
      <div>

        {/* Search box input */}
        <SearchBox 

        employee = {this.state.users}
        searchBtn = {this.searchBtn}
        inputChange = {this.inputChange} />

        {/* Employee Table info */}
        <EmployeeTable

        results = {this.state.filterUsers}
        sortEmployee = {this.sortEmployee} />

      </div>
    )
  }

}

export default Directory;
