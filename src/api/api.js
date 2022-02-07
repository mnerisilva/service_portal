export const cliente = [
  {
    id: 1,
    codigo_cpf: "55853676920",
    nome: "Carlos Alberto Xavier",
    identificacao: "55853676920",
    pessoa: "pessoa física",
    declaracoes: [
      {
        id: 1,
        codigo_unico: "55853676920",
        declarante: "Carlos Alberto Xavier",
        vinculo: "titular",
        pessoa: "física",
        numero_declaracao: "45455454545445454555",
        status: "pendente",
        historico: [
          {
            id_historico: "2022165564554",
            data_hora: "2022-1-6",
            descrcao: "Ainda aguardando documentação. Declaração não iniciada",
          },
        ],
      },
      {
        id: 2,
        codigo_unico: "55553676921",
        declarante: "Antonio Erminio Xavier",
        vinculo_com_o_cliente: "irmao",
        pessoa: "física",
        numero_declaracao: "54554546545454545559",
        status: "pendente",
        historico: [
          {
            id_historico: "2022165566689",
            data_hora: "2022-1-6",
            descrcao:
              "Ainda aguardando documentação. Já foi dado início na inclusão dos dados no site da Receita",
          },
        ],
      },
      {
        id: 3,
        codigo_unico: "15553676955",
        declarante: "Elina Duarte Xavier",
        vinculo_com_o_cliente: "mae",
        pessoa: "física",
        numero_declaracao: "65554546335454545597",
        status: "pendente",
        historico: [
          {
            id_historico: "2022165566689",
            data_hora: "2022-1-6",
            descrcao:
              "Ainda aguardando documentação. Já foi dado início na inclusão dos dados no site da Receita",
          },
        ],
      },
    ],
  },
];
