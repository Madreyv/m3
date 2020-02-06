

window.onload = function(){
	var botaoComprar = document.getElementsByClassName("botaoComprar");
   	var check = document.getElementsByTagName('input');
	carregarProdutos(6,Jprodutos);
   	
   	subMenuOrdenar.childNodes[5].addEventListener('click', () => ordenarPreco(Jprodutos,"maior"))
   	subMenuOrdenar.childNodes[3].addEventListener('click', () => ordenarPreco(Jprodutos,"menor"))
   	subMenuOrdenar.childNodes[1].addEventListener('click', () => ordenarData(Jprodutos));
   	botaoCarregar.addEventListener('click', () => carregarProdutos(4,Jprodutos));
  	
  	for (var i = 0; i < maisOpcoes.length; i++) {
		maisOpcoes[i].addEventListener('click',() => mudarEstado(maisCores,maisOpcoes[0],maisOpcoes[1]),'hide');
	}

	for (var i = 0; i < odernarOpcoes.length; i++) {
		odernarOpcoes[i].addEventListener('click', () => mudarEstado([telaFlutuante,mobileOrdenar,vitrine,caixaTituloOrdenar,botoesMobile],'mobileHide'));
	}
	
	for (var i = 1; i < 27; i++) {
		check[i].addEventListener('click', () => filtroCor());
	}
	
	for (var i = 0; i < botaoComprar.length; i++) {
		botaoComprar[i].addEventListener('click', () => comprarProduto());
	}

	opcaoMaisCor.addEventListener('click', () => mudarEstado([opcaoMaisCor,maisCores,],'hide'));
	opcaoMenosCor.addEventListener('click', () => mudarEstado([opcaoMaisCor,maisCores,],'hide'));
	caixaOrdenar.addEventListener('click', () => mudarEstado([subMenuOrdenar, iconDown, iconUp],'hide'));
	caixaOrdenar.addEventListener('mouseover', () => mudarEstado([subMenuOrdenar, iconDown, iconUp],'hide'));
	caixaOrdenar.addEventListener('mouseout', () => mudarEstado([subMenuOrdenar, iconDown, iconUp],'hide'));


	sacola[0].addEventListener('click', () => mudarEstado([painelSacola[0]],'hide'));
	sacola[0].addEventListener('mouseover', () => mudarEstado([painelSacola[0]],'hide'));

}


