import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nutrition from './pages/Nutrition';
import Nomatch from './pages/Nomatch';
import Exercise from './pages/Exercise';
import Meditation from './pages/Meditation';
import { setContext } from '@apollo/client/link/context';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App= () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/nutrition/:id" element={<Nutrition />} />
        <Route path="/meditation" element={<Meditation />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </Router>
    </ApolloProvider>
  )
}

export default App;
