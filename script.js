//---------Função para troca de dados

function stockData(val) {
  console.log(val);
  const url = 'mensal.json';

  fetch(url)
    .then(response => response.json())
    .then(jsonData => {
      console.log(jsonData); 

      const selectedData = jsonData[`doismile${val === 0 ? 'tres' : val === 1 ? 'dez' : 'vinte'}`];

      if (!selectedData) {
        console.error('Erro: os dados selecionados estão vazios ou não estão no formato esperado.');
        return;
      }

      const month = selectedData.map(index => `${index.mes}/${index.ano}`);
      const profits = selectedData.map(index => {
        const popValue = typeof index.pop === 'string' ? index.pop.replace(',', '.') : index.pop;
        return parseFloat(popValue);
      });
      const companyname = `Dados de ${selectedData[0].ano}`;

      myChart.config.data.labels = month;
      myChart.config.data.datasets[0].data = profits;
      myChart.config.data.datasets[0].label = companyname;
      myChart.update();
    })
    .catch(error => {
      console.error('Erro ao buscar os dados:', error);
    });
}

var myChart; 

document.addEventListener("DOMContentLoaded", function () {


  //---------------------------gráfico 1

  var xmlhttp = new XMLHttpRequest();
  var url = "populacao.json";

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      var data = JSON.parse(xmlhttp.responseText);

      var ano = data.popula.map(function (elem) {
        return elem.ano;
      });

      var pop = data.popula.map(function (elem) {
        return elem.pop;
      });

      let ctx = document.getElementById('graphpop1');

      myChart = new Chart(ctx, { 
        type: 'bar',
        data: {
          labels: ano,
          datasets: [{
            label: '',
            data: pop,
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
                color: 'white'
              },
              grid: {
                display: false
              }
            },
            x: {
              ticks: {
                color: 'white'
              },
              grid: {
                display: false
              }
            }
          }
        }
      });
    }
  }


  //---------------------------gráfico 2


  var xmlhttp2 = new XMLHttpRequest();
  var url2 = "populacaoupp.json";

  xmlhttp2.open("GET", url2, true);
  xmlhttp2.send();
  xmlhttp2.onreadystatechange = function () {
    if (xmlhttp2.readyState == 4 && xmlhttp2.status == 200) {
      var data = JSON.parse(xmlhttp2.responseText);

      var upp = data.populaUPP.map(function (elem) {
        return elem.upp;
      });

      var pop_2010 = data.populaUPP.map(function (elem) {
        return parseFloat(elem.pop_2010.replace(",", ".")); 
      });

      let graph2 = {
        labels: upp,
        datasets: [{
          label: 'Bairros com maior número de residentes',
          data: pop_2010,
        }]
      };

      let grafico2 = {
        type: 'line',
        data: graph2,
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
      };

      let ctx2 = document.getElementById('graphUPP');
      new Chart(ctx2, grafico2);
    }
  };


  //---------------grafico 3


  var xmlhttp3 = new XMLHttpRequest();
  var url3 = "populacaoproje.json";

  xmlhttp3.open("GET", url3, true);
  xmlhttp3.send();
  xmlhttp3.onreadystatechange = function () {
    if (xmlhttp3.readyState == 4 && xmlhttp3.status == 200) {
      var data = JSON.parse(xmlhttp3.responseText);

      var ano = data.populacao.map(function (elem) {
        return elem.Ano;
      });

      var Capital = data.populacao.map(function (elem) {
        return elem.Capital;
      });

      var Estado = data.populacao.map(function (elem) {
        return parseFloat(elem.Estado);
      });

      var UPP38 = data.populacao.map(function (elem) {
        return elem["38UPP"];
      });

      let graph3 = {
        labels: ano,
        datasets: [

          {
            label: 'Capital',
            data: Capital,
            backgroundColor: 'Skyblue',
            borderWidth: 2,
          },
          {
            label: '38 UPP',
            data: UPP38,
            backgroundColor: 'Lightgray',
            borderWidth: 2,
          },
          {
            label: 'ESTADO',
            data: Estado,
            backgroundColor: 'Dimgrey',
            borderWidth: 2,
          },

        ]
      };

      let grafico3 = {
        type: 'bar',
        data: graph3,
        options: {
          aspectRatio: 2,
        }
      };

      let ctx3 = document.getElementById('graph3');

      new Chart(ctx3, grafico3);
    }
  };


  //---------------------------gráfico 4


  var xmlhttp4 = new XMLHttpRequest();
  var url4 = "veiculos.json";

  xmlhttp4.open("GET", url4, true);
  xmlhttp4.send();
  xmlhttp4.onreadystatechange = function () {
    if (xmlhttp4.readyState == 4 && xmlhttp4.status == 200) {
      var data = JSON.parse(xmlhttp4.responseText);
      console.log(data);

      var ano = data.veiculos.map(function (elem) {
        return elem.ano;
      });

      var frota = data.veiculos.map(function (elem) {
        return parseFloat(elem.frota.replace(",", "."));
      });

      let graph4 = {
        labels: ano,
        datasets: [{
          label: 'Veículos no estado por ano',
          data: frota,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)',
          ]
        }]
      };

      let grafico4 = {
        type: 'line',
        data: graph4,
        options: {
          aspectRatio: 5,
          layout: {
            padding: 60
          },
          scales: {
            y: {
              beginAtZero: false,
              ticks: {
                reverse: true
              }
            }
          }
        }
      };
      let ctx4 = document.getElementById('graphvei');

      new Chart(ctx4, grafico4);
    }
  }
});