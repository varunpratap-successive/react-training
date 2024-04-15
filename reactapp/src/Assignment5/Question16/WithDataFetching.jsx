import React, { useEffect, useState } from "react";
import axios from "axios";

const withDataFetching = (WrappedComponent) => {
  const EnhancedComponent = () => {
    const [axiosdata, setAxiosdata] = useState([]);

    const getApidata = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        setAxiosdata(res.data.splice(0, 3));
      } catch (error) {
        console.log(error.message);
      }
    };

    useEffect(() => {
      getApidata();
    }, []);

    return <WrappedComponent axiosdata={axiosdata} />;
  };
  return EnhancedComponent;
};

export default withDataFetching;
