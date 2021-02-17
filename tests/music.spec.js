import request from 'supertest'

import server from '../src'
import mocks from '../mocks'


describe('Music', () => {
  let instance = undefined

  beforeEach(() => {
    instance = server.start()
  })

  afterEach(() => {
    server.close()
  })

  describe('/GET /music', () => {
    it('it should GET', () => {
      request(instance)
        .get('/music')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) throw err
        })
    })
  })

  describe('/GET /music/RagnBone', () => {
    it('it should GET', () => {
      const expected = mocks.filter(item =>
        item.singer.toLowerCase() === 'RagnBone'.toLowerCase()
      )

      request(instance)
        .get('/music/RagnBone')
        .expect('Content-Type', /json/)
        .expect(200, expected)
        .end(function (err, res) {
          if (err) throw err;
        })
    })
  })

  describe('/POST /music', done => {
    it('it should GET', () => {
      const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.e30.FyKpDq5EUXNk0AHqWmrK2LVgtV4maW7VRWSET6oDOoE'

      const body = {
        song: 'Sugar',
        singer: 'Robin Schulz',
        album: 'OK'
      }

      request(instance)
        .post('/music')
        .set('Authorization', `JWT ${token}`)
        .send(body)
        .expect(201, body)
        .end(function (err, res) {
          if (err) throw err;
        })
    })
  })
})