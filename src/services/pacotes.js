import api from '../plugins/api'

class PacoteService {
  async getAllPacotes() {
    const response = await api.get("/pacote/");
    return response.data;
  }
}

export default new PacoteService();