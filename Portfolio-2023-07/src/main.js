import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

//=========================================
// GSAP🌟
//=========================================
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

addEventListener("load", () => {
  //=========================================
  // heroFV🌟
  //=========================================
  gsap.set(".gsap", {
    opacity: 1,
  });
  gsap.from(".gsap", {
    duration: 1.5,
    opacity: 0,
    scale: 5.5,
    ease: "back",
  });
  //=========================================
  // profile🌟
  //=========================================
  gsap.set(".profile", {
    overflow: "hidden",
  });
  gsap.from(".profile", {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: ".profile",
      start: "start bottom",
      // markers: true,
    },
  });
});
