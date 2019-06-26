export default {
    UPDATE_QUERY_PARAMETERS(state) {
        const urlParams = new URLSearchParams(window.location.search);
        state.anchor = urlParams.get("anchor");
        state.language = urlParams.get("language");
        state.locale = urlParams.get("locale");
        state.mode = urlParams.get("mode");
        state.platform = urlParams.get("platform");
        state.popout = urlParams.get("popout");
        state.state = urlParams.get("state");
        state.legacyComponentDesign = urlParams.get("legacyComponentDesign")
    }
}