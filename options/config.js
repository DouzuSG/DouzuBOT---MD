/**
 - Created By Lexxy Official
 - Base Ori Dika Ardnt
*/

const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = fs.readFileSync("./plugins/media/image/thumb1.jpg")
global.log0 = fs.readFileSync("./plugins/media/image/thumb1.jpg")
global.err4r = fs.readFileSync("./plugins/media/image/thumb1.jpg")
global.locimg = fs.readFileSync("./plugins/media/image/loc.jpg")
global.owner = ['62881010433146']
global.numberOwner = "62881010433146"
global.group = "https://chat.whatsapp.com/I2W7heZWXM51RkhrsuJRpu"
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = ['120363043965529911@g.us','120363023112413670@g.us','19054091487-1424650263@g.us','120363022988111568@g.us']
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "Douzu Bot"
global.author = "DouzuSG"
global.sessionName = "session"
global.footer = "© Recode By DouzuSG"
global.linkgrupss = "https://chat.whatsapp.com/I2W7heZWXM51RkhrsuJRpu"
global.antitags = true
global.txtSewabot = "Tidak Open Sewa Bot 🗿"
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
