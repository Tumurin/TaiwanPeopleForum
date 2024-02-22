export default defineNuxtPlugin(function (nuxt) {
    // 令 console.log 印出檔案位置
    // let getStackTrace = function(){
    //     let obj = {}
    //     Error.captureStackTrace(obj,getStackTrace)
    //     return obj.stack;
    // }
    // let log = console.log
    // console.log = function(){
    //     let stack = getStackTrace() || ""
    //     let matchResult = stack.match(/\(.*?\)/g)||[]
    //     let line = matchResult[1] || ""
    //     for (let i in arguments){
    //         if (typeof arguments[i]=="object"){
    //             arguments[i] = JSON.stringify(arguments[i])
    //         }
    //         arguments[i] += '----' + line.replace("(","").replace(")","")
    //     }
    //     log.apply(console,arguments)   
    // }
});
