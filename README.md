# Twitch-Ext-Vuex

An abstraction of the Twitch Extension helper for VueX

## Description

This lib allow you to tally abstract the Twitch extension helper for your twitch extension project.

You can easily have a reactive Twitch extension without worrying about all the set up.


## How to use

### Use the default store

```
import { DefaultStore } from 'twitchext-vuex'

let vue = new Vue({
  el: "#app",
  store: DefaultStore,
  render: h => h(App)
});

```

### Add to an existing store
```
import { DefaultStore } from 'twitchext-vuex'

let store = {
  ...
  modules: {
    twitch: DefaultStore,
  }
};
```

You will be able to to access the store in your components with
```
this.$store.state.twitch
```

### Add modules to an existing store

You can also include some specific modules to your store

```
import { UserInfoModule } from 'twitchext-vuex'

let store = {
  ...
  modules: {
    user: UserInfoModule,
  }
};
```

### Link the helper to the store

#### Vue plugin

You can easily link the data with the Vue Plugin

```
import Vue from "vue"
import { ExtensionHelperPlugin } from 'twitchext-vuex'

Vue.use(ExtensionHelperPlugin)
```
#### Initialisation script

This lib also a script to automatically update the store data from the Twitch Extension helper

```
import { linkStoreToHelper } from 'twitchext-vuex'

linkStoreToHelper()
```

## Store description

### Modules

#### Channel

#### Query Params

#### Configuration Service

#### Context

#### Features

#### Highlight

#### Position

#### PubSub

#### User

### Getters

`isExtensionInitialized` returns a boolean telling you if the data have been loaded on the store. 

```
...
computed:{
  ...
  isExtensionInitialized(){
    return this.$store.getters.isExtensionInitialized()
  }
}
```

## Resources
- [Twitch Documentation](https://dev.twitch.tv/docs/extensions/reference/#javascript-helper)