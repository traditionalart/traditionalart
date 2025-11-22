import Title from "../components/title";
import teacherPhoto from "../assets/graphics/teacher/teacher.jpg";
import dan1Photo from "../assets/graphics/teacher/dan1.svg";
import dan2Photo from "../assets/graphics/teacher/dan2.svg";
import armyPhoto from "../assets/graphics/teacher/army.jpg";
import BulletList from "../components/BulletList";
import "./Teacher.css";

export default function Teacher() {
  return (
    <div className="teacher-page page">
      <Title text="אפי דינר" subtitle="מייסד ומורה בית הספר"></Title>

      <img src={teacherPhoto} alt="Teacher" className="teacher-photo" />

      <div className="trophies-wrapper">
        {/* absolute overlay */}

        <div className="trophies-row">
          <div id="teacher-transition" className="top-transition"></div>
          <div id="bamboo-left" className="top-transition bamboo"></div>
          <div id="bamboo-right" className="top-transition bamboo"></div>

          <div className="trophy">
            <img src={dan1Photo} alt="" />
            <div className="trophy-text">דרגת דאן 1 בקראטה</div>
          </div>

          <div className="trophy">
            <img src="/path/to/trophy2.png" alt="" />
            <div className="trophy-text">תיאור 2</div>
          </div>

          <div className="trophy">
            <img src={dan2Photo} alt="" />
            <div className="trophy-text">דרגת דאן 2 באייקידו</div>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: "50px" }}>
        <div className="mycard padded">
          <div className="card-info">
            <p>
              שמי אפי.<br></br>
              אני לומד ומתאמן מאז 1981.
            </p>
            <b>שירותי צבאי:</b>
            <p>
              שירתתי כמג״יסט בגדוד 13 בחטיבת גולני. בחלק ניכר מהשירות שירתתי
              בלבנון, בעיר צידון ובמארבים על נהר האלמלי. לאחר שהתפנינו לרצועת
              הביטחון, מאסתי בלחימה, ולאחר שלושה חודשים בכלא צבאי המשכתי שירות
              לא משמעותי עד תום הזמן הכולל.
            </p>
          </div>
          <div className="card-graphic padded" style={{ flexGrow: 0.5 }}>
            <img src={armyPhoto} class="image" alt="Taichi" />
          </div>
        </div>
        <div className="mycard padded flipped">
          <div className="card-info">
            <div>
              <p>
                עם השחרור חזרתי לאימונים סדירים בקראטה, ולאחר זמן קצר גיליתי את
                האומנויות הסיניות הפנימיות, ומאז עד היום אני מתאמן בצורה סדירה
                ורציפה באומנויות אלו:
              </p>

              <BulletList>
                <>טאי צ׳י צ׳ואן</>
                <>שינג אי</>
                <>פה-קואה</>
                <>כלי נשק מסורתיים</>
              </BulletList>
            </div>
          </div>
          <div className="card-graphic padded" style={{ flexGrow: 0.5 }}>
            <img src={armyPhoto} class="image" alt="Taichi" />
          </div>
        </div>
        <div className="mycard padded">
          <div className="card-info">
            <p></p>
          </div>
          <div className="card-graphic padded" style={{ flexGrow: 0.5 }}>
            <img src={armyPhoto} class="card-grpahic image" alt="Taichi" />
          </div>
        </div>
      </div>
    </div>
  );
}
