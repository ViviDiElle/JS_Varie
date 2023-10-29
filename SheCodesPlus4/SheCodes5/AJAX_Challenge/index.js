function showComment(response) {
  alert(`The first comment is "${response.data.name}"`);
}

let url = "https://jsonplaceholder.typicode.com/comments/1";
axios.get(url).then(showComment);

function showEmail(response) {
  alert(`The first email is "${response.data[0].email}"`);
}

let apiUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiUrl).then(showEmail);

function showBody(response) {
  alert(`The first "body of text" is: "${response.data[0].body}"`);
}

let apiSuperUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiSuperUrl).then(showBody);

function show2ndName(response) {
  alert(`The second "name" of the array is: "${response.data[1].name}"`);
}

let apiSupaUrl = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiSupaUrl).then(show2ndName);