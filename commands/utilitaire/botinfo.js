const { MessageEmbed, version } = require('discord.js');
const { Command, CommandoMessage } = require('discord.js-commando');
const { botversion, repository } = require('../../package.json');
const { botimage, botname} = require('../../config.js');
var cpuStat = require('cpu-stat');

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            group: 'utilitaire',
            memberName: 'botinfo',
            description: 'info du bot',
        })
    }

    /**
     * 
     * @param {CommandoMessage} message 
     */

    async run(message) {
        let totalMembers = 0
        const client = this.client

        for (const guild of this.client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }

        cpuStat.usagePercent(function(err, percent, seconds) {

            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setFooter(botname,botimage)
            .setAuthor(
                `Information de ${botname}`,
                client.user.displayAvatarURL()
            )
            .addFields(
                {
                    name: 'Tag du bot',
                    value: client.user.tag,
                },
                {
                    name: 'Version',
                    value: botversion,
                },
                {
                    name: 'Développeur',
                    value: `WIZI#3492`,
                },
                {
                    name: "Préfix du bot",
                    value: message.guild.commandPrefix,
                },
                {
                    name: 'Dernier restart',
                    value: `${process.uptime().toFixed(2)}s`,
                },
                {
                    name: 'Nombre de serveur',
                    value: client.guilds.cache.size
                },
                {
                    name: 'Membres Total',
                    value: totalMembers,
                },
                {
                    name: 'Repository',
                    value: repository.url.replace('.git', ' ')
                },
                {
                    name: '% du CPU',
                    value: percent + '%'
                },
                {
                    name: 'Version de Node.js',
                    value: process.version
                },
                {
                    name: 'Version de Discord.js',
                    value: version
                }
            )
            /*embed.addField("Links", [
                ":star: [GitHub Repository](https://github.com/ravener/miyako)",
                ":robot: [Upvote me at top.gg](https://top.gg/bot/397796982120382464)",
                ":envelope_with_arrow: [Invite me to your server](https://discordapp.com/oauth2/authorize?client_id=397796982120382464&permissions=2016537702&scope=bot)",
                ":video_game: [Join our Discord Server](https://discord.gg/mDkMbEh)"
              ].join("\n")) */

            embed.setTimestamp()

        message.say(embed)

        })
    }
}