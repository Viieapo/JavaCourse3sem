const Http = new XMLHttpRequest();
const url='https://jsonplaceholder.typicode.com/users';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);  // => получим массив данных в формате JSON
}