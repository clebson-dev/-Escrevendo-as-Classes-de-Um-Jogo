class Heroi {
    constructor(tipo) {
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'atacou';
        }

        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

function criarHeroi() {
    const tipo = document.getElementById('hero-type').value;

    const heroi = new Heroi(tipo);
    const resultado = heroi.atacar();

    document.getElementById('result').textContent = resultado;
}
