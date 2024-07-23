import React, { useMemo, useState } from "react";

const DemoUseMemo = () => {
  const [giaTien, setGiaTien] = useState(0);
  const [number, setNumber] = useState(0);
  let tinhGiaTienUuDai = (soTien) => {
    return soTien * (10 / 100);
  };

  let giaTienUuDai = useMemo(() => {
    return tinhGiaTienUuDai(giaTien);
  }, [giaTien]);
  console.log(giaTienUuDai);
  return (
    <div>
      <h2>Bài tập demo về useMemo trong react</h2>
      <input
        type="text"
        placeholder="Vui lòng nhập số tiền"
        onChange={(event) => {
          setGiaTien(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng giá trị number
      </button>
      <p>{number}</p>
    </div>
  );
};

export default DemoUseMemo;
