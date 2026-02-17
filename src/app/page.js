import { Suspense } from "react";
import HomePageClient from "./HomePageClient";

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "linear-gradient(to bottom, rgb(103, 29, 54) 0%, rgb(65, 9, 28) 50%, rgb(226, 232, 240) 100%)",
          }}
        >
          <p style={{ color: "rgb(71, 85, 105)", fontWeight: "500" }}>
            Cargando ranking…
          </p>
        </div>
      }
    >
      <HomePageClient />
    </Suspense>
  );
}
