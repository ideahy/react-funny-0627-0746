import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

export const ChildArea = memo((props) => {
  const { open, close } = props;
  console.log("ChildAreaレンダリング");

  const data = [...Array(2000).keys()];
  console.log(data);
  data.forEach(() => {
    console.log("ForEach");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={close}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
