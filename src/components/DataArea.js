import React, { Component } from "react";
import DataTable from "./DataTable";
import api from "../utils/api";

class DataArea extends Component() {
    // state = {
    //     users: [{}],
    //     order: "descend",
    //     filteredUsers: [{}]
    // }

    // headings = [
    //     {
    //         name: "image",
    //         width: 10 %
    //     },
    //     {
    //         name: "name",
    //         width: 15 %
    //     },
    //     {
    //         name: "phone",
    //         width: 10 %
    //     },
    //     {
    //         name: "email",
    //         width: 20 %
    //     },
    //     {
    //         name: "city",
    //         width: 20 %
    //     },
    //     {
    //         name: "state",
    //         width: 5 %
    //     },
    //     {
    //         name: "date of birth",
    //         width: 10 %
    //     }
    // ]

    componentDidMount() {
        api.getusers().then(results => {
            console.log(results);
            this.setState({users: results.data.results,filteredUsers:results.data.results})
            // console.log(state)
        })      .catch(err => console.log(err));
    }

    render() {
        return (
            <DataTable/>
        )
    }

}

export default DataArea;