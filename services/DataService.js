export default class DataService {
    _apiBase = 'http://swapi.co/api/';

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok){
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        return this.getResource('people');
    }

    async getPeople(id) {
        return this.getResource(`people/${id}`);
    }

    async getAllPlanets() {
        return this.getResource('planets');

    }
}
