import { useState, useCallback } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("APPレンダリング");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);
  const onClickOpen = () => setOpen(!open);
  //子が毎回新しい関数を生成していると判断　→　props変更！？　→　再レンダリング！
  //処理が変わらない場合は同じものを使い回すと指示　＝　useCallback
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} close={onClickClose} />
    </div>
  );
}
