import * as sys from "./controllers.js";
import chalkAnimation from "chalk-animation";
// const gradient = require("gradient-string");
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import figlet from "figlet";
async function load() {
  let dot =
    ".................................................................................";
  console.log(dot);
  await sys.cpuData();
  console.log(dot);

  await sys.OsData();
  console.log(dot);

  await sys.memData();
  console.log(dot);

  await sys.batteryData();
  console.log(dot);

  await sys.graphicsData();
  console.log(dot);

  await sys.displayData();
  console.log(dot);

  await sys.usbData();
  console.log(dot);

  await sys.storageData();
  console.log(dot);

  await sys.wifiInterfaceData();
  console.log(dot);

  await sys.wifiConnectionData();
  console.log(dot);

  await sys.audioData();
}
figlet.text(
  "GOST'S EYE!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 100,
    whitespaceBreak: false,
  },
  function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  }
);
const spinner = createSpinner("FETCH ... \n").start();
setTimeout(() => {
  spinner.success();
}, 1500);

load();
