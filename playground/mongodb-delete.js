// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser :true},(err,client)=>{
    if(err){
        return console.log('unable to connect to mongoDB Server');
    }
    console.log('Connected');

    const db = client.db('TodoApp')
   
    // db.collection('Todos').deleteMany({text:'Something to do'}).then((result)=>{
    //     console.log(result);
    // })
   
    // db.collection('Todos').deleteOne({text:'Something else to do'}).then((result)=>{
    //     console.log(result);
    // })
   
    // db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({age:35}).then((result)=>{
    //     console.log(result);
    // })

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5bd2a5b04402a330bc0e9781')}).then((result)=>{
        console.log(result);
    })


    client.close();
});