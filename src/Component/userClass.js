import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // create state varibale in class Based Component
    // this state is big object
    this.state = {
      count: 0,

      UserInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "https//Default",
        bio: "Default",
      },
    };
    // console.log(props);
    console.log("Child Constructor");
  }
  async componentDidMount() {
    // console.log("Child ComponentDidMount");
    // Api Call
    const data = await fetch("https://api.github.com/users/mo-arman");
    const json = await data.json();
    console.log(json);

    this.setState({
      UserInfo: json,
    });
  }
  render() {
    const { name, location, avatar_url } = this.props;
    const { count } = this.state;

    console.log("Child render");

    return (
      <div className="about-container">
        <div className="info">
        <div className="image-about">
          {" "}
          <img className="img" src={this.state.UserInfo.avatar_url} />
        </div>
        <div className="information">
          <h4 className="heading1">
            Name:<p>{this.state.UserInfo.name}</p>
          </h4>
          <h4 className="headin2">
            Location:
            <p>Indian</p>
          </h4>
          <h4 className="headin3">
            BIRTHDAY:
            <p>12/11/2003</p>
          </h4>
          <h4 className="headin4">
            ROLE:
            <p>Front-End Developer</p>
          </h4>
          <h4 className="headin5">
            Email:
            <p>moharman3818@gmail.com</p>
          </h4>
          <h4 className="headin6">
            PHONE:
            <p>8840093818</p>
          </h4>
          <h4 className="headin7">
            INTEREST:
            <p>Games,Book,Movies</p>
          </h4>
          <h4 className="headin8">
            Bio:<p>{this.state.UserInfo.bio}</p>
          </h4>
          <h4 className="headin9">
            SOCIAL:<p></p>
          </h4>
          </div>
        </div>
        <h3>Class Based Component</h3>
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            // Never update state variable Directly
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
