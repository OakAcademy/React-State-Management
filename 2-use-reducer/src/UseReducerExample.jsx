import React, { useReducer } from "react";
import PersonCard from "./PersonCard";
import { initialState, reducer } from "./reducer";

const UseReducerExample = () => {
  // const [person, setPerson] = useState("");
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);
  const { person, error, loading } = state;
  const getPerson = async () => {
    const url = "https://randomuser.me/api/";
    // setLoading(true);
    dispatch({ type: "START" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      // setPerson(data.results[0]);
      // setError("");
      //   console.log(data.results[0]);
      dispatch({ type: "SUCCESS", payload: data.results[0] });
    } catch (error) {
      // setError("Person can not be fetched");
      // setPerson("");
      dispatch({ type: "FAIL", payload: "Person can not be fetched" });
    }
  };
  console.log(state);
  return (
    <div>
      <button disabled={loading} onClick={getPerson}>
        Get Person
      </button>
      <div>
        {error && <h1>{error}</h1>}
        {person && <PersonCard {...person} />}
      </div>
    </div>
  );
};

export default UseReducerExample;
