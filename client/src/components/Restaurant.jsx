import React from 'react'
import {Card, Header, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
import AddRestaurant from './AddRestaurant'

class Restaurant extends React.Component {
  state = {
    // lat: '',
    // lng: ''
  }

  getState = () => {
    console.log(this.props.restaurantData)
  }

  editRestaurant = () => {
    console.log('click')
  }

  render() {
    return (
      <div>
      <Header as='h2' icon textAlign='center'>
          <Icon name='food' circular/>
          <Header.Content>Restaurants</Header.Content>
        </Header>
      <Card.Group>
      {this.props.restaurantData.map((restaurant, i) => {
        return (
          <Card key={i}>
            <Card.Content restaurant={restaurant.i}>
              <Card.Header as={NavLink}
          to={`/restaurants/${restaurant.id}`}>{restaurant.restaurant_name}</Card.Header>
            </Card.Content>
            <a onClick={this.editRestaurant(restaurant)}>Edit</a>
          </Card>
        )
      })}
      {/* <LeafMap lat={this.state.restaurant[0].lat} lng={this.state.restaurant[0].lng} /> */}
      </Card.Group>
        <AddRestaurant />
      </div>
    )
  }
}
export default Restaurant