

var caixaOrdenar = document.getElementById('caixaOrdenar');
var subMenuOrdenar = document.getElementById('subMenuOrdenar');
var iconUp = document.getElementById('iconUp');
var iconDown = document.getElementById('iconDown');
var maisOpcoes = document.getElementsByClassName('maisOpcoes');
var tituloCores = document.getElementById('tituloCores');
var tituloTamanhos = document.getElementById('tituloTamanhos');
var tituloPreco = document.getElementById('tituloPreco');
var caixaCores = document.getElementById('caixaCores');
var caixaTamanhos = document.getElementById('caixaTamanhos');
var caixaValores = document.getElementById('caixaValores');
var vitrine = document.getElementById('vitrine');
var secaoFiltrosFlutuante = document.getElementById('secaoFiltrosFlutuante');
var opcaoMaisCor = document.getElementById('opcaoMaisCor');
var opcaoMenosCor = document.getElementById('opcaoMenosCor');
var boxProduto = document.getElementById('boxProduto');
var botaoCarregar = document.getElementById('botaoCarregar');
var filtroCores = document.getElementsByClassName('filtroCores');
var filtroTamanho = document.getElementsByClassName('filtroTamanho');
var opcaoValor = document.getElementsByClassName('opcaoValor');
var check = document.getElementsByTagName('input');
var corpoTabelaSacola = document.getElementById('corpoTabelaSacola');
var painelSacola = document.getElementsByClassName('painelSacola');
var quantidadeSacola = document.getElementsByClassName('quantidadeSacola');
var sacola = document.getElementsByClassName('sacola');

var Jprodutos = carregarJson();

function carregarJson(){
	var request  = new XMLHttpRequest();
   	var requestURL = "./data.json"
   	request.responseType = 'json';
   	request.open("GET", requestURL, true);
   	request.send();
   	return request;
}

function limparProdutos(){
	while (boxProduto.firstChild) {
	    boxProduto.removeChild(boxProduto.firstChild);
	}
}


function carregarProdutos(quantidade,request){
   	let produtos = request.response;
   	var controle = document.getElementsByClassName("produto").length;
   	if (controle == 0) {
		for (var i = 0 ; i < quantidade; i++) {
			adcionarProduto(produtos.listaProdutos[i]);
		   	}	
	}else{
		for (var i = controle; i <= controle + quantidade; i++) {
			adcionarProduto(produtos.listaProdutos[i]);
		}	
	}
}

function adcionarProduto(produtos){

   	var elemento = '<li class="produto"><figure > <img src="img/' + produtos.imagem + '" alt="produto"><figcaption><h4 class="TituloProduto">' + produtos.produto + '</h4><h4 class="precoProduto">' + produtos.valor + '</h4><h5 class="parcelaProduto">' + produtos.parcela + '</h5></figcaption><div class="botao botaoComprar"><input type="checkbox" id="'+ produtos.codigo +'" value="'+ produtos.codigo +'"><label for="'+ produtos.codigo +'"><h4>COMPRAR</h4></label></div></figure></li>';
	boxProduto.innerHTML += elemento;

}

function comprarProduto(){
	let produtos = Jprodutos.response;
	for (var i = 30; i < check.length; i++) {	
		for (var j = 0; j < produtos.listaProdutos.length; j++) {
				if (check[i].checked) {
					var produtoComprado = produtos.listaProdutos.filter(p => p.codigo == check[i].value);
					if (produtoComprado.length>0) {
						corpoTabelaSacola.innerHTML += "<tr><td>" + produtoComprado[0].produto + "</td><td>"+ produtoComprado[0].valor +"</td><td class='quantidadeProduto'></td></tr>"
					}

					check[i].checked = false;
				}	
		}
		
	}

	if (corpoTabelaSacola.childNodes.length > 0) {
		quantidadeSacola[0].classList.remove('hide');
		quantidadeSacola[0].classList.remove('mobileHide');
	}
	quantidadeSacola[0].innerHTML = '<span>'+ corpoTabelaSacola.childNodes.length + '</span>'
}

