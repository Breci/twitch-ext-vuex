export default {
    followChannel(context, channelName) {
        window.Twitch.ext.actions.followChannel(channelName);
    },
    minimize(context) {
        window.Twitch.ext.actions.minimize();
    },
    onFollow(context, callback) {
        window.Twitch.ext.actions.onFollow(callback);
    },
    requestIdShare(context) {
        window.Twitch.ext.actions.requestIdShare();
    }
};
