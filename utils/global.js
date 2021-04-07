import { Dimensions, Platform } from "react-native";
import Constants from "expo-constants";


var { height, width } = Dimensions.get("window");
export default {
  AUTHTOKEN: "AUTH", // for auth in app and key for async storage
  USER_DATA: "USER_DATA", //Key for storing data
  API_TOKEN: "API_TOKEN",
  CARDS_KEY: "CARDS", // key for storing cards
  ASSETS: {
    SPLASH: require("./../assets/age.png"),
    // LOGO: require("./../assets/images/Logo.png"),
     LOGO_ICON: require("./../assets/Senior.png"),
     Activateff:require('../assets/activefriendsandfamily.png'),
     Activatesenior:require('../assets/activesenior.png'),
     InActivateff:require('../assets/inactivefriendsandfamily.png'),
     InActivatesenior:require('../assets/inactivesenior.png'),
     LoadingScreen:require('../assets/activityindicator.jpg'),
     ACTIVESENIOR:require('../assets/Group.png')
    // FB_ICON: require("./../assets/images/facebooklogin.png"),
    // GOOGLE_ICON: require("./../assets/images/googlelogin.png"),
    // INSTAGRAM_ICON: require("./../assets/images/instagram.png"),
    // CAMERA_ICON: require("./../assets/images/camer.png"),
    // CHCEK: require("./../assets/images/check.png"),
    // SWITCH_ON: require("./../assets/images/on-switch.png"),
    // SWITCH_OFF: require("./../assets/images/off-switch.png"),
    // CONGRATS: require("./../assets/images/cong.png"),
    // DRAWER_MENU: require("./../assets/images/menu.png"),
    // BACK_BLACK: require("./../assets/images/back-black.png"),
    // BACK_WHITE: require("./../assets/images/back-white.png"),
    // SEARCH: require("./../assets/images/search-menu.png"),
    // SEARCH_ACTIVE: require("./../assets/images/search-menu-active.png"),
    // FEED_MENU: require("./../assets/images/threedoots.png"),
    // EYE: require("./../assets/images/view.png"),
    // CLOSE: require("./../assets/images/close.png"),
    // ARROW_RIGHT: require("./../assets/images/arrow-right.png"),
    // ARROW_LEFT: require("./../assets/images/arrow-left.png"),
    // HOME: require("./../assets/images/home.png"),
    // MYLIST: require("./../assets/images/mylist.png"),
    // MYBENCH: require("./../assets/images/mybeanch.png"),
    // BROWSEPROFILE: require("./../assets/images/browse-profile.png"),
    // CELEBLIST: require("./../assets/images/celeb-list.png"),
    // FREINDSLIST: require("./../assets/images/friends.png"),
    // TOPPICKS: require("./../assets/images/top-picks.png"),
    // SETTINGS: require("./../assets/images/setting.png"),
    // ABOUT: require("./../assets/images/about.png"),
    // ABOUTUS: require("./../assets/images/aboutus.png"),
    // CONTACT: require("./../assets/images/contact.png"),
    // SHARE_BLACK: require("./../assets/images/share-black.png"),
    // SHARE_WHITE: require("./../assets/images/share-white.png"),
    // UPLOAD_BLACK: require("./../assets/images/upload.png"),
    // UPLOAD_WHITE: require("./../assets/images/upload-white.png"),
    // EDIT: require("./../assets/images/edit.png"),
    // MOVE: require("./../assets/images/move.png"),
    // REMOVE: require("./../assets/images/close-red.png"),
    // DELETE: require("./../assets/images/trash.png"),
    // FAV_RED: require("./../assets/images/fav.png"),
    // FAV_INACTIVE: require("./../assets/images/favourite.png"),
    // FAV_ACTIVE: require("./../assets/images/favourite-active.png"),
    // MYACCOUNT: require("./../assets/images/myacount.png"),
    // MYACCOUNT_ACTIVE: require("./../assets/images/myacount-active.png"),
    // ALLOW_LOCK: require("./../assets/images/allow-lock.png"),
    // ALLOW_LOCK_ACTIVE: require("./../assets/images/allow-lock-active.png"),
    // NSFW: require("./../assets/images/nsfw.png"),
    // NSFW_ACTIVE: require("./../assets/images/nsfw-active.png"),
    // SEND: require("./../assets/images/send.png"),
    // ADD_CELEB: require("./../assets/images/add_celeb.png"),
  },
  COLOR: {
    PRIMARY_LIGHT: "#00E2D1",
    PRIMARY_DARK: "#0D968A",
    GRAY_DARK: "#00000047",
    GRAY_LIGHT: "#C9C9C994",
    ERROR: "#ff0000",
    WARNING: "#ff8000",
    SUCCESS: "#009d00",
  },
  CONSTANT: {
    APPNAME: Constants.manifest.name,
    FB_APP_ID: Constants.manifest.facebookAppId,
    // ANDROID_ADS_ID: Constants.manifest.android.config.googleMobileAdsAppId,
    // IOS_ADS_ID: Constants.manifest.ios.config.googleMobileAdsAppId,
    // PLATFORM_AD_ID:
    //   Platform.OS == "ios"
    //     ? Constants.manifest.ios.config.googleMobileAdsAppId
    //     : Platform.OS == "android"
    //     ? Constants.manifest.android.config.googleMobileAdsAppId
    //     : "",
    APPDESCRIPTION: "The best and trending Amnesty List.",
    PLAYSTOREURL: "",
    APPSTOREURL: "",
    APPVERSION: Constants.manifest.version,
    HEIGHT: height,
    WIDTH: width,
    STATUSBAR: Constants.statusBarHeight,
    DEVICETYPE: Platform.OS,
    DEVICETOKEN: "",
    PLACESAPI: "",
  },
  FONT: {
    BOLD: "Celias_Bold",
    LIGHT: "Celias_Light",
    MEDIUM: "Celias_Medium",
    REGULAR: "Celias_Regular",
  },
  COUNTRY: {},

  // DATA for app
  USER: {},
  // User data for use
  REGISTER_SOCIAL_DATA: [
    "", // 0 first name
    "", // 1 last name
    "", // 2 email
  ],

  // store data from api
  GUEST_PROFILE: [],
  PROFILE_VIEW_ID: "",
  PAGES: "",
  CELEB_LIST: [],
  MY_BENCH: [],
  MY_LIST: [],
  TOP_PICKS_LIST: [],
  FILTER_CATEGORY: [],
  NEWS_LIST: [],
  FRIENDS_LIST: [],
  COMMENTS_LIST: [],
  CELEB_SEARCH_LIST: {},
  FRIENDS_MY_LIST: [],
};
