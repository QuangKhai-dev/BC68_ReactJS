import React, { useRef } from "react";

const DemoUseRef = () => {
  const ref = useRef(null);
  console.log("Hello tôi là demoUseRef");
  return (
    <div>
      <h2>Bài tập tương tác với ref của React</h2>
      <input
        ref={ref}
        type="text"
        placeholder="Vui lòng nhập tên"
        onChange={(event) => {
          // ref.current giúp cho chúng ta truy cập tới thẻ đang được gọi thông qua ref
          ref.current.value = event.target.value;
          console.log(
            // scrollIntroView là một phương thức giúp scroll tới phần tử được chỉ định
            ref.current.scrollIntroView({
              behavior: "smooth",
            })
          );
        }}
      />
      <p>{ref?.current?.value}</p>
    </div>
  );
};

export default DemoUseRef;
