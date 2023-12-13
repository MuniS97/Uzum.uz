import { getData } from "./modules/helpers";
import {
  footer_create,
  header_create,
  main_header_create,
  media_header,
  reload_goods,
} from "./modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let discountGoodsPlace = document.querySelector(".discount .goods");
let devicesPlace = document.querySelector(".electronics .goods");
let furniturePlace = document.querySelector(".furniture .goods");
let discountGoods = [];
let devices = [];
let furnitures = [];

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
}
footer_create(footer);

getData("/goods").then((res) => {
  res.data.forEach((item) => {
    if (item.salePercentage !== 0) {
      discountGoods.push(item);
    }
    if (item.type === "PC" || item.type === "audio" || item.type === "TV") {
      devices.push(item);
    }
    if (item.type === "furniture" || item.type === "kitchen") {
      furnitures.push(item);
    }
  });
  reload_goods(discountGoods.slice(0, 15), discountGoodsPlace, "Распродажа");
  reload_goods(devices.slice(0, 15), devicesPlace, "Электроника");
  reload_goods(furnitures.slice(0, 15), furniturePlace, "Гарнитура");
});
