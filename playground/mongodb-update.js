// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser :true},(err,client)=>{
    if(err){
        return console.log('unable to connect to mongoDB Server');
    }
    console.log('Connected');

    const db = client.db('TodoApp')
   
    // db.collection('Todos').findOneAndUpdate
    // ({_id: new ObjectID('5bd7e712d71ca8d67b621c9e')},
    // {
    //     $set:{completed :true}},
    // {
    //     returnOriginal:false}
    // ).then((result)=>{
    //     console.log(result);
    // })
    
    db.collection('Users').findOneAndUpdate
    ({_id: new ObjectID('5bd65123d71ca8d67b621c11')},
    {
        $set:{name:'Mike'},
        $inc:{age:1}},
    {
        returnOriginal:false}
    ).then((result)=>{
        console.log(result);
    })

    client.close();
});