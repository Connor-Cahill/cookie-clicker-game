/////DEFUALT VARIABLES ///////////////////////////////////
let cookieCount = 0;
let clickPower = 1000;
let clickPowerPriceAmount = 50;
let clickPowerLevelNum = 1;
let grandmaPower = 10;
let grandmaPriceAmount = 500;
let grandmaPowerLevel = 0;
let autoGrandma = false;
let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 100000;
let facilityLevelNum = 0;
let farmAuto = false;
let farmPower = 500;
let farmLevelNum = 0;
let farmPriceAmount = 25000;
let mansionPriceAmount = 1000000;


///// SET UP DOM  ///////////////////////////////////////////////
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');
let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');
let buyGrandma = document.getElementById('buy-grandma');
let grandmaMultiple = document.getElementById('grandma-multiple');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let facilityMultiple = document.getElementById('facility-multiple');
let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let farmLevel = document.getElementById('farm-level');
let farmMultiple = document.getElementById('farm-multiple');
let buyFarm = document.getElementById('buy-facility');
let farmPrice = document.getElementById('farm-price');
//mansion dom items
let buyMansion = document.getElementById('buy-mansion');
let mansionPrice = document.getElementById('mansion-price');
let houseImage = document.getElementById('house-image');
let housePic = document.querySelector('.house-image')


///////////COOKIE CLICKER SECTION /////////////////////////////

cookieCounter.innerHTML = cookieCount;
//Setting up e-listener for cookie clicker btn
cookieClicker.addEventListener('click',(e) => {
    cookieCount = cookieCount + clickPower;
    refreshCookieCount();
})

///refresh cookie count function
let refreshCookieCount = function() {
    cookieCounter.innerHTML = cookieCount;
}



/////////////////CLICK POWER SECTION ////////////////////////////

///Buy click power in shop
buyClickPower.addEventListener('click', (e) => {
    ///check if user has enough cookies to purchase item
    if (cookieCount >= clickPowerPriceAmount) {
        console.log('Item was successfully bought!');
        //subtract cookies from cookieCount
        cookieCount -= clickPowerPriceAmount;
        //update cookieCounter
        refreshCookieCount();
        //upgrades power level
        clickPowerLevelNum += 1;
        //update price
        clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);
        //increase click power
        clickPower += 1 * Math.floor(clickPowerLevelNum * 1.05);
        // refresh click power
        refreshClickPower();
    } else {
        console.log('You do not have enough coooookies!');
    }
})
////refresh click power Level
const refreshClickPower = function() {
    clickPowerLevel.innerHTML = clickPowerLevelNum;
    clickPowerPrice.innerHTML = clickPowerPriceAmount;
    clickPowerMultiple.innerHTML = clickPower;
}


//---------GRANDMA SECTION -------------------------//

//buy a grandma
buyGrandma.addEventListener('click', () => {
    autoGrandma = false;
    // make sure user has enough cookies to purchase
    if (cookieCount >= grandmaPriceAmount) {
        console.log('Grandma successfully purchased.');
    //subtract cookies from user
        cookieCount -= grandmaPriceAmount;
        refreshCookieCount();
    //upgrade power Level
        grandmaPowerLevel += 1;
    //update price
        grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
    //update grandma power
        grandmaPower += 10 + Math.floor(grandmaPowerLevel * 1.33);
    //turn autoGrandma on
        autoGrandma = true;
        autoGrandmaStart();

    //refresh shop item
    refreshGrandma();
} else {
    console.log('You do not have enough cookies for this purchase.')
}
})

let autoGrandmaStart = function() {
    let grandmaInt = window.setInterval(function(){
        cookieCount += grandmaPower;
        refreshCookieCount()
    }, 1000);
}

const refreshGrandma = function() {
    grandmaLevel.innerHTML = grandmaPowerLevel;
    grandmaPrice.innerHTML = grandmaPriceAmount;
    grandmaMultiple.innerHTML = grandmaPower - 10;
}




//////////////// FACILITY SECTION /////////////

buyFacility.addEventListener('click', () => {
    //turn autoFacility off (?)
    autoFacility = false;
    //make sure user have enough cookies
    if (cookieCount >= facilityPriceAmount) {
        //refresh cookie count
        cookieCount -= facilityPriceAmount;
        refreshCookieCount();
    //upgrade power level
        facilityLevelNum += 1;
    //update price
        facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
        facilityPower += 600 + Math.floor(facilityLevelNum * 1.33);
    //turn on facility power
        facilityAuto = true;
        autoFacilityStart();
    //refresh shop item
        refreshFacility();
} else {
    console.log('You do not have enough cookies to purchase this item.');
}
})

const refreshFacility = function() {
    facilityLevel.innerHTML = facilityLevelNum;
    facilityPrice.innerHTML = facilityPriceAmount;
    facilityMultiple.innerHTML = facilityPower - 600;
}

let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function() {
        cookieCount += facilityPower;
        refreshCookieCount();
    }, 1000)
}


///////////// Cookie Farm Section ////////////////
// buyFarm.addEventListener('click', function() {
function purchaseFarm() {
    console.log('Congratz you now own a cookie farm.');
    //turn auto facility off
    autoFarm = false;
    //check to see if user has enough cookies
    if (cookieCount >= farmPriceAmount) {
        //subtract cookies and update cookie cookieCounter
            cookieCount -= farmPriceAmount;
            refreshCookieCount();
        //upgrade farm power level
            farmPower += 500 + Math.floor(farmLevelNum * 1.33);

        //upgrade farm power
            farmLevelNum += 1;
        //increase farm price
            farmPriceAmount += Math.floor(farmPriceAmount * 1.33);
            //turn autoFarm on
            autoFarm = true;
            autoFarmStart();
        //refresh shop item
        refreshFarm();
    } else {
        alert('You do not have enough cookies for that.');
    }
}


    const refreshFarm = function() {
        farmLevel.innerHTML = farmLevelNum;
        farmPrice.innerHTML = farmPriceAmount;
        farmMultiple.innerHTML = farmPower;
    }


    const autoFarmStart = function() {
            let farmInt = window.setInterval(function() {
                cookieCount += farmPower;
                refreshCookieCount();

            }, 1000)
    }


////////////  MANSION SECTION ///////

buyMansion.addEventListener('click', () => {
    if (cookieCount >= mansionPriceAmount) {
        //subtract price from cookies
        cookieCount -= mansionPriceAmount;
        refreshCookieCount();
        // reveal mansion in UI //
        console.log(houseImage);
        houseImage.

        // change buy button to "already bought" //

    }
})
