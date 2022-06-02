import { Schema, model } from 'mongoose'

const videoSchema = new Schema({
   title: {
      type: 'string',
      required: true,
      trim: true
   },
   description: {
      type: 'string',
      trim: true
   },
   url: {
      type: 'string',
      required: true,
      trim: true,
      unique: true
   }
}, {
   versionKey: false, 
   timestamps: true
})

export default model('Video', videoSchema)