

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
       
      })
}


const Add = (request,response)=>{

    
      // Access granted...
      const {id,name,email} = request.body
   
    
    cn.connection.query('INSERT INTO users (id,name, email) VALUES (?, ?,?) ',[id,name,email], (err, rows, fields) => {
        if (err) {
          response.status(401).send({
            error:{
              message:"Error Insert Failed",
              code:'401'
            }
          })
          console.log('The solution is: ', err)
        }else{

        response.status(200).json({
          success:{
            message:'Success Insert ',
            code:'200'
          }
        })
        console.log('The solution is: ', )
        }
      
      })
    
  

}


const Delete = (request,response)=>{
    const id = request.params.id

    cn.connection.query('DELETE FROM users where id =?',[id], (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).json('success')
       
      })
}


const Update = (request,response)=>{
  const id = request.body.id
  const name = request.body.name
  const email = request.body.email

    cn.connection.query("UPDATE users SET name = ?, email = ?  WHERE id = ?;",[name,email,id], (err, rows, fields) => {
        if (err) throw err
      
        response.status(200).json('success')
       
      })
}



module.exports={
    Tampil,
    Tampil_ID,
    Add,
    Delete,
    Update
    
}