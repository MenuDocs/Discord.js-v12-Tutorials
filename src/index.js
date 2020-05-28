const MenuDocsClient = require('./Structures/MenuDocsClient');
const config = require('../config.json');

const client = new MenuDocsClient(config);
client.start();
