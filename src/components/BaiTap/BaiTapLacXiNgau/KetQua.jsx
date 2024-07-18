import React from "react";
import { useSelector } from "react-redux";

const KetQua = () => {
  const { banChon, tongSoBanChoi, tongSoBanThang } = useSelector(
    (state) => state.xiNgauSlice
  );
  const classH3 = "text-3xl font-bold";
  return (
    <div className="space-y-5">
      <h3 className={classH3}>
        Bạn chọn: <span className="text-red-500">{banChon}</span>
      </h3>
      <h3 className={classH3}>
        Tổng số bàn thắng:
        <span className="text-green-700">{tongSoBanThang}</span>
      </h3>
      <h3 className={classH3}>
        Tổng số bàn chơi: <span className="text-blue-600">{tongSoBanChoi}</span>
      </h3>
    </div>
  );
};

export default KetQua;
