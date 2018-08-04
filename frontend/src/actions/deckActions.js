import deckServices from '../services/deckServices'


export const deckConstants = {
	SHOW_ALL_REQUEST : "DECK_SHOW_ALL_REQUEST",
	SHOW_ALL_SUCCESS : "DECK_SHOW_ALL_SUCCESS",
	SHOW_ALL_FAILURE : "DECK_SHOW_ALL_FAILURE",

	CREATE_REQUEST : "DECK_CREATE_REQUEST",
	CREATE_SUCCESS : "DECK_CREATE_SUCCESS",
	CREATE_FAILURE : "DECK_CREATE_FAILURE",

	SHOW_DECK_REQUEST : "DECK_SHOW_DECK_REQUEST",
	SHOW_DECK_SUCCESS : "DECK_SHOW_DECK_SUCCESS",
	SHOW_DECK_FAILURE : "DECK_SHOW_DECK_FAILURE",
}

export default {
	createDeck,
	showDecks,
}

function showDecks(){
	return dispatch =>{
			dispatch(request())
			deckServices.showall()
			.then(res=>{
				dispatch(success(res.decks))
			})
			.catch(err=>{
				if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        if (typeof err.error === "string")
                        	dispatch(failure([err.error]))
                        else{
                        	var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                            prev.push(err.error[curr])
                            return prev
	                        },[])
	                        dispatch(failure(errarray))
                        }
                    })
                else
                    dispatch(failure(err.toString()))
	})
	}


	function request() { return { type: deckConstants.SHOW_ALL_REQUEST } }
    function success(decks) { return { type: deckConstants.SHOW_ALL_SUCCESS, decks } }
    function failure(error) { return { type: deckConstants.SHOW_ALL_FAILURE, error } }

}
function createDeck(title, tags=[]){
	return dispatch => {
		dispatch(request({title}))
		deckServices.create(title, tags)
		.then(res=>{
			console.log(title)
			dispatch(success({title}))
		})
		.catch(err=>{
			if(typeof err.then === "function")
                    err.then(err=>{
                        //API returns an object which wewant to convert to an array so we can better display errors
                        if (typeof err.error === "string")
                        	dispatch(failure([err.error]))
                        else{
                        	var errarray = Object.keys(err.error).reduce((prev, curr,index)=>{
                            prev.push(err.error[curr])
                            return prev
	                        },[])
	                        dispatch(failure(errarray))
                        }
                    })
                else
                    dispatch(failure(err.toString()))
	})
	}
	
	function request(title) { return { type: deckConstants.LOGIN_REQUEST, title } }
    function success(title) { return { type: deckConstants.LOGIN_SUCCESS, title } }
    function failure(error) { return { type: deckConstants.LOGIN_FAILURE, error } }

}