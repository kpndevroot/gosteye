import * as sys from "./controllers/controllers.js";
import chalk from "chalk";
import { createSpinner } from "nanospinner";
import * as loader from "./controllers/loader.js";
import rs from "readline-sync";

let dot =
  "...................................................................................................";
console.log(dot);

// Varsity Train The Edge THIS Stronger Than All
// const spinner = createSpinner("FETCH ... \n").start();
// setTimeout(() => {
//   spinner.success();
// }, 3000);

// load();
function make() {
  loader.banner();
  loader.menu();
  loader.choiceMaker();

  // var answer = rs.question(chalk.cyanBright("do you want to continue"));
  // if (answer === "y") {
  //   loader.choiceMaker();
  // } else {
  //   exit();
  // }
}
make();
