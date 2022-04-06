import { useDeferredValue, useState, memo,useId } from "react";
import MySlowList from "./SlowList";

export default function UseDeferredValuePage(props) {
  const [text, setText] = useState("hello");
  const deferredText = useDeferredValue(text);

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const id = useId()
  return (
    <div>
      <h3 id={id}>UseDeferredValuePage</h3>
      {/* 保持将当前文本传递给 input */}
      {/* 紧急更新 */}
      <input value={text} onChange={handleChange} />
      {/* 但在必要时可以将列表“延后” */}
      <p>{deferredText}</p>

      {/* 非紧急更新 */}
      <MySlowList text={deferredText} />
    </div>
  );
}