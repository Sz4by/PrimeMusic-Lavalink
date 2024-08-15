module.exports = {
  TOKEN: "",
  ownerID: ["1095731086513930260", ""], 
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#1db954",
  musicardTheme:"themes16", //Goes from themes1 to themes19
  activityName: "Deadpool & Rozsomák", // This is bot status Write Anything here 
  activityType: "WATCHING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://discord.gg/6Mqrsca8Zy",
  CheckmarkIcon: "https://cdn.discordapp.com/attachments/1230824451990622299/1230836684774576168/7762-verified-blue.gif",
  MusicIcon:"https://media.discordapp.net/attachments/1230824451990622299/1236664581364125787/music-play.gif",
  embedTimeout: 5,  // Timeout before the button interaction embeds are deleted ( Default - 5 seconds)
  errorLog: "https://discord.com/api/webhooks/1273649793159266437/qpaivXVbftOsQcDyHhzM-gM75QMWbt1aaOzlpB_9cDIIfNIoPxmvnipOu-MQEzNRFRq9", 

   // Lavalink Server Details

  nodes: [
    {
        name: "Node #1",
        host: "v3.lavalink.rocks",
        port: 443,
        password: "horizxon.tech",
        reconnectTimeout: 5000,
        reconnectTries: Infinity,
        secure: true
    },
 ]
}


