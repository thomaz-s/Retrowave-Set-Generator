const pistas = [
    {
        nome: "Rainy Night",
        imagem: "rainy_night.png"
    },
    
    {
        nome: "Summer Night",
        imagem: "summer_night.png"
    },

    {
        nome: "G R I D",
        imagem: "grid.png"
    },

    {
        nome: "Bridge",
        imagem: "bridge.png"
    },

    {
        nome: "Sunset II",
        imagem: "sunset_ii.png"
    },

    {
        nome: "Cybercity",
        imagem: "cybercity.png"
    },

    {
        nome: "Arcade World",
        imagem: "arcade_world.png"
    },

    {
        nome: "Vaporwave",
        imagem: "vaporwave.png"
    },

    {
        nome: "日没",
        imagem: "nichibotsu.png"
    },

    {
        nome: "Cybercity II",
        imagem: "cybercity_ii.png"
    },

    {
        nome: "Voltage",
        imagem: "voltage.png"
    },

    {
        nome: "Space Trip",
        imagem: "space_trip.png"
    },

    {
        nome: "Space Trip II",
        imagem: "space_trip_ii.png"
    },

    {
        nome: "Space Beach",
        imagem: "space_beach.png"
    },

    {
        nome: "Skyway",
        imagem: "skyway.png"
    },

    {
        nome: "Skyway II",
        imagem: "skyway.png"
    },

    {
        nome: "NIghtcall",
        imagem: "nightcall.png"
    },
	
	{
        nome: "S U N S E T",
        imagem: "sunset.png"
    }
];

const carros = [
    {
        nome: "Falcon 40",
        imagem: "falcon_40.png"
    },
    {
        nome: "Vezia",
        imagem: "vezia.png"
    },
    {
        nome: "Hachiroku",
        imagem: "hachiroku.png"
    },
    {
        nome: "Buffalo",
        imagem: "buffalo.png"
    },
    {
        nome: "Bullet",
        imagem: "bullet.png"
    },
    {
        nome: "NXG",
        imagem: "nxg.png"
    },
    {
        nome: "Reflect D",
        imagem: "reflect_d.png"
    },
    {
        nome: "Comet",
        imagem: "comet.png"
    },
    {
        nome: "Waterbird",
        imagem: "waterbird.png"
    },
    {
        nome: "Turismo",
        imagem: "turismo.png"
    },
    {
        nome: "Volt",
        imagem: "volt.png"
    },
    {
        nome: "Celest",
        imagem: "celest.png"
    },
    {
        nome: "GTE 35",
        imagem: "gte_35.png"
    },
    {
        nome: "Demon",
        imagem: "demon.png"
    },
    {
        nome: "Vulture",
        imagem: "vulture.png"
    },

    {
        nome: "Cybercamion",
        imagem: "cybercamion.png"
    },

    {
        nome: "Falcon 40 Police",
        imagem: "falcon_40_police.png"
    },

    {
        nome: "Celest Vapor",
        imagem: "celest_vapor.png"
    },
    {
        nome: "Stratosphere",
        imagem: "stratosphere.png"
    },

    {
        nome: "Coroba",
        imagem: "coroba.png"
    },
    {
        nome: "Celest Evo",
        imagem: "celest_evo.png"
    },
    {
        nome: "UGA",
        imagem: "uga.png"
    },
];

let conjuntoAnterior = {
    carro: {
        nome: "primeiro",
        imagem: "primeiro"
    },
    pneu: "primeiro",
    placa: "primeiro",
    sirene: "primeiro",
    pista: {
        nome: "primeiro",
        imagem: "primeiro"
    }
}

function sorteio(limite){
    return Math.floor(Math.random()*limite);
}

function gerarNovoConjunto(){
    const carro = carros[sorteio(carros.length)];
    const pneu = sorteio(20) + 1;
    const sirene = sorteio(2);
    const placa = sorteio(9) + 1;
    const pista = pistas[sorteio(pistas.length)];

    const novoConjunto = {
        carro,
        pneu,
        sirene,
        placa,
        pista
    }

    return novoConjunto;
}

function preencher(){

    let novoConjunto = gerarNovoConjunto();
    console.log(conjuntoAnterior, novoConjunto);

    while (
        (novoConjunto.carro == conjuntoAnterior.carro) ||
        (novoConjunto.pneu == conjuntoAnterior.pneu) ||
        (novoConjunto.placa == conjuntoAnterior.placa) ||
        (novoConjunto.pista == conjuntoAnterior.pista)
    ){
        novoConjunto = gerarNovoConjunto();
        console.log("repetiu");
    }

    document.querySelector(".nome_carro").innerHTML = novoConjunto.carro.nome;
    document.querySelector(".icone_carro").setAttribute("src", `./assets/carros/${novoConjunto.carro.imagem}`);

    document.querySelector(".numero_pneu").innerHTML = `Pneu Nº ${novoConjunto.pneu}`;
    document.querySelector(".icone_pneu").setAttribute("src", `./assets/pneus/${novoConjunto.pneu}.png`);

    document.querySelector(".sirene").setAttribute("src", novoConjunto.sirene ? "./assets/police_on.png" : "./assets/police_off.png");

    document.querySelector(".numero_placa").innerHTML = `Placa Nº ${novoConjunto.placa}`;
    document.querySelector(".icone_placa").setAttribute("src", `./assets/placas/${novoConjunto.placa}.png`);

    document.querySelector(".nome_pista").innerHTML = novoConjunto.pista.nome;
    document.querySelector(".icone_pista").setAttribute("src", `./assets/pistas/${novoConjunto.pista.imagem}`);

    conjuntoAnterior = novoConjunto;
}

preencher();

const botao = document.querySelector("button");
botao.classList.add("vaporwave-btn")
botao.onclick = preencher;
document.querySelector(".container").appendChild(botao);
