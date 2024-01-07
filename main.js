import { getData } from "./modules/helpers";
import {
  catalog_reload,
  contact_modal_reload,
  footer_create,
  header_create,
  main_header_create,
  media_header,
  min_footer,
  min_search,
  region_modal_reload,
  regions_reload,
  reload_goods,
  search_reload,
} from "./modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let discountGoodsPlace = document.querySelector(".discount .goods");
let devicesPlace = document.querySelector(".electronics .goods");
let furniturePlace = document.querySelector(".furniture .goods");
let forTop = document.querySelector(".forTop");
let catalog = document.querySelector(".catalog");
let contact_modal = document.querySelector(".modal_contacts");
let region_modal = document.querySelector(".modal_regions");
let search_modal = document.querySelector(".search_modal");

let discountGoods = [];
let devices = [];
let furnitures = [];

catalog_reload(catalog);
contact_modal_reload(contact_modal);
region_modal_reload(region_modal);
search_reload(search_modal, true);

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
  min_search(header);
}

if (window.innerWidth <= 500) {
  min_footer(footer);
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
    reload_goods(discountGoods.slice(0, 6), discountGoodsPlace, "Распродажа");
    reload_goods(devices.slice(0, 6), devicesPlace, "Электроника");
    reload_goods(furnitures.slice(0, 6), furniturePlace, "Гарнитура");
  });
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
}

// Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

setTimeout(() => {
  // catalog functions
  let categ_btns = document.querySelectorAll("[data-categ]");
  let categ = document.querySelectorAll(".content .content_about");
  let prev_categ = 0;
  categ[0].classList.add("show");
  categ_btns[0].classList.add("chose");
  categ_btns.forEach((btn, idx) => {
    btn.onmouseenter = () => {
      categ_btns[prev_categ].classList.remove("chose");
      categ[prev_categ].classList.remove("show");
      categ[idx].classList.add("show");
      categ_btns[idx].classList.add("chose");

      prev_categ = idx;
    };
  });

  // modal_contacts
  let contactModalActive = document.querySelectorAll("[data-contact]");
  let contactModal = document.querySelector(".modal_contacts");
  let contactModalCancel = document.querySelectorAll("[data-contact_cancel]");
  contactModalActive.forEach(
    (act) =>
      (act.onclick = () => {
        contactModal.classList.remove("modal_contacts_anim1");
        contactModal.classList.add("modal_contacts_anim");
        document.body.style.overflowY = "hidden";
      })
  );
  contactModalCancel.forEach(
    (cancel) =>
      (cancel.onclick = () => {
        contactModal.classList.remove("modal_contacts_anim");
        contactModal.classList.add("modal_contacts_anim1");
        document.body.style.overflowY = "scroll";
      })
  );
  // phone number input
  let customerContact = document.forms.customerContact;
  let inputContact = customerContact.querySelector("input");
  let regEx = /^\d+$/;
  customerContact.onsubmit = (event) => {
    event.preventDefault();

    if (regEx.test(inputContact.value)) {
      inputContact.parentElement.classList.remove("error");
    } else {
      inputContact.parentElement.classList.add("error");
    }

    console.log(customerContact);
  };

  // modal_regions
  let regionsPlace = document.querySelector(".regions");
  let region = document.querySelector("header .left a span");
  let regionsModalActive = document.querySelectorAll("[data-regions]");
  let regionsModal = document.querySelector(".modal_regions");
  let regionsModalCancel = document.querySelectorAll("[data-regions_cancel]");
  let regionsSearch = document.querySelector(".modal_regions .content input");

  getData("/regions").then((res) => {
    if (res.status !== 200 && res.status !== 201) return;
    regions_reload(res.data, regionsPlace, region, regionsModal);

    regionsSearch.onkeyup = () => {
      let arr = [];
      let value = regionsSearch.value.toLowerCase().trim();
      for (let item of res.data) {
        let title = item.title.toLowerCase().trim();
        if (title.includes(value)) {
          arr.push(item);
          regions_reload(arr, regionsPlace, region, regionsModal);
        }
      }
    };
  });

  regionsModalActive.forEach(
    (act) =>
      (act.onclick = () => {
        regionsModal.classList.remove("modal_contacts_anim1");
        regionsModal.classList.add("modal_contacts_anim");
        document.body.style.overflowY = "hidden";
      })
  );
  regionsModalCancel.forEach((cancel) => {
    cancel.onclick = () => {
      regionsModal.classList.remove("modal_contacts_anim");
      regionsModal.classList.add("modal_contacts_anim1");
      document.body.style.overflowY = "scroll";
    };
  });
}, 0);
