import React from "react";
import Header from "./header";
import axios from "axios";
import { serverURL } from "../constants";

class View extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get(serverURL + "/user/")
      .then((response) => {
        console.log("data :", response);
        this.setState({ data: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header />
        this is View option
        <ul>
          {this.state.data.map((dt) => {
            return <li>{dt.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default View;
