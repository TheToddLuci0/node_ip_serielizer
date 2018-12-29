let ip = require('ip');

if(ip.address().indexOf("10.") > -1){
console.error("Invalid network configuration, please check your machines settings");
process.abort()
}
if(ip.address().indexOf("192.168.") > -1){
console.error("Invalid network configuration, please check your machines settings");
process.abort()
}
for(let i=16; i<32; i++){
    if(ip.address().indexOf("172."+i.toString()) > -1){
        console.error("Invalid network configuration, please check your machines settings");
        process.abort()
    }

}
