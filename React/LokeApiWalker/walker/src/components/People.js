import { Link } from "@reach/router";
import axios from "axios";
import React, { useState, useEffect } from "react";
const People = (props) => {
  const { id } = props;
  const [apiData, setApiData] = useState({});
  const [homeworld, setHomeworld] = useState("");
  const [homeworldId, setHomeworldId] = useState();
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}`)
      .then((response) => {
        setIsError(false);
        console.log(response.data);
        setApiData(response.data);
        getHomeworldId(response.data.homeworld);
        axios
          .get(response.data.homeworld)
          .then((homeworldRes) => {
            console.log(homeworldRes.data.name);
            setHomeworld(homeworldRes.data.name);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [props]);

  const getHomeworldId = (homeworldURL) => {
    // check for 1 character ID
    if (homeworldURL.charAt(homeworldURL.length - 3) === "/") {
      const hwId = homeworldURL.charAt(homeworldURL.length - 2);
      setHomeworldId(hwId);
    } else {
      const firstCharId = homeworldURL.charAt(homeworldURL.length - 3);
      const secondCharId = homeworldURL.charAt(homeworldURL.length - 2);
      const idString = `${firstCharId}${secondCharId}`;
      setHomeworldId(idString);
    }
    // check for 2 character ID
  };
  if (!isError) {
    return (
      <div>
        <h1>{apiData.name}</h1>
        <p>Height: {apiData.height}</p>
        <p>Hair Color: {apiData.hair_color}</p>
        <p>Eye Color: {apiData.eye_color}</p>
        <p>Skin Color: {apiData.skin_color}</p>
        <p>Homeworld: {homeworld}</p>
        {/* <p> */}
        <Link to={`/planets/${homeworldId}`}>homeworld</Link>
        {/* </p> */}
      </div>
    );
  } else {
    return (
      <>
        <img
          src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg?w=800&quality=85"
          alt=""
        />
        <h3>These aren't the droids you're looking for</h3>
      </>
    );
  }
};

export default People;

const hw = "https://swapi.dev/api/planets/28/";
// "https://swapi.dev/api/planets/28/"
// "https://swapi.dev/api/planets/2/"
console.log(hw.charAt(hw.length - 2));
console.log(hw.charAt(hw.length - 3));