/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;

// Credits
WA.onEnterZone('credits', () => {
    currentPopup = WA.openPopup("creditsPopup", "Test", []);
});

WA.onLeaveZone('credits', closePopUp);

// Meetings
WA.onEnterZone('meet1', () => {
    WA.openTab('');
})
WA.onEnterZone('meet2', () => {
    WA.openTab('');
})
WA.onEnterZone('meet3', () => {
    WA.openTab('');
})
WA.onEnterZone('meet4', () => {
    WA.openTab('');
})
WA.onEnterZone('meet5', () => {
    WA.openTab('');
})
WA.onEnterZone('meet6', () => {
    WA.openTab('');
})

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
