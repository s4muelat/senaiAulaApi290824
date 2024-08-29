const express = require('express')
const api = express()
const porta = 80

api.get('/', (req, res) => {

    const rotaPadrao =
    {
        nome_rota: '/',
        codigo_status: '200',
        metodo: 'GET'
    }

    res.status(200)
    res.json(rotaPadrao)
})

api.get('/clientes', (req, res) => {

    const rotaClientes = [
        {
            nome: 'Maria das Dores',
            cidade: 'Rio de Janeiro',
            cpf_cnpj: '457.965.587-01',
            profissao: 'Comerciante'
        },

        {
            nome: 'Joao da Silva',
            cidade: 'São Paulo',
            cpf_cnpj: '012.345.678-91',
            profissao: 'Médico'
        }

    ]

    res.status(200)
    res.json(rotaClientes)
})

api.get('/cliente/cpfcnpj/12345678901', (req, res) => {

    const rotaCienteCpf = [
        {
            nome: 'Joao da Silva',
            cidade: 'São Paulo',
            cpf_cnpj: '012.345.678-91',
            profissao: 'Médico'
        }

    ]

    res.status(200)
    res.json(rotaCienteCpf)
})



api.post('/cliente/novo', (req, res) => {

    const rotaCienteCpf = [
        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }

    ]

    res.status(201)
    res.json(rotaCienteCpf)
})


api.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`)
})


