import "@fontsource/roboto";
import "./App.css";
import { useReducer, useState, useEffect } from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import { weatherReducer, INITIAL_STATE } from "./weatherReducer";
import { ACTION_TYPES } from "./weatherActionTypes";
import Form from "./Form";
function App() {
  const [state, dispatch] = useReducer(weatherReducer, INITIAL_STATE);
  const [input, setInput] = useState();
  const [city, setCity] = useState({
    longitude: 0,
    latitude: 0,
    name: "",
  });

  function handleFetch() {
    dispatch({ type: ACTION_TYPES.FETCH_START });
    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&hourly=temperature_2m`
    )
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: ACTION_TYPES.FETCH_SUCCESS,
          payload: data,
        }).catch((err) => dispatch({ type: ACTION_TYPES.FETCH_ERROR }))
      );
  }

  function handleSearch() {
    fetch(`https://geocode.maps.co/search?q=${input}`)
      .then((res) => res.json())
      .then((data) =>
        setCity({
          name: data[0].display_name.split(",")[0], //Split the display names into an array and display the first one only
          latitude: Number(data[0].lat),
          longitude: Number(data[0].lon),
        })
      );
    return true;
  }
  console.log(city);
  console.log(state);
  return (
    <>
      <Navbar />
      <Form
        input={input}
        setInput={setInput}
        handleSearch={handleSearch}
        handleFetch={handleFetch}
      />
      <Card weather={state} city={city} />
    </>
  );
}

export default App;
