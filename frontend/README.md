<h2 align="center">
  Projeto GoFinance - Front-End
</h2>

## Descrição

  Projeto GoFinance: receberá transações de entradas(income) e saídas(outcome).<br>
  Cada transação haverá um título, um tipo, um valor e uma categoria.<br>
  Ao incluir uma transação, será verificado se a categoria já está cadastrada, em caso de não, será cadastrado.<br>

  Ex. de Transação

  Title: "Salário Mês Jun/2020" <br>
  Type: "income"<br>
  Value: 10000<br>
  Category: "Salario"<br>
<br>

  Title: "Pizza Grande"<br>
  Type: "outcome"<br>
  Value: 45<br>
  Category: "Comida"


Para este projeto, foi utilizado imagem do Postgres em DOCKER.

Com docker instalado em seu computador, execute o comando abaixo para baixar a Imagem Postgres no DOCKER

`docker run --name gostack_postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`



## Tecnologias utilizadas no Front-End

  `ReactJS` `Prettier` `Typescript` `ESLint` `Axios` `Files`

 ## Imagens do projeto
Tela Principal Transação
<h1 align="center">
    <img alt="GoFinanceWeb" title="#GoFinanceWeb" src="https://github.com/carlosjunior1983/node-react-gofinance/blob/master/frontend/img_readme/goFinance.png"  /><br>
</h1>

<br>
Tela de Importar CSV contendo as transações
<h1 align="center">
    <img alt="github_explorer" title="#GoFinanceWebImport" src="https://github.com/carlosjunior1983/node-react-gofinance/blob/master/frontend/img_readme/goFinance_import.png"  /><br>
</h1>


## Instruções para teste


Baixar ou Clonar o projeto. Para baixar as dependências, execute o comando:

`yarn`

e para iniciar o projeto, execute o comando:

`yarn start`

OBS: Certique-se que o Back-End esteja rodando!




