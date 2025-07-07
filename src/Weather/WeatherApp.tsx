import React, { useEffect, useState } from "react";

const API_KEY = "c9a0ca46550648b29ce125849232709";
const DEFAULT_CITY = "Hanoi";

interface WeatherData {
  temp_c: number;
  condition: { text: string; icon: string };
  humidity: number;
  wind_kph: number;
}

interface HourlyForecast {
  time: string;
  temp_c: number;
  condition: { text: string; icon: string };
}

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState(DEFAULT_CITY);
  const [inputCity, setInputCity] = useState(DEFAULT_CITY);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [hourly, setHourly] = useState<HourlyForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch current weather
        const resCurrent = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no&lang=vi`
        );
        const dataCurrent = await resCurrent.json();
        // Fetch hourly forecast
        const resForecast = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=no&alerts=no&lang=vi`
        );
        const dataForecast = await resForecast.json();
        setWeather({
          temp_c: dataCurrent.current.temp_c,
          condition: dataCurrent.current.condition,
          humidity: dataCurrent.current.humidity,
          wind_kph: dataCurrent.current.wind_kph,
        });
        setHourly(
          (dataForecast.forecast.forecastday[0].hour as HourlyForecast[]).map(
            (h) => ({
              time: h.time,
              temp_c: h.temp_c,
              condition: h.condition,
            })
          )
        );
      } catch {
        setError("Không thể lấy dữ liệu thời tiết.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, [city]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCity(inputCity);
  };

  // Helper to format hour label
  const getHourLabel = (timeStr: string) => {
    const date = new Date(timeStr);
    const now = new Date();
    if (
      date.getHours() === now.getHours() &&
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth()
    )
      return "Now";
    return date.toLocaleTimeString("vi-VN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  return (
    <div
      className="weather-app-container"
      style={{
        maxWidth: 350,
        margin: "0 auto",
        fontFamily: "sans-serif",
        background: "linear-gradient(to bottom, #b3d8f7, #e0ecfa)",
        borderRadius: 24,
        padding: 16,
      }}
    >
      {/* Search Bar */}
      <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={inputCity}
          onChange={(e) => setInputCity(e.target.value)}
          placeholder="Hanoi"
          style={{
            width: "100%",
            padding: 12,
            borderRadius: 16,
            border: "none",
            fontSize: 18,
            background: "#e6f0fa",
          }}
        />
      </form>
      {loading ? (
        <div style={{ textAlign: "center", padding: 32 }}>
          Đang tải dữ liệu...
        </div>
      ) : error ? (
        <div style={{ textAlign: "center", color: "red", padding: 32 }}>
          {error}
        </div>
      ) : weather ? (
        <>
          {/* Current Weather */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <div>
              <div style={{ fontSize: 72, fontWeight: 600 }}>
                {Math.round(weather.temp_c)}°
              </div>
              <div style={{ fontSize: 28, fontWeight: 500 }}>
                {weather.condition.text}
              </div>
            </div>
            <div>
              {/* Weather Icon */}
              <img
                src={weather.condition.icon}
                alt={weather.condition.text}
                width={64}
                height={64}
              />
            </div>
          </div>
          {/* Humidity & Wind */}
          <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
            <div
              style={{
                flex: 1,
                background: "#e6f0fa",
                borderRadius: 16,
                padding: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 16, color: "#888" }}>Humidity</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>
                {weather.humidity}%
              </div>
            </div>
            <div
              style={{
                flex: 1,
                background: "#e6f0fa",
                borderRadius: 16,
                padding: 12,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: 16, color: "#888" }}>Wind</div>
              <div style={{ fontSize: 28, fontWeight: 600 }}>
                {weather.wind_kph.toLocaleString("vi-VN")} km/h
              </div>
            </div>
          </div>
          {/* Hourly Forecast */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 16 }}>
            <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 8 }}>
              Now
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 8,
                overflowX: "auto",
              }}
            >
              {hourly
                .filter((_, idx) => idx % 3 === 0) // Show every 3 hours for compactness
                .slice(0, 4)
                .map((h, idx) => (
                  <div key={idx} style={{ textAlign: "center", minWidth: 60 }}>
                    <img
                      src={h.condition.icon}
                      alt={h.condition.text}
                      width={32}
                      height={32}
                    />
                    <div style={{ fontSize: 20, fontWeight: 600 }}>
                      {Math.round(h.temp_c)}°
                    </div>
                    <div style={{ fontSize: 16, color: "#888" }}>
                      {getHourLabel(h.time)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default WeatherApp;
