/*!
 * Sniffer is a clientside browser/engine/os/device detection tool
 * v. 3.1.0 | https://github.com/wilddeer/Sniffer
 * Copyright Oleg Korsunsky | http://wd.dizaina.net/
 *
 * MIT License
 */
!function(a){var b=function(a){function b(){for(var a in g)c(g[a])}function c(b){for(var c=0;c<b.length;c++){for(var e=!0,f=0;f<b[c].test.length;f++)if(b[c].test[f]instanceof RegExp){if(!b[c].test[f].test(a)){e=!1;break}}else if(-1==a.indexOf(b[c].test[f])){e=!1;break}if(e){d(b[c]);break}}}function d(a){for(var b in g)if(g.hasOwnProperty(b)&&a[b]){if(a[b].$version){var c=e(a[b].$version.search);if(c){var d=c.split("."),h=a[b].$version.names,i=a[b].$version.altNames;if(a[b].version=c,d[0]&&(a[b].majorVersion=parseInt(d[0])),d[1]&&(a[b].minorVersion=parseInt(d[1])),d[2]&&(a[b].patchVersion=parseInt(d[2])),h)for(var j,k=[],l=0;l<d.length;l++)k.push(d[l]),j=k.join("."),h[j]&&(a[b].versionName=h[j]),i&&i[j]&&(a[b].versionAltNames=i[j])}}for(var m in a[b])a[b].hasOwnProperty(m)&&"$"!==m[0]&&(f[b][m]=a[b][m])}}function e(b){var c;if(b instanceof RegExp){if(c=(a.match(b)||[])[0],!c)return}else c=b;var d,e=a.indexOf(c);if(-1!=e&&(d=a.substring(e+c.length),regexpResult=/^(\d+(\.|_)){0,2}\d+/.exec(d),regexpResult))return regexpResult[0].replace(/_/g,".")}var f={browser:{fullName:"",name:"",version:"",majorVersion:null,minorVersion:null,patchVersion:null,engine:""},os:{fullName:"",name:"",version:"",versionName:"",versionAltNames:[],majorVersion:null,minorVersion:null,patchVersion:null},features:{bw:!1,mobile:!1,tv:!1,proxy:!1}},g={browser:[{test:["SailfishBrowser"],browser:{fullName:"Sailfish Browser",name:"sailfishbrowser",engine:"gecko",$version:{search:"SailfishBrowser/"}},features:{mobile:!0}},{test:["Edge/"],browser:{fullName:"Edge",name:"edge",engine:"edgehtml",$version:{search:"Edge/"}}},{test:["MSIE"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"MSIE "}}},{test:["Trident"],browser:{fullName:"Internet Explorer",name:"ie",engine:"trident",$version:{search:"rv:"}}},{test:["OPR/"],browser:{fullName:"Opera",name:"opera",engine:"webkit",$version:{search:"OPR/"}}},{test:["Chrome"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"Chrome/"}}},{test:["Firefox"],browser:{fullName:"Firefox",name:"firefox",engine:"gecko",$version:{search:"Firefox/"}}},{test:["NokiaBrowser"],browser:{fullName:"Nokia Browser",name:"nokiabrowser",engine:"webkit",$version:{search:"NokiaBrowser/"}},features:{mobile:!0}},{test:["Opera Mini","Presto"],browser:{fullName:"Opera Mini",name:"operamini",engine:"presto",$version:{search:"Version/"}},features:{mobile:!0,proxy:!0}},{test:["Opera Mini","WebKit"],browser:{fullName:"Opera Mini",name:"operamini",engine:"webkit"},features:{mobile:!0,proxy:!0}},{test:["Opera"],browser:{fullName:"Opera",name:"opera",engine:"presto",$version:{search:"Version/"}}},{test:["OviBrowser"],browser:{fullName:"Ovi Browser",name:"ovi",engine:"gecko",$version:{search:"OviBrowser/"}},features:{mobile:!0,proxy:!0}},{test:["CriOS/"],browser:{fullName:"Chrome",name:"chrome",engine:"webkit",$version:{search:"CriOS/"}}},{test:["Coast/"],browser:{fullName:"Opera Coast",name:"coast",engine:"webkit",$version:{search:"Coast/"}}},{test:["Safari","Version/",/(iPhone|iPod|iPad|Macintosh|Windows)/],browser:{fullName:"Safari",name:"safari",engine:"webkit",$version:{search:"Version/"}}},{test:["WebKit"],browser:{engine:"webkit"}},{test:["Gecko/"],browser:{engine:"gecko"}}],os:[{test:["Sailfish"],os:{fullName:"Sailfish OS",name:"sailfish"},features:{mobile:!0}},{test:["Windows Phone"],os:{fullName:"Windows Phone",name:"winphone",$version:{search:"Windows Phone "}},features:{mobile:!0}},{test:["Windows"],os:{fullName:"Windows",name:"win",$version:{search:"Windows NT ",names:{"10.0":"10",6.3:"8.1",6.2:"8",6.1:"7","6.0":"Vista",5.2:"XP",5.1:"XP",5.01:"2000","5.0":"2000"},altNames:{5.2:["Server 2003"]}}}},{test:["Macintosh","OS X 10"],os:{fullName:"Mac OS X",name:"osx",$version:{search:/OS X /,names:{10.6:"Snow Leopard",10.7:"Lion",10.8:"Mountain Lion",10.9:"Mavericks","10.10":"Yosemite",10.11:"El Capitan"}}}},{test:["Ubuntu"],os:{fullName:"Ubuntu",name:"ubuntu"}},{test:["Fedora"],os:{fullName:"Fedora",name:"fedora",$version:{search:"Fedora/",names:{20:"Heisenbug",19:"Schrödinger's Cat",18:"Spherical Cow",17:"Beefy Miracle",16:"Verne",15:"Lovelock",14:"Laughlin",13:"Goddard",12:"Constantine",11:"Leonidas",10:"Cambridge",9:"Sulphur",8:"Werewolf",7:"Moonshine"}}}},{test:["Kindle"],os:{fullName:"Kindle",name:"kindle",$version:{search:"Kindle/"}},features:{bw:!0,mobile:!0}},{test:[/(BlackBerry|BB\d+)/],os:{fullName:"BlackBerry",name:"blackberry",$version:{search:"Version/"}},features:{mobile:!0}},{test:["Symbian"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["Series40"],os:{fullName:"Symbian",name:"symbian"},features:{mobile:!0}},{test:["PlayStation Vita"],os:{fullName:"PlayStation Vita",name:"psvita"},features:{mobile:!0}},{test:[/playstation/i],os:{fullName:"PlayStation",name:"playstation",$version:{search:/playstation\s/i}},features:{tv:!0}},{test:["Nintendo DSi"],os:{fullName:"Nintendo DSi",name:"dsi"},features:{mobile:!0}},{test:["New Nintendo 3DS"],os:{fullName:"New Nintendo 3DS",name:"n3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Nintendo 3DS"],os:{fullName:"Nintendo 3DS",name:"3ds"},browser:{engine:"webkit"},features:{mobile:!0}},{test:["Viera"],os:{fullName:"Viera",name:"viera"},browser:{engine:"webkit"},features:{tv:!0}},{test:["SonyDTV"],features:{tv:!0}},{test:["Android"],os:{fullName:"Android",name:"android",$version:{search:"Android "}},features:{mobile:!0}},{test:[/iPhone|iPod|iPad/],os:{fullName:"iOS",name:"ios",$version:{search:"OS "}},features:{mobile:!0}}],features:[{test:[/mobile/i],features:{mobile:!0}},{test:[/smart-{0,1}tv/i],features:{tv:!0}}]};return a?(b(),f):f},c=b(navigator.userAgent),d=document.getElementsByTagName("html")[0],e=[d.className];c.browser.name&&e.push(c.browser.name),c.browser.engine&&e.push(c.browser.engine),c.os.name&&e.push(c.os.name);for(var f in c.features)c.features[f]&&e.push(f);d.className=e.join(" "),"undefined"!=typeof module&&module.exports?module.exports=c:a.Sniff=c}(this);