
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('Erro 404');

    const html = await response.text();
    carregaResultado(html);
  } catch(e) {
    console.log(e);
  }
 }

// Depois de colocar tyudo acima, pode apagar abaixo
/*
  fetch(href) // carregando o link
    // Pegando a resposta => retornando a outra promisse que é para converter a resposta em texto(dados)
    .then(response => {
      if (response.status !== 200) throw new Error('Erro 404');
      return response.text();
    })
    .then(html => carregaResultado(html)) // ta chamando html porque o texto que esta retornando é html
    .catch(e => console.log(e));

};
*/


function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}


// essa fetch ja retorna por padrão uma promisse e acaba nao precisando criar ela
fetch('pagina4.html')
  .then(resposta => {
    if (resposta.status !== 200) throw new Error('Erro 404 NOSSO')
    // Quando estiveR DENTRO DO THEN E LANÇAR UM ERRO codigo automaticamente vai para o catch
    return resposta.text(); // return para pegar o texto dentro da pagina html -- Essa funçao tambem retorna uma promisse,
    // entao tem que ter outro .then
  })
  .then(html => console.log(html))
  .catch(e => console.log(e));
  // .catch(e => console.warn(e)); // Error aparecer amarelo no console da pagina
  // .catch(e => console.error(e)); // Para aparecer vermelho no console da pagina
