import express from 'express'

const app = express()

app.get('/tools', (request, response) => {
  response.send(JSON.stringify([
    {
      name: 'ESLint',
      role: 'Linter'
    },
    {
      name: 'Gulp',
      role: 'Build Tool'
    },
    {
      name: 'Docker',
      role: 'Containerization'
    },
    {
      name: 'NPM',
      role: 'Package Manager'
    },
    {
      name: 'Travis',
      role: 'Continuous Integration'
    },
    {
      name: 'Git',
      role: 'Source Control'
    },
    {
      name: 'TypeScript',
      role: 'Compiler'
    },
  ]))
})

app.get('/abstractions', (request, response) => {
  response.send(JSON.stringify([
    ['Compiler', 'Parser', 'Scanner'],
    ["SignatureFlags", 'SyntaxKind', 'parseJsonText'],
    ['parseIsolatedEntityName', 'isExternalModule'],
    ['updateSourceFile', 'createNode', 'NodeConstructor'],
    ['TokenConstructor', 'IdentifierConstructor', 'visitNode<T>']
  ]))
})

app.get('/procedure', (request, response) => {
  response.send(`//Translation of application code back into a single, long procedure
  //Starting in main() or wherever appropriate
  let config = loadConfig()
  ...
  while (true) {
    mainLoop()
  }`)
})

app.listen(3001, () => console.log('Started'))
