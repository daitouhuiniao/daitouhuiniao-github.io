window.__require=function e(c,n,t){function r(i,u){if(!n[i]){if(!c[i]){var p=i.split("/");if(p=p[p.length-1],!c[p]){var l="function"==typeof __require&&__require;if(!u&&l)return l(p,!0);if(o)return o(p,!0);throw new Error("Cannot find module '"+i+"'")}i=p}var s=n[i]={exports:{}};c[i][0].call(s.exports,function(e){return r(c[i][1][e]||e)},s,s.exports,e,c,n,t)}return n[i].exports}for(var o="function"==typeof __require&&__require,i=0;i<t.length;i++)r(t[i]);return r}({cenlan:[function(e,c,n){"use strict";cc._RF.push(c,"280c3rsZJJKnZ9RqbALVwtK","cenlan"),cc.Class({extends:cc.Component,properties:{picNode:{default:null,type:cc.Node,displayName:"picture"}},onLoad:function(){var e=this;setInterval(function(){var c=Math.ceil(6*Math.random());cc.loader.loadRes("pic"+c,cc.SpriteFrame,function(c,n){c?console.log(c):e.picNode.getComponent(cc.Sprite).spriteFrame=n})},3e3)}}),cc._RF.pop()},{}],"use_v2.1-2.2.1_cc.Toggle_event":[function(e,c,n){"use strict";cc._RF.push(c,"fc210kyyEVB+bxS20QvenKl","use_v2.1-2.2.1_cc.Toggle_event"),cc.Toggle&&(cc.Toggle._triggerEventInScript_isChecked=!0),cc._RF.pop()},{}]},{},["use_v2.1-2.2.1_cc.Toggle_event","cenlan"]);