function mudarEstado(elementos,classe){
	for (var i = 0; i < elementos.length; i++) {
		if (elementos[i].classList.contains(classe)) {
			elementos[i].classList.remove(classe);
		}else{
			elementos[i].classList.add(classe);
		}
	}
}

function filtrarTamanho(produtos){
	var tamanhos = [];
	for (var i = 0; i < filtroTamanho.length; i++) {
		
		if (filtroTamanho[i].childNodes[1].checked) {
			tamanhos.push(filtroTamanho[i].childNodes[1].value)
		}
	}
	if (tamanhos == 0) {
		for (var i = 0; i < filtroTamanho.length; i++) {
		
		tamanhos.push(filtroTamanho[i].childNodes[1].value)
		
		}
	}
	
	for (var j = 0; j < tamanhos.length; j++) {
		var produtoFiltrado = produtos.filter(p => p.tamanho == tamanhos[j])
		filtrarPorPreco(produtoFiltrado);
	}
	
}

function filtrarPorPreco(produto){
	var preco = [];
	var produtoFiltrado = [];

	for (var i = 0; i < opcaoValor.length; i++) {
		
		if (opcaoValor[i].childNodes[1].checked) {
			preco.push(opcaoValor[i].childNodes[1].value)
		}
	}

	if (opcaoValor[0].childNodes[1].checked) {
		preco.push(50);
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 0  && parseInt(p.valor) <= 50);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}
	if (opcaoValor[1].childNodes[1].checked) {
		preco.push(150);
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 51  && parseInt(p.valor) <= 150);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}
	if (opcaoValor[2].childNodes[1].checked) {
		preco.push(300);
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 151  && parseInt(p.valor) <= 300);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}
	if (opcaoValor[3].childNodes[1].checked) {
		preco.push(500);
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 301  && parseInt(p.valor) <= 500);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}
	if (opcaoValor[4].childNodes[1].checked) {
		preco.push(501);
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 500);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}

	if(preco.length == 0){
		produtoFiltrado = produto.filter(p => parseInt(p.valor) > 0);
		for (var i = 0; i < produtoFiltrado.length; i++) {
			adcionarProduto(produtoFiltrado[i])
		}
	}
}

function filtroCor(){
	limparProdutos();
	var cores = [];
	let produtos = Jprodutos.response;
	if (filtroCores.length > 0) {
		for (var i = 0; i < filtroCores.length; i++) {
		
			if (filtroCores[i].childNodes[1].checked) {
				cores.push(filtroCores[i].childNodes[1].value.toUpperCase())
			}
		}
	}	

	if(cores.length == 0){
		
		for (var i = 0; i < filtroCores.length; i++) {
			cores.push(filtroCores[i].childNodes[1].value.toUpperCase())
		}
	}

	for (var i = 0; i < cores.length; i++) {
		var produtoCores = produtos.listaProdutos.filter(p => p.cor == cores[i]);
	    
	    if(produtoCores.length > 0){
	    	filtrarTamanho(produtoCores);	
	    }
	}
}

function ordenarData(request){
	limparProdutos()
	let produtos = request.response;
	produtos.listaProdutos.sort(function (a, b) {
		let dataA = new Date(a.date);
		let dataB = new Date(b.date);
		  if (dataA < dataB) {
		    return 1;
		  }
		  if (dataA > dataB) {
		    return -1;
		  }
		  return 0;
	})

	for (var i = 0; i < produtos.listaProdutos.length; i++) {
		adcionarProduto(produtos.listaProdutos[i]);
	}
}

function ordenarPreco(request,estado){
	limparProdutos()
	let produtos = request.response;
	produtos.listaProdutos.sort(function (a, b) {
		let valorA = parseInt(a.valor);
		let valorB = parseInt(b.valor);
		if (estado == "maior") {
			 if (valorA < valorB) {
			    return 1;
			  }
			  if (valorA > valorB) {
			    return -1;
			  }
		}else{
			if (valorA > valorB) {
			    return 1;
			  }
			  if (valorA < valorB) {
			    return -1;
			  }	
		}
		  
		  return 0;
	})

	for (var i = 0; i < produtos.listaProdutos.length; i++) {
		adcionarProduto(produtos.listaProdutos[i]);
	}
}

