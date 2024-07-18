const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const boardRouter = require('./routes/api/board-routes');
const cardRouter = require('./routes/api/card-routes');

const app = express();
app.use(bodyParser.json());

app.use('/boards', boardRouter);
app.use('/cards', cardRouter);

const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
