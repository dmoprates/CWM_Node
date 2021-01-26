const moduloA = require('../../moduloA')
// const moduloA = require('C:\Users\Diego\Documents\Arquivos\programacao\CWM_Node\moduloA.js')
console.log(moduloA.ola)

// const saudacao = require('saudacao')
// console.log(saudacao.ola)

const http = require('http')
http.createServer((req, res) => {
    res.write('Bom Dia!')
    res.end()
}).listen(8080)