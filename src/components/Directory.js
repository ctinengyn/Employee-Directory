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
          const sort = filter.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)

          console.log(sort)

          this.setState({
              filterUsers: sort,
              order: "desc"
          })
      } else {

      }
  }


}

export default Directory;
