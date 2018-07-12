import React, {
  Component
} from 'react';
import {
  Card
} from "semantic-ui-react";
// import {NavLink} from 'react-router-dom'
// import Comment from './Comment'
import LeafMap from './LeafMap'
const url = "https://have-you-tried.herokuapp.com/"
const id = window
  .location
  .href
  .split("/")[4]

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
          <div>
            {this.state.restaurant.map((restaurant, i) => {
            console.log(restaurant)
            return (<React.Fragment key = {i}>
                {
                /* <Checkbox
                          checked={this.state.tried}
                          onChange={this.updateUserTried}
                          value={this.state.tried}></Checkbox> */
              } 
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
      <LeafMap />
      </div>
  );
}
}