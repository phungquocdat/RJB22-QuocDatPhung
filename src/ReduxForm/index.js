import React from 'react';
import { Provider } from 'react-redux';
import CounterApp from './CounterApp';

// REDUX STORE
import store from './store';


function ReduxForm() {
  return (
    <Provider store={store}>
      <div>
        <CounterApp/>
      </div>
    </Provider>
  );
}

export default ReduxForm;