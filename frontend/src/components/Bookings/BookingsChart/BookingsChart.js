import React from 'react';
import { Bar as BarChart } from 'react-chartjs-2';

const BOOKINGS_BUCKETS = {
    'Cheap': {
        min: 0,
        max: 100
    },
    'Normal': {
        min: 100,
        max: 200
    },
    'Expensive': {
        min: 200,
        max: 10000000
    }
};

const bookingsChart = props => {
    const chartData = {labels: ["Bookings Price Categories"], datasets: []};
    for (const bucket in BOOKINGS_BUCKETS) {
        const filteredBookingsCount = props.bookings.reduce((prev, current) => {
            if (
                current.event.price > BOOKINGS_BUCKETS[bucket].min &&
                current.event.price < BOOKINGS_BUCKETS[bucket].max
            ) {
                return prev + 1;
            } else {
                return prev;
            }
        }, 0);
        // values.push(filteredBookingsCount);
        chartData.datasets.push({
            label: bucket,
            base: 0,
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: [filteredBookingsCount]
        });
        // values = [...values]
        // values[values.length - 1] = 0
        // values = [0]
    }
    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <BarChart options={options}  data={chartData} />;
        </div>
    );
};

export default bookingsChart;