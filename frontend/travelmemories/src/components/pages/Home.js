import React from "react";
import Cards from "../UIC/Cards";
import FeaturedCard from "../UIC/FeaturedCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get("http://localhost:3001/trip/").then((res) => setData(res.data));
  }, []);
  console.log(data);
  if (data) {
    return (
      <div>
        <div style={{ margin: "2%" }}>
          {data.map((e) => {
            if (e.featured) {
              return (
                <FeaturedCard
                  title={e.tripName}
                  subtitle={e.tripType}
                  description={e.shortDesc}
                ></FeaturedCard>
              );
            }else{
              return null
            }
          })}

          {data.map((e) => {
            if (!e.featured) {
              return (
                <Cards
                  title={e.tripName}
                  subtitle={e.tripType}
                  description={e.shortDesc}
                ></Cards>
              );
            }else{
              return null
            }
          })}
        </div>
      </div>
    );
  } else {
    return <>Loading ...</>;
  }
}
