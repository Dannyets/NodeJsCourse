import dotenv from 'dotenv';

dotenv.config();

import { app } from './app';
import { config } from './utils';
import { ConfigKey } from './models';

app.set('port', config.get(ConfigKey.ServerPort));

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