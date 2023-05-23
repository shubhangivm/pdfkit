const DEFAULT_CHART_COLORS = [
    "#892a9c",
    "#a11a42",
    "#376e2c",
    "#c95d1e",
    "#272b40",
    "#9c6936",
    "#3f96d9",
    "#2f7a5b",
    "#93D4B9",
    "#5388D8",
    "#E56060",
    "#57948B",
    "#F4BE37",
    "#FF9F40",
    "#0D2535",
    "#D752BD",
    "#D4B27C",
    "#C4ADA2",
    "#A888C6",
    "#76784A",
    "#9DAD6B",
    "#E0DCEA",
    "#93D4B9",
];

const getLineChartConfiguration = (chartData) => {
    // console.log(chartData,"---chartData");
    if (chartData.data.length == 0) {
        return;
    } else {
        let { data, yKeys, xKey, yAxisUnit, xAxisUnit } = chartData.data;
        let otherKeys = yKeys?.slice();
        // otherKeys.push(xKey)
        var datasets = otherKeys.map(function (key, index) {
            return {
                label: key,
                data: [],
                fill: false,
                borderColor: DEFAULT_CHART_COLORS[index],
                tension: 0.1,
            };
        });
        var labels = data.map(function (o) {
            otherKeys.forEach(function (k, i) {
                datasets[i].data.push(o[k] || null);
            });
            return o[xKey];
        });
        let yUnit = (yAxisUnit != undefined) ? yAxisUnit : '';
        let xUnit = (xAxisUnit != undefined) ? xAxisUnit : '';
        // console.log(labels, datasets,"======");
        return {
            type: "line",
            data: {
                labels: labels,
                datasets: datasets,
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    legend: {
                        labels: {
                            color: 'black'
                        }
                    }
                },
                scales: {
                    y: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        },
                        title: {
                            display: true,
                            text: `${yUnit}` || '',
                            color: 'black'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        },
                        title: {
                            display: true,
                            text: `${xUnit}` || '',
                            color: 'black'
                        }
                    }
                }
            },
        };
    }
}

const getMLineChartConfiguration = (MLineChartData) => {
    if (MLineChartData.data.length == 0) {
        return;
    } else {
        console.log(MLineChartData, "---mlinechart");
        let { data, yKeys, y1Keys, xKey, yAxisUnit, xAxisUnit } = MLineChartData;


        let otherKeys = yKeys?.concat(y1Keys);

        var datasets = otherKeys?.map(function (key, index) {
            let yAxisID = (yKeys.includes(key)) ? 'y' : 'y1';

            var obj = {
                label: key,
                data: [],
                fill: false,
                borderColor: DEFAULT_CHART_COLORS[index],
                tension: 0.1,
                yAxisID: yAxisID
            };
            // if (key=='Refuel' || 'Fuel Theft') obj['type'] = 'bar';
            return obj;
        });

        var labels = data.map(function (o) {
            otherKeys.forEach(function (k, i) {
                datasets[i].data.push(o[k]);// || null
            });
            return o[xKey];
        });
        // console.log(labels, datasets,"======");
        let yUnit = (yAxisUnit != undefined) ? yAxisUnit : '';
        let xUnit = (xAxisUnit != undefined) ? xAxisUnit : '';
        return {
            type: "line",
            data: {
                labels: labels,
                datasets: datasets,
            },
            options: {
                elements: {
                    point: {
                        radius: 0,
                    },
                },
                plugins: {
                    title: {
                        display: false,
                        text: '',
                        color: 'black'
                    },
                    legend: {
                        labels: {
                            color: 'black',
                        }
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        title: {

                            display: true,
                            text: yKeys[0],
                            color: 'black'
                        },
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        title: {
                            display: true,
                            text: y1Keys[0],
                            color: 'black'
                        },
                        position: 'right',
                    },
                    x: {
                        title: {
                            display: true,
                            text: `${xUnit}` || '',
                            color: 'black'
                        },
                        // type: 'time',
                        // time: {
                        //   displayFormats: {
                        //     quarter: 'MMM YYYY'
                        //   }
                        // }

                    },

                }
            },
        };
    }
};

const getBarChartConfiguration = (BarChartData) => {
    if (!BarChartData.data) {
        return;
    } else {
        let { data } = BarChartData;
        var barData = Object.values(data);
        var colors = barData.map(function (_, index) {
            return DEFAULT_CHART_COLORS[index];
        });
        return {
            type: "bar",
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: "Facilties",
                        data: barData,
                        backgroundColor: colors,
                        borderColor: colors,
                        borderWidth: 1,
                        barThickness: 120
                    }
                ],
            },
            options: {
                // bar: {
                //   datasets: {
                //     // barPercentage: 0.3
                //     barThickness: 'flex'
                //   }
                // },
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            boxWidth: 50,
                            boxHeight: 30,
                            color: 'black',
                        }
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        }
                    }
                }
            },
            // See https://www.chartjs.org/docs/latest/configuration
        };
    }
};

