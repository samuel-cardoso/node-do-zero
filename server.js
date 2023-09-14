/* 

O request e o response são dois objetos fundamentais em um servidor HTTP que permitem a comunicação entre o servidor e o cliente. 

Eles desempenham papéis específicos:

Request (Requisição): O objeto request representa a informação enviada pelo cliente (navegador, aplicativo, etc.) para o servidor. Ele contém detalhes sobre a solicitação, como o método HTTP (por exemplo, GET, POST), a URL solicitada, os cabeçalhos da requisição, os parâmetros da consulta (no caso de solicitações GET), o corpo da requisição (no caso de solicitações POST), entre outras informações.

Response (Resposta): O objeto response representa a resposta que o servidor envia de volta para o cliente. Ele permite que você defina o status da resposta (por exemplo, 200 OK, 404 Not Found), cabeçalhos de resposta (por exemplo, tipo de conteúdo, cache-control), e o corpo da resposta (o conteúdo real que será enviado ao cliente).

Esses objetos são usados para manipular a comunicação entre o servidor e o cliente. Ao receber uma solicitação (representada pelo objeto request), o servidor pode processá-la e, com base nessa solicitação, criar uma resposta apropriada (representada pelo objeto response) para enviar de volta ao cliente.

Por exemplo, em um servidor web simples, você pode usar o objeto request para extrair informações da URL solicitada ou dos parâmetros da consulta e, em seguida, usar o objeto response para enviar conteúdo HTML, imagens ou outros recursos de volta ao cliente.

A manipulação desses objetos é essencial para criar aplicativos web e serviços que respondam adequadamente às solicitações dos clientes.

*/


/* Server criado de forma nativa

import { createServer } from 'node:http'

const server = createServer((request, response) => { 
    
    response.write('Hello World')
    
    return response.end()
})

server.listen(3333)

*/


/* Criando server com framework Fastify */

import { fastify } from "fastify"

import { DatabaseMemory } from "./database-memory.js" 

const server = fastify()

const database = new DatabaseMemory()

// CRUD -> Create, Read, Update, Delete

// POST http://localhost:3333/videos 
// PUT htrp://localhost:3333/videos/3

// Route parameter
 

// Request Body 

server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body
    
    database.create({
        title,
        description,
        duration, 
    }) 
    
    return reply.status(201).send()
})

server.get('/videos', (request) => {
    const search = request.query.search    
    
    const videos = database.list(search)

    return videos
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    const {title, description, duration} = request.body
    
    database.update(videoId, {
        title,
        description,
        duration,
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', (request, reply) => {
    const videoId = request.params.id

    database.delete(videoId)

    return reply.status(204).send()

})

server.listen({
    port: 3333,
})