/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

let currentPopup: any = undefined;

// Credits
WA.onEnterZone('credits', () => {
    currentPopup = WA.openPopup("creditsPopup", 'Map-Ersteller<br>• Vinzenz<br>• Simon<br>Vielen Dank an Christoph', []);
});

WA.onLeaveZone('credits', closePopUp);

// Meetings
WA.onEnterZone('meet1', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-p3d-v8n-wae');
})
WA.onEnterZone('meet2', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-evp-642-2hj');
})
WA.onEnterZone('meet3', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-ers-l30-xan');
})
WA.onEnterZone('meet4', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-fg8-1xm-f67');
})
WA.onEnterZone('meet5', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-v9t-prc-dlz');
})
WA.onEnterZone('meet6', () => {
    WA.openTab('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
})

// Other BBB Rooms
WA.onEnterZone('aula', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-4r2-bkh-cjd');
})
WA.onEnterZone('chillArea', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-onv-avq-ysv');
})
WA.onEnterZone('disco', () => {
    WA.openTab('https://bbb.jgw-ev.de/b/jgw-vdb-0sq-1ph');
})

function closePopUp() {
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}
