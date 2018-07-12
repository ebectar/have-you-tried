import React, {Component} from 'react'
import {Grid, Menu} from 'semantic-ui-react'
import {NavLink} from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    activeItem: 'home'
  }

  handleItemClick = (e, {name}) => this.setState({activeItem: name})

  render() {
    const {activeItem} = this.state

    return (
      <Grid.Column width={4}>
        <Menu secondary vertical>
          <Menu.Header as='h1' id='logo'>Have You Tried __?</Menu.Header>
          <Menu.Item
            as={NavLink}
            to='home'
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}>
            Home
          </Menu.Item>

          <Menu.Item
            as={NavLink}
            to='about'
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}>
            About
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='recommendation'
            name='recommendation'
            active={activeItem === 'recommendation'}
            onClick={this.handleItemClick}>
            Add a New Recommendation
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='friends'
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}>
            Friends
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            to='restaurants'
            name='restaurants'
            active={activeItem === 'restaurants'}
            onClick={this.handleItemClick}>
            Restaurants
          </Menu.Item>
        </Menu>
      </Grid.Column>
    )
  }
}
