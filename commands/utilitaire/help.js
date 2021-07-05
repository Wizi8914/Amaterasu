const { Command, CommandoMessage } = require('discord.js-commando');
const {MessageEmbed} = require('discord.js');
const { Commanddontexist } = require('../../strings.json');
const { botimage, botname} = require('../../config.json');

module.exports = class HelpCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'help',
            group: 'utilitaire',
            memberName: 'help',
            description: "commande d'aide bot",
        });
    }

    async run(message, args) {



        //=================   MUSIQUE    ========================

        if (args === "play" || args === "p") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande play`)
                .setDescription('Utilisation: `>play <text>`\n Aliases: `>p <text>`')
                .addField('Description:', '`La commande play permet de jouer de la musique dans un salon vocal`')
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "queue" || args === "list") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande queue`)
                .setDescription('Utilisation: `>queue <nombre>`\n Aliases: `>list <nombre>`')
                .addField('Description:', "`La commande queue permet d'aficher la liste des musique qui vont se succéder`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "skip") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande skip`)
                .setDescription('Utilisation: `>skip`')
                .addField('Description:', "`La commande skip permet de sauter une musique dans la queue`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "skipto") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande skipto`)
                .setDescription('Utilisation: `>skipto <nombre>`')
                .addField('Description:', "`La commande skipto permet de sauter plusieurs musiques dans la queue`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "join" || args === "j" || args === "summon") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande join`)
                .setDescription('Utilisation: `>join`\n Aliases: `>j`, `>summon`')
                .addField('Description:', "`La commande join permet de faire venir Amaterasu dans votre valon vocal`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "leave" || args === "stop") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande leave`)
                .setDescription('Utilisation: `>leave`\n Aliases: `>stop`')
                .addField('Description:', "`La commande stop permet de faire partir Amaterasu de votre vocal`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "pause") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande pause`)
                .setDescription('Utilisation: `>pause`')
                .addField('Description:', "`La commande pause permet permet de mettre la musique jouer en pause`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "resume") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande resume`)
                .setDescription('Utilisation: `>resume`')
                .addField('Description:', "`La commande resume permet de reprendre l'écoute du song mie en pause`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "info" || args === "i" || args === "np") {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande info`)
                .setDescription('Utilisation: `>info`\n Aliases: `>i`, `>np`')
                .addField('Description:', "`La commande info permet d'aficher la musique en cour de lecture`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === "clear" || args === "clearqueue" || args === 'clearlist') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande clear`)
                .setDescription('Utilisation: `>clear`\n Aliases: `>clearqueue`, `clearlist`')
                .addField('Description:', "`La commande clear permet de suprimer l'intégraliter de la queue sauf la musique actuellement en train d'ètre jouer`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'lyrics') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande lyrics`)
                .setDescription('Utilisation: `>lyrics`')
                .addField('Description:', "`La commande lyrics permet d'afficher les paroles de la musique qui est actuellement entrain d'ètre jouer`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }



        //================    DIVERS    =========================

        if (args === 'icon') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande icon`)
                .setDescription('Utilisation: `>icon`')
                .addField('Description:', "`La commande icon permet d'afficher l'image de profile du bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }

        if (args === 'invite') {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle(`Info de la commande invite`)
                .setDescription('Utilisation: `>invite`')
                .addField('Description:', "`La commande invite permet d'afficher l'image de profile du bot`")
                .setFooter(botname,botimage)

            message.say(embed)

            return;
        }


        if (!args) {
            const embed = new MessageEmbed()
                .setColor('BLUE')
                .setTitle("Liste des commandes de " + botname)
                .setDescription('Le prefix pour utiliser le Amaterasu est ' + "`>` \n" + "Information sur une commande " + "`>help <text>`")
                .addField(":notes: MUSIQUE :", "`play`, " + "`queue`, " + "`skip`, " + "`skipto`, " + "`join`, " + "`leave`, \n" + "`pause`, " + "`resume`, " + "`info`, " + "`clear`, " + "`lyrics`")
                .addField(":jigsaw: DIVERS :", "`icon`, " + "`invite`, " + "`soundboard`, " + "`coinflip`, \n" + "`calcul`, " + "`say`, " + "`gif`, " + "`avatar`, " + "`sbstats`")
                .addField(":tools: UTILITAIRE :", "`help`, " + "`ping`, " + "`botinfo`, " + "`clearchat`, " + "`server`, \n" + "`roles`")
                .addField(":shield: MODÉRATION :", "`kick`, " + "`ban`")

            embed.setFooter(botname,botimage)
            embed.setTimestamp()


            message.say(embed)

            return;
        } else {
            message.say(Commanddontexist);
        }

    }
}