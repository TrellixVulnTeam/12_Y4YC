let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', '𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢LINTANG\nSubscribe : https://instagram.com/joceylintangg', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler


