import { getData } from "../../modules/helpers";
import {
  footer_create,
  header_create,
  main_header_create,
  media_header,
  min_footer,
  reload_about_good,
  reload_goods,
} from "../../modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let about_good = document.querySelector(".about_good");
let forTop = document.querySelector(".forTop");
let sameGoods = document.querySelector(".same_goods .goods");
let id = location.search.split("=").at(-1);
let same_goods = [];

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
}
if (window.innerWidth <= 500) {
  min_footer(footer);
} else {
  // scroll arrow
  window.onscroll = () => {
    if (window.scrollY < 700) {
      forTop.classList.remove("show");
    } else {
      forTop.classList.add("show");
    }
  };
  forTop.onclick = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  footer_create(footer);
}
getData("/goods/" + id).then((res) => {
  reload_about_good(res.data, about_good);
  getData("/goods").then((response) => {
    response.data.forEach((item) => {
      if (item.type === res.data.type) {
        same_goods.push(item);
      }
    });
    reload_goods(same_goods.slice(0, 5), sameGoods, "Электроника");
  });
});
