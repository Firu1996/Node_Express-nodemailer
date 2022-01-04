const express = require('express');
const app = express();

const route = require('./route/route');
app.use(express.json());

app.use('/api', route);

app.listen(4000, () => {
    console.log(`Server is running at PORT 4000`);
})

