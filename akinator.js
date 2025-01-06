const filters = ["homem", "mulher", "jovem", "adulto"]

const banco = {
    "homem": ["adolfo", "david", "rafael"],
    "mulher": ["Raissa", "Maiara", "Giovana"],
    "jovem": ["david"],
    "adulto": ["adolfo", "rafael"]
}

console.log(gerarPergunta());

function gerarPergunta() {
    let sorted = [];
    let hi = 0;
    for(i = 0; i < filters.length; i++) {
        let hi = i;
        for(j = 0; j < filters.length; j++) {
            if(banco[filters[hi]].length > banco[filters[j]].length) {
                hi = j;
            }
        }

        if(hi !== i) {
            [filters[hi], filters[i]] = [filters[i], filters[j]];
        } else {
            break;
        }
    }

    return filters;
}