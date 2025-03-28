function simulacaoDePouso(velocidadeInicial, velocidadeSegura, desacelaracao, tempoMax, desacelaracaoMin) {
if (desacelaracao < desacelaracaoMin) {
    return "Perigo: desacelaração menor que a desacelaração mínima"
}

const tempoNecessario = (velocidadeInicial - velocidadeSegura) / desacelaracao

if (tempoNecessario > tempoMax) {
    return `Erro: Tempo de descida (${tempoNecessario.toFixed(2)} s) excede o limite máximo de ${tempoMax} s`;
}

if (tempoNecessario < 0) {
    return "Erro: Configuração inválida";
}

return `Pouso bem-sucedido! Tempo necessário: ${tempoNecessario.toFixed(2)} segundos. Velocidade final: ${velocidadeSegura} m/s.`;
}