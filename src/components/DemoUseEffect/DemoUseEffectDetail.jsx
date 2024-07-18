import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemShoe from "./ItemShoe";

const DemoUseEffectDetail = () => {
  const [shoes, setShoes] = useState({});
  const params = useParams();
  console.log(params);
  // NV1 : Thực hiện sử dụng paramId từ bên trên và gọi dữ liệu lấy chi tiết sản phẩm
  const [number, setNumber] = useState(1);
  console.log(number);

  // Đây là useEffect sẽ chạy sau khi component được rerender lại
  // Lưu ý: useEffect này sẽ chạy sau khi component được rerender những với điều kiện đó là tham số được truyền vào dependencies phải thay đổi
  // Lưu ý: dependencies có thể truyền nhiều phần tử để kiểm tra
  useEffect(() => {
    axios({
      method: "GET",
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
    })
      .then((res) => {
        console.log(res);
        setShoes(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, number]);

  // Đây là useEffect sẽ chạy khi component biến mất (không xuất hiện, có thể bị tắt đi) khỏi giao diện
  // Lưu ý : ở đây ứng dụng thường dùng để tracking thời gian sử dụng của người dùng
  useEffect(() => {
    return () => {
      console.log("Tôi là component đã bị tắt đi");
    };
  });

  // Đây là useEffect sẽ chạy khi component xuất hiện lần đầu và khi component vào quá trình rerender
  // Xử lí kiểm tra xem màn hình người dùng đang là bao nhiêu px
  useEffect(() => {
    console.log(
      "Tôi là useEffect render lần đầu cũng như tất cả những lần component render"
    );
  });

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        Tăng giá trị number
      </button>
      <h2>
        Demo useParam và useEffect chạy did update thông qua trang chi tiết
      </h2>
      <div className="grid grid-cols-3 gap-10">
        <div>
          <img src={shoes?.image} className="w-full" alt="" />
        </div>
        <div>
          <h3>{shoes?.name}</h3>
          <p>Giá tiền:</p>
          <button className="py-2 px-5 bg-green-700 rounded-md text-white">
            Mua ngay
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3">
        {shoes.relatedProducts?.map((item, index) => {
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

export default DemoUseEffectDetail;
