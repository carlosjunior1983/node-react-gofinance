<h2 align="center">
  Projeto GoFinance - Back-End
</h2>

## Descrição

  Projeto GoFinance: receberá transações de entradas(income) e saídas(outcome).
  Cada transação haverá um título, um tipo, um valor e uma categoria.
  Ao incluir uma transação, será verificado se a categoria já está cadastrada, em caso de não, será cadastrado.

  Ex. de Transação

  Title: "Salário Mês Jun/2020"
  Type: "income"
  Value: 10000
  Category: "Salario"

  Title: "Pizza Grande"
  Type: "outcome"
  Value: 45
  Category: "Comida"


Para este projeto, foi utilizado imagem do Postgres em DOCKER.

Com docker instalado em seu computador, execute o comando abaixo para baixar a Imagem Postgres no DOCKER

`docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`


## Tecnologias utilizadas no Back-End

  `Node` `React` `ESLint` `Prettier` `Typescript` `TypeORM` `migration`


## Instruções para teste

Baixar ou Clonar o projeto. Com Docker e Imagem do Postgres instalado, configurado e iniciado  execute o comando abaixo para baixar as dependencias:

`yarn`

depois para criar as migrations execute o comando:

`yarn typeorm migration:run`


e para iniciar o servidor, execute o comando:

`yarn dev:server`



