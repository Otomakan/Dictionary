import ShowDeckComponent from '../../../components/LoggedIn/ShowDeck.js'
import {connect} from 'react-redux'
import deckActions from '../../../actions/deckActions.js'

function mapDispatchToProps(dispatch){
	// return {
	// 	showall:()=>{
	// 		dispatch(deckActions.showDecks())
	// 	},
	// }
}
function mapStateToProps(state){
	console.log(state.deckReducer)
	return state.deckReducer
}

const ShowDeck = connect(mapStateToProps, mapDispatchToProps)(ShowDeckComponent)
export default ShowDeck