import React, { useState } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase/app';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const App = ({ dispatch }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('bla');
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">log in</button>
    </form>
  );
};

export default connect(null)(App);
