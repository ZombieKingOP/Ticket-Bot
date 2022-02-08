require('dotenv').config();
const keepAlive = require('./server');
const { Client, Collection, Intents } = require('discord.js');
const client = new Client({ disableMentions: 'everyone', partials: ['MESSAGE', 'CHANNEL', 'REACTION'], ws: { intents: Intents.ALL } });

client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

keepAlive();
client.login(process.env.OTQwNDY2MTMxNzcxMjI0MDY3.YgHzVg.BrXxGKPlr3D5RxOGewzX3DmDtB8);
