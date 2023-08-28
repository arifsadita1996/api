const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const con = require('./database.js')


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(express.static('public'))
app.use((req, res, next) => {

    // -----------------------------------------------------------------------
    // authentication middleware
  
    const auth = {login: 'yourlogin', password: 'yourpassword'} // change this
  
    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')
  
    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
      // Access granted...
      return next()
    }
  
    // Access denied...
    res.set('WWW-Authenticate', 'Basic realm="401"') // change this
    res.status(401).send('Authentication required.') // custom message
  
    // -----------------------------------------------------------------------
  
  })

  app.get("/",(request,response)=>{
    response.render("./index.ejs")
  })

app.get("/api",con.Tampil)


app.get("/api/:id",con.Tampil_ID)
app.post("/api",con.Add)
app.delete("/api/:id",con.Delete)

app.listen(port,() =>{
    console.log(`done with ${port}`)
})