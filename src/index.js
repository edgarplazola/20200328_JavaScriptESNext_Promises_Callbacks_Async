import { obtenerHeroesArr,obtenerHeroeAwait } from './js/await';

//obtenerHeroesArr().then(resp => console.table(resp));

obtenerHeroeAwait('capi').then(heroe=>{
console.log(heroe);
});