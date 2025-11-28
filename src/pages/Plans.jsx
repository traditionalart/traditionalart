import CalendarIcon from "../assets/graphics/plans/calendar.svg?react";
import MoneyIcon from "../assets/graphics/plans/shekel.svg?react";
import BulletedLine from "../components/BulletedLine";
import ArrowDownIcon from "../assets/graphics/plans/arrow-down.svg?react";
import taichiPhoto from "../assets/graphics/plans/taichi.jpg";
import shingiPhoto from "../assets/graphics/plans/private.png";
import privatePhoto from "../assets/graphics/plans/private.png";
import "./Plans.css";
import Title from "../components/title";

export default function Contact() {
  return (
    <>
      <div style={{ paddingTop: "3rem" }}></div>

      <div id="plans" className="mycard padded">
        <LessonPlan
          title="שיעורי טאי צ'י וצ'י קונג"
          img={taichiPhoto}
          items={[
            { icon: CalendarIcon, text: "ימי א' 19:30 - 18:00" },
            { icon: MoneyIcon, text: 'תשלום חודשי: 400 ש"ח' },
          ]}
        />
        <LessonPlan
          title="שיעורי שינג אי ופה קואה"
          img={shingiPhoto}
          items={[
            { icon: CalendarIcon, text: "ימי ד' 20:00 - 18:00" },
            { icon: MoneyIcon, text: 'תשלום חודשי: 400 ש"ח' },
          ]}
        />
        <LessonPlan
          title="שיעורים פרטיים"
          img={privatePhoto}
          items={[
            { icon: CalendarIcon, text: "כל ימי ושעות השבוע" },
            { icon: MoneyIcon, text: 'תשלום למפגש: 150 ש"ח' },
          ]}
        />
      </div>
    </>
  );
}

function BookClassButton({ children }) {
  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <button className="book-class-button" onClick={handleClick}>
      {children} <ArrowDownIcon className="arrow-icon" />
    </button>
  );
}

function LessonPlan({ title, img, items }) {
  return (
    <div className="lesson-plan">
      <div className="lesson-plan-title">{title}</div>

      <div
        className="lesson-plan-img-wrapper"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="lesson-plan-overlay">
          {items.map((item, i) => (
            <BulletedLine key={i} icon={item.icon}>
              {item.text}
            </BulletedLine>
          ))}
        </div>
      </div>
    </div>
  );
}
