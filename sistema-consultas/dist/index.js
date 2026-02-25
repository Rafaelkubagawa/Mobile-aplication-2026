"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cardiologia = {
    id: 1,
    nome: "Cardiologia",
};
const ginecologia = {
    id: 2,
    nome: "Ginecologia",
};
const pedagogia = {
    id: 3,
    nome: "Pedagogia",
};
const ortopedia = {
    id: 4,
    nome: "Ortopedia",
};
const medico1 = {
    id: 1,
    nome: "Dr. Roberto Silva",
    crm: "CRM12345",
    especialidade: cardiologia,
    ativo: true,
};
const medico2 = {
    id: 2,
    nome: "Dr. Rodrigo Silva",
    crm: "CRM12346",
    especialidade: ginecologia,
    ativo: true,
};
const medico3 = {
    id: 3,
    nome: "Dr. Arnaldo Silva",
    crm: "CRM12347",
    especialidade: pedagogia,
    ativo: true,
};
const medico4 = {
    id: 4,
    nome: "Dr. Jurandir Silva",
    crm: "CRM12348",
    especialidade: ortopedia,
    ativo: true,
};
const paciente1 = {
    id: 1,
    nome: "Carlos Andrade",
    cpf: "756.736.869-91",
    email: "carlos@email.com",
};
const paciente2 = {
    id: 2,
    nome: "Murilo Costa",
    cpf: "123.456.789-00",
    email: "costa@email.com",
};
const paciente3 = {
    id: 3,
    nome: "Amilton Ashiro",
    cpf: "104.947.177-12",
    email: "ashiro@email.com",
};
const paciente4 = {
    id: 4,
    nome: "João Carlos",
    cpf: "945.523.425-41",
    email: "joca@email.com",
};
function criarConsulta(id, medico, paciente, data, valor) {
    return {
        id,
        medico,
        paciente,
        data,
        valor,
        status: "agendada",
    };
}
function confirmarConsulta(consulta) {
    return Object.assign(Object.assign({}, consulta), { status: "confirmada" });
}
function realizarConsulta(consulta) {
    if (consulta.status !== "confirmada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "realizada" });
}
function cancelarConsulta(consulta) {
    if (consulta.status === "realizada") {
        return null;
    }
    return Object.assign(Object.assign({}, consulta), { status: "cancelada" });
}
function exibirConsulta(consulta) {
    const valorFormatado = consulta.valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    return `
Consulta #${consulta.id}
Médico: ${consulta.medico.nome}
Paciente: ${consulta.paciente.nome}
Especialidade: ${consulta.medico.especialidade.nome}
Data: ${consulta.data.toLocaleDateString("pt-BR")}
Valor: ${valorFormatado}
Status: ${consulta.status}
`;
}
function listarConsultasPorStatus(consultas, status) {
    return consultas.filter((consulta) => consulta.status === status);
}
function listarConsultasFuturas(consultas) {
    const agora = new Date();
    return consultas.filter((consulta) => consulta.data.getTime() > agora.getTime());
}
const consultas = [];
const consulta1 = confirmarConsulta(criarConsulta(1, medico1, paciente1, new Date("2026-03-10"), 350));
const consulta2Criada = criarConsulta(2, medico2, paciente2, new Date("2026-03-15"), 500);
const consulta2 = cancelarConsulta(consulta2Criada);
const consulta3 = Object.assign(Object.assign({}, criarConsulta(3, medico3, paciente3, new Date("2025-01-10"), 670)), { status: "realizada" });
consultas.push(consulta1);
if (consulta2 !== null) {
    consultas.push(consulta2);
}
consultas.push(consulta3);
const consulta4Criada = criarConsulta(4, medico4, paciente4, new Date("2025-02-10"), 900);
const consulta4Confirmada = confirmarConsulta(consulta4Criada);
const consulta4Realizada = realizarConsulta(consulta4Confirmada);
if (consulta4Realizada !== null) {
    consultas.push(consulta4Realizada);
}
//# sourceMappingURL=index.js.map