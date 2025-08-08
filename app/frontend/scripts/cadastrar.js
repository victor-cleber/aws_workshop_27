document.getElementById('form-produto').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);


    const response = await fetch(`${BACKEND_URL}/produtos`, {

        method: 'POST',
        body: data
    });

    if (response.ok) {
        alert('Produto cadastrado com sucesso!');
        window.location.href = 'index.html';
    } else {
        alert('Erro ao cadastrar produto');
    }
});
