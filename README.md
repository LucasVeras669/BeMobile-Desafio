<h1 align='center'> DESAFIO - BE MOBILE</h1>

![bemobile](https://user-images.githubusercontent.com/60482900/154982429-13cbee9c-e34b-42c0-b375-1779e64a41bf.png)


## Sobre
Nesse teste, deve-se montar uma tabela com as informações que virão por uma API simulada escrita em json-server. 
Esta tabela deve conter as seguintes colunas: imagem, nome, cargo, data de admissão e telefone, 
com todos os dados devidamente formatados e apresentados como está no figma. Além disso, 
deve ter a possibilidade de realizar uma pesquisa na tabela por um input. Obs: para acessar o figma do projeto
[clique aqui](https://www.figma.com/file/y9qJNNAckFRL7LNoyNjpv8/Teste---Be-mobile).

<br><br>
<video width='590' src='https://user-images.githubusercontent.com/60482900/139854968-d61efc88-b82c-446e-a420-7da5f52fb966.mp4' controls autoplay>

<hr>

## Pré-requisitos
Tenha instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Yarn](https://yarnpkg.com/).

<hr>

## Rodando a aplicação
Para iniciar o projeto, siga o passo-a-passo abaixo. Caso não tenha familiaridade com o [json-server](https://github.com/typicode/json-server).

1. Baixe este projeto em sua máquina e crie um repositório no github baseado nele
2. Entre no projeto e execute os comandos abaixo
```bash
# Instalar as dependências no seguinte caminho: /BeMobile-Desafio/front-table-master
$ yarn

# Executar o json-server no seguinte caminho: /BeMobile-Desafio/front-table-master
$ yarn json-server --watch server.json

# Executar no projeto (em React) e no seguinte caminho: /BeMobile-Desafio/my-app
$ yarn
$ yarn run start
# ou
$ npm install
$ npm run start
```
Obs: O seu projeto em React deve rodar em uma porta diferente da porta do server-json.


