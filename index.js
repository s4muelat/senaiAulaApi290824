const express = require('express')
const api = express()
const porta = 80


// Rota Padrão
api.get('/', (req, res) => {

    const response =
    {
        nome_rota: '/',
        codigo_status: '200',
        metodo: 'GET'
    }

    res.status(200)
    res.json(response)
})

// Consulta todos os clientes
api.get('/clientes', (req, res) => {

    const response = [
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
    res.json(response)
})

// Consulta cliente específico
api.get('/cliente/cpfcnpj/12345678901', (req, res) => {

    const response = [
        {
            nome: 'Joao da Silva',
            cidade: 'São Paulo',
            cpf_cnpj: '012.345.678-91',
            profissao: 'Médico'
        }

    ]

    res.status(200)
    res.json(response)
})


// Cria usuários
api.post('/cliente/novo', (req, res) => {

    const response = [
        {
            mensagem: 'Cliente criado com sucesso',
            status: 201
        }

    ]

    res.status(201)
    res.json(response)
})

// Atualiza cliente por cpf
api.put('/cliente/update/cpfcnpj/12345678901', (req, res) => {

    const response = [
        {
            mensagem: 'Dados atualizados com sucesso',
            status: 200
        }

    ]

    res.status(200)
    res.json(response)
})

// Atualiza cliente por cpf
api.put('/cliente/update/cpfcnpj/12345678901', (req, res) => {

    const response = [
        {
            mensagem: 'Dados atualizados com sucesso',
            status: 200
        }

    ]

    res.status(200)
    res.json(response)
})






api.listen(porta, () => {
    console.log(`Servidor em execução na porta ${porta}`)
})


