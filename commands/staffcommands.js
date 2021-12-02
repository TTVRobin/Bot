const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry only cool people can do this");

  var halloEmbed = new discord.MessageEmbed()
    .setTitle("Staff Bot Commands")
    .setDescription(`**Moderatie commands:**
                    -ban: banned a user.
                    -kick: kicked a user.
                    -warn: warned a user.
                    -mute: mutes a user.
                    -unmute: unmutes a user.
                      `)
    .setColor("GREEN")
    .setFooter("Strike Enterprise | Robin_Strike#1091");


    return message.channel.send({ embeds: [halloEmbed]});

}


module.exports.help = {
    name: "scommands",
    description: "Displays this list",
    category: "informatie"
}