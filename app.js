var express=require('express')
// var fs=require('fs')
// 使用post提交
// var bodyParser=require('body-parser')
var app=express()

var comments=[
	{
		name:"小王",
		message:"话费卡多少",
		dataTime:'2017-1-1'
	},
	{
		name:"小王1",
		message:"话费卡多少",
		dataTime:'2017-1-1'
	},
	{
		name:"小王2",
		message:"话费卡多少",
		dataTime:'2017-1-1'
	},
	{
		name:"小王3",
		message:"话费卡多少",
		dataTime:'2017-1-1'
	}
]

app.use('/node_modules/',express.static('./node_modules/'))

app.engine('html',require('express-art-template'))

app.get('/',function(req,res){
	res.render('index.html',{
		comments:comments
	})
})
app.get('/post',function(req,res){
	
	res.render('post.html')

})
app.get('/pinglun',function(req,res){
	var comment=req.query
	comment.dataTime="2018-4-7"
	comments.unshift(comment)
	res.redirect('/')
})
app.listen(3000,function(){
	console.log('is reunning..........')
})