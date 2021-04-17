let handler = function (m) {
  // this.sendContact(m.chat, '5511953514455', 'Panda', m)
  this.sendContact(m.chat, '5511953514455', 'Panda', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
