import React, { createContext } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useLocalStorageState from "use-local-storage-state"
import BookingList from './components/BookingList/BookingList'
import Login from './components/Login/Login'
import MyRent from './components/MyRent/MyRent'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Dashboard from './Dashboard/Dashboard'
import About from './pages/About'
import Apartment from './pages/Apartment'
import Concerns from './pages/Concerns'
import Contact from './pages/Contact'
import Event from './pages/Event'
import Homepage from './pages/Homepage'
import Service from './pages/Service'


export const UserContext = createContext()

function App() {

  const [loggedInUser, setLogInUser] = useLocalStorageState('info', {})
  
  return (
    <UserContext.Provider value={[loggedInUser, setLogInUser]}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <PrivateRoute exact path='/dashboard'>
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path='/bookinglist'>
            <BookingList />
          </PrivateRoute>
          <PrivateRoute exact path='/myrent'>
            <MyRent />
          </PrivateRoute>
          <Route exact path='/apartment/:id'>
            <Apartment />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/service'>
            <Service />
          </Route>
          <Route exact path='/concerns'>
            <Concerns />
          </Route>
          <Route exact path='/event'>
            <Event />
          </Route>
          <Route exact path='/contact'>
            <Contact />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App
