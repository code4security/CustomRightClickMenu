﻿function dk(n){var t;return n.forEach(function(i,r){t=i*2;n[r]=t>99?t-99:t}),n}function ec(n,t){t=dk(t);n.verified=!0;n=JSON.stringify(n);for(var r=0,u=[],f=n.length,i=0;i<f;i++,r++)r>17&&(t=dk(t),r=0),u[i]=n.charCodeAt(i)^t[r];return u}function de(n,t){var e=[],f;t.forEach(function(n,t){e[t]=n});console.log(t);t=dk(t);for(var u=0,i=[],o=n.length,r=0;r<o;r++,u++)u>17&&(t=dk(t),u=0),i[r]=String.fromCharCode(n[r]^t[u]);i=i.join("");console.log(i);try{return(i=JSON.parse(i),f=!0,e.forEach(function(n,t){if(n!==i.secretKey[t])return console.log(n,i.secretKey[t]),f=!1,!1}),i.verified&&f)?i:!1}catch(s){return!1}}