import LineSvg from "../assets/line.svg?react";
import "./title.css";

export default function Title({ text, subtitle = null }) {
  return (
    <div className="title-wrapper">
      <h2 className="lined-title">{text}</h2>
      <LineSvg className="title-line" />
      {subtitle == null ? (
        <></>
      ) : (
        <>
          <h4>{subtitle}</h4>
        </>
      )}
    </div>
  );
}
