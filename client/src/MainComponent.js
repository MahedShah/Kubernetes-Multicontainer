import { useCallback, useState } from "react";
import axios from "axios";

const MainComponent = () => {
  const [values, setvalues] = useState([]);
  const getAllNumbers = useCallback(async () => {
    const values = await axios.get("/api/values/all");
    setvalues(values);
  });

  return (
    <div>
      <button onClick={getAllNumbers}> Get all numbers</button>
      <br />
      <span>Values</span>
      <div>
        {values.map((value) => (
          <div>{value}</div>
        ))}
      </div>
    </div>
  );
};

export default MainComponent;
