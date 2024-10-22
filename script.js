function escolha(opcao) {
    const container = document.querySelector('.container');

    if (opcao === 'entrar') {
        container.innerHTML = `
            <h1>Dentro da Casa</h1>
            <p>Você entrou na casa e ouviu um barulho estranho vindo do andar de cima. A porta se fechou sozinha atrás de você. O que você faz?</p>
            <div class="choices">
                <button onclick="escolha('subir')">Subir as escadas</button>
                <button onclick="escolha('sair')">Tentar abrir a porta e sair</button>
            </div>
        `;
    } else if (opcao === 'fugir') {
        container.innerHTML = `
            <h1>Você fugiu!</h1>
            <p>Você decidiu não entrar na casa. Enquanto corria, ouviu um grito ecoando dentro da casa. Você escapou, mas algo sempre ficará na sua mente... O que poderia ter acontecido lá dentro?</p>
            <div class="choices">
                <button onclick="reiniciar()">Jogar Novamente</button>
            </div>
        `;
    } else if (opcao === 'subir') {
        container.innerHTML = `
            <h1>O Quarto Assombrado</h1>
            <p>Você subiu as escadas lentamente, sentindo uma presença atrás de você. Quando abriu a porta do quarto, uma sombra rapidamente passou ao seu lado! Você sente que algo está observando. O que você faz?</p>
            <div class="choices">
                <button onclick="escolha('investigar')">Investigar o quarto</button>
                <button onclick="escolha('correr')">Correr escada abaixo!</button>
            </div>
        `;
    } else if (opcao === 'sair') {
        container.innerHTML = `
            <h1>A Porta Está Trancada</h1>
            <p>A porta não abre! Você sente uma corrente de ar gelada passando pelo seu corpo. Você está preso. O que você faz?</p>
            <div class="choices">
                <button onclick="escolha('subir')">Subir as escadas</button>
                <button onclick="escolha('esperar')">Esperar e ouvir</button>
            </div>
        `;
    } else if (opcao === 'investigar') {
        container.innerHTML = `
            <h1>O Espírito Encontrou Você</h1>
            <p>Você decidiu investigar o quarto, mas uma figura espectral apareceu diante de você. A última coisa que você ouviu foi um sussurro: "Por que você voltou?"</p>
            <div class="choices">
                <button onclick="reiniciar()">Jogar Novamente</button>
            </div>
        `;
    } else if (opcao === 'correr') {
        container.innerHTML = `
            <h1>Fuga Sucessiva!</h1>
            <p>Você correu escada abaixo e conseguiu abrir a porta trancada com um golpe forte. Você saiu correndo e nunca mais voltou àquela casa assombrada. Você sobreviveu!</p>
            <div class="choices">
                <button onclick="reiniciar()">Jogar Novamente</button>
            </div>
        `;
    } else if (opcao === 'esperar') {
        container.innerHTML = `
            <h1>O Silêncio Mortal</h1>
            <p>Você decidiu esperar. Após alguns minutos, o silêncio foi quebrado por uma risada sombria que ecoou pela casa. A escuridão foi a última coisa que você viu...</p>
            <div class="choices">
                <button onclick="reiniciar()">Jogar Novamente</button>
            </div>
        `;
    }
}

function reiniciar() {
    window.location.href = 'index.html';
}