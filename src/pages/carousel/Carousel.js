import React, { useState } from "react";
import "./Carousel.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const Carousel = () => {
  const [nav1bar, setNav1bar] = useState(0);
  console.log(nav1bar);
  return (
    <div>
      <div className="section">
        <div className="nav_section_carousel">
          <h1>Bizning eng faol o'qituvchilarimiz</h1>
          <div className="left_and_right">
            <button
              disabled={nav1bar >= 0}
              className="left_carousel_item"
              onClick={() => setNav1bar(nav1bar + 539)}
            >
              <AiOutlineLeft />
            </button>
            <button
              disabled={nav1bar <= -2156}
              className="right_carousel_item"
              onClick={() => setNav1bar(nav1bar - 539)}
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
        <div
          className="cards"
          style={{ marginLeft: nav1bar, transition: "0.4s" }}
        >
          <div className="first_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="second_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo2"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="third_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo3"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="fourth_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo4"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="fifth_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo5"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="sixth_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo6"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
          <div className="seventh_favourite_teacher_card">
            <div className="nav_favoruite_teacher_photo7"></div>
            <div className="top_favourite_teacher_name">
              <b>Abdullayeva Dildora</b>
              <p className="kasb">Matematik</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
