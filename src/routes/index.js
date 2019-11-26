const router = require('express').Router()

const authController = require('../controllers/authController')
const userController = require('../controllers/userController')


const { authenticate } = require('../services/authenticate')

// register and new users
router.post('/register', userController.register)
router.post('/login', authController.login)



router.get('/test', (req, res) => {
  const timestp = new Date()

  res.render('page', { title: 'Rocket Challenger', quote: 'The answer is 42', timestp: timestp });
})

// Test Auth
router.get('/testAuth', authenticate, (req, res) => {
  //res.status(404).send('Hello world!')
  // console.log(req.headers)
  const timestp = new Date()
  res.status(200).send({
   nome: 'Test API authentication',
   tempo: timestp.toJSON()
  })
})

module.exports = router