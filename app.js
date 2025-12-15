import express from 'express';
import session from 'express-session';
import tasks from './routes/tasks.js';
import users from './routes/users.js';
import options from './lib/environment.js';

const staticDir = 'static';

const app = express();

app.use(express.raw({ type: '*/*' }));
app.use(session({secret: 'replaceWithMoreSecureSecret', resave: false, saveUninitialized: false}));

app.use('/task', tasks);
app.use('/user', users);
app.use(express.static(staticDir));


const server = app.listen(options.listenPort, () => console.log(`Example app listening at port ${options.listenPort}!`));
