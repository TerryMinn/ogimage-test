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
            "linear-gradient(180deg, #fff9e6 0%, #f5d98d 60%, #e7b44a 100%)", // GOLD GRADIENT ✨
          fontFamily: "serif",
        }}
      >
        {/* Domain Badge */}
        <div
          style={{
            display: "flex",
            marginTop: 35,
            padding: "12px 32px",
            borderRadius: 30,
            background: "rgba(255,255,255,0.7)",
            fontSize: 30,
            color: "#6b6b6b",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        >
          staging.hintharproperty.com
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            marginTop: 45,
            fontSize: 56, // PERFECT TITLE SIZE
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

        {/* Subtitle */}
        <div
          style={{
            display: "flex",
            marginTop: 18,
            width: 800,
            fontSize: 24,
            lineHeight: 1.32,
            textAlign: "center",
            color: "#4d4d4d",
            justifyContent: "center",
          }}
        >
          Looking for the best real estate in Myanmar? HinThar Property Real
          Estate offers top-notch service for houses, condos, land, and
          commercial properties. Let us help you turn your dream home into a
          reality.
        </div>

        {/* Main Image */}
        <div
          style={{
            display: "flex",
            marginTop: 45,
            width: 950,
            height: 280,
            borderRadius: 28,
            overflow: "hidden",
            border: "8px solid rgba(255,255,255,0.85)",
          }}
        >
          <img
            src="https://hinthar.sfo3.digitaloceanspaces.com/meta/meta.jpg"
            width={1200}
            height={800}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            marginTop: 30,
            width: "100%",
            padding: "18px 55px",
            background: "rgba(255,255,255,0.65)",
            fontSize: 40,
            fontWeight: 700,
            color: "#000",
          }}
        >
          Hinthar Property - Real Estate Platform
        </div>
      </div>
    ),
    size,
  );
}
