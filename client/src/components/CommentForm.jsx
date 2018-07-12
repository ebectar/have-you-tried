import React from 'react'
import { Button, Form, TextArea } from 'semantic-ui-react'

class NewComment extends React.Component {
  state = {
    friendName: '',
    restaurant: '',
    comment: '',
  }
  
  handleNewComment = (event) => {
      event.preventDefault()
      const url = 'https://have-you-tried.herokuapp.com/comments'
      const postData = {
        account: this.state.account,
        supplier_rep: this.state.supplierRep,
        distributor_rep: this.state.distributorRep,
        buyer: this.state.buyer,
        address: `${this.state.streetAddress}, ${this.state.city}, ${this.state.state} ${this.state.zipCode}`,
        account_type: this.state.accountType
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
        account: '',
        supplierRep: '',
        distributorRep: '',
        buyer: '',
        streetAddress: '',
        city: '',
        state: '',
        zipCode: '',
        accountType: ''
      })
  }

  render(){
    return(
      <Form>
            <Form.Field>
              <label>Friend Who Recommended:</label>
              <input focus id='signup-email' placeholder='Friend Name' />
            </Form.Field>
            <Form.Field>
              <label>Restaurant Name:</label>
              <input focus id='restaurant-name' type='text' placeholder='Location' />
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