let ip = require('ip');

if(ip.isPrivate(ip.address())){
        console.error("Invalid network configuration, please check your machines settings");
        process.abort()
}
