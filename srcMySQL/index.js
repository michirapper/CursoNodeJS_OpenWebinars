import Sequelize from 'Sequelize'

const sequelize = new Sequelize('films', 'root', '', {
  host: "127.0.0.1",
  dialect : 'mysql',
  pool:{
    max:5,
    min:0,
    idle: 10000
  }
})

const Film = sequelize.define(
  'Film',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      field: 'id',
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      field: 'title'
    },
    poster: {
      type: Sequelize.STRING,
      field: 'poster'
    }
  },
  {
    freezeTableName: true
  }
)

Film.sync({ force: true })
  .then(() => Film.create({
    title: 'Star Wars: The Last Jedi',
    poster: 'https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-film-page_bca06283.jpeg?region=0%2C0%2C480%2C711'
  })
)