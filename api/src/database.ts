import mongoose from 'mongoose'

(async() => {
   try {
      const db = await mongoose.connect('mongodb://localhost/merc-typescript')
      console.log('dababase is connected a:', db.connection.name)
} catch (error) {
      console.log(error)
   }
})()



