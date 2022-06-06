import { useState } from "react";
import axios from "axios";

const UseFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState(null);

  const instance = axios.create({
    baseURL: "https://api.openbrewerydb.org/breweries",
  });

  const fetchData = async (url: string) => {
    setIsLoading(true);
    try {
      const response = await instance.get(url);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  return { isLoading, data, setData, fetchData };
};

export default UseFetchData;
