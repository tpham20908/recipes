const F2FAPIKEY1 = "208153e49795cf523ea34733a50ab840";
const F2FAPIKEY2 = "9e8f605e4eff28b96cee2e6556474d39";
const F2FAPIKEY3 = "8bd80a16e601ea37905e2581c6822c17";
const F2FAPIKEY4 = "bfcda5a0f3f2470af87457d359034804";
const F2FAPIKEY5 = "3e193bb1b58be8f4acc9c8a324a4b2fd";
const F2FAPIKEY6 = "a2a81b8fb7535be7af2742d299226f4b";
const F2FAPIKEY7 = "5d64a3e123b0ae7e78b88591fbd91149";
const F2FAPIKEY8 = "3c634d4e1ca16b9f3e30bff4555bcc02";
const F2FAPIKEY9 = "6a82e306cd4d872cec26d521f710b9af";
const F2FAPIKEY10 = "67b00eb4ae7740dd633f2222a171042b";

let arrayKeys = [
  F2FAPIKEY1,
  F2FAPIKEY2,
  F2FAPIKEY3,
  F2FAPIKEY4,
  F2FAPIKEY5,
  F2FAPIKEY6,
  F2FAPIKEY7,
  F2FAPIKEY8,
  F2FAPIKEY9,
  F2FAPIKEY10
];

setInterval(() => {
  arrayKeys.push(arrayKeys.shift());
  console.log(arrayKeys[0]);
}, 1000 * 60 * 5);

const F2FAPIKEY = arrayKeys[1];

export default class config {
  // Food2fork
  static F2FSEARCH = `https://www.food2fork.com/api/search?key=${F2FAPIKEY}`;
  static F2FGET = `https://www.food2fork.com/api/get?key=${F2FAPIKEY}&rId=`;
  static QUERY = "&q=";
  static NUMBEROFPAGE = "&page=";
  // TheMealDB
  static AREA = "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian";
  static CATEGORIES = "https://www.themealdb.com/api/json/v1/1/categories.php";
  static INGREDIENTIMAGE =
    "https://www.themealdb.com/images/ingredients/Lime.png";
  static LIST = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";
  static MAININGREDIENT =
    "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast";
  static RANDOM = "https://www.themealdb.com/api/json/v1/1/random.php";
}
