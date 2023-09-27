let nivel = ''
let saldoVitorias = getRank(120,5)
function getRank(vitorias, derrotas) {
    const saldoRank = vitorias - derrotas
    if (saldoRank < 10){
        nivel = 'Ferro'
    } else if(saldoRank >= 10 && saldoRank < 20){
        nivel = 'Broze'
    } else if(saldoRank >= 20 && saldoRank < 50){
        nivel = 'Prata'
    }else if(saldoRank >= 50 && saldoRank < 80){
        nivel = 'Ouro'
    }else if(saldoRank >= 80 && saldoRank < 90){
        nivel = 'Diamante'
    }else if(saldoRank >= 90 && saldoRank < 100){
        nivel = 'Lendário'
    }else if(saldoRank >= 100){
        nivel = 'Imortal'
    }
    return saldoRank
}
console.log(`O Herói tem de saldo de ${saldoVitorias}. Está no nível ${nivel}`)
