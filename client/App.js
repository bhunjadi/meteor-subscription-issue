import React from 'react';
import {withQuery} from 'meteor/cultofcoders:grapher-react';
import { query } from '../app/query';

let start = null;

export let SubscriptionComponent = props => {
  console.log(props);

  const {error, isLoading, items} = props;
  if (isLoading) {
    console.time('Subscription');
  }
  else {
    console.timeEnd('Subscription');
  }

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>{error.toString()}</div>;
  }

  return <div>Items #: {items.length}</div>
};

SubscriptionComponent = withQuery(() => {
  console.log('with query');
  return query.clone({
    limit: 15,
    skip: 0,
  });
}, {
  reactive: true,
  dataProp: 'items',
})(SubscriptionComponent);

export default class App extends React.Component {
  state = {show: true};

  retry = () => {
    console.log('retrying');
    this.setState({show: false});
    setTimeout(() => {
      this.setState({show: true});
    }, 1000);
  };

  render() {
    const {show} = this.state;
    return (
      <div>
        My App

        {show && <SubscriptionComponent />}

        <button type="button" onClick={this.retry}>Retry</button>
      </div>
    )
  }
}
