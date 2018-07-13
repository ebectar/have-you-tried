import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'

export default class AddFriend extends React.Component {
  state = {

  }

render(){
return (
  <Segment id='form'>
    <Form>
        <Form.Input fluid placeholder='First name'
        ref={this.props.name}
        onChange={this.props.handleFormChange}/>
      <Button type='submit' onClick={this.props.handleSubmit}>Add New Friend</Button>
    </Form>
  </Segment>
)}
}
