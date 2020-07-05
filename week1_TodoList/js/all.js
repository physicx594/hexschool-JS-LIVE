let listData = [];
let inputText = document.querySelector(".inputText");
let add = document.querySelector(".add");
let list = document.querySelector(".list");
let deleteBtn = document.querySelector("ul");
let listNum = document.querySelector(".listNum");
let clearAll = document.querySelector(".clearAll");

window.onload = render();
add.addEventListener("click", addList);
clearAll.addEventListener("click", removeAll);
deleteBtn.addEventListener("click", removeList);
deleteBtn.addEventListener("click", status);

//新增
function addList() {
  let value = inputText.value;
  if (value.length == 0 || value.trim() == "") {
    return;
  } else {
    listData.push({
      text: value,
      status: false,
      id: listData.length,
    });
  }
  inputText.value = "";
  render();
}

//刪除單一
function removeList(e) {
  if (e.target.nodeName === "BUTTON") {
    listData.splice(e.target.dataset.num, 1);
  }
  render();
}
//刪除全部
function removeAll() {
  listData = [];
  render();
}
//是否完成
function status(e) {
  console.log(e.target.nodeName);
  if (e.target.nodeName === "INPUT" || e.target.nodeName === "SPAN") {
    listData.forEach((item) => {
      if (e.target.dataset.num == item.id) {
        if (item.status) {
          item.status = false;
        } else {
          item.status = true;
        }
      }
    });
    render();
  }
}
function render() {
  let str = "";
  listData.forEach((item, i) => {
    str += `<li >
          <input type="checkbox" class="status" ${
            item.status ? "checked" : ""
          } data-num=${i}>
          <span class=" ${item.status ? "completed" : ""}" data-num=${i}>${
      item.text
    }</span>
          <button type="button" class="delete" data-num=${i}>X</button>
      </li>`;
  });
  list.innerHTML = str;
  listNum.innerHTML = `有${listData.length}筆任務`;
}
