let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp',{useNewUrlParser:true});

let Todos = mongoose.model('Todos',{
    text:{
        type:String,
        required:true,
        minlength : 2
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

// let newTodo = new Todos({
//     text:'Watch chala hava yeu dya'
// });

// newTodo.save().then((doc)=>
// {
//     console.log('New todo saved successfully',doc);
// },(e)=>{
//     console.log('unable to save todo');
// });

// let otherTodo = new Todos({
//     text: 'Test 121',
//     completed:true,
//     completedAt: 1222
// });

// otherTodo.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//     console.log('other todo cannot be saved');
// })


let User = mongoose.model('User',{
    name:{
        type:String,
        required:true  
    },
    email:{
        type: String,
        required:true,
        trim:true,
        minlength: 1
    }
});

let user = new User({
    name:'Sandip',
    email:'Sandip.rane@gmail.com'
});

user.save().then((doc)=>{
    console.log('User saved',doc)
},(e)=>{
    console.log('Unable to save',e);
})