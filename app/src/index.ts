import { app } from './app';
import dotenv from 'dotenv';

dotenv.config();

app.set('port', process.env.SERVER_PORT);

const port = app.get('port');

const server = app.listen(port, () => {
    console.log(
        'App is running at http://localhost:%d in %s mode',
        app.get('port'),
        app.get('env')
    );
    
    console.log('Press CTRL + C to exit.')
});

export {
    server
};