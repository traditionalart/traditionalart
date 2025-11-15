import Title from "../components/title"; // adjust path as needed
import "./taichi.css";
import TaichiImg from "../assets/pictures/taichi.png";

export default function Taichi() {
  return (
    <div className="page">
      <div className="mycard padded">
        <div className="card-info">
          <Title text={"טאי צ'י"} />

          <div className="info-box">
            טקסט כלשהו על טאי צ'י שיופיע כאן. אפשר לשים כמה שורות כמו שאתה רוצה.
          </div>
        </div>

        <div className="card-graphic padded" id="taichiGraphic">
          <img src={TaichiImg} alt="Taichi" />
        </div>
      </div>
    </div>
  );
}
