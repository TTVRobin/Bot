const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");

    var reason = args.slice(1).join(" ");

    const target = message.mentions.users.first();
    if(target){
        const memberTarget = message.guild.members.cache.get(target.id);
        memberTarget.kick();

        var embedPrompt = new discord.MessageEmbed() 

        .setTitle("Kick info:")
        .setDescription(`**Kicked:** ${target} 
                         **Reason:** ${reason}`)
        .setColor("RED")
        .setTimestamp()
        .setFooter("Strike Enterprise | Made by Robin_Strike#1091")

        message.channel.send({ embeds: [embedPrompt]});
    }else{
        message.channel.send(`He's already gone`);
    }
}

module.exports.help = {
    name: "kick",
    
}