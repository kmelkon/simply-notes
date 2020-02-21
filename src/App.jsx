import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

const App = ({ users }) => {
  console.log({ users });
  return <div>Hello Friends</div>;
};

export default compose(
  firestoreConnect(() => ['users']),
  connect((state, props) => {
    return { users: state.firebase.ordered.todos };
  })
)(App);
