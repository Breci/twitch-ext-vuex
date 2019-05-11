export default {
    updateConfiguration(context, {developer, broadcaster, global}) {
        context.dispatch('updateGlobalSegment', global);
        context.dispatch('updateDeveloperSegment', developer);
        context.dispatch('updateBroadcasterSegment', broadcaster);
        context.commit('SET_CONFIGURATION_SERVICE_INITIALIZED')
    },
    updateGlobalSegment(context, segment) {
        context.commit('UPDATE_GLOBAL', segment)
    },
    updateDeveloperSegment(context, segment) {
        context.commit('UPDATE_DEVELOPER', segment)
    },
    updateBroadcasterSegment(context, segment) {
        context.commit('UPDATE_BROADCASTER', segment)
    },
    setBroadcasterSegment(context, {version, content}) {
        context.dispatch('setSegment', {segment: 'broadcaster', version, content})
    },
    setSegment(context, {segment, version, content}) {
        const _content = typeof content === 'string' ? content : JSON.stringify(content)
        window.Twitch.ext.configuration.set(segment, version, _content)
        context.dispatch('updateBroadcaster', {
            version: version,
            content: _content
        })
    },
    onConfigurationChanged(context, callback) {
        window.Twitch.ext.configuration.onChanged(callback);
    }
}