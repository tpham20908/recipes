const F2FAPIKEY1 = "208153e49795cf523ea34733a50ab840";
const F2FAPIKEY2 = "9e8f605e4eff28b96cee2e6556474d39";
const F2FAPIKEY3 = "8bd80a16e601ea37905e2581c6822c17";
const F2FAPIKEY4 = "bfcda5a0f3f2470af87457d359034804";
const F2FAPIKEY5 = "3e193bb1b58be8f4acc9c8a324a4b2fd";

const F2FAPIKEY = F2FAPIKEY3;

export default class config {
  // Food2fork
  static F2FSEARCH = `https://www.food2fork.com/api/search?key=${F2FAPIKEY}`;
  static F2FGET = `https://www.food2fork.com/api/get?key=${F2FAPIKEY}&rId=`;
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
