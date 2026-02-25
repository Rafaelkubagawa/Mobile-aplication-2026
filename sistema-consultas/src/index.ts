import type { Especialidade } from "./types/especialidade";
import type { Paciente } from "./types/paciente";
import type { StatusConsulta } from "./types/statusConsulta";
import type { Medico } from "./interfaces/medico";
import type { Consulta } from "./interfaces/consulta";



const cardiologia: Especialidade = {
  id: 1,
  nome: "Cardiologia",
};
const ginecologia: Especialidade = {
  id: 2,
  nome: "Ginecologia",
};
const pedagogia : Especialidade = {
  id: 3,
  nome: "Pedagogia",
};
const ortopedia : Especialidade = {
  id: 4,
  nome: "Ortopedia",
};


const medico1: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: cardiologia,
  ativo: true,
};
const medico2: Medico = {
  id: 2,
  nome: "Dr. Rodrigo Silva",
  crm: "CRM12346",
  especialidade: ginecologia,
  ativo: true,
};
const medico3: Medico = {
  id: 3,
  nome: "Dr. Arnaldo Silva",
  crm: "CRM12347",
  especialidade: pedagogia,
  ativo: true,
};
const medico4: Medico = {
  id: 4,
  nome: "Dr. Jurandir Silva",
  crm: "CRM12348",
  especialidade: ortopedia,
  ativo: true,
};


const paciente1: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "756.736.869-91",
  email: "carlos@email.com",
};
const paciente2: Paciente = {
  id: 2,
  nome: "Murilo Costa",
  cpf: "123.456.789-00",
  email: "costa@email.com",
};
const paciente3: Paciente = {
  id: 3,
  nome: "Amilton Ashiro",
  cpf: "104.947.177-12",
  email: "ashiro@email.com",
};
const paciente4: Paciente = {
  id: 4,
  nome: "João Carlos",
  cpf: "945.523.425-41",
  email: "joca@email.com",
};



function criarConsulta(
  id: number,
  medico: Medico,
  paciente: Paciente,
  data: Date,
  valor: number
): Consulta {
  return {
    id,
    medico,
    paciente,
    data,
    valor,
    status: "agendada",
  };
}


function confirmarConsulta(consulta: Consulta): Consulta {
  return {
    ...consulta,
    status: "confirmada",
  };
}

function realizarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status !== "confirmada") {
    return null;
  }

  return {
    ...consulta,
    status: "realizada",
  };
}


function cancelarConsulta(consulta: Consulta): Consulta | null {
  if (consulta.status === "realizada") {
    return null;
  }
  return {
    ...consulta,
    status: "cancelada",
  };
}


function exibirConsulta(consulta: Consulta): string {
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
