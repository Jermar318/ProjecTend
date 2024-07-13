const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models').sequelize;
const boardRouter = require('./routes/board');
const listRouter = require('./routes/list');
const cardRouter = require('./routes/card');

const app = express();
app.use(bodyParser.json());

app.use('/boards', boardRouter);
app.use('/lists', listRouter);
app.use('/cards', cardRouter);

const PORT = process.env.PORT || 3001;

// Start the server on port 3001  
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});  