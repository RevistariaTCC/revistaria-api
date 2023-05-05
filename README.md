# Revistaria API

Estrutura de serviços para o TCC de Revistaria da FESPPR 2023

## Versões das tecnologias

- Node: 20.0
- MongoDB: latest

## Integrações

- [ ] ChatBot (em andamento)
- [ ] Whatsapp API

## Configuração do ambiente de desenvolvimento

### Dependências

- [Docker](https://www.docker.com/)

### Configurando o ambiente

É necessário criar a imagem do container, através dos comandos:
- `docker-compose build`

### Rodando o ambiente

Para executar o container do ambiente de desenvolvimento, execute o comando:

`docker-compose up api`


O serviço ficará disponível em [http://localhost:4000](http://localhost:4000)

Para acessar o terminal do container da api, é possível acessar pelo comando:

`docker-compose run --rm api bash`

### Rodando o prisma

Para executar o container do prisma (Interface para o banco de dados), execute o comando:

- `docker-compose up prisma`

ou você também pode optar por subir todos os containers da aplicação com 

- `docker-compose up`

O serviço ficará disponível em [http://localhost:5555](http://localhost:5555)
## Configuração do ambiente de testes

O ambiente de testes foi configurado em um container separado do ambiente de desenvolvimento.

Semelhante ao ambiente de desenvolvimento, é necessário criar a imagem do container, através dos comandos:
- `docker-compose build test`

Para executar os testes, execute o comando:

`docker-compose up test`

Para acessar o terminal do container de testes, caso não queira executar toda a suite de testes e apenas rodar testes individuais ou realizar outras atividades, como debug, é possível acessar pelo comando:

`docker-compose run --rm test bash`