import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'

const PORT = process.env.PORT || 8000
dotenv.config()

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  res.json('hi')
})

app.get('/acuarela', (req, res) => {
  const API_KEY = process.env.API_KEY
  const USER_ID = process.env.USER_ID
  const photoset_id = '72177720311421432'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photoset_id}&user_id=${USER_ID}&privacy_filter=5&format=json&nojsoncallback=1`
  
  axios.request(url).then(response => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.get('/colaboraciones', (req, res) => {
  const API_KEY = process.env.API_KEY
  const USER_ID = process.env.USER_ID
  const photoset_id = '72177720311422420'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photoset_id}&user_id=${USER_ID}&privacy_filter=5&format=json&nojsoncallback=1`
  
  axios.request(url).then(response => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.get('/ilustracionBotanica', (req, res) => {
  const API_KEY = process.env.API_KEY
  const USER_ID = process.env.USER_ID
  const photoset_id = '72177720309959379'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photoset_id}&user_id=${USER_ID}&privacy_filter=5&format=json&nojsoncallback=1`
  
  axios.request(url).then(response => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.get('/ceramica', (req, res) => {
  const API_KEY = process.env.API_KEY
  const USER_ID = process.env.USER_ID
  const photoset_id = '72177720310186152'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photoset_id}&user_id=${USER_ID}&privacy_filter=5&format=json&nojsoncallback=1`
  
  axios.request(url).then(response => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.get('/paraColorear', (req, res) => {
  const API_KEY = process.env.API_KEY
  const USER_ID = process.env.USER_ID
  const photoset_id = '72177720310227544'
  const url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${photoset_id}&user_id=${USER_ID}&privacy_filter=5&format=json&nojsoncallback=1`
  
  axios.request(url).then(response => {
    res.json(response.data)
  }).catch((error) => {
    console.error(error)
  })
})

app.listen(PORT, () => console.log(`server running on port ${PORT}`))