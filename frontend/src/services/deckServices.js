import Cookies from 'universal-cookie'
const cookies = new Cookies()


const deckServices = {
	create,
	showall,
}
export default deckServices

function showall(){
	return fetch('http://localhost:5000/decks/showall',{
		method:'get',
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
	})
	.then(res=>{
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})

}

function create(title, tags){
	
	fetch('http://localhost:5000/decks/create',{
		method:'post',
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body: JSON.stringify({
			title: title,
			tags: tags
		}),
	}).then(res=>{
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
	})
	.then(res=> res)
	.catch(err=>{throw err})
	
}

function showone(deck_id){
	fetch("http://localhost:5000/decks/"+deck_id,{
		method:"get",
		headers: {
			'Authorization': cookies.get('JWT_Token_Dic'),
			Accept:'application/json',
			'Content-Type':'application/json',
		},
		body: JSON.stringify({
			deck_id: deck_id,
		}),

		}).then(res=>{
		if (res.status === 200)
			return res.json()
		else
			throw res.json()
		})
	.then(res=> res)
	.catch(err=>{throw err})
}