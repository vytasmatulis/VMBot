const { Command } = require('discord.js-commando');
var gg = new (require('node_modules/op.gg-api/client.js'))
 
gg.Live('kr')
    .then((json) => {
        console.log(json)
    })
    .catch((error) => {
        console.error(error)
    })
 
gg.Live('kr', function(error, data) {
    console.log(error || data)
})
module.exports = class ReplyCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'rank',
            group: 'league',
            memberName: 'rank',
            description: 'Return league rank ',
            args: [
                {
                    key: 'account',
                    prompt: 'Which league account?',
                    type: 'string'
                }
            ]
        });
    }
     run(msg, args) {
        const { account } = args
        gg.Live('kr')
        .then((json) => {
            console.log(json)
        })
        .catch((error) => {
            console.error(error)
        })

        return user.send(msg);
    }
};