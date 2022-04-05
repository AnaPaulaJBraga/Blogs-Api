const app = require('express')();
const bodyParser = require('body-parser');
const userRoute = require('./routes/userRoute');
const loginRoute = require('./routes/loginRoute');
const categoryRoute = require('./routes/categoryRoute');
const postRoute = require('./routes/postRoute');
const errorMiddleware = require('./middlewares/errorMiddleware');
const authValidate = require('./middlewares/authValidate');

app.use(bodyParser.json());

app.use(authValidate);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/', loginRoute);

app.use('/user', userRoute);

app.use('/categories', categoryRoute);

app.use('/post', postRoute);

app.use('/get', postRoute);

app.use(errorMiddleware);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
