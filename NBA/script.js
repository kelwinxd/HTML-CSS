const url1 = 'https://api.sportsdata.io/v3/nba/scores/json/News?key=8bbf6b3015104c0f85bc058c5126eb05';

fetch(url1)
  .then(response => response.json())
  .then(data => {
    const placarDiv = document.getElementById('placar');
    const jogos = data.map(jogo => `<div class="new"><h1>${jogo.Title}</h1> <p>${jogo.Content}</p> </div> `).join('<br>');
    placarDiv.innerHTML = jogos;
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
  });

  const url2 = 'https://api.sportsdata.io/v3/nba/stats/json/BoxScores/2023-05-12?key=8bbf6b3015104c0f85bc058c5126eb05';

  fetch(url2)
    .then(response => response.json())
    .then(data => {
      const placarDiv1 = document.getElementById('placar1');
      const jogos1 = data.map(item => `<div class="game"><div class="team item"><h2>${item.Game.AwayTeam}</h2><span> ${item.Game.AwayTeamScore}  </span></div> <div class="team2 item"><h2>${item.Game.HomeTeam}</h2><span> ${item.Game.HomeTeamScore}  </span></div></div> </div> `).join('<br>');
      placarDiv1.innerHTML = jogos1;
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });

  function mostrarConteudo() {
    var elemento = document.querySelector('.container');
    var botaoVerMais = document.querySelector('.btn');
  
    elemento.style.height = 'auto';
    botaoVerMais.style.display = 'none';
  }
  
