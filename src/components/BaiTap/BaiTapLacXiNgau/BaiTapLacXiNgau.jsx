import React from "react";
import "./baiTapLacXiNgau.scss";
import XiNgau from "./XiNgau";
import KetQua from "./KetQua";
import { useDispatch } from "react-redux";
import { ketQuaNguoiChoi } from "../../../redux/xiNgauSlice";
const BaiTapLacXiNgau = () => {
  const dispatch = useDispatch();
  return (
    <div className="game_xi_ngau py-5 text-center space-y-5">
      <h2 className="text-5xl font-bold mb-5">Game lắc xí ngầu</h2>
      <XiNgau />
      <KetQua />
      <button
        onClick={() => {
          dispatch(ketQuaNguoiChoi());
        }}
        className="bg-green-700 text-white py-2 px-5 rounded-lg"
      >
        Chơi game
      </button>
    </div>
  );
};

export default BaiTapLacXiNgau;
