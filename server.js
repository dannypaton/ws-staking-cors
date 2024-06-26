const corsProxy = require('cors-anywhere');

// Listen on a specific host via the HOST environment variable.
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable.
const port = process.env.PORT || 8080;

corsProxy.createServer({
    originWhitelist: ['http://localhost:3000', 'https://whitesands-stake-hipforcrypto.vercel.app', 'https://stake.whitesands.game', 'https://claim.whitesands.game', 'https://whitesands-stake.vercel.app', 'https://ws-claim.vercel.app', 'https://ws-claim.vercel.app/api/claim', 'https://ws-items-site.vercel.app', 'https://marketplace.whitesands.game', 'https://api.trexsapiens-order.com', 'https://bbsc-api.vercel.app', 'https://lottery-git-launchme-hipforcrypto.vercel.app', 'https://blazebet.io', 'https://api.coinconvert.net', 'https://marketplace.hyapes.online', 'https://testerino-9ac4d315b549.herokuapp.com', 'http://localhost:4200','https://auction-house-build.vercel.app'],
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, () => {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
