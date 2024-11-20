const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_46_11_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTA3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTM2LFxuICAgICAgICA5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDc4LFxuICAgICAgICAyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk4LFxuICAgICAgICAzMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDc1LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ4LFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICA3OCxcbiAgICAgICAgMTc3LFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDg3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDk3LFxuICAgICAgICA4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTYzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyLFxuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDMxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyLFxuICAgICAgICA3LFxuICAgICAgICA0MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA0MSxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyLFxuICAgICAgICA3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0MixcbiAgICAgICAgMTgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDc4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYlNTa0RvcC9pREc5STFrYWxrU0M0SjI4eExoM1BSNE51SnR5eHlUMVZERT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUUhQQjRIUzFTa3FaTG1mR3llNlY1Z1wiLFxuICBcInBob25lSWRcIjogXCI5OTg2OTBiYS0wZGU3LTQ5ZDYtODY4YS03ZGNhNmZhOWZjOWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDAsXG4gICAgICAxOTgsXG4gICAgICAxNDEsXG4gICAgICA2MSxcbiAgICAgIDI1MyxcbiAgICAgIDIyOSxcbiAgICAgIDEzNyxcbiAgICAgIDczLFxuICAgICAgNSxcbiAgICAgIDI1MSxcbiAgICAgIDExOCxcbiAgICAgIDE4OCxcbiAgICAgIDc2LFxuICAgICAgODIsXG4gICAgICAzLFxuICAgICAgODYsXG4gICAgICA4MSxcbiAgICAgIDE2NyxcbiAgICAgIDIxNyxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDEzLFxuICAgICAgMjMxLFxuICAgICAgMTI2LFxuICAgICAgMTc5LFxuICAgICAgMjQ4LFxuICAgICAgNTEsXG4gICAgICAxOTQsXG4gICAgICAxMzcsXG4gICAgICAxMDYsXG4gICAgICA1OSxcbiAgICAgIDQwLFxuICAgICAgMjI5LFxuICAgICAgMjIyLFxuICAgICAgMjE2LFxuICAgICAgNDUsXG4gICAgICAyMjYsXG4gICAgICA0OCxcbiAgICAgIDE4OCxcbiAgICAgIDE2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4RExERzZZUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzQ2MDYwNTQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjk5MzkxNzUwODQwNzQ6M0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLaXFxNzRERUlYVzg3a0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjJlcDgrbForbGo1L0syZmFvMWEyL2lYZTdlNCt3SS9lRzQvM0NjTHBXeW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiY0VpSGJRRDQ1YS9oQmo0L3pXeVRwb0ZtR0tXOXdFdDZYcmFkQzBmTi9iZnFLaWRHaGU5NHB5UXRYRlpEUlJhN1NKZFdSRGdFeVdVd1dUUUNYYWh2REE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVmc2VTJ6THhRWnV2bDVNMVZkOVdPS0RlMXpSSlN0RjVzaVprY2tLM0twOHF6NjZhSHMvNVhyTXJyUXhZMSsvTW1KRDdRdy9KZ0ZiZXJkWnh0UUdTaWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzQ2MDYwNTQ3OjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyMDQ1NTc4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
