import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../app/query';
 
import App from './App.js';
 
Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
