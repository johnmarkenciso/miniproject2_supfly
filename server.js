//import 
const express = require('express');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const app = express();

//.env config
dotEnv.config();

//middlewatre
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(methodOverride('_method'))


//setting up view enging
app.set('view engine', 'ejs')
app.set('views', 'views');


//set up static files
app.use(express.static('public'));
app.use('/css' , express.static(__dirname + 'public/css'));
app.use('/js' , express.static(__dirname + 'public/js'));
app.use('/img' , express.static(__dirname + 'public/img'));


//import routes
const routerHome = require('./routes/home');
const loginRoute = require('./routes/login')
const marketRoute = require('./routes/marketplace')
const registerRoute = require('./routes/register')
const userListRoute = require('./routes/userList') 
const adminRouter = require('./routes/admin')
const investRoute = require('./routes/invest')

// use routes
app.use('/', routerHome)
app.use('/login', loginRoute)
app.use('/marketplace' , marketRoute)
app.use('/register', registerRoute)
app.use('/users', userListRoute)
app.use('/admin', adminRouter)
app.use('/invest', investRoute)





// app.get('/set-cookie',(req,res)=> {
//     // res.setHeader('Set-Cookie', 'newUser=true');
//     res.cookie('newUser', false);
//     res.cookie('isEmployee', true, {maxAge: 1000*60*60*24, httpOnly:true});
//     res.send('you got the coockies!');
// })

// app.get('/read-cookies', (req, res)=>{
//     const cookies = req.cookies;
//     console.log(cookies.newUser);
//     res.json(cookies.newUser)
// })





//connection
const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('Connected!')
})
try{
    mongoose.connect(process.env.DB_CONNECT,()=>{
        console.log(`Connected to database! `);
    });
    
}catch(error){
    console.log(error)
}


app.use((req, res) =>{
    res.status(404).render('404');
})
