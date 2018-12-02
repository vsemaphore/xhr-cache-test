const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log('req', req.body);
    res.redirect('/public');
});

app.get('/api/:time?', (req, res) => {
    const cacheTime = req.params.time || 30;
    console.log('API called with time param', req.params.time, cacheTime);

    res.setHeader('Cache-Control', `public, max-age=${cacheTime}`);

    res.json({
        now: new Date(), cacheTime
    });
});


app.use(`/public`,
    express.static(path.join(__dirname, './public'))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
