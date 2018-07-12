import React, {Component} from 'react'
import Friend from './Friend'
// import {Header, Icon} from 'semantic-ui-react'
const apiUrl = "https://have-you-tried.herokuapp.com/comments"

class FriendList extends Component {
  state = {
    friends: []
  }

  componentDidMount() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(friends => {
        return this.setState({friends: friends})
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Friend friendData={this.state.friends}/>
        </div>
      </React.Fragment>
    )
  }
}

export default FriendList