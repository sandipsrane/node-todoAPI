// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser :true},(err,client)=>{
    if(err){
        return console.log('unable to connect to mongoDB Server');
    }
    console.log('Connected');

    const db = client.db('TodoApp')
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false
    // },(err,result)=>{
    //     if(err){
    //     return console.log('unable to insert todo ',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // db.collection('Users').insertOne({
    //     name:'Sandip',
    //     age:35,
    //     location:'rancho cordova'
    // },(err,result)=>{
    //     if(err){
    //         return console.log('uanble to insert users',err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // })

    // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos Count :${count}`);
    // },(err)=>{
    //     console.log('Unable to fetch Todos',err);
    // });

    db.collection('Users').find({name:'Sonali'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('unable to fetch users',err)
    })

    client.close();
});