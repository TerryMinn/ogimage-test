import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const alt = "hinthar-property.png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "linear-gradient(180deg, #fff9e6 0%, #f5d98d 80%, #e7b44a 100%)",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 20,
            padding: "12px 32px",
            borderRadius: 30,
            background: "rgba(255,255,255,0.7)",
            fontSize: 12,
            justifyContent: "center",
            color: "#6b6b6b",
            alignItems: "center",
          }}
        >
          hintharproperty.com
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 10,
            fontSize: 20, // PERFECT TITLE SIZE
            fontWeight: 800,
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.15,
            color: "#000",
            justifyContent: "center",
          }}
        >
          Hinthar Property - Real Estate Platform
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 18,
            width: 800,
            fontSize: 14,
            lineHeight: 1.32,
            textAlign: "center",
            color: "#4d4d4d",
            justifyContent: "center",
          }}
        >
          <p style={{ width: "80%" }}>
            Looking for the best real estate in Myanmar? HinThar Property Real
            Estate offers top-notch service for houses, condos, land, and
            commercial properties. Let us help you turn your dream home into a
            reality.
          </p>
        </div>

        {/* Main Image */}
        <div
          style={{
            display: "flex",
            marginTop: 45,
            width: 300,
            height: 300,
            borderRadius: 50,
            overflow: "hidden",
            border: "8px solid rgba(255,255,255,0.85)",
          }}
        >
          <img
            src="https://hinthar.sfo3.digitaloceanspaces.com/meta/icon.png"
            width={300}
            height={300}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
