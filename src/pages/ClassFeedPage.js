// functional component and class component
// hooks | no hooks
// no lifecyle | lifecyle method
// this binding not required | this binding requirement
// render method not req | render method required
// props.name | this.props.name
// use this while referring to any method
// cool | not cool
 
import React, { Component } from "react";
import Layout from "../components/Layout";

class ClassFeedPage extends Component {
    constructor(props) {

      console.log("i am in constructor");
      super(props);

      // variables
      this.isLoading = false;

      // this binding
      this.handleClick = this.handleClick.bind(this);

      // intial state
      this.state = {
        city: "baroda",
        address: 'felix complex'
      };
    }


  // life cycle methods
  componentDidMount() {
    // same as useEffect with [] dependancy
    // fetch api here

    console.log("my name is", this.props.name);
    console.log("my city is", this.state.city);

    console.log("i am in componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    // this is same as useEffect with [array] <- any dependenacy
    // whenever componet will re render this wil be called
    console.log(
      "i am in componentDidUpdate. prev props  and prev state",
      prevProps,
      prevState
    );
    console.log("prev city", prevState.city);
    console.log("now my city is", this.state.city);
  }

  componentWillUnmount() {
    // this wil be called when component is removed from DOM

    console.log("i am in componentWillUnmount");
  }

  handleClick() {
    console.log("clicked normal function");
    this.setState({
      city: "surat",
    });

    // // class components
    // this.handeClickWithArrowFunction()
    // this.state.address

    // // fn 
    // address
    // handleClick
  }

  handeClickWithArrowFunction = () => {
    console.log("clicked arrow function");
    this.setState({
      city: "anand",
    });
  };

  render() {
    console.log("i am in render method");
    return (
      <Layout>
        <p>I am a class component</p>
        <p>{`My Name is ${this.props.name}`}</p>
        <p>{`My City is ${this.state.city}`}</p>
        <p>{`My Address is ${this.state.address}`}</p>
        <button onClick={this.handleClick}>Normal Click</button>
        <button onClick={this.handeClickWithArrowFunction}>
          arrow function click
        </button>
      </Layout>
    );
  }
}

export default ClassFeedPage;
// const myCar = new ClassFeedPage('BMW', 'sedan')
