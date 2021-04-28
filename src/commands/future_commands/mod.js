// -----------------
// Global variables
// -----------------

// Codebeat:disable[LOC,ABC,BLOCK_NESTING,ARITY]
const sendMessage = require("../../core/command.send");

// ----
// Ban
// ----

module.exports.ban = function ban (data)
{

   // -------------
   // Command Code
   // -------------

   console.log("DEBUG: Ban");

   data.color = "info";
   data.text = `Ban`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

// ------
// Unban
// ------

module.exports.unban = function unban (data)
{

   // -------------
   // Command Code
   // -------------

   console.log("DEBUG: Unban");

   data.color = "info";
   data.text = `Unban`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

// -----
// Mute
// -----

module.exports.mute = function mute (data)
{

   // -------------
   // Command Code
   // -------------

   console.log("DEBUG: Mute");

   data.color = "info";
   data.text = `Mute`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

// -------
// Unmute
// -------

module.exports.unmute = function unmute (data)
{

   // -------------
   // Command Code
   // -------------

   console.log("DEBUG: Unmute");

   data.color = "info";
   data.text = `Unmute`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};

// -------
// Server
// -------

module.exports.server = function server (data)
{

   // -------------
   // Command Code
   // -------------

   console.log("DEBUG: server");

   data.color = "info";
   data.text = `*Server Information Name:*\n`;
   data.text += `*Server Name:* \`${data.message.channel.guild.name}\`\n`;
   data.text += `*Server ID:* \`${data.message.channel.guild.id}\`\n`;
   data.text += `*Server Owner:* ${data.message.guild.owner}\n\n`;
   data.text += `*Number of Users:* \`${data.message.guild.memberCount}\`\n`;
   data.text += `*Verification Level:* \`${data.message.guild.verificationLevel}\`\n`;

   // -------------
   // Send message
   // -------------

   return sendMessage(data);

};
