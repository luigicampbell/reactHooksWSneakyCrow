// First we import React, to give us access to React (Component class, JSX, etc)
// We also import Component which is equivalent to just using React.Component, but I like Component better (cleaner code)
// I also call Fragment. Fragment is used when you don't want to render extra nodes into the DOM.
// Since this component always has a button, that lives outside of the children, we want to wrap the entire thing in a Fragment (all React components must be wrapped in a single parent node or a Fragment)
import React, { Component, Fragment } from 'react';
// We import proptypes for type usage. This just makes sure that the incoming prop is the thing that we're expecting
import PropTypes from 'prop-types';

// This component is a class component, because it needs state (pre-React 16.7 (hooks), you need to use a class to get state into a component)
class Toggler extends Component {
  // We initialize state first with the class constructor. We also have to call super() on props (required for the Component class)
  constructor(props) {
    super(props);
    this.state = {
      isChildrenShown: true // Set the default value of our state
    };
    this.handleToggleChildren = this.handleToggleChildren.bind(this); // We have the bind this to the function, so React know's which 'this' we're referring to (I think, you might want to google that one. I just know you have to do this)
  }

  handleToggleChildren() {
    // This function is a little different from standard react. First of all, it calls a function from inside setState.
    // I do this because sometimes when you toggle release fast you'll run into a problem of your state object overwriting itself.
    // I avoid this by using a callback (function) that returns a state object, so that the state object can't override itself
    // The callback can also check the current state of the state object boolean (in this case), and return the opposite of that
    this.setState(state => ({ isChildrenShown: !state.isChildrenShown }));
  }

  // This is the method that's called by React to get our component into the DOM
  render() {
    const { isChildrenShown } = this.state;
    const { children } = this.props; // We bring in a children prop here
    return (
      // The return statement is the actual content that will be rendered
      <Fragment>
        {/* Our first node is where the content of the toggler is rendered */}
        {/* This line checks if the boolean is true, before showing the items */}
        {isChildrenShown && <div>{children}</div>}
        {/* This is a button to toggle our actual children prop */}
        <button type="button" onClick={this.handleToggleChildren}>
          Toggle
        </button>
      </Fragment>
    );
  }
}

// And here's where we declare what the incoming prop should be
Toggler.propTypes = {
  children: PropTypes.node.isRequired
};

export default Toggler;
