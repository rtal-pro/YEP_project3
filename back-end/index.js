const peerServer = require('peer').PeerServer;

const server = new peerServer({port: 4000, path: '/'});