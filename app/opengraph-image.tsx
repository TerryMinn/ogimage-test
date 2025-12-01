import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "/app/logo.png"));
  const logoSrc = Uint8Array.from(logoData).buffer;

  console.log(logoSrc);

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          fontSize: 60,
          color: "black",
          background: "#f6f6f6",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          width="256"
          height="256"
          src={`https://github.com/shadcn.png`}
          style={{
            borderRadius: 128,
            border: "8px solid #e5e7eb",
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
