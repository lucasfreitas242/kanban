import { Options } from "highcharts";

export const donutChartOptions: Options = {
    chart: {
        type: 'pie',
        plotShadow: false,
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        pie: {
            innerSize: '99%',
            borderWidth: 40,
            borderColor: '',
            slicedOffset: 20,
            dataLabels: {
                connectorWidth: 0
            }
        }
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: '$ 500.000.00'
    },
    legend: {
        enabled: false,
    },
    series: 
    [
        {
            type: 'pie',
            data: [
                {name: 'a', y: 1, color: '#00adb5'},
                {name: 'b', y: 5, color: '#4287f5'},
                {name: 'c', y: 2, color: '#b642f5'},
                {name: 'd', y: 3, color: '#f54242'},
                {name: 'e', y: 4, color: '#42f5f2'}
            ]
    }]
}