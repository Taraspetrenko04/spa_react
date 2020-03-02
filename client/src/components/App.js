import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserNumber = this.onChangeUserNumber.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      userName: "",
      userNumber: "",
      userPassword: "",
      userEmail: ""
    };
  }

  onChangeUserName(e) {
    this.setState({
      userName: e.target.value
    });
  }
  onChangeUserNumber(e) {
    this.setState({
      userNumber: e.target.value
    });
  }
  onChangeUserPassword(e) {
    this.setState({
      userPassword: e.target.value
    });
  }
  onChangeUserEmail(e) {
    this.setState({
      userEmail: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      userName: this.state.userName,
      userNumber: this.state.userNumber,
      userEmail: this.state.userEmail,
      userPassword: this.state.userPassword
    };

    console.log(user);

    axios
      .post("http://localhost:5000/users/add", user)
      .then(res => console.log(res.data));

    this.setState({
      userName: "",
      userNumber: "",
      userPassword: "",
      userEmail: ""
    });
  }

  render() {
    return (
      <div>
        <h1>FORM</h1>

        <form onSubmit={this.onSubmit} className="form-container">
          <label>userName</label>
          <input
            type="text"
            required
            value={this.state.userName}
            onChange={this.onChangeUserName}
          />

          <label>userNumber</label>
          <input
            type="text"
            required
            value={this.state.userNumber}
            onChange={this.onChangeUserNumber}
          />

          <label>userEmail</label>
          <input
            type="text"
            required
            value={this.state.userEmail}
            onChange={this.onChangeUserEmail}
          />

          <label>userPassword</label>
          <input
            type="text"
            required
            value={this.state.userPassword}
            onChange={this.onChangeUserPassword}
          />

          <input type="submit" value="Create User" />
        </form>
      </div>
    );
  }
}

export default App;
