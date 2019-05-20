# Twitch-Ext-Vuex

An abstraction of the Twitch Extension helper for VueX

## Description

This lib allow you to abstract the Twitch extension helper for your twitch extension project using Vue / Vuex.

You can easily have a reactive Twitch extension without worrying about all the set up.


## Dependencies

- Vue
- Vuex

## How to use

### Use the Vue plugin
By default the store will be accessible on the `twitch` module.

You need to create the store before using it in the plugin.

```
import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import { ExtensionPlugin } from "twitchext-vuex";

Vue.use(Vuex);

const store = new Vuex.Store();

Vue.use(ExtensionPlugin, { store });

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
```

You will be able to to access the data as computed values
```
computed(){
  ...
  opaqueId(){
    return this.$twitchExtension.viewer.id
  }
}
```


## Store description

### General data

The data structure is based on the - [Twitch Extension Helper](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper)

You can access the data using the same structure
```
...
computed:{
  ...
  opaqueId(){
    return this.$twitchExtension.viewer.id
  }
}
```

### Custom data
`isExtensionInitialized` returns a boolean telling you if the data have been loaded on the store. 

#### bits
`bits.getBitsAmount(sku:string):number` return the bits amount of given sku. Return 0 if the sku doesn't exist.

`bits.hasOngoingBitTransaction:boolean` return if the user has a bits transaction going on. 

#### Channel
`channel.initialized:boolean` return if the channel information have been set.

`id:string` return the channel id of the stream.

#### Configuration Service
`configuration.initialized:boolean` return if the configuration service has been set.

#### Context

For the default data structure see the [OnContext method](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper).

The same structure is used to store the data under the `context` field.

`context.initialized:boolean` return if the context information have been set.

#### Position
`position.initialized:boolean` return if the position information have been set.

#### Viewer
`viewer.initialized:boolean` return if the viewer information have been set.


For example :
```
...
computed:{
  ...
  isExtensionInitialized(){
    return this.$twitchExtension.isExtensionInitialized
  }
}
```


## Organize it yourself


### Use a custom main module name
```
import Vue from "vue";
import App from "./App";
import Vuex from "vuex";
import { ExtensionPlugin } from "twitchext-vuex";

Vue.use(Vuex);

const store = new Vuex.Store();

Vue.use(ExtensionPlugin, { store, module:'extension' });

new Vue({
  el: "#app",
  store,
  render: h => h(App)
});
```

### Vuex modules

All the modules of the store can be imported independently 

```
import {
UserInfoModule,
  ChannelInfoModule,
  ContextModule,
  ConfigurationServiceModule,
  ClientQueryParametersModule,
  BitsModule,
  FeaturesModule,
  HighlightModule,
  PositionModule,
  ActionsModule
} from 'twitchext-vuex'
```


### Link the helper to the store

This lib also includes a script to automatically update the store data from the Twitch Extension helper

```
import { LinkHelperToStore } from 'twitchext-vuex'

LinkHelperToStore(store)
```

## Resources
- [Twitch Documentation](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper)