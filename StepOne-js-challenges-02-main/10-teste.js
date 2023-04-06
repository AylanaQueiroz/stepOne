let valores = [10,15,3,8]

for (let i=0; i<valores.length; i++) {

    console.log ('Na posição ' + i + ' esta o numero '+ valores[i])
}


 // i entra valendo 0. 0 é menor que 4(tamanho do array), SIM, então printa o valor que está no INCICE 0 => 10
// i entrou valendo 0 -> ++ -> i sai valendo 1 do array.

// i entra no array valendo 1, 1 é menor que 4 ? SIM, então printa o elemento que está no INDICE 1 => 15
// i entrou no array valendo 1 -> ++ -> i sao do array valendo 2.

// i entra no array valendo 2. 2 é menor que 4? SIM. então printa o elemento que está no INDICE 2 => 3
// i entrou no array valendo 2 -> ++ i sai do array valendo 3.

// i entrra no array valendo 3. 3 é menor que 4? SIM, então printa o elemento que está no INDICE 3 => 8
// i entrou no array valendo 3. -> ++i sai do array valendo 4.

// i entra no array valendo 4. 4 é menor que 4? NÃO. ENTÃO FALSO, ARRAY ENCERRADO.

// [10,15,3,8]