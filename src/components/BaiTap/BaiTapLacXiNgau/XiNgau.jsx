import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { thayDoiBanChon } from "../../../redux/xiNgauSlice";
const XiNgau = () => {
  const { xiNgau } = useSelector((state) => state.xiNgauSlice);
  const dispatch = useDispatch();
  const classButton =
    "bg-purple-600 py-14 px-14 text-2xl text-white rounded-lg border-orange-500 border-8";
  return (
    <div className="flex justify-between">
      <button
        onClick={() => {
          dispatch(thayDoiBanChon("Tài"));
        }}
        className={classButton}
      >
        Tài
      </button>
      <div className="flex items-center">
        <img
          width={50}
          src={`./public/gameXiNgau/${xiNgau.xiNgau1}.png`}
          alt=""
        />
        <img
          width={50}
          src={`./public/gameXiNgau/${xiNgau.xiNgau2}.png`}
          alt=""
        />
        <img
          width={50}
          src={`./public/gameXiNgau/${xiNgau.xiNgau3}.png`}
          alt=""
        />
      </div>
      <button
        onClick={() => {
          dispatch(thayDoiBanChon("Xỉu"));
        }}
        className={classButton}
      >
        Xỉu
      </button>
    </div>
  );
};

export default XiNgau;
