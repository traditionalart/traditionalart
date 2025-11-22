import React from "react";
import BulletIcon from "../assets/graphics/misc/leafBullet.svg?react";

export default function BulletList({ children }) {
  return (
    <div style={{ lineHeight: "2" }}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            columnGap: "0.75rem",
            alignItems: "start",
            marginBottom: "0.5rem", // optional spacing between items
          }}
        >
          <BulletIcon
            style={{ height: "1.5rem", marginTop: "0.2em", flexShrink: 0 }}
          />
          <span>{child}</span>
        </div>
      ))}
    </div>
  );
}
