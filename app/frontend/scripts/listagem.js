fetch(`${BACKEND_URL}/produtos`)
    .then(res => res.json())
    .then(produtos => {
        const div = document.getElementById('produtos');
        produtos.forEach(p => {
            const el = document.createElement('div');
            el.innerHTML = `<strong>${p.nome}</strong><br>
                            R$ ${p.preco}<br>
                             <a href="produto.html?id=${p.id}">Ver detalhes</a>`;
            div.appendChild(el);
        });
    });
