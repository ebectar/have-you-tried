import React, {
  Component
} from 'react';
import {
  Card
} from "semantic-ui-react"
const url = "https://have-you-tried.herokuapp.com/"
const id = window.location.href.split("/")[4]

export default class RestaurantContainer extends Component {
  state = {
    restaurant: [],
    restaurantName: ''
  };
  componentDidMount() {
    this.fetchRestaurant();
  }
  fetchRestaurant = () => {
    fetch(`${url}comments/`)
      .then(res => res.json())
      .then(restaurantData => {
        this.filterRestaurantById(restaurantData)

      })
    // this.setState({restaurants: restaurantData});
  }
  filterRestaurantById = (restaurantData) => {
    let filteredRestaurant = restaurantData.filter(restaurant => restaurant.restaurant_id == id)
    this.setState({
      restaurant: filteredRestaurant
    })
  }

  updateUserTried = () => {
    this.setState({
      tried: !this.state.tried
    })
  }

  render() {
    return (  
          <div id='friend-page'>
            {this.state.restaurant.map((restaurant, i) => {
            console.log(restaurant)
            return (<React.Fragment key = {i}>
              <br/>
              
              <Card>
              <Card.Content>
              <Card.Header as='h3'>{restaurant.friend_name}</Card.Header>
              <Card.Description> 
                {restaurant.comment_text}
              </Card.Description>
              </Card.Content> 
              </Card> 
              </React.Fragment>
          )
        })
      }
   {/* <LeafMap lat={this.state.restaurant[0].lat} lng={this.state.restaurant[0].lng} /> */}
      </div>
  );
}
}