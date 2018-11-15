import express from 'express';
const app=express();

let jsons=require('./lib.json');
app.get('/',(req,res)=>{
    // response.setHeader('Content-Type', 'application/json');
   res.send()
});
app.get('/api/books',(req,res) =>{
    // response.setHeader('Content-Type', 'application/json');
  res.send(jsons);
});
app.get('/api/book/:id',(req,res)=>{
    // response.setHeader('Content-Type', 'application/json');
    let book=jsons.find(book => {
            if(book.id === req.params.id){
                c(book);
            }
        });
    function c(book){
        res.send(book);
        console.log('wwww',book)
    }




});

const server=app.listen(8080,()=>{
    console.log("start");
});