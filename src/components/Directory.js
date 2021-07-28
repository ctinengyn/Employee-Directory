import api from "../utils/api";
import React, { Component } from "react";
import Employee from "./EmployeeTable";
import Search from "./SearchBox"

class Directory extends Component {
  state = {
    users: [],
    filterUsers: [],
    search: "",
    order: "",
  };



  // Loads all the data
  componentDidMount() {
    api.getUser().then((res) => {
      console.log(res);
      this.setState({
        users: res.data.results,
        filterUsers: res.data.results,
      });
    });
  };



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

        const sorts = filter.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1) console.log(sorts)

        this.setState ({
          filterUsers: sorts,
          order: "desc"
        })

      } else {

        const sorts = filter.sort((a, b) => (a.name.first > a.name.first) ? -1 : 1) console.log(sorts)

        this.setState ({

          filterUsers: sorts,
          order: "asc"
        });
      };
  };



  inputChange = event => {

    const users = this.state.users;
    const UserInput = event.target.value;
    const filterUsers = users.filter(users => users.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)

    this.setState ({
      filterUsers,
    });
  };

  


}

export default Directory;
