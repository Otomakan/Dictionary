import React, {Component} from 'react'
import { connect } from 'react-redux'


class SignUp extends Component {
	render(){

	}
}

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const SignUp = connect (
	mapStateToProps,
	mapDispatchToProps,
	)

export default SignUp