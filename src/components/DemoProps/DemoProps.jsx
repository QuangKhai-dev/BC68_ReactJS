import React, { useState } from "react";
import DemoShoe from "./DemoShoe";
import { useDispatch } from "react-redux";
import { updateArrShoes } from "../../redux/xeHoiSlice";
const DemoProps = () => {
  let [id, setId] = useState(0);
  let arrShoes = [
    {
      id: 1,
      name: "vans black",
      alias: "vans-black-black",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[2,3,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/vans-black-black.png",
    },
    {
      id: 2,
      name: "vans old school",
      alias: "vans-old-school",
      price: 200,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[3,2,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/van-old-school.png",
    },
    {
      id: 3,
      name: "converse chuck taylor",
      alias: "converse-chuck-taylor",
      price: 250,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "VANS_CONVERSE","category":"VANS_CONVERSE"}]',
      relatedProducts: "[2,3,1]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/converse-chuck-taylor.png",
    },
    {
      id: 4,
      name: "nike adapt bb",
      alias: "nike-adapt-bb",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[5,6,7]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-adapt-bb.png",
    },
    {
      id: 6,
      name: "nike air max 97",
      alias: "nike-air-max-97",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[7,8,9]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-97.png",
    },
    {
      id: 7,
      name: "nike air max 97 blue",
      alias: "nike-air-max-97-blue",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 200,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[9,8,7]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-air-max-97-blue.png",
    },
    {
      id: 8,
      name: "nike flyknit",
      alias: "nike-flyknit",
      price: 250,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[8,9,10]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-flyknit.png",
    },
    {
      id: 9,
      name: "nike react element",
      alias: "nike-react-element",
      price: 280,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[10,9,8]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-react-element.png",
    },
    {
      id: 10,
      name: "nike shox tl",
      alias: "nike-shox-tl",
      price: 280,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[9,10,11]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-shox-tl.png",
    },
    {
      id: 11,
      name: "nike sp dunk",
      alias: "nike-sp-dunk.png",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "NIKE","category":"NIKE"}]',
      relatedProducts: "[11,10,9]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/nike-sp-dunk.png",
    },
    {
      id: 12,
      name: "adidas prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[13,14,15]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere.png",
    },
    {
      id: 13,
      name: "adidas prophere black white",
      alias: "adidas-prophere-black-white",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[12,14,15]",
      feature: true,
      image:
        "https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png",
    },
    {
      id: 14,
      name: "adidas prophere customize",
      alias: "adidas-prophere-customize",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[13,15,16]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-prophere-customize.png",
    },
    {
      id: 15,
      name: "adidas super star red",
      alias: "adidas-super-star-red",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[14,16,17]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-super-star-red.png",
    },
    {
      id: 16,
      name: "adidas swift run",
      alias: "adidas-swift-run",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[15,17,18]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-swift-run.png",
    },
    {
      id: 17,
      name: "adidas tenisky super star",
      alias: "adidas-tenisky-super-star",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[16,18,19]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-tenisky-super-star.png",
    },
    {
      id: 18,
      name: "adidas ultraboost 4",
      alias: "adidas-ultraboost-4",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[17,19,16]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-ultraboost-4.png",
    },
    {
      id: 19,
      name: "adidas yeezy 350",
      alias: "adidas-yeezy-350",
      price: 350,
      description:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
      size: "[31,32,33,34,35]",
      shortDescription:
        "about this shoe:Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      quantity: 100,
      deleted: false,
      categories: '[{"id": "ADIDAS","category":"ADIDAS"}]',
      relatedProducts: "[16,17,18]",
      feature: true,
      image: "https://shop.cyberlearn.vn/images/adidas-yeezy-350.png",
    },
    {
      id: 20,
      name: "string",
      alias: "string",
      price: 0,
      description: "string",
      size: "[0]",
      shortDescription: "string",
      quantity: 0,
      deleted: false,
      categories: '[{"id":"string","category":"string"}]',
      relatedProducts: "[0]",
      feature: false,
      image: "https://shop.cyberlearn.vn/images/string",
    },
  ];
  // Những dữ liệu từ props truyền xuống là dữ liệu readonly, không cho phép thay đổi dữ liệu
  // Có thể thực hiện tương tác lấy dữ liệu từ component con lên component cha thông qua state và phương thức setState được cấu tạo trong hàm truyền xuống
  let number = 8;

  function capNhatId(id) {
    setId(id);
  }
  console.log(id);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h2>Bài tập render danh sách giày Props</h2>
      <button
        onClick={() => {
          dispatch(updateArrShoes(arrShoes));
        }}
        className="bg-green-700 text-white py-2 px-5 rounded-lg"
      >
        Chuyển dữ liệu arrShoes lưu trữ lên store
      </button>
      <div className="grid grid-cols-4">
        {/* sử dụng vòng lặp để tạo item  */}
        {arrShoes.map((item, index) => {
          {
            /* console.log(item); */
          }
          return <DemoShoe item={item} number={number} capNhatId={capNhatId} />;
        })}
      </div>
    </div>
  );
};

export default DemoProps;
