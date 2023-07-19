var trace1 = {
  x: ['blue (470)', 'cyan-525', 'green', 'yellow', 'orange', 'red', 'deep red', 'IR1', 'IR2', 'IR3', 'IR4'],
  //x: ['blue', 'cyan', 'green', 'yellow', 'orange', 'red', 'deep red', 'IR1', 'IR2', 'IR3', 'IR4'],
  //x: [470, 525, 560, 585, 600, 645, 700, 735, 810, 880, 940],
  y: [16.38, 27.86, 24.87,18.73, 17.17, 20.85, 28.46, 29.44, 61.92, 84.62, 91.09],
  type: 'scatter'
};

var data = [trace1];
var layout = {
  title: {
    text:'Reflectance (% by λ)',
    font: {
      family: 'Times New Roman',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  xaxis: {
    title: {
      text: 'wavelengths',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'Reflectance(%)',
      font: {
        family: 'Times New Roman',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

      
Plotly.newPlot('tester', data, layout);
