import React, { useState } from "react";

interface List {
  id: string;
  title: string;
  editing: boolean;
}

const TodoList = () => {
  const [inputVal, setInputVal] = useState("");
  const todoList: List[] = [
    { title: "学习react", id: "react", editing: false },
    { title: "学习vue", id: "vue", editing: false },
    { title: "学习angular", id: "angular", editing: false },
  ];
  const [list, setList] = useState<List[]>(todoList);
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    setInputVal(val);
  };
  const handleAdd = () => {
    if (!inputVal) return;
    setList([
      ...list,
      {
        id: String(+new Date()),
        title: inputVal,
        editing: false,
      },
    ]);
    setInputVal("");
  };
  const handleRemove = (item: List) => {
    const newList = list.filter((l) => l.id !== item.id);
    setList(newList);
  };
  const handleEdit = (item?: List) => {
    if (!item) {
      return;
    }
    const todoList = list.map((v) => {
      if (item.id === v.id) {
        v.editing = true;
      }
      return v;
    });
    setList(todoList);
  };
  const handleEditing = (item: List) => {
    const editingList = list.map((l) => {
      if ((l.id = item.id)) {
        l.title = item.title;
      }
      return l;
    });
    setList(editingList);
  };
  return (
    <>
      <header>
        <input type="text" value={inputVal} onInput={handleInput} />
        <button onClick={handleAdd}>添加</button>
      </header>
      <main>
        <ul>
          {list.map((item) => {
            const showList = (
              <li key={item.id} onDoubleClick={() => handleEdit(item)}>
                {item.title}
                <button onClick={() => handleRemove(item)}>删除</button>
              </li>
            );
            const editList = (
              <li key={item.id} onDoubleClick={() => handleEdit()}>
                <input
                  type="text"
                  value={item.title}
                  onInput={() => handleEditing(item)}
                />
              </li>
            );
            return item.editing ? editList : showList;
          })}
        </ul>
      </main>
    </>
  );
};
export default TodoList;
