const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const boardRouter = require('./routes/api/board-routes');
const cardRouter = require('./routes/api/card-routes');
const userRouter = require('./routes/api/user-routes');
const commentRouter = require('./routes/api/comment-routes'); // Add commentRouter

const app = express();
app.use(bodyParser.json());

app.use('/boards', boardRouter);
app.use('/cards', cardRouter);
app.use('/comment', commentRouter); 
app.use('/user', userRouter); 


const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
