import { getData } from "../../modules/helpers";
import {
  catalog_reload,
  contact_modal_reload,
  footer_create,
  header_create,
  main_header_create,
  media_header,
  min_footer,
  region_modal_reload,
  regions_reload,
  reload_goods,
  wishes_checking,
} from "../../modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let discountGoodsPlace = document.querySelector(".discount .goods");
let none_wishes_block = document.querySelector(".none_block");
let wishesPlace = document.querySelector(".all_goods");
let forTop = document.querySelector(".forTop");
let discountGoods = [];

let catalog = document.querySelector(".catalog");
let contact_modal = document.querySelector(".modal_contacts");
let region_modal = document.querySelector(".modal_regions");
catalog_reload(catalog);
contact_modal_reload(contact_modal);
region_modal_reload(region_modal);

let wished = JSON.parse(localStorage.getItem("wishes")) || [];

wishes_checking(wished, none_wishes_block, wishesPlace);

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

  getData("/goods").then((res) => {
    res.data.forEach((item) => {
      if (item.salePercentage !== 0) {
        discountGoods.push(item);
      }
    });
    reload_goods(discountGoods.slice(0, 10), discountGoodsPlace, "Акция");
  });
}

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
