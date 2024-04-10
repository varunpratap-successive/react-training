//Question8
// Create a temperature converter component with two input fields: one for Celsius and one for Fahrenheit.
// Implement controlled components for both inputs. When the user enters a value in one input, the other input should update with the converted temperature.

import { useEffect, useState } from "react";

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenhite, setFahrenhite] = useState("");

  const [valueFarenhite, setvalueFarenhite] = useState(null);
  const [valueCelsius, setvalueCelsius] = useState(null);

  useEffect(() => {
    if (fahrenhite !== "") {
      setvalueFarenhite(fahrenhite);
      setvalueCelsius(((fahrenhite - 32) * 5) / 9);
    } else if (celsius !== "") {
      setvalueCelsius(celsius);
      setvalueFarenhite((celsius * 9) / 5 + 32);
    } else {
      setvalueCelsius(null);
      setvalueFarenhite(null);
    }
  }, [fahrenhite, celsius]);

  return (
    <div>
      <input
        type="text"
        placeholder="inCelsius"
        value={valueCelsius}
        onChange={(e) => setCelsius(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="inFarenhite"
        value={valueFarenhite}
        onChange={(e) => setFahrenhite(e.target.value)}
      />
    </div>
  );
};

export default TemperatureConverter;
