import {createInfoTemplate} from "./view/info.js";
import {createCostTemplate} from "./view/cost.js";
import {createMenuTemplate} from "./view/menu.js";
import {createFiltersTemplate} from "./view/filters.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.trip-main`);
render(siteMainElement, createInfoTemplate(), `afterbegin`);

const siteInfoElement = document.querySelector(`.trip-info`);
render(siteInfoElement, createCostTemplate(), `beforeend`);

const siteControlsElement = document.querySelector(`.trip-controls`);
render(siteControlsElement, createMenuTemplate(), `beforeend`);
render(siteControlsElement, createFiltersTemplate(), `beforeend`);

