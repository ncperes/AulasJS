const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);

// for (let p of ps) {
//     // console.log(p.innerHTML);
// }

for (let p in ps) {
    ps[p].style.backgroundColor = backgroundColorBody;
    ps[p].style.color = '#FFFFFF';
}