import { Chart, LinearScale, CategoryScale } from 'chart.js';
import { BoxPlotChart, BoxPlotController, BoxAndWiskers } from '@sgratzl/chartjs-chart-boxplot';

function BoxPlot(){


    const boxplotData = {
        // define label tree
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Dataset 1',
            backgroundColor: 'rgba(255,0,0,0.5)',
            borderColor: 'red',
            borderWidth: 1,
            outlierColor: '#999999',
            padding: 10,
            itemRadius: 0,
            data: [[
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ], [
                50,
                20,
                75,
                60,
                40,
                80,
                85
                
            ],  ],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
              ],
              borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
              ],
              borderWidth: 1
              
        }]
    };

   
    window.onload = () => {
        const ctx = document.getElementById("Canvas")
        Chart.register(BoxPlotController, BoxAndWiskers, LinearScale, CategoryScale);
        window.myBar = new BoxPlotChart(ctx, {
            type: 'boxplot',
            data: boxplotData,
            options: {
                responsive: true,
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Chart.js Box Plot Chart'
                },
                tooltipDecimals: 2,
            }
        });
    }
    return (
        <div id="container" style={{width: "50%"}}>
            <canvas id="Canvas"></canvas>
        </div>
    )

}

export default BoxPlot;