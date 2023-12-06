import api from '../plugins/api'

class AgendamentoService {
  async getAllAgendamentos() {
    const response = await api.get("/agendamento/");
    return response.data;
  }
}

export default new AgendamentoService();