const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

   if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");

    const user = message.mentions.members.first();
    
     if(!user) {
    
     return message.channel.send("Please mention the member to who you want to mute")
    
     }
    
     
    
     if(user.id === message.author.id) {
    
     return message.channel.send("I won't mute you");
    
     }
    
     
    
     
    
     let reason = args.slice(1).join(" ")
    
     
    
     
    
     if(!reason) {
    
     return message.channel.send("Give a reason")
    
     }
    
     
    
     let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
    
     
    
     if(!muterole) {
    
     return message.channel.send("this server does not have this role: `Muted`")
    
     }
    
    user.roles.add(muterole)
    
    let sureEmbed = new discord.MessageEmbed()
    
    .setTitle("Mute")
    
    .setDescription(`You muted **${message.mentions.users.first()} **for ${reason}`)
    
    .setColor("RED")
    
    let unmuteEmbed = new discord.MessageEmbed() //Feel free to edit embeds
    
    .setTitle("Success!")
    
    .setDescription(`Unmuted **${message.mentions.users.first()}`)
    
    .setColor("RED")
    
    .setFooter("Pog")
    
    
    
    message.channel.send({ embeds: [sureEmbed] })
    
     const collector = message.channel.createMessageComponentCollector({ filter: i => i.user.id === message.author.id, time: 50000 })
    
              
    
            collector.on('collect', async i => {
    
            if (i.customId === 'Unmute') {
    
                await i.update({
    
                    embeds:[unmuteEmbed]
    
                })
    
                await user.roles.remove(muterole)
    
            }})
    
     }
module.exports.help = {
    name: "mute",
    description: "Mute someone",
    category: "Informatie"
}