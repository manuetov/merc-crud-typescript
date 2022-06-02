import { RequestHandler } from 'express';
import Video from "./Video"

export const createVideo: RequestHandler = async (req, res) => {
   console.log(req.body)
   // comprueba si el video ya existe, para evitar un error en la db 
   // ya que url tiene la propiedad unique : true
   const videoDBFound = await Video.findOne({url: req.body.url})
   if (videoDBFound) 
      return res.status(301).json({message: "el video ya existe"})

   const videoDB = new Video(req.body)
   const savedVideoDB = await videoDB.save()
   res.json(savedVideoDB)
}

export const getVideos: RequestHandler = async (req, res) => {
   try{
      const videosDB = await Video.find()
      res.json({videosDB})

   } catch (error) {
      res.json(error)
   }
}

export const getVideo: RequestHandler = async (req, res) => {
   console.log(req.params)
   try{ 
      const foundedVideoDB = await Video.findById(req.params.id)
      res.json(foundedVideoDB)

   } catch(error) { 
      res.status(404).json("video no encontrado")
   }
}
export const deleteVideo: RequestHandler = async (req, res) => {
   const foundedVideoDB = await Video.findByIdAndDelete(req.params.id)
   if (!foundedVideoDB) return res.status(204).json('el video no existe')
      return res.status(200).json('video eliminado')     
}
export const updateVideo: RequestHandler = async (req, res) => {
   // {new:true} devuelve el objeto nuevo actualizado, sino se expecifica devolvería el viejo.
   const updatedVideoDB = await Video.findByIdAndUpdate(req.params.id, req.body, { new:true })
   if (!updatedVideoDB) return res.status(204).json('video no existe')
      return res.status(200).json(updatedVideoDB)
}

