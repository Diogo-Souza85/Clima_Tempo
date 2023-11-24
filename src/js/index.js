const chaveDaApi = "e450988c6d73419293d134020232311";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;
    if(!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);
    if (dados) preencherDadosNaTela(dados, cidade);
});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt` ;

    const resposta = await fetch(apiUrl);
    if(resposta.status !== 200) return;
    const dados = resposta.json();
    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const Humidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;
    

    document.getElementById("cidade").textContent = cidade;
    document.getElementById("temperatura").textContent = `${temperatura}°C`;
    document.getElementById("condicao").textContent = condicao;
    document.getElementById("Humidade").textContent = `${Humidade}%`;
    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento}Km/h`;

    document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
}