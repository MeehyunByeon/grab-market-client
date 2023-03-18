export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://mh-grab-market-server.fly.dev"
    : "http://localhost:8080";
