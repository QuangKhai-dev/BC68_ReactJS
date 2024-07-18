import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ItemShoe from "./ItemShoe";
import { ContextHoTen } from "../../App";
const DemoUseEffect = () => {
  const context = useContext(ContextHoTen);
  console.log(context);

  const [products, setProducts] = useState();
  // Đây là useEffect (Chạy Component Didmount) sẽ chạy trong lần đầu tiên component hiển thị lên giao diện
  // Lưu ý: useEffect này chỉ chạy 1 lần duy nhất
  useEffect(() => {
    // những xử lí được thực thi khi component được hiển thị lên giao diện
    console.log("Tôi nằm trong useEffect");
    axios({
      method: "GET",
      url: "https://shop.cyberlearn.vn/api/Product",
    })
      .then((res) => {
        console.log(res);
        setProducts(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(products);
  let hienThiNoiDung = () => {
    console.log("Tôi là thành phần nội dung trên trang");
  };
  return (
    <div>
      <h2>Bài tập sử dụng useEffect xử lí API từ Backend</h2>
      <div className="grid grid-cols-4">
        {products?.map((item, index) => {
          return (
            <ItemShoe
              image={item.image}
              name={item.name}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DemoUseEffect;
