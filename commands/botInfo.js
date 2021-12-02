const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new Discord.MessageEmbed()
        .setTitle("Strike Enterprise")
        .setDescription("A bot for Strike Enterprise")
        .setColor("AQUA")
        .addField("Bot name", client.user.username)
        .setThumbnail("https://i.imgur.com/bUIAwHP.jpeg")
        .setImage("https://i.imgur.com/bUIAwHP.jpeg")
        .setTimestamp()
        .setFooter("Strike Enterprise | Made by Robin_Strike#1091")

    return message.channel.send({ embeds: [botEmbed] });

    
 
}

module.exports.help = {
    name: "botinfo"
}