import './donat-chart.scss';
import ApexCharts from 'apexcharts'
Apex.colors = ['#FFE39C', '#6FCF97', '#BC9CFF', '#919191'];
Apex.fill = {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFBA9C","#66D2EA","#8BA4F9","#3D4975"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
        colorStops: []
    }
};
let options = {
    series: [130, 65, 65, 0],
    labels: ['Великолепно', 'Хорошо', 'Удоволетворительно', 'Разочарован'],
    chart: {
        type: 'donut',
    },
    legend: {
        fontFamily: "Montserrat",
        fontSize: "12px",
        offsetY: 30,
        offsetX: 30,
        color: "rgba(31, 32, 65, 0.75)"
    },
    
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            offsetY: -22,
            offsetX: -55,
            customScale: 0.63,
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

//функция инициализации
function initializeChart(node, options) {
    let data = {};
    
    //берем данные из дата-атрибутов, переданных через паг
    data.labels = JSON.parse(node.dataset.labels).length? JSON.parse(node.dataset.labels):options.labels;
    data.series = JSON.parse(node.dataset.series).length? JSON.parse(node.dataset.series) : options.series;
    
    //приводим показатели из строки к числу
    for (let i = 0; i < data.series.length; i++) {
        data.series[i] = +data.series[i];
    }

    //прилепляем результат к настройкам
    let result = Object.assign(options, data);

    //инициализируем плагин на узле с полученными настройками
    let _chart = new ApexCharts(node, result);
    _chart.render(); 
}

//применяем функцию инициализации ко всем блокам донат-чарт
let charts = document.querySelectorAll('.donat-chart');
for (let chart of charts) {
    initializeChart(chart, options);
}


