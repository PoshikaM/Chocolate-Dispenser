var chocolates = [
  'green',
  'green',
  'green',
  'silver',
  'blue',
  'crimson',
  'purple',
  'red',
  'crimson',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'silver',
  'crimson',
  'purple',
  'silver',
  'silver',
  'red',
  'green',
  'red',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'silver',
  'crimson',
  'pink',
  'silver',
  'blue',
  'pink',
  'crimson',
  'crimson',
  'crimson',
  'red',
  'purple',
  'purple',
  'green',
  'pink',
  'blue',
  'red',
  'crimson',
  'silver',
  'purple',
  'purple',
  'purple',
  'red',
  'purple',
  'red',
  'blue',
  'silver',
  'green',
  'crimson',
  'silver',
  'blue',
  'crimson',
  'purple',
  'green',
  'pink',
  'green',
  'red',
  'silver',
  'crimson',
  'blue',
  'green',
  'red',
  'red',
  'pink',
  'blue',
  'silver',
  'pink',
  'crimson',
  'purple',
  'green',
  'red',
  'blue',
  'red',
  'purple',
  'silver',
  'blue',
  'pink',
  'silver',
  'crimson',
  'silver',
  'blue',
  'purple',
  'purple',
  'green',
  'blue',
  'blue',
  'red',
  'red',
  'silver',
  'purple',
  'silver',
  'crimson',
];

// x and y ==> can take any of the values from the below list-
// [ green, red, purple, blue, crimson, silver, pink ]
// z ==> can take a number from 0<=a<=100

//Progression 1: Add z chocolates of x color

function addChocolates(chocolates, color, count) {
  return count > 0
    ? helperAddChocolates(chocolates, color, count)
    : 'Number cannot be zero/negative';
}
function helperAddChocolates(chocolates, color, count) {
  [...Array(count)].forEach(() => {
    chocolates.unshift(color);
  });
}

//Progression 2: Remove z chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperRemoveChocolates(chocolates, number);
}
function helperRemoveChocolates(chocolates, number) {
  return [...Array(number)].map(() => chocolates.shift());
}

//Progression 3: Dispense z chocolates

function dispenseChocolates(chocolates, number) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperDispenseChocolates(chocolates, number);
}
function helperDispenseChocolates(chocolates, number) {
  return [...Array(number)].map(() => chocolates.pop());
}

//Progression 4: Dispense z chocolates of x color

function dispenseChocolatesOfColor(chocolates, number, color) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? 'Insufficient chocolates in the dispenser'
    : helperDispenseChocolatesOfColor(chocolates, number, color);
}
function helperDispenseChocolatesOfColor(chocolates, number, color) {
  return [...Array(number)].map(() => chocolates.pop());
}

//Progression 5: Display z chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
  colors = ['green', 'silver', 'blue', 'crimson', 'purple', 'red', 'pink'];

  return colors.reduce((result, color) => {
    const count = chocolates.reduce(
      (acc, choc) => (choc === color ? acc + 1 : acc),
      0
    );
    return count > 0 ? [...result, count] : result;
  }, []);
}

//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
  let GiveArray = [
    'silver',
    'green',
    'blue',
    'crimson',
    'purple',
    'red',
    'pink ',
  ];

  chocolates.sort();

  let obj = {};
  let ans = [];

  for (let i = 0; i < chocolates.length; i++) {
    let elementFromArray = chocolates[i];
    if (obj[elementFromArray] == undefined) {
      obj[elementFromArray] = 1;
    } else {
      obj[elementFromArray] = obj[elementFromArray] + 1;
    }
  }
  const sortable = Object.fromEntries(
    Object.entries(obj).sort(([, a], [, b]) => b - a)
  );

  Object.keys(sortable).forEach((key) => {
    for (let i = 0; i < sortable[key]; i++) {
      ans.push(key);
    }
  });

  return ans;
}

//Progression 7: Change z chocolates of x color to y color

function changeChocolateColor(chocolates, number, color, finalColor) {
  return number <= 0
    ? 'Number cannot be zero/negative'
    : number > chocolates.length
    ? []
    : color === finalColor
    ? "Can't replace the same chocolates"
    : heleperchangeChocolateColor(chocolates, number, color, finalColor);
}
function heleperchangeChocolateColor(chocolates, number, color, finalColor) {
  return chocolates.map((chocolate) =>
    chocolate === color ? finalColor : chocolate
  );
}

//Progression 8: Change all chocolates of x color to y color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
  return color === finalColor
    ? "Can't replace the same chocolates"
    : [
        chocolates
          .map((chocolate) => (chocolate === color ? finalColor : chocolate))
          .reduce(
            (count, element) => (element === finalColor ? count + 1 : count),
            0
          ),
        chocolates.map((chocolate) =>
          chocolate === color ? finalColor : chocolate
        ),
      ];
}

//Challenge 1: Remove one chocolate of x color from the top

function removeChocolateOfColor(chocolates, Color) {
  let xColor = chocolates.indexOf(Color);

  if (xColor >= 0) {
    chocolates.splice(xColor, 1);
  }
  return chocolates;
}

//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed

function dispenseRainbowChocolates(chocolates, number) {
  let obj = {};

  for (let i = 0; i < chocolates.length; i++) {
    if (obj[chocolates[i]] === undefined) {
      obj[chocolates[i]] = 1;
    } else {
      obj[chocolates[i]] = obj[chocolates[i]] + 1;
    }
  }

  let objInArray = Object.values(obj);

  let rainbowDispensed = 0;
  for (let i = 0; i < objInArray.length; i++) {
    if (objInArray[i] % 3 == 0) {
      rainbowDispensed = rainbowDispensed + objInArray[i] / 3;
    }
  }

  return Math.floor(rainbowDispensed);
}
dispenseRainbowChocolates(chocolates, 3);
