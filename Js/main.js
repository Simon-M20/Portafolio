import scrollTopBtn from "./modules/scroll-top-btn.js";
import { swiper } from "./modules/swiper.js";
import { typed } from "./modules/typed.js";
import { menuShow } from "./modules/menuShow.js";
import { sendForm } from "./modules/sendForm.js";


document.addEventListener("DOMContentLoaded", e=> {
  scrollTopBtn(".scroll-top"),
  swiper,
  typed,
  menuShow(".menu-btn", ".menu", ".menu-link a"),
  sendForm();
});
