Projeto M3

Arquivos


O projeto possui sete arquivos principais:

•	M3.html – Arquivo HTML contendo toda a estrutura da pagina;

•	estiloM3.scss – Arquivo SASS que cria a folha de estilo da pagina;

•	reset.css – Folha de estilo css responsável por zerar o estilo padrão dos navegadores;

•	m3.js – Arquivo Javascript responsável pela parte da pagina onde são declarada as variáveis comuns (mobile/não mobile) e funções do projeto.

•	m3.log.js – Arquivo Javascript responsável pela utilização dos eventos comuns (mobile/não mobile) da pagina; 

•	m3.mobile.js – responsável pela declaração de variáveis  utilizadas na parte mobile da pagina, assim como a utilização dos eventos relacionados;

•	data.json – arquivo Json que possui todas as informações com relação aos produtos. É desse aquivo que a pagina carrega os produtos exibidos aos clientes, assim como as informações de valores, tamanhos e etc... 


Arquivo Json
O arquivo Json para funcionar nesta pagina precisa está na seguinte formatação:

{"listaProdutos":[
   {
     "produto": "CAMISETA MESCLA",
     "valor": 
     "parcela": 
     "imagem":
     "cor":
     "tamanho":
     "date":
     "codigo":
     }, ]
}

SASS

O SASS foi utilizado para criar o arquivo estiloM3.css, então é necessário que possua o SASS instalado na máquina para que possa ser gerado a folha de estilo css. O comando sass –watch + a pasta de destino do arquivo ajuda nesse processo.
Servidor HTTP
Como utilizamos um arquivo Json, é necessário que o arquivo funcione dentro de um servidor HTTP. Eu utilizei no projeto o XAMPP para realizar a simulação.

Funções

•	carregarJson – É a função responsável por carregar o arquivo data.json e retornar um novo objeto XMLHttpRequest. Neste projeto ela é utilizada para carregar a variável jProdutos.

•	limparProdutos – Responsável remover os produtos da pagina para que novos entre no lugar. É utilizada sempre que um filtro for aplicado;

•	carregarProdutos  - Responsável por carregar os produtos em uma variável local. Recebe por como parâmetro a quantidade de produtos que serão carregados e o objeto XMLHttpRequest que contém os produtos;

•	adcionarProduto – Responsável por adcionar o produto a pagina, recebendo como parâmetro o produto a ser adcionado;

•	comprarProduto – Responsável por realizar o envio do produto comprado para a sacola. É chamada quando o usuário clica em comprar;

•	mudarEstado – Responsável por remover/adicionar  uma classe dos elementos html. Recebe como parâmetro os elementos, e a classe a ser removida/adcionada;

•	filtrarTamanho – Realiza o filtro da pagina por tamanho do produto;

•	filtrarPorPreco – Realiza o filtro da pagina por preço do produto;

•	filtroCor – Realiza o filtro da pagina por cor do produto;

Todos os filtros são cumulativos, dessa forma para um produto ser exposto ele precisa atender a todos os requisitos. Caso o usuário selecione  cor rosa, e o tamanho U e não ter um produto que possua essa cor e esse tamanho, nada será exibido na página.

•	ordenarData – Realiza a ordenação do produto por data, sendo ela crescente ou decrescente de acordo com a decisão do usuário. Recebe como parâmetro um objeto XMLHttpRequest, de onde ele recarregará os produtos na pagina.

•	ordenarPreco – Realiza a ordenação do produto por preço, sendo ele crescente ou decrescente de acordo com a decisão do usuário.  Recebe como parâmetro um objeto XMLHttpRequest e um estado(“maior” ou “menor”) para carregar os produtos novamente.

