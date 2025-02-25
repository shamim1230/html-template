const rdx = document.getElementById('myChart').getContext('2d');
         const myChart = new Chart(rdx, {
             type: 'doughnut',
             data: {
                 labels: ['Inactive', 'Active'],
                 datasets: [{
                     label: 'Subscriptions',
                     data: [1, 4],
                     backgroundColor: ['orange', 'cornflowerblue'],
                     borderColor: ['orange', 'cornflowerblue'],
                     borderWidth: 1
                 }]
             },
             options: {
                 responsive: true,
                 plugins: {
                     legend: {
                         display: false
                     },
                     tooltip: {
                         callbacks: {
                             label: function (context) {
                                 return `${context.label}: ${context.raw}`;
                             }
                         }
                     }
                 }
             }
         });
  