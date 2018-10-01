import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from  'redux';
import reducers from './reducers';
import { Header } from './components/common';

// created a store and passed it to the provider tag
// created one reducers and passed it to the store

//provider can only have one single child component
//the child can have as many subcomponents
const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View>
      <Header headerText="Tech Stack" />
      </View>
    </Provider>
  );
};

export default App;
