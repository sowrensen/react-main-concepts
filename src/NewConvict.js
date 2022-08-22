import React from "react";

class NewConvict extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      firstName: '',
      lastName: '',
      birthYear: '',
      crime: '',
      link: '',
    }
  }

  handleInput = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: event.target.value
    }))
  }

  toggleForm = (event) => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }))
  }

  addConvict = (event) => {
    console.log(this.state)
    event.preventDefault()
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleForm}>{this.state.showForm ? 'Hide Form' : 'Add New Convict'}</button>
        {this.state.showForm &&
          <form onSubmit={this.addConvict}>
            <div>
              <label htmlFor="firstName">
                First Name: {' '}
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInput} />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="lastName">
                Last Name: {' '}
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInput} />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="birthYear">
                Birth Year: {' '}
                <input type="number" name="birthYear" value={this.state.birthYear} onChange={this.handleInput} />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="crime">
                Crime: {' '}
                <textarea name="crime" value={this.state.crime} onChange={this.handleInput} />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="link">
                Link: {' '}
                <input type="text" name="link" value={this.state.link} onChange={this.handleInput} />
              </label>
              <br />
            </div>
            <br />

            <button type="submit">Save</button>
          </form>
        }
      </div>
    )
  }
}

export default NewConvict
