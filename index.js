const {spec_pc} = require("./get_info");
const {save_info} = require("./save_info");


function main(){
    const str_spec_pc = JSON.stringify(spec_pc)
    save_info(str_spec_pc);
}


main()
