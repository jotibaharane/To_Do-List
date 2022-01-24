let item = [];
let i;
const text = document.getElementById("text");
const lis = document.getElementById("list");
const sub = document.getElementById("submit");
const test = document.getElementById("test");
const cros = document.getElementById("text.value");
const cancel = document.getElementById("cancel");
sub.addEventListener("click", () => {
  if (text.value != "") {
    item.push(text.value);
  }
  text.value = "";
  submit(item);
});
function submit(item) {
  let listItem = "";
  for (i = 0; i < item.length; i++) {
    listItem += `
   <li>
   ${item[i]}
   <input type="button" value="X" onclick="remove(${i})"} />
   <input type="button" value="Done" id="done" />
   </li>
   `;
  }
  lis.innerHTML = listItem;
}
cancel.addEventListener("click", () => {
  item = [];
  submit(item);
});
function remove(index) {
  let li = item.splice(index, 1);
  console.log(index);
  submit(item);
}
