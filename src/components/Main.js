import React from "react";
import API from "../utils/API";
import Employee from "./Employee";
import Search from "./Search";

class Main extends React.Component {
  state = {
    employees: [],
    filteredEmployees: [],
    order: []
  }

  componentDidMount() {
    API.getUsers().then(res =>
      this.setState({ employees: res.data.results, filteredEmployees: res.data.results })
    ).catch(err => console.log(err))
  }

  handleInputChange = event => {
    const employees = this.state.employees;
    const SearchInputValue = event.target.value;
    const filteredEmployees = employees.filter(employee =>
      (employee.name.first.toLowerCase().indexOf(SearchInputValue.toLowerCase()) > -1) ||
      (employee.name.last.toLowerCase().indexOf(SearchInputValue.toLowerCase()) > -1)
    )

    this.setState({
      filteredEmployees,
    });
  }

  sortEmployees = () => {
    const filtered = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      // const sorted = filtered.sort((a,b) => {
      //   if (a.name.first > b.name.first) {
      //     1;
      //   } else {
      //     -1;
      //   }
      // })

      const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)

      this.setState({
        filteredEmployees: sorted,
        order: "desc"
      })
    } else {
      // const sorted = filtered.sort((a,b) => {
      //   if (a.name.first > b.name.first) {
      //     -1;
      //   } else {
      //     1;
      //   }
      // })

      const sorted = filtered.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)

      this.setState({
        filteredEmployees: sorted,
        order: "asc"
      })
    }
  }
  render() {
    return (
      <div>

        <Search
          employees={this.state.employees}
          handleInputChange={this.handleInputChange}
        />

        <Employee  
          filteredEmployees={this.state.filteredEmployees} 
          sortEmployees={this.sortEmployees} 
        />

      </div>
    )
  }
}

export default Main;
