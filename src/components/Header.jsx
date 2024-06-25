const Header = () => {
  // Các thẻ html sử dụng trong react thực chất là thẻ jsx được cung cấp từ react
  // bản chất của các thẻ này là object
  console.log(<div></div>);
  let hoTen = "La Hán Trung";
  let number = 32;
  // let mauSac = {
  //   backgroundColor: "red",
  //   color: "white",

  // };
  return (
    <div>
      <h2
        id="demo"
        // className={number > 6 ? "Tôi lớn hơn" : "Tôi nhỏ hơn"}
        className={`bg-blue-500 p-3 ${
          number > 6 ? "Tôi lớn hơn" : "Tôi nhỏ hơn"
        }`}
        // style={mauSac}
        // style={{
        //   backgroundColor: "red",
        //   color: "white",
        // }}
      >
        {hoTen}
      </h2>
      {/* <input type="text" value={hoTen} /> */}
    </div>
  );
};

export default Header;
