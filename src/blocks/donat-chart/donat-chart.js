import './donat-chart.scss';
import ApexCharts from 'apexcharts'
Apex.colors = ['#FFE39C', '#6FCF97', '#BC9CFF', '#919191'];
Apex.fill = {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFBA9C","#66D2EA","#8BA4F9","#3D4975"],// optional, if not defined - uses the shades of same color in series
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: []
    }
};
var options = {
    series: [130, 65, 65, 0],
    labels: ['Великолепно', 'Хорошо', 'Удоволетворительно', 'Разочарован'],
    chart: {
        type: 'donut',
    },
    legend: {
        fontFamily: "Montserrat",
        fontSize: "12px",
        offsetY: 33,
        offsetX: -25,
        color: "rgba(31, 32, 65, 0.75)"
    },
    
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            customScale: 0.79,
            startAngle: 180,
            donut: {
                size: "90%",
                labels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: '2rem',
                        fontFamily: 'Open Sans',
                        color: '#BC9CFF',                        
                        offsetY: -15,
                    },
                    name: {
                        offsetY: 18,
                        
                    },
                    total: {
                        show: true,
                        fontSize: '1.2rem',
                        fontFamily: 'Montserrat',
                        color: '#BC9CFF',
                        showAlways: false,
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                              return a + b
                            }, 0)
                          },
                        label: 'голосов',
                        
                        offsetY: -25,
                        
                    }
                }   
            },
        },
    },
    
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 10
            },
            legend: {
                position: 'bottom'
            }
        }
    }]
};

var chart = new ApexCharts(document.querySelector(".donat-chart"), options);
chart.render(); 
