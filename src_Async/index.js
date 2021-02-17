// import fs from 'fs'
// import readline from 'readline'

// const file = process.argv[2]
// let lines = 0

// const rl = readline.createInterface({
// 	input: fs.createReadStream(file),
// 	crlfDelay: Infinity
// })

// rl.on('line', line => {
// ++lines
// console.log(`Numero toral de caracteres por linea: ${line.length}`)
// })

// rl.on('close', () => console.log(`Numero total de lineas: ${lines}`))
// 
// ---------------------------------------------

// import fs from 'fs'

// const file = process.argv[2]

// fs.readFile(file, (err, contents) =>{
// 	if(err){
// 		return console.log(err)
// 	}

// 	const lines = contents.toString().split('\n')

// 	for (let line of lines) {
// 		console.log(`Numero toral de caracteres por linea: ${line.length}`)
// 	}
// 	console.log(`Numero total de lineas: ${lines.length}`)
// })

// console.log(`Fichero seleccionado: ${file}`)

import readline from 'readline'
import async from './async'
import events from './events'

const file = process.argv[2]

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question(
  `Como quiere leer el fichero?
  1. De forma asíncrona (default)
  2. Con eventos
  Seleccione una opcion: `,
  value => {
    console.log(`Selecciono ${value}\n\n`)

    switch (value) {
      case '2':
        events(file)
        break
      default:
        async(file)
    }
    rl.close()
  })