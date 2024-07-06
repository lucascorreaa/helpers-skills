function handleCep() {
    const cep = "https://viacep.com.br/ws/04933090/json/"
    let data

    fetch(cep, data)
        .then((response) => response.json())
        .then((data) => {
            console.log("retorno da api", data)
            console.log("rua:", data.logradouro)
            console.log("bairro:", data.bairro)
            console.log("UF:", data.uf)
        })
        .catch((error) => console.error('Erro ao buscar o cep', error))
}

handleCep()