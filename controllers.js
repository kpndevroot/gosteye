import si from "systeminformation";
import * as util from "./utils/common.js";
import chalkAnimation from "chalk-animation";
import chalk from "chalk";
// npm i chalk chalk-animation figlet gradient-string inquirer nanospinner
// cpu information

export const cpuData = async () => {
  try {
    const data = await si.cpu();
    // console.log("CPU Information:");
    console.log(chalk.blue.bold("CPU Information"));

    console.log("- manufacturer: " + data.manufacturer);
    console.log("- brand: " + data.brand);
    console.log("- cores: " + data.cores);
    console.log("- no of processors: " + data.processors);
    console.log("- physical cores: " + data.physicalCores);
    console.log("- performance cores: " + data.performanceCores);
    console.log("- efficiency cores: " + data.efficiencyCores);
    console.log("- speed: " + data.speed + " GHz");
    console.log("- max speed: " + data.speedMax + " GHz");
    console.log("- min speed: " + data.speedMin + " GHz");
    console.log("- socket: " + data.socket);
    console.log("- processor family: " + data.family);
    console.log("- processor model: " + data.model);
    console.log("- processor model: " + data.model);
    console.log("- virtualization: " + data.virtualization);

    // console.log("- cpu flags: " + data.flags);

    console.log("...");
  } catch (e) {
    console.log(e);
  }
};

// os information

export const OsData = async () => {
  try {
    console.log(chalk.blue.bold("Os Information:"));
    await si.osInfo().then((data) => {
      console.log("- platform: " + data.platform);
      console.log("- distro: " + data.distro);
      console.log("- release: " + data.release);
      console.log("- kernel: " + data.kernel);
      console.log("- architecture: " + data.arch);
      console.log("- hostname: " + data.hostname);
      console.log("- codepage: " + data.codepage);
      console.log("- logo file: " + data.logofile);
      console.log("- serial: " + data.serial);
      console.log("- build version: " + data.build);
    });

    console.log("...");
  } catch (e) {
    console.log(e);
  }
};

// ram information