const getBarChartConfiguration2 = (BarChartData2) => {
    if (BarChartData2.data.length == 0) {
        return;
    } else {
        let { data } = BarChartData2;
        // console.log(data,"===");
        var datasets = [];
        var labels = [];
        data.forEach((one) => {
            labels = Object.keys(one);
            var barData = Object.values(one);
            var colors = barData.map(function (_, index) {
                return DEFAULT_CHART_COLORS[index];
            });
            datasets.push({
                data: Object.values(one),
                backgroundColor: colors,
                borderColor: colors,
                borderWidth: 1,
            })
        })
        // console.log(datasets, labels ,"----");
        return {
            type: "bar",
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                plugins: {
                    legend: {
                        display: false,

                        labels: {
                            color: 'black',
                        }

                    },
                },
                scales: {
                    y: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        }
                    }
                }
            },
            // See https://www.chartjs.org/docs/latest/configuration
        };
    }
};

const NBarChartConfiguration = (NBarChartData) => {
    if (!NBarChartData.data) {
        return;
    } else {
        let { data } = NBarChartData;
        // var barData =Object.values(data);

        const valueObject = Object.values(data.data);
        // console.log(data,"--");
        let yUnit = (data.yAxisUnit != undefined) ? data.yAxisUnit : '';
        let xUnit = (data.xAxisUnit != undefined) ? data.xAxisUnit : '';

        const datasets = data.stack.map((stacks, index) => {

            var obj = {
                label: `${stacks}`,
                data: valueObject.map((value) => value[stacks]),
                // backgroundColor: DEFAULT_CHART_COLORS[index],
                // borderColor: DEFAULT_CHART_COLORS[index],
                borderWidth: 1
            }
            if (stacks == 'high') {
                obj['backgroundColor'] = '#FF0000'
                obj['borderColor'] = '#FF0000'
            } else if (stacks == 'medium') {
                obj['backgroundColor'] = '#FFA500',
                    obj['borderColor'] = '#FFA500'
            } else if (stacks == 'low') {
                obj['backgroundColor'] = '#FFFF00',
                    obj['borderColor'] = '#FFFF00'
            }
            return obj

        })
        // console.log(datasets,"---datasets");

        return {
            type: "bar",
            data: {
                labels: Object.keys(data.data),
                datasets: datasets
            },
            options: {
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            boxWidth: 50,
                            boxHeight: 30,

                            color: 'black'// Set the color of the legend labels

                        }
                    },
                },
                scales: {
                    y: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: 'rgba(0, 0, 0, 0.1)', // Adjust the color of the background lines
                        },
                        title: {
                            display: true,
                            text: `${yUnit}` || '',
                            color: 'black'
                        }
                    },
                    x: {
                        ticks: {
                            color: 'black', // Set y-axis labels color to black
                        },
                        grid: {
                            color: '#000000', // Adjust the color of the background lines
                        },
                        title: {
                            display: true,
                            text: `${xUnit}` || '',
                            color: 'black'
                        },
                    }
                }
            },
            // See https://www.chartjs.org/docs/latest/configuration
        }
    }
};

const getPieChartConfiguration = (PieChartData) => {
    if (!PieChartData.data) {
        return;
    } else {
        let { data } = PieChartData
        var pieData = Object.values(data);
        return {
            type: "pie",
            data: {
                labels: Object.keys(data),
                datasets: [
                    {
                        label: "",
                        data: pieData,
                        backgroundColor: pieData.map(function (_, index) {
                            return DEFAULT_CHART_COLORS[index];
                        }),
                    },
                ],
            },
        };
    }
};

const createChart = (chartData) => {

        let chartConfig;
        if (chartData.type == 'line-chart') {
            chartConfig = getLineChartConfiguration(chartData)
        } else if (chartData.type == 'm-line-chart') {
            chartConfig = getMLineChartConfiguration(chartData)
        } else if (chartData.type == 'bar-chart') {
            chartConfig = getBarChartConfiguration(chartData)
        } else if (chartData.type == 'bar-chart2') {
            chartConfig = getBarChartConfiguration2(chartData)
        } else if (chartData.type == 'n-bar-chart') {
            chartConfig = NBarChartConfiguration(chartData)
        } else if (chartData.type == 'pie-chart') {
            chartConfig = getPieChartConfiguration(chartData)
        }
        else {
            return;
        }
        // const chartConfig = {
        //     type: 'bar',
        //     data: {
        //         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        //         datasets: [{
        //             label: '# of Votes',
        //             data: [12, 19, 3, 5, 2, 3],
        //             backgroundColor: 'rgba(75, 192, 192, 0.2)',
        //             borderColor: 'rgba(75, 192, 192, 1)',
        //             borderWidth: 1
        //         }]
        //     },
        //     options: {
        //         scales: {
        //             y: {
        //                 beginAtZero: true
        //             }
        //         }
        //     }
        // };
        
        return(chartConfig);
}

module.exports = createChart;