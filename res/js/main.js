const counter = document.getElementById("counter");
const robux = document.getElementById("robux");
const upgradeButton = document.getElementById("upgrade");
const upgradeButton1 = document.getElementById("upgrade1");
const upgradeButton2 = document.getElementById("upgrade2");
let numberOfrobux = 0;
let clickUpgrade = 1;
let upgradeCost = 50;
let upgrade1Cost = 75;
let upgrade2Cost = 100;
let click1Upgrade = 3;
let click2Upgrade = 5;

robux.onclick = () => {
  console.log("Robux has been clicked");
  numberOfrobux += clickUpgrade;
  counter.innerHTML = "Number of Robux: " + numberOfrobux;
};

upgradeButton.onclick = () => {
  if (numberOfrobux >= upgradeCost) {
    console.log("the upgrade has been purchased");
    numberOfrobux -= upgradeCost;
    clickUpgrade += clickUpgrade;
    counter.innerHTML = "Number of Robux: " + numberOfrobux;
    upgradeCost = upgradeCost + 25;
    upgradeButton.innerHTML = "Buy upgrade: " + upgradeCost;
  }

  if (numberOfrobux < upgradeCost) {
    upgradeButton.disabled
    console.log("this button is disabled right now")
  }
};

upgradeButton1.onclick = () => {
    if (numberOfrobux >= upgrade1Cost) {
        console.log("upgrade 1 has been purchased");
        numberOfrobux -= upgrade1Cost;
        clickUpgrade += click1Upgrade;
        counter.innerHTML = "Number of Robux: " + numberOfrobux;
        upgrade1Cost = upgrade1Cost + 50;
        upgradeButton1.innerHTML = "Buy upgrade " + upgrade1Cost;
    }

    if (numberOfrobux < upgrade1Cost) {
      upgradeButton1.disabled
      console.log("this button is disabled right now")
    }
}

upgradeButton2.onclick = () => {
    if (numberOfrobux >= upgrade2Cost) {
        console.log("upgrade 2 has been purchased");
        numberOfrobux -= upgrade2Cost;
        clickUpgrade += click2Upgrade;
        counter.innerHTML = "Number of Robux " + numberOfrobux;
        upgrade2Cost += upgrade2Cost + 100;
        upgradeButton2.innerHTML = "Buy upgrade " + upgrade2Cost;
    }

    if (numberOfrobux < upgrade2Cost) {
      upgradeButton2.disabled
      console.log("this button is disabled right now")
    }
}

