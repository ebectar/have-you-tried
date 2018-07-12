import React, {Component} from 'react'
import Restaurant from './Restaurant'
// import {Header} from 'semantic-ui-react'
const apiUrl = "https://have-you-tried.herokuapp.com/"

class RestaurantList extends Component {
  state = {
    restaurants: []
  }

  componentDidMount() {
    fetch(apiUrl + 'restaurants')
      .then(response => response.json())
      .then(restaurants => {
        return this.setState({restaurants: restaurants});
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Restaurant restaurantData={this.state.restaurants}/>
        </div>
      </React.Fragment>
    )
  }
}

export default RestaurantList