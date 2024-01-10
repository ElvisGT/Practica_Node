const fs = require("fs");
const path = require("path") 
const current_path = process.cwd()
const file = path.join(current_path,'Information_PC','info_pc.json')


function save_info(data){
    fs.writeFileSync(file,data)
}

module.exports = {save_info}