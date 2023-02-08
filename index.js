const PORT =8000
const axios =require("axios")
const cheerio = require('cheerio')
const express = require('express')
const cors = require('cors')


const app =express()
app.use(cors())


const url= 'https://play.google.com/store/apps/details?id=app.yulu.bike&hl=en_IN&gl=US'
const articles =[]
axios(url)
    .then(response=>{
        const html= response.data;
        const $ =cheerio.load(html);
        

        $('.EGFGHd', html).each(function(){
           
            const name=$(this).find('div.X5PpBb').text();
            console.log(name);
            const review =$(this).find('div.h3YV2d').text();

            articles.push({
                name,review
            })
        })
        console.log(articles);
    }).catch(err => console.log(err));

    app.get('/', function(req,res){
        res.json(articles);
    })

    app.listen(PORT, () => console.log(`Server is running on port  ${PORT}`))

