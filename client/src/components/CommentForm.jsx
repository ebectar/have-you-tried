import React from 'react'
import { Button, Form, TextArea, Dropdown } from 'semantic-ui-react'
import { friendOptions } from './friends'
class NewComment extends React.Component {
  state = {
    friendName: '',
    restaurant: '',
    comment: '',
    friendData: []
  }

  componentDidMount(){
      fetch('https://have-you-tried.herokuapp.com/comments/')
        .then(res => res.json())
  }
  
  handleNewComment = (event) => {
      event.preventDefault()
      const url = 'https://have-you-tried.herokuapp.com/comments'
      const postData = {

      }
      fetch(url, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData),
      })
      .then(response => response.json())
      this.setState({
      })
  }

  render(){
    return(
      <Form>
            <Form.Field>
              <label>Friend Who Recommended:</label>
              <Dropdown placeholder='Select Friend' fluid selection options='1'/>
            </Form.Field>
            <Form.Field>
              <label>Restaurant Name:</label>
              <Dropdown placeholder='Select Restaurant' fluid selection options={friendOptions} />
            </Form.Field>
            <Form.Field>
              <label>Comments:</label>
              <TextArea focus placeholder='Add Comments'></TextArea>
            </Form.Field>
            <Button onClick={this.handleNewComment}>Add New Recommendation</Button>
        </Form>
    )
  }
}

export default NewComment