import { getData } from "../../modules/helpers";
import {
  footer_create,
  header_create,
  main_header_create,
  regions_reload,
  select_reload,
} from "../../modules/ui";

let header = document.querySelector("header .content");
let mainHeader = document.querySelector("main .header");
let footer = document.querySelector("footer");
let del_points = document.querySelectorAll(".dash a");
let cont = document.querySelector(".main .content");
let cont2 = document.querySelector(".main .content2");
let select = document.querySelector("select");
let selectOptions = document.querySelectorAll("select option");

if (window.innerWidth >= 950) {
  header_create(header);
  main_header_create(mainHeader);
} else {
  media_header();
}
footer_create(footer);

let chosed = 0;
del_points[0].classList.add("black");
cont.classList.add("show");
del_points.forEach((del, idx) => {
  del.onclick = () => {
    del_points[chosed].classList.remove("black");
    del_points[chosed].removeAttribute("data-chosed");
    del_points[idx].classList.add("black");
    del_points[idx].setAttribute("data-chosed", "");

    let chosedPoint = document.querySelector("[data-chosed]");
    console.log(chosedPoint);
    if (chosedPoint.getAttribute("id") === "del") {
      cont2.classList.remove("show");
      cont.classList.add("show");
    } else {
      cont.classList.remove("show");
      cont2.classList.add("show");
    }

    chosed = idx;
  };
});

// regions select
getData("/regions").then((res) => {
  if (res.status !== 200 && res.status !== 201) return;
  select_reload(res.data, select);
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
