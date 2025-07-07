import { useEffect, useState } from "react";
import "./App.css";
import InfoPanel from "./components/InfoPanel";
import MapSection from "./components/MapSection";
import SearchForm from "./components/SearchForm";
import type { LocationData } from "./types";

function App() {
  const API_KEY = import.meta.env.VITE_GEO_API_KEY;
  const ipAddressEndpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=`;
  const domainsEndpoint = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&domain=`;

  const [locationData, setLocationData] = useState<LocationData | null>(null);

  const fetchAndSetData = async (url: string) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLocationData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const ipReg =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    const domainReg =
      /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/;

    if (ipReg.test(searchTerm)) {
      fetchAndSetData(ipAddressEndpoint + searchTerm);
    } else if (domainReg.test(searchTerm)) {
      fetchAndSetData(domainsEndpoint + searchTerm);
    } else {
      alert("Please enter a valid IP address or domain name");
    }
  };

  useEffect(() => {
    const fetchInitialIP = async () => {
      try {
        const ipRes = await fetch("https://api.ipify.org?format=json");
        const ipJson = await ipRes.json();
        await fetchAndSetData(ipAddressEndpoint + ipJson.ip);
      } catch (error) {
        console.error("Error fetching initial IP:", error);
      }
    };

    fetchInitialIP();
  }, []);

  return (
    <main>
      <SearchForm onSearch={handleSearch} />
      <InfoPanel data={locationData} />
      {locationData && (
        <MapSection
          lat={locationData.location.lat}
          lng={locationData.location.lng}
        />
      )}
    </main>
  );
}

export default App;
