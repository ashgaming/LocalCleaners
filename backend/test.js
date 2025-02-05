const autocannon = require('autocannon');
/*
const url = 'https://localcleaners-backend.onrender.com/plans';

const instance = autocannon({
    url,
    duration: 30
}, (err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Result:', result);
        console.table([
            { Metric: 'Requests', Value: result.requests.total },
            { Metric: 'Latency (avg)', Value: result.latency.average },
            { Metric: 'Throughput (bytes/sec)', Value: result.throughput.average }
        ]);
        console.table([
            { Status: '2xx', Count: result['2xx'] },
            { Status: '4xx', Count: result['4xx'] },
            { Status: '5xx', Count: result['5xx'] }
        ]);
    }
});

autocannon.track(instance);*/
const urls = [
    'https://localcleaners-backend.onrender.com/plans',
    'https://localcleaners-backend.onrender.com/services',
    'https://localcleaners-backend.onrender.com/bookings/todays-booking'
];

urls.forEach(url => {
    const instance = autocannon({
        url,
        duration: 30
    }, (err, result) => {
        if (err) {
            console.error(`Error for ${url}:`, err);
        } else {
            console.log(`Result for ${url}:`);
            console.table([
                { Metric: 'Requests', Value: result.requests.total },
                { Metric: 'Latency (avg)', Value: result.latency.average },
                { Metric: 'Throughput (bytes/sec)', Value: result.throughput.average }
            ]);
            console.table([
                { Status: '2xx', Count: result['2xx'] },
                { Status: '4xx', Count: result['4xx'] },
                { Status: '5xx', Count: result['5xx'] }
            ]);
        }
    });

    autocannon.track(instance);
});