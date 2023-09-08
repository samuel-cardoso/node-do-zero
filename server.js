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

const server = fastify()

server.get('/', () => {
    return 'Hello World'
})

server.get('/hello', () => {
    return 'Hello Rocketseat'
})

server.get('/node', () => {
    return 'Hello Node.js'
})

server.listen({
    port: 3333,
})
