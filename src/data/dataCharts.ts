export const Chart01 = [
    ["Mês", "Vendas", "Visitas"],
    ["Janeiro", 401, 1017],
    ["Fevereiro", 432, 964],
    ["Março", 660, 1120],
    ["Abril", 540, 1030],
    ["Maio", 732, 938],
    ["Junho", 786, 1015],
];

export const optionsChart01 = {
    title: "Vendas x Visitas",
    curveType: "function",
    legend: { position: "bottom" },
};

export const Chart02 = [
    ["Departamentos", "Vendas"],
    ["Esporte e Lazer", 11],
    ["Cozinha", 2],
    ["Informática", 12],
    ["Eletrodomésticos", 4],
    ["Automotivo", 7],
];

export const optionsChart02 = {
    title: "Vendas por departamento",
};

export const Chart03 = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const optionsChart03 = {
    title: "Ticket Médio",
    hAxis: { title: "Mês", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
};
