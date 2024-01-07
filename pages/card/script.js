import { getData } from "../../modules/helpers";
import {
  busket_checking,
  busket_count,
  catalog_reload,
  contact_modal_reload,
  footer_create,
  header_create,
  main_header_create,
  media_header,
  min_footer,
  min_search,
  region_modal_reload,
  reload_goods,
  search_reload,
} from "../../modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let discountGoodsPlace = document.querySelector(".discount .goods");
let none_card_block = document.querySelector("main .none_block");
let goodsPlace = document.querySelector(".card .content");
let totalPlace = document.querySelector(".card .dash");
let total_view = document.querySelector(".card .dash h2");
let search_modal = document.querySelector(".search_modal");
let catalog = document.querySelector(".catalog");
let contact_modal = document.querySelector(".modal_contacts");
let region_modal = document.querySelector(".modal_regions");
catalog_reload(catalog);
contact_modal_reload(contact_modal);
region_modal_reload(region_modal);
search_reload(search_modal, true);

let discountGoods = [];

let busket = JSON.parse(localStorage.getItem("card")) || [];

busket_checking(none_card_block, goodsPlace, totalPlace, total_view);

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
  min_search(header);
}

if (window.innerWidth <= 500) {
  min_footer(footer);
} else {
  footer_create(footer);

  getData("/goods").then((res) => {
    res.data.forEach((item) => {
      if (item.salePercentage !== 0) {
        discountGoods.push(item);
      }
    });
    reload_goods(discountGoods.slice(0, 5), discountGoodsPlace, "Акция");
  });
}

let goodsCount = document.querySelector("main .header .right a span");
busket_count(busket, goodsCount);
