# Recomendador de Produtos RD Station

Esse projeto implementa uma pequena aplicação React responsável por gerar recomendações de produtos da RD Station a partir das preferências selecionadas pelo usuário.

## Como Executar

1. Clone o repositório: `git clone https://github.com/guipedrov/rd-station-products.git`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Inicie a aplicação: `yarn start`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias principais:

- React.js 18.2.0: Para o desenvolvimento do front-end
- Tailwind CSS 3.4.1: Para estilização e layout responsivo
- json-server 1.0.0-alpha.23: Para simular um servidor RESTful com dados de produtos
- Axios 1.5.1: Para fazer o fetch dos dados vindos do servidor RESTful simulado
- jest-dom 5.17.0: Para usar matchers customizados do Jest que testam o estado do DOM
- React Testing Library 13.4.0: Para usar utilitários de testes do DOM do React
- user-event (Testing Library) 13.5.0: Para disparar eventos que simulam interações de um usuário

## Rodando os Testes

Para executar a suite de testes do projeto, siga os passos abaixo:

1. Entre na pasta `frontend`:
```
cd frontend
```
2. Rode todos os testes de uma só vez:
```
yarn test
```
3. Ou, se preferir, rode apenas um teste específico (exemplo):
```
yarn test recommendation.service.test.js
```

### Arquivos de teste disponíveis:

`product.service.test.js`
`recommendation.service.test.js`
`RecommendationList.test.js`

## Detalhes do projeto

### Descrição geral das funcionalidades

Nesta aplicação, o usuário poderá clicar em um ou mais itens das listas de Funcionalidades e de Preferências;

Adicionalmente o usuário poderá também indicar se deseja ver um Produto Único ou Múltiplos Produtos, clicando nos respectivos botões radio, como resposta da sua pesquisa;

Após selecionar qualquer combinação de opções, ele clicará no botão "Obter recomendação", que enviará seu formulário e trará a lista de Produtos da RD Station que atendem àquela pesquisa;

Os Produtos serão exibidos em uma coluna à direita da coluna que exibe o formulário.

### Lógica de Recomendação

Local da implementação: `frontend\src\services\recommendation.service.js`

A lógica está dividida em 3 partes principais: (1) Validação, (2) Modo SingleProduct e (3) Modo MultipleProducts.

#### (1) Validação: Impede a execução das demais lógicas caso não haja dados suficientes para gerar recomendações.

A função getRecommendations executa, no início, a função utilitária `hasNoData, que:

1. Verifica se nenhuma preference foi selecionada pelo usuário (`selectedPreferences.length === 0`);
2. Verifica se nenhuma feature foi selecionada pelo usuário (`selectedFeatures.length === 0`);
3. Verifica se a lista de produtos está vazia ou é falsy;
4. Caso não haja seleções do usuário nem em preferences e nem em features, ou não haja produtos disponíveis, a função retorna true, indicando que não é possível gerar recomendações;

Quando `hasNoData` retorna true, a função getRecommendations retorna imediatamente um array vazio, que mantém ou devolve a lista de recomendações ao estado vazio.

#### (2) Modo SingleProduct: Traz o produto mais relevante ou o último, em caso de empate de produtos

A função `getRecommendations` executa a função utilitária `getTopProduct`, que:

1. Itera por todos os elementos dentro do array `products` (lista de produtos);
2. Conta quantas features de cada produto coincidem com as selecionadas (`selectedFeatures`);
3. Conta quantas preferences de cada produto coincidem com as selecionadas (`selectedPreferences`);
4. Soma ambas as quantidades para gerar uma pontuação (armazenada na nova propriedade matches);
5. Percorre por todos os produtos do array gerado nesse escopo (`rankedProducts`) e retorna o produto com a maior pontuação;
6. Em caso de empate de pontuações (matches), o último produto da lista com a maior pontuação é o retornado;
7. O retorno sempre será uma lista (um array) contendo apenas esse único produto.

#### (3) Modo MultipleProduct: Traz todos os produtos que contém um ou mais atributos dentre os selecionados pelo usuário

A função `getRecommendations` executa a função utilitária `getMatchingProducts`, que:

1. Itera por todos os elementos dentro do array `products` (lista de produtos);
2. Verifica se cada produto possui ao menos uma feature que esteja presente no array de features selecionadas (`selectedFeatures`);
3. Verifica se cada produto possui ao menos uma preference que esteja presente no array de preferences selecionadas (`selectedPreferences`);
4. Se houver correspondência em qualquer um dos dois critérios (features ou preferences), o produto é incluído no array filtrado;
5. Retorna a lista gerada contendo todos os produtos que atendem a pelo menos um dos critérios.

## Autor

Guilherme Pedro Velho
GitHub: https://github.com/guipedrov
