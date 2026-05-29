import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router";
import App from "./App";

function Home() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const [key, setKey] = useState(0)
  useEffect(() => {
    console.log(location)
    try {
      if (location.state.remount || navigationType === "POP") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setKey(Date.now())
        console.log("remounted")
      }
    } catch { /* empty */ }
  }, [location, navigationType])

  return <App key={key}/>
}

export default Home;
