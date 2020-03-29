import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callbacks'
import { buscarHeroe as buscarHeroePromise } from './js/promesas'

//? Los callbacks son una función enviada como argumento. El objetivo es que dentro de una implementación, se ejecute la función inmediatamente después
const heroeId1 = 'capi';
const heroeId2 = 'spider';

buscarHeroeCallback(heroeId1, (err, heroe) => {
    if (err) { return console.error(err); }

    buscarHeroeCallback(heroeId2, (err, heroe2) => {
        if (err) { return console.error(err); }
        console.log(`Enviando a ${heroe.nombre} y ${heroe2.nombre} a la misión`);
    });
});

buscarHeroePromise(heroeId1).then((heroe) => {
    console.log(`Enviando a ${heroe.nombre} a la misión`);
});

Promise.all([buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
    .then(([heroe1, heroe2]) => {
        console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la misión`);
    }).catch(err => {
        alert(err);
    });


    // import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';

//? Promise.race 

// promesaLenta.then(mensaje => console.log(mensaje));
// promesaMedia.then(mensaje => console.log(mensaje));
// promesaRapida.then(mensaje => console.log(mensaje));

// Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(mensaje => console.log(mensaje));

// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// buscarHeroe('capi')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);

// buscarHeroeAsync('iron')
//     .then(heroe => console.log(heroe))
//     .catch(console.warn);