import { ImageResponse } from "next/og";
import { content } from "@/lib/content";

export const runtime = "edge";

export const alt = "Rakib Hossain - Full-Stack Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  const { person } = content;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8faf3", // surface color
          fontFamily: "sans-serif",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            background: "linear-gradient(135deg, rgba(163,230,53,0.3) 0%, rgba(163,230,53,0.05) 100%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "600px",
            height: "600px",
            background: "linear-gradient(45deg, rgba(163,230,53,0.2) 0%, rgba(163,230,53,0.02) 100%)",
            borderRadius: "50%",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            border: "2px solid #dfe8d2",
            backgroundColor: "#ffffff",
            padding: "60px 80px",
            borderRadius: "32px",
            boxShadow: "0 24px 50px rgba(77, 124, 15, 0.15)",
            zIndex: 10,
          }}
        >
          <div
            style={{
              fontSize: "32px",
              fontWeight: 600,
              color: "#4d7c0f", // accent color
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              marginBottom: "24px",
            }}
          >
            Portfolio
          </div>
          <div
            style={{
              fontSize: "72px",
              fontWeight: 800,
              color: "#17210d", // ink color
              lineHeight: 1.1,
              marginBottom: "24px",
            }}
          >
            {person.name}
          </div>
          <div
            style={{
              fontSize: "36px",
              fontWeight: 500,
              color: "#5f6b57", // muted color
              marginBottom: "40px",
            }}
          >
            {person.role}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 32px",
              backgroundColor: "#a3e635", // lime color
              borderRadius: "99px",
              color: "#17210d",
              fontSize: "24px",
              fontWeight: 600,
              boxShadow: "0 8px 30px rgba(163, 230, 53, 0.4)",
            }}
          >
            {person.socials.github.replace("https://", "")}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
