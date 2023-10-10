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

É necessário criar o arquivo .env com as credenciais corretas, para isso crie o arquivo .env com o conteudo
vazio, e copie o conteudo do .env.example

Complete as informações com os valores corretos e após isso prossiga para as próximas configurações

É necessário criar a imagem do container e realizar a instalação dos pacotes NPM, através dos comandos:

- `docker-compose up server --build`

### Rodando o ambiente

Para executar o container do ambiente de desenvolvimento, execute o comando:

`docker-compose up server`

O serviço ficará disponível em [http://localhost:4000](http://localhost:4000)

Para acessar o terminal do container da api, é possível acessar pelo comando:

`docker-compose run --rm server sh`

### Executando migrations

Para que as tabelas sejam criadas conforme o esperado, é necessário
executar as migrations no sistema

- `docker-compose run server npx prisma migrate dev`

O comando retornará o resultado de sucesso, assim já disponibilizando a possibilidade de
inserção de dados

### Rodando o prisma

Ao subir o ambiente utilizando o comando

- `npm run dev:prisma`
  automaticamente o prisma será executado (Interface para o banco de dados)

O serviço ficará disponível em [http://localhost:5555](http://localhost:5555)

## Configuração do ambiente de testes

O ambiente de testes foi configurado em um container separado do ambiente de desenvolvimento.

Semelhante ao ambiente de desenvolvimento, é necessário criar a imagem do container, através dos comandos:

- `docker-compose build test`

Para executar os testes, execute o comando:

`docker-compose up test`

Para acessar o terminal do container de testes, caso não queira executar toda a suite de testes e apenas rodar testes individuais ou realizar outras atividades, como debug, é possível acessar pelo comando:

`docker-compose run --rm test bash`
