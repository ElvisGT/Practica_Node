const os = require('os');
const {gb} = require("./convert_gb");

const cpu_model = os.cpus()[0].model.trim()
const user_name = os.hostname()
const total_mem = gb
const win_ver = os.version()

const spec_pc = {
    cpu_model,
    operative_system:win_ver,
    ram:total_mem,
    user_name,
}

module.exports = {
    spec_pc
}