import React, { useEffect, useState } from "react";
import Card from "../components/Card";
// import data from '../data.json';
import "../css/card.css";

const Home = () => {
  const [data, setData] = useState();
  // console.log(data);

  //To convert a json to js obj. (No need to convert here!)
  // const jsData = JSON.parse(data);

  // console.log(data.articles);
  const fetchData = async () => {
    let shows = await fetch("https://api.tvmaze.com/search/shows?q=all");
    let showsData;
    if (shows) {
      showsData = await shows.json();
      setData(showsData);
      console.log(showsData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="card_grp">
        {/*if data is null,then can't map..so && */}
        {data &&
          data.map((item) => (
            <Card
            key={item.show.id}
              img={item?.show?.image?.original}
              heading={item.show.name}
              lang={item.show.language}
              ratings={item.show.rating.average}
              id={item.show.id}
            />
          ))}
      </div>
    </>
  );
};

export default Home;
