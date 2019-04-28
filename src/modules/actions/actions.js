export default {
    listen(context,{target,callback}){
        window.Twitch.ext.listen(target,callback)
    },
    unlisten(context,{target,callback}){
        window.Twitch.ext.unlisten(target,callback)
    }
}