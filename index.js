//追加ボタンクリック時の処理
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = createTodoItem(inputText);
  document.getElementById("incomplete-list").appendChild(li);
};

//TODOアイテムの作成関数
const createTodoItem = (text) => {
  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = text;

  const completeButton = createButton("完了", () => moveToCompleteList(li));
  const deleteButton = createButton("削除", () => deleteTodoItem(li));

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  return li;
};

//ボタン作成関数
const createButton = (text, onClick) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.addEventListener("click", onClick);
  return button;
};

//完了リストへ移動させる処理
const moveToCompleteList = (item) => {
  const completedUl = document.getElementById("complete-list");
  const returnButton = createButton("戻す", () => moveToIncompleteList(item));

  const div = item.querySelector(".list-row");
  //完了、削除ボタンを除去して戻すボタンを追加
  div.querySelectorAll("button").forEach((button) => button.remove());
  div.appendChild(returnButton);

  completedUl.appendChild(item);
};

//未完了リストへ移動させる処理
const moveToIncompleteList = (item) => {
  const incompleteUl = document.getElementById("incomplete-list");

  const completeButton = createButton("完了", () => moveToCompleteList(item));
  const deleteButton = createButton("削除", () => deleteTodoItem(item));
  const div = item.querySelector(".list-row");

  //戻すボタンを除去して完了、削除ボタンを再追加
  div.querySelectorAll("button").forEach((button) => button.remove());
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  incompleteUl.appendChild(item);
};

//TODO削除
const deleteTodoItem = (item) => {
  item.remove();
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
