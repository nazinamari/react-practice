import axios from "axios";

axios.defaults.baseURL =
  'https://65e3367a88c4088649f57eb6.mockapi.io/api/planets/';

export default async function fetchPlanets () {

    const response = await axios.get('/planets');

    return response.data
}

export async function fetchPlanet (id) {
    await axios.delete(`/planets/${id}`)

}