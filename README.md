# Quer Apostar Quanto?
Este projeto consiste em uma API de uma casa de apostas esportivas. Visa automatizar processos, permitindo aos usuários apostar em eventos esportivos, como jogos de futebol. O sistema exibe eventos futuros, permite apostas e distribui ganhos aos usuários com previsões certeiras.
  
Clique <a href="https://quer-apostar-quanto-wdqm.onrender.com/api-docs">aqui </a>para acessar a documentação da API.


## Resumo das Funcionalidades da API
### 1. Gerenciamento de Jogos:

- Visualizar, buscar e criar novos jogos.
- Filtrar jogos por status (terminados ou não) e pesquisar por times através de seus nomes.

### 2. Gestão de Participantes:

- Cadastrar participantes, adicionar créditos e recuperar apostas individuais.
- Recuperar informações de participantes por ID.
Paginar a listagem de participantes para melhor organização.

### 3. Apostas e Eventos Esportivos:

- Realizar apostas em eventos esportivos.
- Finalizar jogos, atualizando placares, status de apostas e saldos dos participantes de acordo com os resultados.
### 4. Validações, Segurança e Documentação:

- Validar e sanitizar dados de requisições para garantir a integridade dos dados.
- Implementar testes de integração para garantir o bom funcionamento das rotas.
- Documentação detalhado feita com Swagger.

### 5. Testes Automatizados:
- Teste Automatizados com cobertura de mais de 90%.


## Tecnologias
[![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)]()
[![](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)]()
[![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)]()
[![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)]()
[![](https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white)]()
[![](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)]()
[![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)]()

## Como Rodar
1. Clone esse repositório;
2. Crie uma arquivo `.env` e insera as seguintes variavéis;
```
DATABASE_URL = "postgres://user:password@host:port/db_name?schema=public"
PORT = 3000
```
3. Instale as dependências:
```
npm i
```
3. Execute as migrações no banco de dados usando:
```
npm run dev:migrate
```
3. Execute o projeto em desenvolvimento usando:
```
npm run dev
```