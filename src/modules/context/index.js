import actions from "./actions";
import mutations from "./mutations";

export const ContextModule = {
  state: {
    initialized: false,
    arePlayerControlsVisible: false,
    bitrate: 0,
    bufferSize: 0,
    displayResolution: "",
    game: "",
    hlsLatencyBroadcaster: 0,
    hostingInfo: null,
    isFullScreen: false,
    isMuted: false,
    isPaused: false,
    isTheatreMode: false,
    language: "",
    mode: "",
    playbackMode: "",
    theme: "",
    videoResolution: "",
    volume: 0
  },
  mutations,
  actions
};
