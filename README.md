# Week 9 Day 2: React Native

**REPO: https://github.com/NimaBoscarino/react-native-notes**

A zero-dependency method of navigation: https://gist.github.com/NimaBoscarino/e668e4061381c95e300669206d20a1a5

[Video](https://www.youtube.com/watch?v=D2svnE8aAeI)

#### As always, I recommend taking a look at the documentation:

1. [**React Native docs**](https://facebook.github.io/react-native/)

2. [**Expo docs**](https://docs.expo.io/versions/latest/)

---  
Today we took a look at React Native. In short, it's a framework that lets us build **native** apps using React. We talked about the distinction of what a *native* app is, and what some of the other methods of building apps are. To sum up, we have...

1. Native Apps (i.e. in Java or Swift)
2. Hybrid Apps (Cordova, Phonegap ... these are just "webview" apps)
3. [Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/) (I actually recommend reading up on these)
4. Frameworks like React Native!

The main idea is that React Native lets us write in React, and the components that we use are actual native components. This means that the apps we create can look and feel like *real* iOS and Android apps.

In the lecture we started by using `create-react-native-app`, which gives us a nice development environment that allows building iOS and Android apps **without** having XCode or Android Studio installed. Instead, I streamed the demo apps to my phone (and the phone simulator) using the **Expo Client** app (more on that below).

Writing React Native code is essentially the same as writing React code, in that we have components which take in props, and have local state. The components we have access to are a little different than in React, however! For example, we saw that we have `View` components instead of `div`, and `Text` instead of `p`.  Styling is added a little differently as well, using a `Stylesheet` object instead of CSS. Also note that React Native uses Flex for all it's styling, which is actually pretty great! (We didn't get around to covering that in lecture, but I'd recommend looking into the docs for nice examples of Flex.)

One of the super cool benefits of React Native is the **hot-reloading** functionality, which makes developing apps a breeze! As you saw, I didn't have to continuously rebuild my app.

We also took a look at [Expo](https://expo.io/), which is a whole toolchain designed to make React Native development quick and easy. As we saw, Expo gives us really quick access to things like social auth, navigation (e.g. multi-tabbed apps), gyroscopes, maps, cameras, and more! I definitely recommend taking a look at the [docs](https://docs.expo.io/versions/latest/) to see all the cool things you can play around with.

That's a lot of text! If you'd like to see the demos we played around with today...

1. Take a look at the `AwesomeProject` to see some of the "Emoji" and "Movie Poster" code. You'll need `create-react-native-app` installed, so first run `npm install -g create-react-native-app`, then run `yarn start`, and follow the onscreen options.
2. `LighthouseChat` is the fully built chat demo app. For this demo you'll need the [Expo command line tool or the Expo XDE](https://expo.io/tools) installed. There are a couple "milestone" folders so you can see how I added the various bits of functionality (i.e. tabbed app, social auth, messaging, and the camera screen).

*Note: `LigthouseChat` uses a Firebase project that I might eventually take down. If I do take it down, you can just point it to a Firebase store with a `"messages"` property.*

Enjoy 🤖💻

- Nima Boscarino
