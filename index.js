const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  const li = document.createElement("li");
  const div = document.createElement("div");
  div.className = "list-row";
  const p = document.createElement("p");
  p.className = "todo-item";
  p.innerText = inputText;

  const completeButton = document.createElement("button");
  const deleteButton = document.createElement("button");
  const returnButton = document.createElement("button");

  completeButton.innerText = "完了";

  completeButton.addEventListener("click", () => {
    div.removeChild(completeButton);
    div.removeChild(deleteButton);

    returnButton.innerText = "戻す";
    div.appendChild(returnButton);

    completedUl.appendChild(li);
  });

  deleteButton.innerText = "削除";

  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  returnButton.addEventListener("click", () => {
    div.removeChild(returnButton);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    ul.appendChild(li);
  });
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);
  console.log(li);

  const ul = document.getElementById("incomplete-list");
  ul.appendChild(li);

  const completedUl = document.getElementById("complete-list");
};

document.getElementById("add-button").addEventListener("click", onClickAdd);
