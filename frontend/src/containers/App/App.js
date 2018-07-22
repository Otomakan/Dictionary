import React, { Component } from 'react';
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import { simpleAction } from '../../actions/simpleAction'

const mapStateToProps = state => ({
 ...state
})
const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})



class App extends Component {
    getUserData(){
    return fetch(`http://localhost:5000/users.json`)
      .then(res => {
        return res.json()
      }).then(res=>{
        console.log(res)
      })
  }
  componentDidMount() {
    this.getUserData()
    console.log(this.props)

  }
  simpleAction (event) {
    this.props.simpleAction();
    console.log(this.props)
  }
  render() {
    return (
      <div className="App">
      <pre>
 {
  JSON.stringify(this.props)
 }
</pre>
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button variant="contained" color="primary">Press</Button>
        <button onClick={this.simpleAction.bind(this)}>Test redux action</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
