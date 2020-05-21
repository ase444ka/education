import './impressions.scss';
import ApexCharts from 'apexcharts'
var options = {
    series: [130, 65, 65],
    chart: {
        type: 'donut',
    },
    fill: {
        colors: ['#FFE39C', '#6FCF97', '#BC9CFF'],
        type: 'gradient',
    },
    dataLabels: {
        enabled: false,
    },
    plotOptions: {
        pie: {
            customScale: 0.5,
            donut: {
                size: "95%",
            }
        }
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

var chart = new ApexCharts(document.querySelector(".impressions"), options);
chart.render(); 
