import {deckConstants} from '../actions/deckActions'
export default function deckReducer(state={deckLoader: true}, action){
	switch(action.type){
		case deckConstants.SHOW_ALL_REQUEST:
			return{
				deckLoader: true
			}
		case deckConstants.SHOW_ALL_SUCCESS:
			return{
				...state,
				deckLoader: false,
				decks: action.decks,
			}
		case deckConstants.SHOW_ALL_FAILURE:
			return{
				deckLoader: false,
				errors: action.error
			}
		case deckConstants.CREATE_REQUEST:
			return{
				deckLoader: true,
			}
		case deckConstants.CREATE_SUCCESS:
			return{
				deckLoader: false,

			}
		case deckConstants.CREATE_FAILURE:
			return{
				deckLoader: false,
			}
		default:
			return state


	}

}