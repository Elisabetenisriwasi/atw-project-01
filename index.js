const express = require('express')
//const userRouter = require('./users') 
const app = express()

app.get('/' , function(request, response) {
	//const kelas = {
		//id: 1,
		//nama: 'Javascript'
	//}
	//console.log('Hello Word!')
	response.send('Home')
})

app.get('/about' , function(request, response){
   //response.redirect('https:/expressjs.com/')
   response.send('About')
})

app.get('/users', function(request, response){
	response.send('Get User')
})

app.post('/users', function(request, response){
	response.send('Post User')
})

app.put('/users', function(request, response){
	response.send('Put User')
})

app.delete('/users', function(request, response){
	response.send('Delete User')
})

//app.use(userRouter)


app.listen(3000, function(){
	console.log('server is okay')
})