
const express=require('express')
const app=express()
// const http=require('http')
const port=process.env.PORT || 3000;

// let server=http.createServer((req,res) => { console.log('thanks for the request') });



app.set('view engine', 'ejs');  //make a link between the 'view engine' and ejs

app.set('views','views')

app.use(express.static('public'))

// app.listen(port, (error)=>{      // make the app listening to the port 

//     if (error){throw error};

//     console.log(`listening jjjj on http://localhost:${port}`);
    
// })

// app.get('/',(req,res) => { 

//     res.status(200).send('hello from home')
//  })

app.get( '/', (req,res)=>{     //mecanism of sending requests and receiving responses

    
    // res.send( 'hello from node server it s great');
    
    let pageName='HOME';
    
    res.render('index', {title:pageName, message:`you are in ${pageName} page:`});
    
}  )


// app.get( '/addbook', (req,res) => { 
    
//     res.redirect('https://www.youtube.com');

// })











app.get( '/addbook', (req,res)=>{     //mecanism of sending requests and receiving responses

    
    // res.send( 'hello from node server it s great');
    
    let pageName='addbook';
    res.render( 'addbook', {namePage:pageName});


}  )





// app.get( '/addbook/html', (req,res)=>{     //mecanism of sending requests and receiving responses

    
//     // res.send( 'hello from node server it s great');
    
//     let pageName='HTML';
//     res.render( 'html', {namePage:pageName});


// }  )




app.get('/employee', (req,res)=>{

    const employee=[{
        name:'aziz',
        position:'engeneer',
        experience:'3', 
        isContractor:false,
        skills:['C#',"java",'GIT']
    }
,{
    name:'hocine',
    position:'doctor',
    experience:'20', 
    isContractor:true,
    skills:['C#',"java",'GIT']
},
{
    name:'rabah',
    position:'engeneer',
    experience:'10', 
    isContractor:false,
    skills:['C#',"java",'GIT']
},
{
    name:'fatma',
    position:'engeneer',
    experience:'23', 
    isContractor:true,
    skills:['C#',"java",'GIT']
}


]

    res.render('employee',{employee:employee})
});



app.listen(port,(error)=>{      // make the app listening to the port 

    if (error){throw error};

    console.log(`I am listening on http://localhost:${port}  are you blind?`);
    
})
