# Chuck Norris Facts API

Este é um projeto de API de fatos sobre Chuck Norris, desenvolvido utilizando NestJS com GraphQL e Apollo. A API busca um fato aleatório sobre Chuck Norris a partir da API pública [chucknorris.io](https://api.chucknorris.io).

## Tecnologias Utilizadas

- [NestJS](https://nestjs.com/): Framework Node.js progressivo para a construção de aplicações eficientes, confiáveis e escaláveis.
- [GraphQL](https://graphql.org/): Linguagem de consulta para a sua API.
- [Apollo](https://www.apollographql.com/): Plataforma GraphQL que facilita a criação de um servidor GraphQL.

## Instalação

1. Clone o repositório:
    ```sh
    git clone https://github.com/seu-usuario/chuck-norris-facts.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd chuck-norris-facts
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso

1. Inicie o servidor:
    ```sh
    npm run start
    ```

2. Abra o navegador e vá para `http://localhost:3000/graphql` para acessar o playground do GraphQL.

3. Utilize a seguinte query para obter um fato sobre Chuck Norris:
    ```graphql
    query {
      getFact {
        icon_url
        id
        url
        value
      }
    }
    ```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

- **src/graphql**: Contém os arquivos de schema GraphQL.
- **src/modules**: Contém os módulos do projeto, cada um responsável por uma funcionalidade específica.
- **src/resolvers**: Contém os resolvers GraphQL que lidam com as consultas e mutações.
- **src/services**: Contém os serviços que lidam com a lógica de negócios e comunicação com APIs externas.
- **main.ts**: Arquivo principal que inicia a aplicação.

### Detalhes dos Arquivos Principais

- **fact.service.ts**: Serviço responsável por buscar o fato sobre Chuck Norris.
- **fact.resolver.ts**: Resolver GraphQL que expõe o fato através de uma query.
- **app.module.ts**: Módulo principal que configura o GraphQL e importa o módulo de fatos.
- **fact.dto.ts**: Data Transfer Object (DTO) que define a estrutura do fato retornado pela API.

Essa estrutura modular ajuda a manter o código organizado e facilita a manutenção e expansão do projeto.
