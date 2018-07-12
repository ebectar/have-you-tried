import React from 'react'
import {Card, Header, Icon} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'
// import {Geocode} from 'react-geocode'
// import LeafMap from './LeafMap'

class Restaurant extends React.Component {
  state = {
    // lat = '2',
    // lng = '4'
  }


  // geoCode = () => {
  //   this.setState({showMap: false})
  //   Geocode.setApiKey(process.env.MAP_KEY)
  //   Geocode.enableDebug()
  //   fetch(`https://have-you-tried.herokuapp.com/comments/${this.props.account}`)
  //   .then(response => response.json())
  //   .then(response => {
  //     this.setState({mapAddress: response.address})
  //   })
  //   // .then(console.log(this.state.mapAddress))
  //   .then(response => Geocode.fromAddress(this.state.mapAddress)
  //   .then(
  //     response => {
  //       const { lat, lng } = response.results[0].geometry.location
  //       // console.log(lat, lng)
  //       this.setState({
  //         lat: lat,
  //         lng: lng,
  //         showMap: true
  //       })
  //       // console.log(this.state)
  //     },
  //     error => {
  //       console.error(error)
  //     }
  //   )) 
  // }


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
          </Card>
        )
      })}
      </Card.Group>
      </div>
    )
  }
}
export default Restaurant