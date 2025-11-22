import Title from "../components/title";
import "./Teacher.css";
import teacherPhoto from "../assets/graphics/teacher/teacher.jpg";
import dan1Photo from "../assets/graphics/teacher/dan1.svg";
import dan2Photo from "../assets/graphics/teacher/dan2.svg";

export default function Teacher() {
  return (
    <div className="teacher-page">
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

      <div className="mycard padded">
        <div className="card-info">
          <p>
            שמי אפי.<br></br>
            אני לומד ומתאמן מאז 1981.
          </p>
          <h5>שירות צבאי:</h5>
          <p>
            שירתתי כמג״יסט בגדוד 13 בחטיבת גולני. בחלק ניכר מהשירות שירתתי
            בלבנון, בעיר צידון ובמארבים על נהר האלמלי. לאחר שהתפנינו לרצועת
            הביטחון, מאסתי בלחימה, ולאחר שלושה חודשים בכלא צבאי המשכתי שירות לא
            משמעותי עד תום הזמן הכולל.
          </p>
        </div>
        <div className="card-graphic padded" id="taichiGraphic">
          <img class="image" alt="Taichi" />
        </div>
      </div>
    </div>
  );
}
