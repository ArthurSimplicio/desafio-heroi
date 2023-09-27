class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    ataque() {
        let tipoAtaque = ''
        if (this.tipo == 'mago') {
            tipoAtaque = 'magia'
        } else if (this.tipo == 'guerreiro') {
            tipoAtaque = 'espada'
        } else if (this.tipo == 'monge') {
            tipoAtaque = 'Artes Marciais'
        } else if (this.tipo == 'ninja') {
            tipoAtaque = 'Shuriken'
        }
        console.log(`O ${this.tipo} atacou usando ${tipoAtaque}`);


    }
}
const heroi1 = new Hero('', '');
const modal = document.querySelector('.modal-container')

const atacar = () => {
    heroi1.ataque();
    resultado = document.querySelector('.tipo').value.toLowerCase();
    modal.classList.add('active');
    const realAtaque = document.querySelector('.tipo-ataque');
    const Imagem = document.querySelector('.imagem-heroi');
    let imagemUrl;
    let tipoAtaque = '';
    heroi1.tipo = resultado;

    if (heroi1.tipo === 'mago' || heroi1.tipo === 'mago ') {
        tipoAtaque = 'magia';

    } else if (heroi1.tipo === 'guerreiro' || heroi1.tipo === 'guerreiro ') {
        tipoAtaque = 'espada';

    } else if (heroi1.tipo === 'monge' || heroi1.tipo === 'monge ') {
        tipoAtaque = 'Artes Marciais';

    } else if (heroi1.tipo === 'ninja' || heroi1.tipo === 'ninja ') {
        tipoAtaque = 'Shuriken';

    } else {
        alert("Selecione um personagem válido");
        fecharModal()
    }
    if (heroi1.tipo) {
        imagemUrl = `images/${heroi1.tipo}.png`
        Imagem.src = imagemUrl
    }

    realAtaque.innerHTML = `<p>O ${heroi1.tipo} atacou usando ${tipoAtaque}</p>`;

}

const apresentar = () => {
    
}




const fecharModal = () => {
    modal.classList.remove('active')
}