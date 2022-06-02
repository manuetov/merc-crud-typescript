import React, { FormEvent, ChangeEvent, useState } from 'react'
import { Video } from './Videos'
import * as videoService from './VideoServices'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// interface para el objeto e "event" de la función handleInputChange
type InputChange = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>

function VideoForm() {
  const navigate = useNavigate()

  const initialState = {
    title: "",
    description: "",
    url: ""
  }
  const [video, setVideo] = useState<Video>(initialState)
  
  // tipado de e y textarea
  const handleInputChange = (e: InputChange) => {
    setVideo({...video, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const res = await videoService.createVideos(video)
    console.log(res);
    toast.success('nuevo video agregado')  // muestra modal
    setVideo(initialState) // setea el estado a su estado icicial
    navigate('/') //redirecciona a la ruta inicial
  }

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <h3>Nuevo Video</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  placeholder="escribe el titulo del video"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.title} //reflejan el valor del input de title
                  autoFocus
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="url"
                  placeholder="https://somesite.com"
                  className="form-control"
                  onChange={handleInputChange}
                  value={video.url}
                />
              </div>

              <div className="form-group">
                <textarea
                  name="description"
                  rows={3}
                  className="form-control"
                  placeholder="escribe una descripción"
                  onChange={handleInputChange}
                  value={video.description}
                >
                </textarea>
              </div>
              <button className="btn btn-primary">Crear Video</button>             
          </form>
        </div>
      </div>
    </div>
  )
}
export default VideoForm