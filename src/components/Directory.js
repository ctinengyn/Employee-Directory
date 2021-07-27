import api from "../utils/api";
import React, { Component } from "react";

class Directory extends Component {
  state = {
    users: [],
    filterUsers: [],
    order: "desend",
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
  }
}

export default Directory;