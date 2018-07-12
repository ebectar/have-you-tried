import React from 'react'
import { Button, Form, Segment} from 'semantic-ui-react'

export default class AddFriend extends React.Component {
render(){
return (
  <Segment inverted>
    <Form inverted>
      <Form.Group widths='equal'>
        <Form.Input fluid label='First name' placeholder='First name' />
      </Form.Group>
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
)}
}