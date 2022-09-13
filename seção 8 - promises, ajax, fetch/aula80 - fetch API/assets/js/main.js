// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);
//         xhr.send();

//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300) {
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;                        // criado o evento de clique
    const tag = el.tagName.toLowerCase();       // definido uma const que salva a tag do objeto clicado

    if(tag === 'a') {
        e.preventDefault();                     // previno o evento padrão do clique
        carregaPagina(el);                      // defino o evento que deve acontecer
    }
});

async function carregaPagina(el) {
    try {
        const href = el.getAttribute('href');   // salvando o objeto clicado em uma const
        const response = await fetch(href);     // salvando seu fetch em uma const
    
        if(response.status !== 200) throw new Error('ERRO 404!');   // em caso de erro
    
        const html = await response.text();     // salvo o texto do fetch em uma nova const
        carregaResultado(html);                 // uso um metodo criado para adicionar o texto da pagina selecionada dentro da minha pagina principal
    } catch(e) {
        console.error(e);                       // msg de erro
    }


        // fetch(href)
        //     .then(response => {
        //         if(response.status !== 200) throw new Error('ERRO 404!');
        //         return response.text();
        //     })
        //     .then(html => carregaResultado(html))
        //     .catch(e => console.error(e));
}

function carregaResultado(response) {             // função para criar o texto dentro da tag html
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}

