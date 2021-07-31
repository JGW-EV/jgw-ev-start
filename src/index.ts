/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;

// Popup example
/*WA.onEnterZone('credits', () => {
    currentPopup = WA.openPopup("creditsPopup", "Map-Ersteller:", []);
    console.log(document.getElementById('container'));
});

WA.onLeaveZone('credits', closePopUp);*/

// Popups
WA.onEnterZone('meet1_top', () => {
    currentPopup = WA.openPopup("meet1_top", "Kursraum 1", []);
});
WA.onLeaveZone('meet1_left', closePopUp);

WA.onEnterZone('meet1_left', () => {
    currentPopup = WA.openPopup("meet1_left", "Kursraum 1", []);
});
WA.onLeaveZone('meet1_left', closePopUp);

WA.onEnterZone('meet2', () => {
    currentPopup = WA.openPopup("meet2", "Kursraum 2", []);
});
WA.onLeaveZone('meet2', closePopUp);

WA.onEnterZone('meet3_top', () => {
    currentPopup = WA.openPopup("meet3_top", "Kursraum 3", []);
});
WA.onLeaveZone('meet3_top', closePopUp);

WA.onEnterZone('meet3_right', () => {
    currentPopup = WA.openPopup("meet3_right", "Kursraum 3", []);
});
WA.onLeaveZone('meet3_right', closePopUp);

WA.onEnterZone('meet4_right', () => {
    currentPopup = WA.openPopup("meet4_right", "Kursraum 4", []);
});
WA.onLeaveZone('meet4_right', closePopUp);

WA.onEnterZone('meet4_left', () => {
    currentPopup = WA.openPopup("meet4_left", "Kursraum 4", []);
});
WA.onLeaveZone('meet4_left', closePopUp);

WA.onEnterZone('meet5', () => {
    currentPopup = WA.openPopup("meet5", "Kursraum 5", []);
});
WA.onLeaveZone('meet5', closePopUp);

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

// Rickroll
WA.onEnterZone('meet6', () => {
    WA.openTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

