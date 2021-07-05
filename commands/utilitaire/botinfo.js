const { MessageEmbed } = require('discord.js');
const { Command } = require('discord.js-commando');
const { version } = require('../../package.json');
const { botimage, botname} = require('../../config.json');

module.exports = class BotInfoCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'botinfo',
            group: 'utilitaire',
            memberName: 'botinfo',
            description: 'info du bot',
        })
    }

    async run(message) {
        let totalMembers = 0

        for (const guild of this.client.guilds.cache) {
            totalMembers += (await guild[1].members.fetch()).size
        }

        const embed = new MessageEmbed()
            .setColor('BLUE')
            .setFooter(botname,botimage)
            .setAuthor(
                `Information de ${botname}`,
                this.client.user.displayAvatarURL()
            )
            .addFields(
                {
                    name: 'Tag du bot',
                    value: this.client.user.tag,
                },
                {
                    name: 'Version',
                    value: version,
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
                    value: this.client.guilds.cache.size
                },
                {
                    name: 'Membres Total',
                    value: totalMembers,
                }
                
            )

            embed.setTimestamp()

        message.say(embed)
    }
}


