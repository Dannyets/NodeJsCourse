import { app } from './app';

app.set('port', process.env.PORT || 3000);

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