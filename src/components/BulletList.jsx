import React from "react";
import BulletIcon from "../assets/graphics/misc/leafBullet.svg?react";

export default function BulletList({ children }) {
  return (
    <div style={{ lineHeight: "2", paddingRight: "0.25rem" }}>
      {React.Children.map(children, (child, i) => (
        <div
          key={i}
          style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}
        >
          <BulletIcon style={{ height: "1.5rem" }} />
          <span>{child}</span>
        </div>
      ))}
    </div>
  );
}
