import api from '../plugins/api'

class ProcedimentoService {
  async getAllProcedimentos() {
    const response = await api.get("/procedimento/");
    return response.data;
  }
}

export default new ProcedimentoService();