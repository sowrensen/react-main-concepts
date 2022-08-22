import React from "react";

const statuses = {
  alive: 'Alive',
  deceased: 'Deceased',
  unknown: 'Unknown'
}
class NewConvict extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showForm: false,
      firstName: '',
      lastName: '',
      birthYear: '',
      status: statuses.alive,
      crime: '',
      link: '',
    }
  }

  handleInput = (event) => {
    this.setState((prevState) => ({
      [event.target.name]: event.target.value
    }))
  }

  toggleForm = () => {
    this.setState((prevState) => ({ showForm: !prevState.showForm }))
  }

  addConvict = (event) => {
    this.props.addConvict({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      birthYear: this.state.birthYear,
      status: this.state.status,
      crime: this.state.crime,
      link: this.state.link
    })
    this.clearInputs()
    event.preventDefault()
  }

  clearInputs() {
    this.setState({
      showForm: false,
      firstName: '',
      lastName: '',
      birthYear: '',
      status: statuses.alive,
      crime: '',
      link: '',
    })
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.toggleForm}>{this.state.showForm ? 'Hide Form' : 'Add New Convict'}</button>
        {this.state.showForm &&
          <form onSubmit={this.addConvict}>
            <div>
              <label htmlFor="firstName">
                First Name: {' '}
                <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleInput} required />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="lastName">
                Last Name: {' '}
                <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleInput} required />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="birthYear">
                Birth Year: {' '}
                <input type="number" name="birthYear" value={this.state.birthYear} onChange={this.handleInput} required />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="status">
                Status: {' '}
                <select name="status" id="status" onChange={this.handleInput}>
                  {
                    Object.keys(statuses).map(key => {
                      return <option value={statuses[key]} key={key}>{statuses[key]}</option>
                    })
                  }
                </select>
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="crime">
                Crime: {' '}
                <textarea name="crime" value={this.state.crime} onChange={this.handleInput} required />
              </label>
            </div>
            <br />

            <div>
              <label htmlFor="link">
                Link: {' '}
                <input type="text" name="link" value={this.state.link} onChange={this.handleInput} required />
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
