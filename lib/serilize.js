let ip = require('ip');

if(ip.address().indexOf("10.") > -1){
console.error("Invalid network configuration, please check your machines settings")
process.abort()
}
if(ip.address().indexOf("192.168.") > -1){
console.error("Invalid network configuration, please check your machines settings")
process.abort()
}
if(ip.address().indexOf("172.16") > -1){
console.error("Invalid network configuration, please check your machines settings")
process.abort()
}
