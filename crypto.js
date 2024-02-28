const chart = document.querySelector('#chart').getContext('2d');
// create a new chart instance//

new Chart(chart,{
        type: 'line',
        data: {
            labels: ['jan','Feb', 'Mart', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec', 'jan','Feb', 'Mart', 'Apr'],
            datasets:[
                {
                    label:'GOLD',
                    data:[1796, 1936, 1895, 1836, 1807, 1765, 1710, 1660, 1932, 1768,1822,1928,1881],
                    borderColor: 'green',
                    borderWidth: 2
                },
                {
                    label:'ETH',
                    data:[2688, 2922, 3282, 2728, 1940, 1071, 1679, 1554, 1328, 1572,1294,1194,1673],
                    borderColor: 'blue',
                    borderWidth: '2'
                }
            ]
        },
        Options:{
            responsive: true
        }
    })
