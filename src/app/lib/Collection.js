(function(){function a(a){return Array.isArray(a)}function b(a){return"undefined"==typeof a}function c(a){return"function"==typeof a}function d(a){return"string"==typeof a}function e(a){return"object"==typeof a}function f(a,c,d,e,h){function i(b){var c=a[b];return c?c[p]:void 0}function j(a){return a>0}function k(a){return n>a}var l,m,n=a.length-1;if(0===a.length)return[0,0];b(d)&&(d=0),b(e)&&(e=n),b(h)&&(h=a.length),h=Math.ceil(h/2);var o=i(d),q=i(d-1),r=i(d+1),s=i(e),t=i(e-1),u=i(e+1);return 0===g(o,c)&&0!==g(q,c)?l=!0:j(d)&&(g(o,c)>0||0===g(q,c))?d=Math.max(d-h,0):k(d)&&g(r,c)<=0&&(d=Math.min(d+h,n)),0===g(s,c)&&0!==g(u,c)?m=!0:k(e)&&(g(s,c)<0||0===g(u,c))?e=Math.min(e+h,n):j(e)&&g(t,c)>=0&&(e=Math.max(e-h,0)),1===h||l&&m?d+e+a.length==1&&g(s,c)<0?[1,1]:[d,e]:f(a,c,d,e,h)}function g(a,c){return b(c)?1:b(a)?-1:isNaN(a)&&isNaN(c)?a.localeCompare(c,"en",{sensibility:"base"}):a-c}function h(a){return function(b){return a.indexOf(b)>-1}}function i(a){return function(b){return b===a}}function j(a,b,c){return a=a||0,a=Math.max(b,a),Math.min(c,a)}function k(a,c,d){function e(){return h=0,this}function f(){return b(g())?!1:(h--,!0)}function g(e){var f,j;if(e){for(f=[];j=g();)if(f.push(j)>=e)return f;return f}for(;j=a[h++];)if(f=c.apply(i,[j].concat(d)),!b(f))return f}var h=0,i=this;return{reset:e,next:g,hasNext:f}}function l(a,b){var c=[];return a.forEach(function(a){c.push(b(a))}),c}function m(a,b){var c={};return Object.getOwnPropertyNames(a).forEach(function(d){c[d]=b(a[d],d,a)}),c}function n(a,b){return a.hasOwnProperty(b)?a[b]:o(a,b.split("."))}function o(a,b){for(var c,d=0;d<b.length;d++){if(c=b[d],!a.hasOwnProperty(c))return;a=a[c]}return a}var p=0,q=1,r=0,s=1;this.Collection=function t(o,u){function v(a,b){return g(a[p],b[p])}function w(a){return sa(a)?this:(Ra[a]=x(a),this)}function x(a){for(var b,c=[],d=0;d<Pa.length;d++)b=n(Pa[d],a),c.push([b,Pa[d]]);return c.sort(v),c}function y(a){sa(a)&&delete Ra[a]}function z(a){return _a?B(A(a)):a[u]}function A(a){if(_a){var b=[];return u.forEach(function(c){b.push(a[c])}),b}return a[u]}function B(a){return _a?a.join($a):a}function C(){return new t(Pa,u)}function D(){return Pa.length}function E(){return 0===Pa.length}function F(a){return Qa={},E()?this:(La(Va,Pa),Pa.length=0,Ma(a),this)}function G(b,c){var d,e;if(Qa={},La(Va,Pa),Pa.length=0,a(b)&&b.length>0){for(d=0;d<b.length;d++)e=b[d],Qa[z(e)]=e,Pa.push(e);La(Ua,b)}return Ma(c),this}function H(a){var b;if(!E())return b=M(D()-1),Ma(a),b}function I(a){var c,d,e,f=[];for(d=0;d<Pa.length;d++)if(c=Pa[d],e=a(c,d,Pa),b(e)||f.push(e),e===!1)return;return f}function J(a){var b=I(function(b,c,d){return a(b,d,c)?b:void 0});return new t(b,u)}function K(a,b){return L(a,b,!0)}function L(b,d,f){var g,h;if(c(b))h=J(b).models;else if(a(b))h=b;else if(e(b))h=R(b).models;else{if(g=ya(b),!g)return this;h=[g]}return N(h,f,d),Ma(d),this}function M(a,b){var c=Pa[a];return b=b||z(c),delete Qa[b],Pa.splice(a,1),Ca(c),La(Va,c),c}function N(a,b){var c,d,e;b=Boolean(b),e=l(a,z);for(var f=Pa.length-1;f>=0;f--)c=z(Pa[f]),d=e.indexOf(c)>-1,d!==b&&M(f,c)}function O(a){return R(a,!0)}function P(b,d){return c(d)?d(b):a(d)?d.indexOf(b)>-1:d===b}function Q(a,b,c){for(var d,e=!0,f=Object.getOwnPropertyNames(b),g=0;g<f.length;g++)if(d=f[g],!P(n(a,d),b[d])){e=!1;break}return!e!=!c?a:void 0}function R(a,b){return new t(T(a,b),u)}function S(a){return T(a,!0)}function T(a,b){var c,d,e,f=[];if(a=U(a),c=b?Pa:X(a),e=c.length,Object.getOwnPropertyNames(a).length>0){for(var g=0;e>g;g++)d=c[g],Q(d,a,b)&&f.push(d);return f}return c}function U(a){var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}function V(a,b,c){for(var d,e=[],f=a.length,g=0;f>g;g++)d=a[g],c(d[b])&&e.push(d);return e}function W(a,b){for(var c,d,e,f,g=[],h=b.length,i=a.length,j=0;i>j;j++){c=a[j],d=!0;for(var k=0;h>k&&d;k++)if(e=b[k][Ya],f=b[k][Za],!f(c[e])){d=!1;break}d&&g.push(c)}return g}function X(a){var b,c,d,e;return e=Y(a),b=Z(a),0===b.length?e:1===b.length?(c=b[0][Ya],d=b[0][Za],V(e,c,d)):W(e,b)}function Y(b){var d,e,g,h,i,j,k,l,m,n,o,t=Pa;k=Object.getOwnPropertyNames(b);for(var u=0;u<k.length;u++)if(d=k[u],m=[],sa(d)){if(e=b[d],j=Ra[d],c(e)){if("min"===e.cmp_type)h=f(j,e.value)[s],i=Pa.length;else if("max"===e.cmp_type)h=0,i=f(j,e.value)[r]+1;else{if("within"!==e.cmp_type)continue;h=f(j,e.min)[s],i=f(j,e.max)[r]+1}for(var v=h;i>v;v++)m.push(j[v][q])}else if(a(e)){for(var w=0;w<e.length;w++)if(n=f(j,e[w]),l=e[w],g=j[n[0]][p]===l){h=n[0],i=n[1];for(var x=h;i>=x;x++)m.push(j[x][q])}}else if(n=f(j,e),j[n[0]][p]===e){h=n[0],i=n[1];for(var y=h;i>=y;y++)m.push(j[y][q])}if(0===m.length)return m;m.length<t.length&&(t=m,o=d)}return o&&delete b[o],t}function Z(b){var d,e,f=[];if(E())return[];for(var g=$(b),j=0;j<g.length;j++)e=g[j],d=b[e],c(d)||(d=a(d)?h(d):i(d)),f.push([e,d]),delete b[e];return f}function $(a){for(var b,c,d=[],e=Object.getOwnPropertyNames(a),f=0;f<e.length;f++)b=e[f],c=a[b],(-1===b.indexOf(".")||Pa[0].hasOwnProperty(b))&&d.push(b);return d}function _(a){return ca(Q,[a])}function aa(a){return ca(Q,[a,!0])}function ba(a){return ca(function(b){return a(b,Pa)?b:void 0})}function ca(a,b){return new k(Pa,a,b)}function da(a){var b=new RegExp(a,"i");return function(a){return b.test(a)}}function ea(a){var b=a.split(" "),c=new RegExp(b.join("[^\\s]*\\s.*"),"i");return function(a){return c.test(a)}}function fa(a){function b(b){return a>=b}return b.cmp_type="max",b.value=a,b}function ga(a){function b(b){return b>=a}return b.cmp_type="min",b.value=a,b}function ha(a,b){function c(c){return c>=a&&b>=c}if(a>b){var d=a;a=b,b=d}return c.cmp_type="within",c.min=a,c.max=b,c}function ia(a,c,d){function e(c){d[f]=n(c,g);for(var e=R(d).select(a),h=0,i=0,j=0;j<e.length;j++)b(e[j])||(h+=e[j],i++);return h/i}d=d||{};var f=c[0],g=c[1];return e}function ja(a,c,d){function e(c){d[f]=n(c,g);for(var e=R(d).select(a),h=0,i=0;i<e.length;i++)b(e[i])||h++;return h}d=d||{};var f=c[0],g=c[1];return e}function ka(a,c,d){function e(c){d[f]=n(c,g);for(var e=R(d).select(a),h=0,i=0;i<e.length;i++)b(e[i])||(h+=e[i]);return h}d=d||{};var f=c[0],g=c[1];return e}function la(b,c,d){function e(a){return d[f]=n(a,g),b?R(d).select(b):T(d)}a(b)&&(d=c,c=b,b=null),d=d||{};var f=c[0],g=c[1];return e}function ma(b,c,d){function e(a){d[f]=n(a,g);var c=ya(d);return b?n(c,b):c}a(b)&&(d=c,c=b,b=null),d=d||{};var f=c[0],g=c[1];return e}function na(b,e){var f,g;if(e===u)return A(b);if(d(e))return n(b,e);if(a(e)){var h={};return l(e,function(a){h[a]=n(b,a)}),h}if(e.hasOwnProperty("*")){g=Object.getOwnPropertyNames(b);for(var i=0;i<g.length;i++)f=g[i],e.hasOwnProperty(f)||(e[f]=f);delete e["*"]}return m(e,function(a){return c(a)?a(b):n(b,a)})}function oa(a){var b=[];return I(function(c){b.push(na(c,a))}),b}function pa(a){return ca(na,[a])}function qa(a){var b,c,d;if(E())return this;for(b=0,c=Pa.length-1;c>b;)d=Pa[b],Pa[b++]=Pa[c],Pa[c--]=d;return Sa.index&&(Sa.desc=!Sa.desc),a||(Ka("change"),Ka("sort")),this}function ra(a,b,c){return b=Boolean(b),E()?(Sa={attribute:a,desc:b,index:[]},this):a===!1?(Sa={},this):(Sa.attribute!=a&&(Sa.index=sa(a)?Ra[a].slice():x(a)),ta(Sa.index,b),Sa.attribute=a,Sa.desc=b,c||(Ka("change"),Ka("sort")),this)}function sa(a){return Ra.hasOwnProperty(a)}function ta(a,b){for(var c=0;c<a.length;c++)Pa[c]=a[c][1];b&&qa()}function ua(a,b){var c=b?-1:1;return function(b,d){var e=n(b,a),f=n(d,a);return g(e,f)*c}}function va(a,b){for(var c=0,d=1;d<a.length;d++)b(a[d],a[c])>0&&(c=d);return c}function wa(a,b,c,d){var e,f=a;if(sa(b))ta(Ra[b],c);else if(Sa.attribute===b)ta(Sa.index,c);else if(a>Pa.length/100)ra(b,c,d);else{for(var g=[],h=0;a>h;h++)g.push(Pa[h]);e=ua(b,c);for(var i=va(g,e),j=D();j>f;f++)e(g[i],Pa[f])>0&&(g.splice(i,1,Pa[f]),i=va(g,e));g.sort(e),Ga(g,0,d)}return d||(Ka("change"),Ka("sort")),this}function xa(a,b){b=Math.max(b,1);var c=a*b,d=c-a;return{page:b,pages:Math.ceil(Pa.length/a),has_previous:b>1,has_next:c<Pa.length,from:d,to:c-1,collection:new t(Pa.slice(d,c),u)}}function ya(b){return!e(b)||a(b)?Qa[B(b)]:_(b).next()}function za(a){return Qa.hasOwnProperty(z(a))}function Aa(a,b){var c,d=z(a);za(a)&&(c=Pa.indexOf(Qa[d]),b>c&&b--,M(c,d)),Sa.index&&(b=Ba(a)),Pa.splice(b,0,a),Ea(a),Qa[d]=a,La(Ua,a)}function Ba(a){var b,c=n(a,Sa.attribute),d=f(Sa.index,c);return d[r]+d[s]===0?Sa.desc?Pa.length:0:d[r]===d[s]?(b=d[r]+1,Sa.desc?Pa.length-b:b):(b=d[s],Sa.desc?Pa.length-b:b)}function Ca(a){for(var b,c,d=Object.getOwnPropertyNames(Ra),e=0;e<d.length;e++)b=d[e],c=Ra[b],Da(c,a,b);Sa.index&&Da(Sa.index,a,Sa.attribute)}function Da(a,b,c){var d,e=n(b,c),g=f(a,e);for(d=g[0];d<=g[1];d++)if(indexed_model=a[d][q],b===indexed_model)return a.splice(g[r],1);for(e=z(b),d=0;d<a.length;d++)if(e===z(a[d][q]))return void a.splice(d,1)}function Ea(a){for(var b,c,d=Object.getOwnPropertyNames(Ra),e=0;e<d.length;e++)b=d[e],c=Ra[b],Fa(a,b,c);Sa.attribute&&Fa(a,Sa.attribute,Sa.index)}function Fa(a,b,c){value=n(a,b),positions=f(c,value),positions[0]+positions[1]===0?c.splice(0,0,[value,a]):c.splice(positions[0]+1,0,[value,a])}function Ga(b,c,d){c=j(c,0,D()),a(b)||(b=[b]);for(var e=0;e<b.length;e++)Aa(b[e],c++);return Ma(d),this}function Ha(a,b){return Ga(a,D(),b),this}function Ia(a,b){return Ta[a]||(Ta[a]=[]),Ta[a].push(b),function(){Ja(a,b)}}function Ja(a,b){if(a in Ta){var c=Ta[a].indexOf(b);c>-1&&Ta[a].splice(c,1)}}function Ka(a,b){if(a in Ta)for(var c=0,d=Ta[a].length;d>c;c++)Ta[a][c](b)}function La(b,c){var d,e=Xa[b];if(a(c)){d=c.length;for(var f=0;d>f;f++)e.push(c[f])}else e.push(c)}function Ma(a){var b=!1;m(Xa,function(c,d){c.length&&!a&&(Ka(d,c),b=!0),c.length=0}),b&&Ka(Wa)}function Na(a){var b=this.where(a);return this.on("add",function(c){var d=new t(c,this.primary_key).where(a);b._add(d.models)}),this.on("remove",function(a){b._remove(a)}),b._add=b.add,b._remove=b.remove,b.add=this.add,b.empty=this.empty,b.reset=this.reset,b.insert=this.insert,b.keep=this.keep,b.remove=this.remove,b.pop=this.pop,b}function Oa(){var a=new t([],this.primary_key);return a.proxied=this,a._add=a.add,a.add=function(b){var c=[];b=[].concat(b);for(var d=0;d<b.length;d++)a.proxied.get(a.getPKValues(b[d]))&&c.push(b[d]);return a._add(c)},this.on("remove",a.remove),a}var Pa=[],Qa={},Ra={},Sa={},Ta={},Ua="add",Va="remove",Wa="change",Xa={add:[],remove:[]},Ya=0,Za=1,$a=String.fromCharCode(31);u=u||"id";var _a=a(u);return o&&G(o),Pa.where=T,Pa.not=S,{getPKString:z,getPKValues:A,primary_key:u,isEmpty:E,empty:F,reset:G,clone:C,size:D,models:Pa,add:Ha,has:za,insert:Ga,addIndex:w,removeIndex:y,pop:H,filter:J,each:I,where:R,generator:ca,gWhere:_,gNot:aa,gSelect:pa,gFilter:ba,keep:K,page:xa,not:O,min:ga,max:fa,within:ha,contains:da,fuzzy:ea,avg:ia,count:ja,sum:ka,hasOne:ma,hasMany:la,select:oa,sort:ra,topSort:wa,get:ya,remove:L,reverse:qa,on:Ia,off:Ja,fire:Ka,subset:Oa,view:Na}},this.Collection.join=function(a,b,c){function d(a){var b=a.indexOf(".")+1;return{collection:a.split(".")[0],attribute:a.substring(b)}}var e,f,g,h,i={};m(a,function(a,b){i[b]=a.clone()});var j={};return m(c,function(a,b){b=d(b),j.hasOwnProperty(b.collection)||(j[b.collection]={}),j[b.collection][b.attribute]=a}),m(j,function(a,b){i[b]=i[b].where(a)}),b.forEach(function(a){g=d(a[0]),h=d(a[1]),f=i[g.collection],e=f.select(g.attribute),f=i[h.collection];var b={};b[h.attribute]=e,f.keep(b)}),i}}).call(this);
//# sourceMappingURL=collection.map