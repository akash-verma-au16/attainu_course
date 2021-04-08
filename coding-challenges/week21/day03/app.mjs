import { UI } from "./modules/ui.mjs";
import { Fetch } from "./modules/fetch.mjs";

document.querySelector('#input-field').addEventListener('click', UI.setParams);
document.querySelector('#copy').addEventListener('click', UI.copy);
document.querySelector('#submit').addEventListener('click', Fetch.validate);