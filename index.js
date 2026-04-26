const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login(client.login(process.env.MTQ5Nzg3ODEyNDkyNTQyMzczNw.G7RNqz.5n2QQnLhhE-88LBtepszp8wkKx98I5eIcvfXAg);

