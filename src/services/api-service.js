export default class ApiService {
    _apiBase = "https://swapi.co/api";
  
    async getResource(url) {
      const res = await fetch(`${this._apiBase}${url}`);
      if (!res.ok)
        throw new Error(`Could not fetch ${url} recived ${res.status}`);
      const body = await res.json();
      return body;
    }
  
    async getAllPeople() {
      const res = await this.getResource(`/people/`);
      return res.results;
    }
  
    getPersone(id) {
      return this.getResource(`/people/${id}`);
    }
  
    async getAllPlanetes() {
      const res = await this.getResource(`/planets/`);
      return res.results;
    }
  
    getPlanet(id) {
      return this.getResource(`/planet/${id}`);
    }
  
    async getAllStarships() {
      const res = await this.getResource(`/starships/`);
      return res.results;
    }
  
    getStarship(id) {
      return this.getResource(`/starship/${id}`);
    }
  }
  