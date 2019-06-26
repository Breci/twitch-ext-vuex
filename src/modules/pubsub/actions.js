export default {
    sendPubSubMessage(context, {target,contentType,message}) {
        window.Twitch.ext.send(target, contentType, message)
    },
    listenPubSubMessage(context,{target,callback}) {
        window.Twitch.ext.listen(target, callback)
    },
    unlistenPubSubMessage(context,{target,callback}) {
        window.Twitch.ext.unlisten(target, callback)
    },
};
