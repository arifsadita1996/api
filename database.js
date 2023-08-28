

const cn = require('./connection')


const Tampil_ID = (request,response) => {
    const id = request.params.id

    cn.connection.query('SELECT * From users where id = ?',[id], (err, rows, fields) => {
      if (err) throw err
    
      response.status(200).json(rows)
      console.log('The solution is: ', rows)
    })
}

const Tampil = (request,response)=>{

    cn.connection.query('SELECT * From users', (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).json(rows)
        console.log('The solution is: ', rows)
      })
}


const Add = (request,response)=>{

    
      // Access granted...
      const id = request.body.id
    const name = request.body.name
    const email = request.body.email
    cn.connection.query('INSERT INTO users (id,name, email) VALUES (?, ?,?) ',[id,name,email], (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).json(rows)
        console.log('The solution is: ', rows)
      })
    
  

}


const Delete = (request,response)=>{
    const id = request.params.id

    cn.connection.query('DELETE FROM users where id =?',[id], (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).send('header')
       
      })
}


const Update = (request,response)=>{
    

    cn.connection.query('INSERT SET name = ?, email = ? where id =?',[nama,email,id], (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).json(rows)
        console.log('The solution is: ', rows)
      })
}



module.exports={
    Tampil,
    Tampil_ID,
    Add,
    Delete
    
}