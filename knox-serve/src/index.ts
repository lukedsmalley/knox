import express from 'express'

const app = express()

app.get('/tools', (request, response) => {
  response.send(JSON.stringify([
    {
      name: 'ESLint',
      role: 'Linter'
    }
  ]))
})

app.get('/abstractions', (request, response) => {
  response.send(JSON.stringify([
    ['Compiler', 'Parser', 'Scanner'],
    ["Program", 'SyntaxKind'],
    ['func', 'd']
  ]))
})

app.get('/procedure', (request, response) => {
  response.send('no code')
})

app.listen(3001, () => console.log('Started'))
