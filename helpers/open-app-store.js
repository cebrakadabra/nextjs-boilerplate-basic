import {constants} from '../config/constants';

export default function openAppStore() {
    if (navigator.userAgent.toLowerCase().indexOf("iphone") > -1) {
        window.location.href = constants.appStoreLink;
    } else if (navigator.userAgent.toLowerCase().indexOf("macintosh") > -1) {
        window.location.href = constants.appStoreLink;
    } else if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {
        window.location.href = constants.googlePlayStoreLink;
    } else if (!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile)/)) {
        window.location.href = constants.appStoreLink; //Desktop Browser
    }
}
