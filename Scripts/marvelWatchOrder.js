document.title = "Marvel Studios Multiverse";

import {fillInOrder} from "./fillData.js";

import {order as xmenOrder} from "../Data/XmenData.js";
import {order as smOrder} from "../Data/SMData.js";
import {order as mcuOrder} from "../Data/MCUData.js";
import {order as mkOrder} from "../Data/MarvelKnightsData.js";

const [d, ...x] = xmenOrder;
const [f, ...mcu] = mcuOrder;
const [g, ...mk] = mkOrder;

const s = smOrder.filter(movie => movie===undefined || !movie.imgLink.includes("MCU"));

export const order = [...x,...s,...mk,...mcu];
order.sort((a, b) => a.year - b.year);
order.unshift(1);

fillInOrder(order);