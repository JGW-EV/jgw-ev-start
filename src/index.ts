/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

WA.onEnterZone('clock', () => {
    currentPopup = WA.openPopup("clockPopup", "It's " + time, []);
});

WA.onLeaveZone('clock', closePopUp);

// Credits
WA.onEnterZone('credits', () => {
    currentPopup = WA.openPopup("creditsPopup", "Map-Ersteller\n\n• Vinzenz\n•Simon\nVielen Dank an Christoph", []);
});

WA.onLeaveZone('credits', closePopUp);


function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
