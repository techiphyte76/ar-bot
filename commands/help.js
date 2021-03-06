const Discord = require("discord.js");

module.exports = {
  name: "help",
  description: "Help!",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("**Help**")
      .setAuthor("IB Bot")
      .setDescription("A bot originally designed for IB students.")
      .addFields(
        {
          name: "$ar [tomorrow]",
          value:
            "Generates the current day's AR period. If tomorrow argument is passed ($ar tomorrow) than tomorrow's AR will be returned.",
        },
        {
          name: "$pastpapers",
          value:
            "Sends link to past IB Exams",
        },
        {
          name: "$graduation",
          value:
            "Generates time until PHU's senior graduation (On Jun 1st, 2021)",
        },
        {
          name: "$graduation2",
          value:
            "Generates days until PHU's senior graduation excluding holidays and weekends (On Jun 1st, 2021)",
        },
        {
          name: "$birthday [person-name]",
          value:
            "Generates days until a specified member of the lunchtimes birthday",
        },
        {
          name: "$compliment {@user}",
          value:
            "Generates a compliment with the ability to be directed at a specified user",
        },
        {
          name: "$inspire {@user}",
          value:
            "Generates an inspirational quote with the ability to be directed at a specified user",
        },
        {
          name: "$inspire2 {@user}",
          value: "Sends more inspiration quotes - in image format",
        },
        {
          name: "$ibexams",
          value: "Counts days left til IB exams (May 3rd, 2021)",
        },
        {
          name: "$insult {@user}",
          value:
            "Generates insult with the ability to be directed at a specified user",
        },
        {
          name: "$info",
          value: "Fetches info about bot",
        },
        {
          name: "$insult2 {@user}",
          value:
            "Generates more extreme insult with the ability to be directed at a specified user",
        },
        {
          name: "$yomama {@user}",
          value: "Generates yo mama joke",
        },
        {
          name: "$dadjoke",
          value: "Generates a dad joke",
        },
        {
          name: "$8ball",
          value: "Generates a magic 8ball response",
        },
        {
          name: "$meme",
          value: "Fetches a meme",
        },
        {
          name: "$cat",
          value: "Fetches a cat image",
        },
        {
          name: "$dog",
          value: "Fetches a dog image",
        },
        {
          name: "$duck",
          value: "Fetches a duck image",
        },
        {
          name: "$nasa",
          value: "Fetches a NASA's astronomy picture of the day",
        },
        {
          name: "$pokemon {name of pokemon}",
          value:
            "Fetches the pokemon's sprite from given name {example: `$pokemon ditto`}",
        }
      )
      .setTimestamp()
      .setImage(
        "https://ar-bot-splash-page-git-main-techiphyte76.vercel.app/arBot.png"
      )
      .setURL("https://ar-bot-splash-page-git-main-techiphyte76.vercel.app/")
      .setFooter("Bot Made by Asif");

    message.channel.send(embed);
  },
};
