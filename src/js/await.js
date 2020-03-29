
import { buscarHeroeAsync } from './promesas';

const heroesIds = ['capi', 'iron', 'spider'];

export const obtenerHeroesArr = async () => {
    const heroesArr = [];

    for (const id of heroesIds) {
        const heroe = await buscarHeroeAsync(id);
        heroesArr.push(heroe);
    }

    return heroesArr;
}

export const obtenerHeroeAwait = async (id) => {

    try {
        const heroe = await buscarHeroeAsync(id);
        return heroe;
    } catch (err) {
        console.log('catch!!');
        throw err;
    }

}