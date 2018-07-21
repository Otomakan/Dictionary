import React from "react"
import PropTypes from "prop-types"
class HomePage extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

HomePage.propTypes = {
  greeting: PropTypes.string
};
export default HomePage
