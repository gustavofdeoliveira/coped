var question = 1;
var resultado = 0;
var mensagem="";

function changeActiveClassesAfterClick(question) {
  var currentQuestionElement = document.getElementById("question-n"+(question-1));
  var nextQuestionElement = document.getElementById("question-n"+question);
  currentQuestionElement.classList.remove('active');
  nextQuestionElement.classList.add('active');
  }

function goToNextQuestion() {
  question++;
  changeActiveClassesAfterClick(question);
  if(question==9){
  document.getElementById("btnnext").style.display = "none";
 document.getElementById('final').innerHTML = "<h1>Parabéns você acertou "+resultado+" perguntas.</h1>";
}  
}

function questao1(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote 1"){
		            	var text  = document.getElementById('opcao1');
		            	resultado = 1 +resultado;
		            	text.style.color="green";
		            	var el = document.getElementById("certo");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote ii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao2');
						text.style.color="red";
						var el = document.getElementById("errado");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao3');
						text.style.color="red";
						var el = document.getElementById("errado1");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao4');
						text.style.color="red";
		            	resultado = 0 +resultado;
		            	var el = document.getElementById("errado2");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}
function questao2(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao5');
		            	resultado = 0 +resultado;
		            	text.style.color="red";
		            	var el = document.getElementById("erradoa");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao6');
						text.style.color="red";
						var el = document.getElementById("erradob");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	resultado = 1 +resultado;
		            	var text  = document.getElementById('opcao7');
						text.style.color="green";
						var el = document.getElementById("certo2");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao8');
						text.style.color="red";
		            	resultado = 0 +resultado;
		            	var el = document.getElementById("erradoc");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}


function questao3(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('op9');
		            	resultado = 1 +resultado;
		            	text.style.color="green";
		            	var el = document.getElementById("certo3");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote ii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao10');
						text.style.color="red";
						var el = document.getElementById("erradod");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao11');
						text.style.color="red";
						var el = document.getElementById("erradoe");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao12');
						text.style.color="red";
		            	resultado = 0 +resultado;
		            	var el = document.getElementById("erradof");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}

function questao4(){
		  var pacote = document.getElementsByName('Pacote');
		    for (var i = 0; i < pacote.length; i++){
		        if ( pacote[i].checked ) {
		            if(pacote[i].value == "Pacote i"){
		            	var text  = document.getElementById('opcao13');
		            	resultado = 0 +resultado;
		            	text.style.color="red";
		            	var el = document.getElementById("erradog");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote ii") {
		            	resultado = 1 +resultado;
		            	var text  = document.getElementById('opcao14');
						text.style.color="green";
						var el = document.getElementById("certo4");
		            	el.innerHTML="<img src='img/certo.png'>";
		            }else if (pacote[i].value == "Pacote iii") {
		            	resultado = 0 +resultado;
		            	var text  = document.getElementById('opcao15');
						text.style.color="red";
						var el = document.getElementById("erradoh");
		            	el.innerHTML="<img src='img/errado.png'>";
		            }else if (pacote[i].value == "Pacote iiii") {
		            	var text  = document.getElementById('opcao16');
						text.style.color="red";
		            	resultado = 0 +resultado;
		            	var el = document.getElementById("erradoi");
		            	el.innerHTML="<img src='img/errado.png'>";

		            }
		        }
		    }
		}


function questao5() {
						var pacote = document.getElementsByName('Pacote');
						for (var i = 0; i < pacote.length; i++) {
							if (pacote[i].checked) {
								if (pacote[i].value == "Pacote i") {
									var text = document.getElementById('opcao17');
									resultado = 0 + resultado;
									text.style.color = "red";
									var el = document.getElementById("erradoj");
									el.innerHTML = "<img src='img/errado.png'>";
								} else if (pacote[i].value == "Pacote ii") {
									resultado = 0 + resultado;
									var text = document.getElementById('opcao18');
									text.style.color = "red";
									var el = document.getElementById("erradok");
									el.innerHTML = "<img src='img/errado.png'>";
								} else if (pacote[i].value == "Pacote iii") {
									resultado = 0 + resultado;
									var text = document.getElementById('opcao19');
									text.style.color = "red";
									var el = document.getElementById("erradol");
									el.innerHTML = "<img src='img/errado.png'>";
								} else if (pacote[i].value == "Pacote iiii") {
									var text = document.getElementById('opcao20');
									text.style.color = "green";
									resultado = 1 + resultado;
									var el = document.getElementById("certo5");
									el.innerHTML = "<img src='img/certo.png'>";

								}
							}
						}
					}

function questao6() {
						var pacote = document.getElementsByName('Pacote');
						for (var i = 0; i < pacote.length; i++) {
							if (pacote[i].checked) {
								if (pacote[i].value == "Pacote i") {
									var text = document.getElementById('opcao21');
									resultado = 0 + resultado;
									text.style.color = "red";
									var el = document.getElementById("erradom");
									el.innerHTML = "<img src='img/errado.png'>";
								} else if (pacote[i].value == "Pacote ii") {
									resultado = 0 + resultado;
									var text = document.getElementById('opcao22');
									text.style.color = "red";
									var el = document.getElementById("erradon");
									el.innerHTML = "<img src='img/errado.png'>";
								} else if (pacote[i].value == "Pacote iii") {
									resultado = 1 + resultado;
									var text = document.getElementById('opcao23');
									text.style.color = "green";
									var el = document.getElementById("certo6");
									el.innerHTML = "<img src='img/certo.png'>";
								} else if (pacote[i].value == "Pacote iiii") {
									var text = document.getElementById('opcao24');
									text.style.color = "red";
									resultado = 0 + resultado;
									var el = document.getElementById("erradoo");
									el.innerHTML = "<img src='img/errado.png'>";

								}
							}
						}
					}