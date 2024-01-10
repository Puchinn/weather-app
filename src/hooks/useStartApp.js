import { useEffect, useState } from "react";

function useStartApp() {
  const [hasSavedConfig, setHasSavedConfig] = useState(false);

  useEffect(() => {
    console.log("checking local storage...");
    console.log("user has settings saved");
    console.log("fetching data...");
    console.log("setting redux config states...");
    setHasSavedConfig(true);
  }, []);

  return { hasSavedConfig };
}

export { useStartApp };
