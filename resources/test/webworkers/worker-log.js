function log(msg){
    //输出日志
    postMessage({
        type:"log",
        msg:msg
    });
}