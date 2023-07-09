let ctx = document.getElementById('graphpop1');


new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: '',
      data: [12807706, 12975915, 13146333, 13318990, 13493914, 13671135, 13850684, 14032591, 14216887, 14403603, 14547985, 14695177, 14845297, 14998470, 15154832, 15314526, 15477710, 15644549, 15815224, 15989929, 16112678, 16231365, 16369178, 16461173, 16550024, 16635996, 16718956, 17159960, 17264943, 17366189, 17463349, 17561377],
      borderWidth: 4,
      backgroundColor: 'gray',
      color: 'white'
    }]
  },
  options: {
    aspectRatio: 4,
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          color: 'white' // Altere a cor dos rótulos do eixo y aqui
        },
         grid: {
          display: false
        }
      },
      x: {
        ticks: {
          color: 'white' // Altere a cor dos rótulos do eixo x aqui
        },
        grid:{
          display: false
        }
  
      }
    }

  }
});
//-----------------------------------
let graph2 = {
  labels: [
    '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021'
  ],
  datasets: [{
    label: 'Veículos no estado por ano',
    data: [2968976, 3181471, 3375449, 3501903, 3637209, 3782168, 3954731, 4201020, 4460310, 4738780, 5066875, 5419138, 5788294, 6138605, 6477703, 6728472, 6908401, 7064020, 7245180, 7465532, 7608791],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)',
    ]
  }]
};

let grafico2 = {
  type: 'polarArea',
  data: graph2,
  options: {
    aspectRatio: 2,
    layout: {
      padding: 50
    },
    plugins: {
      legend: {
        display: false // Oculta a legenda
      }
    },
  }
};

let ctx2 = document.getElementById('graphvei');

new Chart(ctx2, grafico2);

//----------------
let graph3 = {
  labels: [
    'Santa Marta', 'Cidade de Deus', 'Batam', 'Chapéu Mangueira', 'Pavão-Pavãozinho', 'Tabajaras', 'Providência', 'Borel', 'Formiga', 'Andaraí', 'Salgueiro', 'Turano', 'São João', 'Coroa', 'Escondidinho', 'São Carlos', 'Mangueira', 'Macacos', 'Vidigal', 'Nova brasília', 'Fazendinha', 'Baiana', 'Alemão', 'Chatuba', 'Sereno', 'Parque Proletário', 'Vila Cruzeiro', 'Rocinha', 'Jacarezinha', 'Manguinhos', 'Barreira do Vasco', 'Caju', 'Cerro-Corá', 'Arará', 'Lins', 'Camarista Méier', 'Mangueirinha', 'Vila Kennedy'],
  datasets: [{
    label: 'Bairros com maior número de residentes',
    data: [4760, 44046, 18904, 3928, 13340, 8480, 15354, 18032, 6057, 14625, 5038, 14249, 11048, 13154, 8353, 19589, 17774, 22553, 12237, 33084, 21950, 11744, 16462, 11831, 5391, 17573, 20112, 70491, 28437, 24766, 16331, 16694, 2922, 19711, 14148, 15337, 28442, 40218]
  }]
};

let grafico3 = {
  type: 'line',
  data: graph3,
  options: {
    backgroundColor: 'gray',
    elements: {
      line: {
          tension: 0.5
      }
  },
    aspectRatio: 5,
    scales: {
      y: {
        beginAtZero: false,
       

  
      }
    }
  }
}

let ctx3 = document.getElementById('graphUPP')

new Chart(ctx3, grafico3)

//grafico 4

let graph4 = {
  labels: ['Estado', 'Capital', '38 UPP'],
  datasets: [{
    label: '2007',
    data: [15477710, 6177974, 670817]
  },
  {
    label: '2008',
    data: [15644549, 6225104, 675935]
  },
  {
    label: '2009',
    data: [15815224, 6272594, 681091]
  },
  {
    label: '2010',
    data: [15989929, 6320446, 686287]
  },
  {
    label: '2011',
    data: [16112678, 6355949, 690142]
  },
  {
    label: '2012',
    data: [16231365, 6390290, 693871]
  },
  {
    label: '2013',
    data: [16369178, 6429922, 698174]
  },
  {
    label: '2014',
    data: [16461173, 6453682, 700754]
  },
  {
    label: '2015',
    data: [16550024, 6476631, 703246]
  },
  {
    label: '2016',
    data: [16635996, 6498837, 705657]
  },
  {
    label: '2017',
    data: [16718956, 6520266, 707984]
  },
  {
    label: '2018',
    data: [17159960, 6688927, 726297]
  },
  {
    label: '2019',
    data: [17264943, 6718903, 729552]
  },
  {
    label: '2020',
    data: [17366189, 6747815, 732692]
  },
  {
    label: '2021',
    data: [17463349, 6775561, 735704]
  }

  ],

};


let grafico4 = {
  type: 'bar',
  data: graph4,
  labels: graph4,
  options: {
    aspectRatio: 2,
  }

}

let ctx4 = document.getElementById('graph4')

new Chart(ctx4, grafico4)