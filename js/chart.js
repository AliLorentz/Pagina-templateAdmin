var ctx = document.getElementsByClassName('line-chart')
var ctx2 = document.getElementsByClassName('radar-chart');
var ctx3 = document.getElementsByClassName('pie-chart');
var ctx4 = document.getElementsByClassName('polar-area');
//type, data e options
var chartGraph = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Git",
                data: [5, 10, 4, 3, 8, 4, 3, 4, 0, 1, 2, 3],
                borderWidth: 6,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'transparent',
                hoverBackgroundColor: 'rgba(77,166,253,0.85)'

            },
            {
                label: "Cursos",
                data: [8, 6, 10, 4, 7, 9, 2, 4, 1, 0, 2, 3],
                borderWidth: 6,
                borderColor: 'rgba(6,204,6,0.85)',
                backgroundColor: 'transparent',
                hoverBackgroundColor: 'rgba(6,204,6,0.85)'
            }
        ]

    },
    options:{
        title:{
            display:true,
            fontSize:20,
            text:"Grafica del gitHub"
        }
    }
});

var chartGraph = new Chart(ctx2,{
    type: 'radar',
    data: {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        datasets: [{
                label: "Git",
                data: [5, 10, 4, 3, 8, 4, 3, 4, 0, 1, 2, 3],
                borderWidth: 6,
                borderColor: 'rgba(77,166,253,0.85)',
                backgroundColor: 'rgba(77,166,253,0.15)'

            },
            {
                label: "Cursos",
                data: [0, 0, 0, 0, 0, 0, 2, 8, 4, 8, 9, 7],
                borderWidth: 6,
                borderColor: 'rgba(189, 47, 47, 0.856)',
                backgroundColor: 'rgba(189, 47, 47, 0.15)'
            }
        ]

    },
    options:{
        title:{
            display:true,
            fontSize:20,
            text:"Grafica del gitHub"
        }
    }
});

var chartGraph = new Chart(ctx3,{
    type:'doughnut',
    data:{
        labels:["FrontEnd","BackEnd","Design"],
        datasets:[{
            label:"Skills",
            data:[10,20,30],
            borderWidth:6,
            backgroundColor:[
                '#ff6384',
                '#36a2eb',
                '#ffce56'
            ]
        }]
    }
});

var chartGraph = new Chart(ctx4,{
    type:'polarArea',
    data:{
        labels:["FrontEnd","BackEnd","Design"],
        datasets:[{
            label:"Skills",
            data:[10,20,30],
            borderWidth:6,
            backgroundColor:[
                '#ff6384',
                '#36a2eb',
                '#ffce56'
            ]
        }]
    }
});