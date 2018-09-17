import React, { Component } from 'react';
import { view, store } from 'react-easy-state';

const user = store({ name: 'Bob' });

export class HelloComp extends Component {
  onChange = (e) => (user.name = e.target.value);
 
  // the render is triggered whenever user.name changes
  render() {
    return (
      <div>
        <input value={user.name} onChange={(e) => this.onChange(e)} />
        <div>Hello {user.name}!</div>
      </div>
    );
  }
}

// the component must be wrapped with `view`
export default view(HelloComp);