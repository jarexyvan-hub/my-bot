const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.login("MTQ5Nzg3ODEyNDkyNTQyMzczNw.GtDHMK.dtZDDArLFqN8P5LL8AKosHnHkryQUP4R4ro3BE");

