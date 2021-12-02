const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
            .setTitle('RDJ Development')
            .setDescription("Zet de beschrijving")
            .setColor("#0099ff")
            .addField("Bot naam", client.user.username)

            .setTimestamp()
            .setFooter('Strike Enterprise | Made by Robin_Strike#1091');

        return message.channel.send({ embeds: [botEmbed]});

}

module.exports.help = {
    name: "info"
}