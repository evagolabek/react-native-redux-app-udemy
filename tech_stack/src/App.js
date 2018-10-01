import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from  'redux';
import reducers from './reducers';

// created a store and passed it to the provider tag
// created one reducers and passed it to the store
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View />
    </Provider>
  );
};

export default App;
