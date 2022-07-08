export var item_types = [
  {code: 'TG', display: 'Trade Good'},
  {code: 'GEM', display: 'Gemstone'},
  {code: 'ART', display: 'Art Object'}
]

export var tiers = [
  {title:'Apprentice',  start:1,  end:2,  dice:2, coin:25,    rarity:['C','C','C','C','C','U']},
  {title:'Journeyman',  start:3,  end:5,  dice:3, coin:50,    rarity:['C','C','U','U','U','R']},
  {title:'Adventurer',  start:6,  end:8,  dice:3, coin:100,   rarity:['C','C','U','U','R','R']},
  {title:'Veteran',     start:9,  end:11, dice:4, coin:250,   rarity:['C','U','R','R','R','V']},
  {title:'Champion',    start:12, end:14, dice:4, coin:1000,  rarity:['U','R','R','V','V','V']},
  {title:'Heroic',      start:15, end:17, dice:5, coin:2500,  rarity:['R','R','V','V','V','L']},
  {title:'Legendary',   start:18, end:20, dice:5, coin:5000,  rarity:['R','V','V','L','L','L']},
]

export var rarity_value = [
  {rarity:'Common',     TG:10,  GEM:50,   ART:100},
  {rarity:'Uncommon',   TG:25,  GEM:100,  ART:500},
  {rarity:'Rare',       TG:50,  GEM:500,  ART:1000},
  {rarity:'Very Rare',  TG:250, GEM:1000, ART:5000},
  {rarity:'Legendary',  TG:500, GEM:5000, ART:10000}
]

export var distribution = [
  {name:"Balanced Trove",   types:['TG','TG','GEM','GEM','ART','ART']},
  {name:"More Trade Goods", types:['TG','TG','TG','GEM','GEM','ART']},
  {name:"More Art Objects", types:['TG','GEM','GEM','ART','ART','ART']},
  {name:"No Trade Goods",   types:['GEM','GEM','GEM','ART','ART','ART']},
  {name:"No Art",           types:['TG','TG','TG','GEM','GEM','GEM']}
]

export function rollTreasure(tier, coinsDice, objectDice, distribution) {
  var treasure = {}

  treasure.coins = rollSum(coinsDice) * tier.coin

  var numItems = rollSum(objectDice);

  return treasure
}

export function makeItem(tier, dist) {
  var item = {}

  item.type_code = dist.types[rollD6() - 1]
  item.type = item_types.filter( obj => {return obj.code === item.type_code})[0].display
  item.rarity_code = tier.rarity[rollD6() - 1]
  var rare = rarity_value.filter( obj => { return obj.rarity.charAt(0) === item.rarity_code} )[0]
  item.value = rare[item.type_code]
  item.rarity = rare.rarity
  item.quality = 'Normal'
  
  if (rollD6() === 1 ) {
    if (rollD6() < 4) {
      item.quality = 'Inferior'
      item.value *= .5
    } else {
      item.quality = 'Superior'
      item.value *= 2
    }
  }

  return item
}


function rollSum(numDice) {
  var sum = 0
  for (var idx = numDice; numDice > 0; idx-- )
    sum += rollD6()

  return sum
}

function rollD6() {
  return randomNumberInRange(1,6)
}

function randomNumberInRange(min, max) {
  // 👇️ get number between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}