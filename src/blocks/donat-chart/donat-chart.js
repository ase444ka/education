import './donat-chart.scss';
import ApexCharts from 'apexcharts'
Apex.colors = ['#FFE39C', '#6FCF97', '#BC9CFF', '#919191'];
Apex.fill = {
    type: 'gradient',
    gradient: {
        shade: 'dark',
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: ["#FFBA9C","#66D2EA","#8BA4F9","#3D4975"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [90, 100],
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
        floating: true,
        fontFamily: "Montserrat",
        fontSize: "14px",
    },
    
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            offsetY: -85,
            offsetX: -142,
            customScale: 0.39,
            startAngle: 180,
            donut: {
                size: "90%",
                labels: {
                    show: true,
                    value: {
                        show: true,
                        fontSize: '4rem',
                        fontFamily: 'Open Sans',
                        color: '#BC9CFF',                        
                        offsetY: -30,
                    },
                    name: {
                        offsetY: 48,
                        
                    },
                    total: {
                        show: true,
                        fontSize: '2.8rem',
                        fontFamily: 'Montserrat',
                        color: '#BC9CFF',
                        showAlways: false,
                        formatter: function (w) {
                            return w.globals.seriesTotals.reduce((a, b) => {
                              return a + b
                            }, 0)
                          },
                        label: 'голосов',
                        
                        
                    }
                }   
            },
        },
    },
    
    responsive: [
        {
            breakpoint: 1439,
            options: {
                plotOptions: {
                    pie: {
                        offsetX: -135,
                        offsetY: -80,
                    }
                }       
            }
        },
        {
            breakpoint: 1380,
            options: {
                plotOptions: {
                    pie: {
                        offsetX: -125,
                        offsetY: -70,
                    }
                }       
            }
        },
        {
            breakpoint: 1350,
            options: {
                plotOptions: {
                    pie: {
                        offsetX: -115,
                        offsetY: -50,
                    }
                }       
            }
        },
        {
            breakpoint: 1125,
            options: {
                legend: {
                    fontSize: "12px",
                },       
            }
        },

        {
            breakpoint: 990,
            options: {
                plotOptions: {
                    pie: {
                      //  customScale: 0.7,
                        offsetX: -115,
                        offsetY: -70,
                    }
                }       
            }
        },
        {
            breakpoint: 800,
            options: {
                plotOptions: {
                    pie: {
                      //  customScale: 0.7,
                        offsetX: -115,
                        offsetY: -50,
                    }
                }       
            }
        },
        {
            breakpoint: 750,
            options: {
                plotOptions: {
                    pie: {
                      //  customScale: 0.7,
                        offsetX: -90,
                        offsetY: -50,
                    }
                }       
            }
        },
        {
            breakpoint: 730,
            options: {
                chart: {
                    height: 400
                },
                plotOptions: {
                    pie: {
                        customScale: 0.25,
                        offsetX:  -30,
                        offsetY:  -125,
                    }
                }       
            }
        },
        
        {
        breakpoint: 480,
        options: {
            chart: {
                width: 10
            },
            legend: {
                position: 'bottom'
            }
        }
    },
    {
        breakpoint: 1100,
        options: {
            plotOptions: {
                pie: {
                  //  offsetY: -5,
                  //  offsetX: -20,
                   // customScale: 0.9,
                },
            },
            legend: {
            //    offsetY: 0,
            //    offsetX: 0,
            } 
        }
    }
]
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



