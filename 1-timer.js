import"./assets/styles-B4s-4mBC.js";import{f as h}from"./assets/vendor-EyZmBGcZ.js";const n=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),p=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),C=document.querySelector("[data-seconds]");let u,i;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(alert("Please choose a date in the future"),n.disabled=!0):(i=t[0],n.disabled=!1)}};h("#datetime-picker",b);n.addEventListener("click",()=>{n.disabled=!0,document.getElementById("datetime-picker").disabled=!0,w()});function w(){u=setInterval(()=>{const e=i-new Date;if(e<0)clearInterval(u),alert("Countdown finished! ✅"),n.disabled=!0,c(0,0,0,0);else{const{days:o,hours:r,minutes:d,seconds:s}=D(e);c(o,r,d,s)}})}function D(t){const s=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:l,minutes:m,seconds:f}}function c(t,e,o,r){y.textContent=a(t),p.textContent=a(e),S.textContent=a(o),C.textContent=a(r)}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
