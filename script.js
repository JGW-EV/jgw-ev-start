(()=>{"use strict";let e;const n=new Date,o=n.getHours()+":"+n.getMinutes();function t(){void 0!==e&&(e.close(),e=void 0)}WA.onEnterZone("clock",(()=>{e=WA.openPopup("clockPopup","It's "+o,[])})),WA.onLeaveZone("clock",t),WA.onEnterZone("credits",(()=>{e=WA.openPopup("credits","Mitarbeitende\n\n• Vinzenz\n•Simon\nVielen Dank an Christoph",[])})),WA.onLeaveZone("credits",t)})();
//# sourceMappingURL=script.js.map