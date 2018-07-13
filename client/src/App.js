import React from 'react'
import './App.css'
import FriendList from './components/FriendList'
import FriendContainer from './components/FriendContainer';
import RestaurantList from './components/RestaurantList'
import RestaurantContainer from './components/RestaurantContainer';
import CommentForm from './components/CommentForm'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Grid} from 'semantic-ui-react'

class App extends React.Component {
  state = {
    'submitted': false,
    'login': false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({'submitted': true})
  }

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <Grid className='main'>
            <Navbar/>
            <Grid.Column stretched width={12}>
              <Switch/>
              <Route path='/home' component={() => <Home/>}/>
              <Route path='/recommendation' component={() => <CommentForm/>}/>
              <Route path='/friends' component={() => <FriendList/>}/>
              <Route path='/friends/:friendId' component={() => <FriendContainer/>}/>
              <Route path='/restaurants' component={() => <RestaurantList/>}/>
              <Route path='/restaurants/:restaurantId' component={() => <RestaurantContainer/>}/>
            </Grid.Column>
          </Grid>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
