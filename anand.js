const http=require("http")

http.createServer((req,res)=>{
	res.write("Server is loading")
	res.end()
}).listen(2000)