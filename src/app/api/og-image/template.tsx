import { OpenGraphImageParams } from "@/lib/og-image";
import { ImageResponse } from "next/og";
import type { FontMap } from "./fonts";

export const generateBannerImage = (
  { title, label, brand }: OpenGraphImageParams,
  fonts: FontMap
) => {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fcf6f1",
          justifyContent: "space-between",
          fontFamily: "Inter-SemiBold",
          color: "#212121",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {label && (
            <div
              style={{
                marginRight: "auto",
                marginBottom: "40px",
                color: "#fcf6f1",
                background: "#060606",
                padding: "5px 10px",
                fontWeight: "600",
                fontSize: "24px",
                letterSpacing: "-0.05em",
              }}
            >
              {label}
            </div>
          )}
          <div
            style={{
              fontSize: "96px",
              fontWeight: "900",
              lineHeight: "6rem",
              padding: "0 0 100px 0",
              letterSpacing: "-0.025em",
              color: "#212121",
              fontFamily: "Inter-SemiBold",
              lineClamp: 4,
            }}
          >
            {title}
          </div>
        </div>
        {brand && (
          <div
            style={{
              position: "absolute",
              right: "40px",
              bottom: "40px",
              fontSize: "32px",
              fontWeight: "900",
            }}
          >
            {brand}
          </div>
        )}
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [fonts["inter-semibold"], fonts["inter-regular"]],
    }
  );
};
