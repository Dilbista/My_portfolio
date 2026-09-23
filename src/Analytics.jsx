import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Analytics() {
  const location = useLocation();

  useEffect(() => {
    window.gtag?.("config", "G-5YETQTXMH0", {
      page_path: location.pathname + location.search,
    });
  }, [location]);

  return null;
}

export default Analytics;