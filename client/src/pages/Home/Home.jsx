import React, { useEffect, useMemo, useState } from "react";
import NavBar from "../../component/navbar/NavBar";
import Card from "../../component/card/Card";
import { getAllProducts } from "../../api/fetchItems";
import { useLocation } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [allProducts, setAllProducts] = useState(null);
  const location = useLocation();
  const [username, setUser] = useState(null);

  useEffect(() => {
    if (location.state) setUser(location.state.username);
  }, [location.state]);

  const onUserLogOut = (canLogin) => {
    setUser(null);
    // setCanUserLogIn(canLogin);
  };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        // console.log("res 1", data)
      })
      .catch(() => {});
  }, []);

  useMemo(() => {
    setAllProducts(
      data.map((item) => {
        return <Card item={item} key={item.id} />;
      })
    );
    // console.log(data)
  }, [data]);

  return (
    <>
      <NavBar username={username} location={location} setUsername={setUser} />
      <div className="flex flex-row flex-wrap gap-5 ml-4 mt-16 mb-8">
        {allProducts}
      </div>
    </>
  );
}

export default Home;
