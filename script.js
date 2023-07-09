let ctx = document.getElementById('graphpop1');
ctx.width = 200;

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
    datasets: [{
      label: 'Anual do estado',
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
        beginAtZero: true,
        ticks: {
          color: 'white' // Altere a cor dos rótulos do eixo y aqui
        }
      },
      x: {
        ticks: {
          color: 'white' // Altere a cor dos rótulos do eixo x aqui
        }
      }
    }

  }
});
//-----------------------------------
let data = {
  labels: [
    '2001',   '2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017', '2018', '2019', '2020', '2021'
  ],
  datasets: [{
    label: 'Veículos no estado por ano',
    data: [2968976, 3181471, 3375449, 3501903, 3637209, 3782168, 3954731 ,4201020 ,4460310 ,4738780 , 5066875, 5419138, 5788294, 6138605 , 6477703, 6728472, 6908401, 7064020 , 7245180 , 7465532, 7608791],
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
  data: data,
  options: {
    aspectRatio: 2,
    layout: {
      padding: 50
  }
    
  }
};

let ctx2 = document.getElementById('graphvei');

new Chart(ctx2, grafico2);