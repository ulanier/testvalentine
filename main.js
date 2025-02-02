const form = document.querySelector('#form')

form.addEventListener("submit", (e) => {
	e.preventDefault()

	var text = document.querySelector('#text').value

	var token = "7771713616:AAESCtOZHkKTPBlbn1xPFCLXRzEbMhtrHL0"

	var chat_id = "5454119535"

	var my_text = `my text is ${text}`

	var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${text}`

	let api = new XMLHttpRequest()
	api.open("GET", url, true)
	api.send()

})