export const memData = async () => {
  try {
    console.log(chalk.blue.bold("Ram Information:"));
    await si.mem().then((data) => {
      console.log("- total: " + util.bytes_to_size(data.total));
      console.log("- free: " + util.bytes_to_size(data.free));
      console.log("- used: " + util.bytes_to_size(data.used));
      console.log("- active: " + util.bytes_to_size(data.active));
      console.log("- available: " + util.bytes_to_size(data.available));
      console.log("- swap total: " + util.bytes_to_size(data.swaptotal));
      console.log("- swap used: " + util.bytes_to_size(data.swapused));
      console.log("- swap free: " + util.bytes_to_size(data.swapfree));
      //   console.log("- active: " + data.total);
      //   console.log("- distro: " + data.distro);
    });
    await si.memLayout().then((data) => {
      data.map((mem) => {
        console.log(
          `-SLOT ${mem.bank} \n - size: ${mem.size} \n - type: ${mem.type} \n - manufacturer: ${mem.manufacturer} \n - ecc: ${mem.ecc} \n - clock speed: ${mem.clockSpeed} \n - part number: ${mem.partNum} \n - serial number: ${mem.serialNum} \n - voltage configured: ${mem.voltageConfigured}v \n - min voltage: ${mem.voltageMin}v \n - max voltage: ${mem.voltageMax}v`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });

    console.log("...");
  } catch (e) {
    console.log(e);
  }
};

// battery information

export const batteryData = async () => {
  try {
    console.log(chalk.blue.bold("Battery Information:"));
    await si.battery().then((data) => {
      console.log("- battery: " + data.hasBattery);
      console.log("- manufacturer: " + data.manufacturer);
      console.log("- type: " + data.type);
      console.log("- model: " + data.model);
      console.log("- serial: " + data.serial);
      console.log("- voltage: " + data.voltage + "v");
      console.log("- designed capacity: " + data.designedCapacity + "mWh");
      console.log("- max capacity: " + data.maxCapacity + "mWh");
      console.log("- current capacity: " + data.currentCapacity + "mWh");
      console.log("- cycle count: " + data.cycleCount);
      console.log("- charging status: " + data.isCharging);
      console.log("- AC connected: " + data.acConnected);
      console.log("- percentage: " + data.percent + "%");
      console.log("- time remaining: " + data.timeRemaining + "min");
    });
  } catch (error) {
    console.log(error);
  }
};

// graphics information

export const graphicsData = async () => {
  try {
    console.log(chalk.blue.bold("Graphics Information:"));
    await si.graphics().then((data) => {
      data.controllers.map((graphics) => {
        console.log(
          `- vendor: ${graphics.vendor} \n - model: ${graphics.model} \n - bus: ${graphics.bus} \n - vram: ${graphics.vram} \n - vram dynamic: ${graphics.vramDynamic} \n - name: ${graphics.name} \n - driver version: ${graphics.driverVersion} \n - fan speed: ${graphics.fanSpeed} \n - driver version: ${graphics.driverVersion} \n - total memory: ${graphics.memoryTotal} \n - driver version: ${graphics.driverVersion} \n - free mem: ${graphics.memoryFree} \n - driver version: ${graphics.driverVersion} \n - mem used: ${graphics.memoryUsed}`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// display information

export const displayData = async () => {
  try {
    console.log(chalk.blue.bold("Display Information:"));
    await si.graphics().then((data) => {
      data.displays.map((graphics) => {
        console.log(
          `- vendor: ${graphics.vendor} \n - model: ${graphics.model} \n - main: ${graphics.main} \n - connection: ${graphics.connection} \n - builtin: ${graphics.builtin} \n - pixelDepth: ${graphics.pixelDepth} \n - resolution: ${graphics.resolutionX}x${graphics.resolutionY} \n - current resolution: ${graphics.currentResX}x${graphics.currentResY} \n - current refreshrate: ${graphics.currentRefreshRate} \n - connection: ${graphics.connection}`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// storage information

export const storageData = async () => {
  try {
    console.log(chalk.blue.bold("Display Information:"));
    await si.diskLayout().then((data) => {
      data.map((disk) => {
        console.log(
          `- device: ${disk.device} \n - type: ${disk.type} \n - name: ${
            disk.name
          } \n - vendor: ${disk.vendor} \n - size: ${util.bytes_to_size(
            disk.size
          )} \n - serial number: ${disk.serialNum} \n - interface type: ${
            disk.interfaceType
          } \n - firmware version: ${disk.firmwareRevision} \n - smartStatus: ${
            disk.smartStatus
          } \n`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// usb device information

export const usbData = async () => {
  try {
    console.log(chalk.blue.bold("Usb Device Information:"));
    await si.usb().then((data) => {
      data.map((usb) => {
        console.log(
          `- device: ${usb.name} \n - device id: ${usb.deviceId} \n - bus: ${usb.bus} \n - vendor: ${usb.vendor} \n - manufacturer: ${usb.manufacturer} \n - type: ${usb.type} \n - removable: ${usb.removable} \n - maxPower: ${usb.maxPower} \n - serial number: ${usb.serialNumber} \n - id: ${usb.id} \n`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// wifi interface information

export const wifiInterfaceData = async () => {
  try {
    console.log(chalk.blue.bold("WIFI Interface Information:"));

    await si.wifiInterfaces().then((data) => {
      data.map((wi) => {
        console.log(
          ` - id: ${wi.id} \n - iface: ${wi.iface} \n - model: ${wi.model} \n - vendor: ${wi.vendor}  \n - mac: ${wi.mac} \n `
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// wifi connection details

export const wifiConnectionData = async () => {
  try {
    console.log(chalk.blue.bold("WIFI connection Information:"));

    await si.wifiConnections().then((data) => {
      data.map((wi) => {
        console.log(
          ` - id: ${wi.id} \n - iface: ${wi.iface} \n - model: ${wi.model} \n - name: ${wi.name} \n - vendor: ${wi.vendor} \n - ssid: ${wi.ssid} \n - bssid: ${wi.bssid} \n - channel: ${wi.channel} \n - frequency: ${wi.frequency} \n - type: ${wi.type} \n - security: ${wi.security} \n - transfer rate: ${wi.txRate}(Mbit/s) \n`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// speaker information

export const audioData = async () => {
  try {
    console.log(chalk.blue.bold("Audio Interface Information:"));

    await si.audio().then((data) => {
      data.map((au) => {
        console.log(
          ` - id: ${au.id} \n - name: ${au.name} \n - manufacturer: ${au.manufacturer} \n - type: ${au.type} \n - channel: ${au.channel} - status: ${au.status} \n - driver: ${au.driver} \n`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
          //   \n - default: ${au.default} \n - out: ${au.out} \n - in: ${au.in} \n
        );
      });
    });
  } catch (error) {
    console.log(error);
  }
};

// bluetooth information

export const bluetoothData = async () => {
  try {
    console.log(chalk.blue.bold("Bluetooth Interface Information:"));

    await si.bluetoothDevices().then((data) => {
      data.map((res) => {
        console.log(
          ` - device: ${res.device} \n - name: ${res.name} \n - manufacturer: ${res.manufacturer} \n - device mac: ${res.macDevice} \n - mac host: ${res.macHost} - type: ${res.type} \n - batteryPercent: ${res.batteryPercent} \n - connected: ${res.connected} \n`
          //   `- bank: ${mem.bank} with quantity ${quantity} with price ${price}`
          //   \n - default: ${au.default} \n - out: ${au.out} \n - in: ${au.in} \n
        );
      });
    });
  } catch (error) {
    console.log({ error: error });
  }
};
