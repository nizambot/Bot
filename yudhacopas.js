const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./dha.js')
nocache('../dha.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('PSYCO BOT', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ SOURCE CODE INI DI RECODE OLEH NIZAM\nDENGAN AUTHOR PINO MODZ ]\n\n', 'orange'), color('\n======TERIMAKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•HRUTZOFFC\n•KURRXD\n•NINO\n•IKYADS\n•KurrXd\n•PSYCO BOT\n•DAPPAUHUY\n•DAN CREATOR BOT LAINNYA', 'yellow'))
	console.log(color('\n\nSARAN JANGAN DI JUAL ULANG BRO\nKALAU ADA YG MINTA SURUH CHAT SAYA\nWA PSYCO BOT 6285643260438', 'pink'))
	console.log(color('\n\n[ SAYA DOAKAN YANG SUBSCRIBE LANCAR, ANTI ERROR PAS RECODE DAN YG TIDAK, YA TAU LAH AKIBAT NYA', 'red'))
	dha.browserDescription = ["PSYCO BOT", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCANLAH BROKAN LU OWNER GUA SEKARANG'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ PSYCO BOT ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "P",
    "Psy",
    "Psyc",
    "Psych",
    "Psycho",
    "Psycho G",
    "Psycho GA",
    "Psycho GAN",
    "Psycho GANT",
    "Psycho GANTE",
    "Psycho GANTEN",
    "Psycho GANTENG",
    "S",
    "SU",
    "SUK",
    "SUKS",
    "SUKSE",
    "SUKSES",
    "SUKSES T",
    "SUKSES TE",
    "SUKSES TER",
    "SUKSES TERHU",
    "SUKSES TERHUB",
    "SUKSES TERHUBU",
    "SUKSES TERHUBUN",
    "SUKSES TERHUBUNG",
    "SUKSES TERHUBUNG K",
    "SUKSES TERHUBUNG KE",
    "SUKSES TERHUBUNG KE S",
    "SUKSES TERHUBUNG KE SE",
    "SUKSES TERHUBUNG KE SER",
    "SUKSES TERHUBUNG KE SERV",
    "SUKSES TERHUBUNG KE SERVE",
    "SUKSES TERHUBUNG KE SERVER",
    "SUKSES TERHUBUNG KE SERVER P",
    "SUKSES TERHUBUNG KE SERVER PS",
    "SUKSES TERHUBUNG KE SERVER PSY",
    "SUKSES TERHUBUNG KE SERVER PSYC",
    "SUKSES TERHUBUNG KE SERVER PSYCH",
    "SUKSES TERHUBUNG KE SERVER PSYCHO",
    "SUKSES TERHUBUNG KE SERVER PSYCHO B",
    "SUKSES TERHUBUNG KE SERVER PSYCHO BO",
    "SUKSES TERHUBUNG KE SERVER PSYCHO BOT",
    "SUKSES TERHUBUNG KE SERVER PSYCHO BOTZ"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ PSYCO BOT ]', 'yellow'), color('BOT SUDAH AKTIF  SELAMAT MENGGUNAKAN'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./dha.js')(dha, message)
	})
}

starts()