const Commando = require('discord.js-commando')
const path = require('path')
const sqlite = require('sqlite')

const client = new Commando.Client({
  commandPrefix: '#',
  owner: '321476068450107403',
  disableEveryone: true
})

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error)

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['league', 'League Commands']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('Logged in!');
    client.user.setGame('with Sam\'s mom');
})

client.login('MzIxNDc2MDY4NDUwMTA3NDAz.DC9iHw.p28EkgnzCRzs38brJZTmMWBVfXk')