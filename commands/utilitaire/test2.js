const { MessageEmbed, Client } = require('discord.js');
const spdl = require('spdl-core');
function formatDuration(duration) {
    let seconds = duration / 1000;
    return `${Math.floor(seconds / 60)}m ${Math.floor(seconds % 60)}s`;
}

const client = new Client();
client.login('Nzk1Mjk4MDM2NjQ0MzE1MTY2.X_HVAw.4BEvmOPq6Blf2ZQSSOZfIigiapE');
client.on('ready', () => console.log('Ready'));

    client.on('message', async (msg) => {
    if (!msg.content.startsWith('$play')) return;
    const url = msg.content.split('$play ')[1];
    if (!spdl.validateURL(url)) return msg.channel.send('Invalid URL');
    const channel = msg.member.voice.channel;
    if (!channel) return msg.channel.send('Not in a voc channel');
    try {
        const connection = await channel.join();
        connection
            .play(await spdl(url))
            .on('error', e => console.error(e));
            const infos = await spdl.getInfo(url);
        const embed = new MessageEmbed()
            .setTitle(`Now playing: ${infos.title}`)
            .setURL(infos.url)
            .setColor('#1DB954')
            .addField('Artist', infos.artist, true)
            .addField('Duration', formatDuration(infos.duration), true)
            .setThumbnail(infos.thumbnail);
        msg.channel.send(embed);
    } catch (err) {
        console.error(err);
        msg.channel.send(`An error occurred: ${err.message}`);
    }
    });