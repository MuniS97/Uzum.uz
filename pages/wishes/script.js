import { getData } from "../../modules/helpers";
import {
  footer_create,
  header_create,
  main_header_create,
  media_header,
  min_footer,
  reload_goods,
} from "../../modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let discountGoodsPlace = document.querySelector(".discount .goods");
let none_wishes_block = document.querySelector(".none_block");
let wishesPlace = document.querySelector(".all_goods");
let discountGoods = [];

let wished = JSON.parse(localStorage.getItem("wishes")) || [];
let wishes_id = [];

wished.forEach((wish) => wishes_id.push(wish));

if (wishes_id.length === 0) {
  none_wishes_block.classList.add("flex");
} else {
  let goods = [];
  getData("/goods").then((res) => {
    res.data.forEach((item) => {
      if (wishes_id.includes(item.id)) {
        goods.push(item);
      }
    });
    reload_goods(goods, wishesPlace, "Акция");
  });
}

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
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
    reload_goods(discountGoods.slice(0, 10), discountGoodsPlace, "Акция");
  });
}

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
