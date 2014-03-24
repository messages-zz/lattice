importScripts("worker-log.js")
//接收信息
onmessage = function(event){
	//输出信息到日志
	log("Worker收到了信息"+event.data);
}