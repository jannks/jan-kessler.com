import express from 'express';
import payload from 'payload';

// only for dev. On production, the environment variables are set by the container
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
    res.redirect('/admin');
});

const start = async () => {
    // Initialize Payload
    await payload.init({
        secret: process.env.PAYLOAD_SECRET,
        express: app,
        onInit: async () => {
            payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
        },
    });

    // Add your own express routes here

    app.listen(3000);
};

start();
