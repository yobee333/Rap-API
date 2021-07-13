const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

// let savage = {
//     'age' : 28,
//     'birthName' : 'Seyaa Bin Abraham-Joseph',
//     'birthLocation' : 'London, England'
// }


let rappers = {
    '21 savage': {
        'age' : 28,
        'birthName' : 'Seyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },

    'chance the rapper':{
        'age' : 27,
        'birthName' : 'Chancelor Johnathan Bennett',
        'birthLocation' : 'Chicago, Illinois'
    },
    'dylan':{
        'age' : 0,
        'birthName' : 'Dylan',
        'birthLocation' : 'Dylan'
    }
}
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html') //requesting HTML, the shortcut is to tell it the directory name + the html file
})


// app.get('/api/rappers', (req, res) =>{
//     res.json(rappers)
// })

app.get('/api/rappers/:rapperName', (req, res) => {
    const rapName = req.params.rapperName.toLowerCase()
    console.log(rapName)

    if(rappers[rapName]){
        res.json(rappers[rapName])
    }else{
        res.json(rappers['dylan'])
    }
})


app.listen(PORT, () =>{
    console.log(`server running on ${PORT}`)
})