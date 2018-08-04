import ShowDecksComponent from '../../../components/LoggedIn/ShowDecks.js'
import {connect} from 'react-redux'
import deckActions from '../../../actions/deckActions.js'

function mapDispatchToProps(dispatch){
	return {
		showall:()=>{
			dispatch(deckActions.showDecks())
		},
	}
}
function mapStateToProps(state){
	console.log(state.deckReducer)
	return state.deckReducer
}

const ShowDecks = connect(mapStateToProps, mapDispatchToProps)(ShowDecksComponent)
export default ShowDecks