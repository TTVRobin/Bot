const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var serverEmbed = new Discord.MessageEmbed()
        .setTitle("Strike Enterprise")
        .setDescription("This bot is in the making for Strike Enterprise")
        .setColor("AQUA")
        .addFields(
             {name: "Bot naame", value: client.user.username },
            { name: "You have joined this server on", value: message.member.joinedAt.toString() },
            { name: "Total members", value:message.guild.memberCount.toString() }
        );

     message.channel.send({ embeds: [serverEmbed]});
   message.delete();
},

    
 


module.exports.help = {
    name: "serverinfo"
}