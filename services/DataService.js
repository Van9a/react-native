import * as axios from 'axios';

export default class DataService {
    _apiBase = 'http://frontend-candidate.dev.sdh.com.ua/v1/';

    async getAllContacts() {
        return axios.get(`${this._apiBase}contact`).then(response => response.data); //await this.getResource(`/contact/`);
    }

    async addContact(data) {
        return axios.post(`${this._apiBase}contact/`, data);
    }

    async deleteContact(id) {
        return axios.delete(`${this._apiBase}contact/${id}`);
    }

    async changeContact(id, data) {
        return axios.put(`${this._apiBase}contact/${id}`, data);
    }
}
