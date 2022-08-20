import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState((prevState, props) => ({ date: new Date() }))
    // We can do this like following:
    // this.setState({date: new Date()})
    // But there's a catch due to the asynchronous nature of the state,
    // so if something like this.setState({counter: this.state.counter + this.increment})
    // is written, it might result into error. In that case use an arrow function like we used.
  }

  render() {
    return (
      <>
        {this.state.date.toLocaleTimeString()}
      </>
    )
  }
}

export default Clock
