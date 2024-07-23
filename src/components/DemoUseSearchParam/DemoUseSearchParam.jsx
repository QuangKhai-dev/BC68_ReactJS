import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useWindowSize from "../../hooks/useResizeWindow";

const DemoUseSearchParam = () => {
  const sizeWindow = useWindowSize();
  console.log(sizeWindow);
  const hoTen = useInput("");
  const gioiTinh = useInput("hihi");
  const [valueInput, setValueInput] = useState("abc");
  const [searchParam, setSearchParam] = useSearchParams();
  // console.log(searchParam.get("name"));
  // console.log(searchParam.get("diachi"));
  const queryParamList = Object.fromEntries([...searchParam]);
  console.log(queryParamList);
  return sizeWindow.width < 576 ? (
    <div>Tôi đang ở mobile</div>
  ) : (
    <div>
      <input
        onChange={(event) => {
          setSearchParam({ ...queryParamList, name: event.target.value });
        }}
        type="text"
        placeholder="Vui lòng nhập dữ liệu màu sắc"
        className="border border-black p-2 rounded-md"
      />
      <input
        onChange={(event) => {
          setValueInput(event.target.value);
        }}
        value={valueInput}
        type="text"
        placeholder="Vui lòng nhập dữ liệu màu sắc"
        className="border border-black p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Vui lòng nhập dữ liệu màu sắc"
        className="border border-black p-2 rounded-md"
        {...hoTen}
      />
      <input
        type="text"
        placeholder="Vui lòng nhập dữ liệu màu sắc"
        className="border border-black p-2 rounded-md"
        {...gioiTinh}
      />
    </div>
  );
};

export default DemoUseSearchParam;
