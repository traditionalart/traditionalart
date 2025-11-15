import { useRef, createRef } from "react";
import Title from "../components/title";
import "./taichi.css";
import TaichiImg from "../assets/pictures/taichi.png";
import Collapsible from "../components/collapsible";

export default function Taichi() {
  // Create a dictionary of refs keyed by IDs
  const collapsibleRefs = useRef({
    soft: createRef(),
    inner: createRef(),
    meditation: createRef(),
    combat: createRef(),
    kongfu: createRef(),
  });

  const jumpTo = (id) => {
    const targetRef = collapsibleRefs.current[id];
    if (!targetRef || !targetRef.current) return;

    targetRef.current.open();
    targetRef.current.scrollTo();
  };

  return (
    <div className="page">
      <div className="mycard padded">
        <div className="card-info">
          <Title text={"טאי צ'י"} />
          <div className="info-box">
            אומנות לחימה סינית, השייכת לענף{" "}
            <span className="hyperlink" onClick={() => jumpTo("soft")}>
              אומנויות הלחימה הרכות
            </span>{" "}
            <span className="hyperlink" onClick={() => jumpTo("inner")}>
              הפנימיות
            </span>
            . אומנות המעבירה דרך תנועה{" "}
            <span className="hyperlink" onClick={() => jumpTo("meditation")}>
              ומדיטציה
            </span>{" "}
            את עקרונות הדאואיזם, הרפואה הסינית{" "}
            <span className="hyperlink" onClick={() => jumpTo("combat")}>
              והלחימה
            </span>{" "}
            כדרך לתרגל{" "}
            <span className="hyperlink" onClick={() => jumpTo("kongfu")}>
              קונג פו,
            </span>
            לחיזוק הגוף ולהתפתחות נפשית ומנטלית.
          </div>
          <br></br>

          <Collapsible ref={collapsibleRefs.current.soft} title="אומנויות רכות">
            שימוש בתנועות ובתנוחות בצורה ייחודית על מנת ליצור מבנים חזקים
            ובריאים. השימוש בתנופה דרך שכלול השימוש במרכז הבטן - טאן טיין מאפשר
            יכולות פיזיות גבוהות שמחזיקות עד גיל מבוגר עם שימוש מועט בשרירים.
          </Collapsible>
          <Collapsible
            ref={collapsibleRefs.current.inner}
            title="אומנויות פנימיות"
          >
            הרפואה הסינית אינה מרפאת מחלות. תפקידה החשוב והעיקרי לתרגל את הגוף
            ואת הנפש על פי עקרונות תנועה מסויימים שמותאמים למתרגל ונעשים בצורה
            מתונה הבונה את הגוף בהדרגה בהתאם לאופי גופו של המתרגל.
            <br></br>
            <br></br>
            צורת תרגול זו מגבירה את הרגישות של האדם לצרכים האישיים שלו ובכך
            משמשת כטיפול מונע שהולך ומתחדד במשך שנות התרגול.
          </Collapsible>
        </div>

        <div className="card-graphic padded" id="taichiGraphic">
          <img src={TaichiImg} class="image" alt="Taichi" />
        </div>
      </div>
    </div>
  );
}
