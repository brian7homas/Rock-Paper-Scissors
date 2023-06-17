import { useState, useEffect } from "react";

const UseIsClient = () => {
  const [isClient, setClient] = useState(false);
  const key = isClient ? "client" : "server";

  useEffect(() => {
    setClient(true);
  }, []);

  return { isClient, key };
};

export default UseIsClient;