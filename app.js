// Preciso criar uma lista com 3 jogadores
function jogar() {
    personagem = ["", "", ""];
  
    viloes = ["", "", ""];
  
    forcaPersonagem = 0;
    forcaViloes = 0;
  
    for(let i = 0; i < 4; i++) {
      escolhaPersonagem = prompt("Digite o nome do seu personagem: " + (i + 1))
      personagem[i] = escolhaPersonagem;
      // Calcular a força de cada jogador, e depois somar para saber a força do time
      forcaPersonagem = forcaPersonagem + Math.floor(Math.random() * 10) + 1;
      // forcaPersonagem += Math.floor(Math.random() * 10) + 1;
    }
  
    for(let i = 0; i < 4; i++) {
      indiceAleatorio = Math.floor(Math.random() * 9);
      viloesPossiveis = ["Darth Vader", "Conde Dookan", "Darth Maul", "Darth Sidious", "Kylo Ren", "Assaj Ventress", "General Grievous", "Boba Fett"];
      viloes[i] = viloesPossiveis[indiceAleatorio];
      // Calcular a força de cada jogador do time do computador
      forcaViloes = forcaViloes + Math.floor(Math.random() * 10) + 1
    }
    alert("Time do Lado Sombrio: " + viloes + ". E o resultado foi...")
  
    // Calcular os dois times para saber quem venceu
    if (forcaPersonagem > forcaViloes){
      alert("Você venceu a batalha! Sua força foi de: " + forcaPersonagem)
    }
    else {
      if (forcaPersonagem < forcaViloes) {
        alert("Derrota... O lado sombrio ganhou com uma força de: " + forcaViloes)
      }
      else {
        alert("Os dois times tem mesma força! Vocês empataram!")
      }
    }
  }