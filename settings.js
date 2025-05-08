//CREATOR Gxyenn 
//Version Script No Version

const fs = require('fs');
const chalk = require('chalk');
const XlesySet = require('./XlesySet'); // Import konfigurasi dari XlesySet.js

//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\

// Data bot
global.author = XlesySet.author;
global.namestore = XlesySet.namestore;
global.packname = XlesySet.packname;
global.botname = XlesySet.botname;
global.owner = XlesySet.owner;
global.listprefix = XlesySet.listprefix;
global.listv = XlesySet.listv;
global.number_bot = XlesySet.number_bot;
global.tempatDB = 'database.json'
global.pairing_code = true

// Data pembayaran
global.dana = XlesySet.dana;
global.gopay = XlesySet.gopay;
global.ovo = XlesySet.ovo;
global.pulsa = XlesySet.pulsa;
global.qris = XlesySet.qris;

// Cppanel Apikey
global.egg = XlesySet.egg;
global.nestid = XlesySet.nestid;
global.loc = XlesySet.loc;
global.domain = XlesySet.domain;
global.apikey = XlesySet.apikey;
global.capikey = XlesySet.capikey;


global.img = {
    thumbnailganda: 'https://cloudkuimages.guru/uploads/images/681c7a1643366.jpg',
    // image pasyment
    danaimg: 'https://cloudkuimages.guru/uploads/images/681c7cc34ee99.jpg',
    gopayimg: 'https://cloudkuimages.guru/uploads/files/681c7cfc33f03.jpg',
    ovoimg: 'https://cloudkuimages.guru/uploads/images/681c7d28ed23f.jpg',
    qrisimg: './lib/media/image/qris.jpg',
    // Image need    
    others: 'https://cloudkuimages.guru/uploads/images/681c7e203b9a7.jpg',
    // image menu-menu
    menu: './lib/media/image/Gxyenn.jpg',
    menu2: './lib/media/image/Gxyenn2.jpg',
    }

global.fake = {    
	anonim: 'https://telegra.ph/file/95670d63378f7f4210f03.png',
	thumbnailUrl: 'https://files.catbox.moe/92vy0p.jpg',
	thumbnail: fs.readFileSync('./src/media/Xlesy.png'),
	docs: fs.readFileSync('./src/media/fake.pdf'),
	listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],
}

global.my = {
	yt: 'https://www.youtube.com/@Xlesy-Gxyenn',
	gh: 'https://github.com/Gxyenn/Gxyenn',
	gc: 'https://whatsapp.com/channel/0029Vap5nJh2UPBDIc9bja1s',
	ch: '120363334736301537@newsletter',
}

global.limit = {
	free: 15,
	premium: 999,
	vip: 9999
}

global.uang = {
	free: 10000,
	premium: 1000000,
	vip: 10000000
}

global.mess = {
	key0: 'Your Apikey has run out!.\n_Please contact the creator to buy your Apikey back._',
	owner: '*</> ACCESS DITOLAK*\nOwner Special Features!',
	admin: '*</> ACCESS DITOLAK*\nAdmin Special Features!',
	botAdmin: '*</> ACCESS DITOLAK*\nBot Not Admin!',
	group: '*</> ACCESS DITOLAK*\nUse In Group!',
	private: '*</> ACCESS DITOLAK*\nUse In Private Chat!',
	limit: '*</> ACCESS DITOLAK*\nYour Limit Has Been finished!',
	prem: '*</> ACCESS DITOLAK*\npremium users only!',
	wait: '*</> ACCESS ACCEPTED*\nWait a moment, Lovers" XLESYVIP ♡.',
	error: 'Error!',
	done: 'SUCCEED!.',
	load: '*</> ACCESS ACCEPTED*\nLoading!...'
}

global.APIs = {
  Xlesy: 'https://rest-api-gxyenn.vercel.app/',
}

global.APIKeys = {
  'https://rest-api-gxyenn.vercel.app/': 'Xlesy-awokawok', // API Key yang dihasilkan
}

//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
