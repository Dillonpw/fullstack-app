const express = require('express');
const app = express();
const port = 9000;
const cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
    const responseData = {
        indexTitle: 'Hello, World!',
        indexSubTitle: 'This is a paragraph element',
    };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
