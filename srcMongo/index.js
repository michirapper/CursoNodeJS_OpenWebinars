import mongoose from 'mongoose'

const host = 'mongodb://localhost:27017/films'

mongoose.set('debug', true)
mongoose.Promise = global.Promise

const conn = mongoose.createConnection(
  host,
  {poolSize: 200}
  )

conn.on('error', err=> {
  console.log('Error', err)
  return process.exit()
})

conn.on('connected', () => console.log('Conectado a mongo'))

const filmSchema = new mongoose.Schema(
{
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, trim: true, required: true},
  poster: { type: String, trim: true, required: true}
},
{
  strict: false
}
)

const Film = conn.model('Film', filmSchema)

const newDocument = new Film({
  _id: new mongoose.Types.ObjectId(),
  title: 'Star Wars: The last Jedi',
  poster: 'https://pics.filmaffinity.com/Star_Wars_Los_ltimos_Jedi-535293064-large.jpg'
})

newDocument.save(err => {
  if (err) {
    throw err
  }
console.log("Almacenado")
})