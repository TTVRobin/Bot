const discord = require("discord.js");


module.exports.run = async (client, message, args) => {

    if (!message.member.permissions.has("KICK_MEMBERS")) return message.reply("Sorry you're missing the KICK_MEMBERS premissions");

    if(!args[0]) return message.channel.send("You must provide a userID.");
    try {
        const user = await message.guild.members.unban(args[0]);
        return message.channel.send(`**${user.tag} has been unbanned.**`);
    } catch {
        return message.channel.send("sorry i can't unban this person.");

    }
}








module.exports.help = {
    name: "unban",
    description: "unban",
    category: "Informatie"
}