import * as sys from "./controllers.js";
import emoji from "node-emoji";
import chalk from "chalk";
import figlet from "figlet";
import readline from "readline-sync";

const thunder = emoji.get("zap");
const earth = emoji.get("earth_asia");
const bar_chart = emoji.get("bar_chart");
const speaker = emoji.get("speaker");
const battery = emoji.get("battery");
const fire = emoji.get("fire");
const video_game = emoji.get("video_game");
import * as loader from "./loader.js";

let dot =
  "...................................................................................................";
export const gostMode = async () => {
  let dot =
    "...................................................................................................";
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
  // console.log(dot);
  // await sys.bluetoothData();

  console.log(dot);
};

export const menu = async () => {
  console.log(dot);
  const log = console.log;
  console.log(chalk.blue.bold(`0. 👻 GOST MODE (ALL) \n`));
  console.log(chalk.blue.bold(`1. ${thunder} CPU Information ${thunder} \n`));
  console.log(chalk.blue.bold(`2. ${earth} Os Information ${earth} \n`));
  console.log(
    chalk.blue.bold(`3. ${bar_chart}  Ram Information  ${bar_chart} \n`)
  );
  console.log(
    chalk.blue.bold(`4. ${battery} Battery Information ${battery} \n`)
  );
  console.log(
    chalk.blue.bold(`5. ${video_game} Graphics Information ${video_game} \n`)
  );
  console.log(chalk.blue.bold("6. 🖥️  Display Information  🖥️ \n"));
  console.log(chalk.blue.bold("7. 🖴  Storage Devices Information  🖴 \n"));
  console.log(chalk.blue.bold("8. ⌨️  Usb Device Information 🖱️ \n"));
  console.log(chalk.blue.bold("9. 🖧  WIFI Interface Information  🖧 \n"));
  console.log(chalk.blue.bold("10. 🔗 WIFI connection Information 🔗 \n"));
  console.log(
    chalk.blue.bold(`11. ${speaker} Audio Interface Information ${speaker} \n`)
  );
  console.log(chalk.blue.bold("12. 📶 Bluetooth Interface Information 📶\n"));
  console.log(chalk.red.bold(`👉 Select Any Option ❔ \n`));
};

export const banner = async () => {
  figlet.text(
    "GOST'S EYE",
    {
      font: "Star Wars",
      horizontalLayout: "full",
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
};

export const choiceMaker = () => {
  let number = Number(readline.question());

  switch (number) {
    case 0:
      loader.gostMode();
      break;
    case 1:
      sys.cpuData();
      break;
    case 2:
      sys.OsData();
      break;
    case 3:
      sys.memData();
      break;
    case 4:
      sys.batteryData();
      break;
    case 5:
      sys.graphicsData();
      break;
    case 6:
      sys.displayData();
      break;
    case 7:
      sys.storageData();
      break;
    case 8:
      sys.usbData();
      break;
    case 9:
      sys.wifiInterfaceData();
      break;
    case 10:
      sys.wifiConnectionData();
      break;
    case 11:
      sys.audioData();
      break;
    case 12:
      sys.bluetoothData();
      break;
    case 13:
      exit();
    default:
      loader.gostMode();
      break;
  }
};
