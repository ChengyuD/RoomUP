import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './pages/Home';
import SearchPage from './components/SearchPage';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navigation from './components/Navigation';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      
      <Router>
      <Navigation />
        <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/SearchPage">
              <SearchPage />
            </Route>
            <Route exact path="/SearchPage/:id"> 
            </Route>
            <Route exact path="/properties.js">
              
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
