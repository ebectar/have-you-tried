import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'

export default class AddFriend extends React.Component {
  state = {

  }

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const body = {
      restaurant_name: this.state.name,
      lat: this.state.lat,
      lng: this.state.name,
    }
    fetch('https://have-you-tried.herokuapp.com/friends', {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        return response.error
          ? this.setState({ error: true })
          : this.setState({ error: false })
      })
  }

render(){
return (
  <Segment id='form'>
    <Form>
        <Form.Input fluid placeholder='Restaurant Name' 
        value={this.state.name}
        onChange={this.handleFormChange}/>
        <Form.Input fluid placeholder='Restaurant Latitude' 
        value={this.state.lat}
        onChange={this.handleFormChange}/>
        <Form.Input fluid placeholder='Restaurant Longitude' 
        value={this.state.lng}
        onChange={this.handleFormChange}/>
      <Button type='submit' onClick={this.handleSubmit}>Add New Restaurant</Button>
    </Form>
  </Segment>
)}
}