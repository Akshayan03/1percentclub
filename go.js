// Forwards to wherever the club is running right now. target.json is updated automatically by the club's Mac.
(function(){
  var FALLBACK="https://taxi-defense-cake-dialog.trycloudflare.com";
  var base="/1percentclub";
  var rest=location.pathname.indexOf(base)===0?location.pathname.slice(base.length):location.pathname;
  if(rest==="/"||rest==="/index.html"||rest.indexOf("/app")===0) rest="/";
  function go(origin){ location.replace(origin.replace(/\/$/,"")+rest+location.search+location.hash); }
  var standalone=window.navigator.standalone||matchMedia("(display-mode: standalone)").matches;
  window.__opcGo=function(){ fetch(base+"/target.json?t="+Date.now(),{cache:"no-store"}).then(function(r){return r.json()}).then(function(j){go(j.url||FALLBACK)}).catch(function(){go(FALLBACK)}); };
  if(!document.documentElement.hasAttribute("data-stay")||standalone) window.__opcGo();
})();
