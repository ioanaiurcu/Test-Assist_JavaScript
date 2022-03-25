const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

async function getData(url) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  return data;
}
getData(url);
