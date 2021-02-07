import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class Container extends Component {
  state = {
    search: "",
    results: [],
    sort: {
      column: null,
      direction: "desc",
    }
  };

  componentDidMount() {
    API.search()
      .then(res => this.setState({ results: res.data.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  sortFunction = (column) => {
    let sortDirection = this.state.sort.direction;
    sortDirection = sortDirection === "desc" ? "asc" : "desc";
    const sortResult = this.state.results.sort((a, b) => {
      switch (column) {

        case "Name":
          const nameA = a.name.first.toLowerCase();
          const nameB = b.name.first.toLowerCase();
          // sort by name
          if (nameA > nameB) return -1;
          if (nameB > nameA) return 1;
          return 0;

        case "Email":
          const emailA = a.email.toLowerCase();
          const emailB = b.email.toLowerCase();
          // sort by email
          if (emailA > emailB) return -1;
          if (emailB > emailA) return 1;
          break;

        default:
          break;
      }
    });

    if (sortDirection === "desc") {
      sortResult.reverse();
    }
    this.setState({
      results: sortResult,
      sort: {
        column: column,
        direction: sortDirection,
      }
    });
  };

  render() {
    const lowercasedSearch = this.state.search.toLowerCase();
    const searchResult = this.state.results.filter(res => res.name.first.concat(res.name.last).toLocaleLowerCase().includes(lowercasedSearch));
    return (
      <div>
        <Header
          heading="Employee Directory"
        />
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
        />
        <EmployeeList
          sortFunction={this.sortFunction}
          results={searchResult}
        />
      </div>
    );
  };
};

export default Container;
