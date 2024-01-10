const os = require("os")

const total = os.totalmem()
const kb = total / 1024;
const mb = kb / 1024;
const gb = Math.round(mb / 1024) + ' GB';

module.exports = {
    gb
}

