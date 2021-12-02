const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

        var num = Math.floor(Math.random() * (500 - 1) + 1);
        message.channel.send({
          files: [
            {
              attachment: `https://ctk-api.herokuapp.com/meme/${num}`,
              name: "meme.jpg",
            },
          ],
        });
      },
    

module.exports.help = {
    name: "meme",
    description: "Send memes",
    category: "Informatie"
}