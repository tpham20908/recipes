const F2FAPIKEY = "208153e49795cf523ea34733a50ab840";

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
