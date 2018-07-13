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

render(){
return (
  <Segment id='form'>
    <Form>
        <Form.Input fluid placeholder='First name' 
        value={this.state.name}
        onChange={this.handleFormChange}/>
      <Button type='submit' onClick={this.props.editFriend}>Submit Changes</Button>
    </Form>
  </Segment>
)}
}