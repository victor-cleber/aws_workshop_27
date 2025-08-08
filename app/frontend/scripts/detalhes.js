const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch(`${BACKEND_URL}/produtos/${id}`)
    .then(res => res.json())
    .then(p => {
        const div = document.getElementById('produto');
        div.innerHTML = `<h2>${p.nome}</h2>
                         <p>${p.descricao}</p>
                         <p>R$ ${p.preco}</p>
                         `;
    });
