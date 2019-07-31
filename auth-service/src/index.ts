import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';

const host = '0.0.0.0';
const port = '8080';

app.set('port', port);

const server = app.listen(port, () => {
    const env = app.get('env');

    console.log(`App is running at http://${host}:${port} in ${env} mode`);

    console.log('Press CTRL + C to exit.');
});

export {
    server
};
