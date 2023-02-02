import React, { useState } from "react";
import "./Paper.css";
import plast from "../../assets/p.jpg";
import {FiPhoneCall} from "react-icons/fi"

const initialState = [
  {
    id: "p-1",
    img: plast,
  },
  {
    id: "p-2",
    img: "",
  },
  {
    id: "p-3",
    img: "",
  },
  {
    id: "p-4",
    img: "",
  },
  {
    id: "p-5",
    img: "",
  },
  {
    id: "p-6",
    img: "",
  },
  {
    id: "p-7",
    img: "",
  },
  {
    id: "p-8",
    img: "",
  },
];

export const Paper = React.forwardRef(({ state, color }, ref) => {
  const [data, setData] = useState(initialState);
  const changePhoto = (e, id) => {
    let img = URL.createObjectURL(e.target.files[0]);
    setData(
      data.map((obj) => {
        if (obj.id === id) {
          return {
            id,
            img,
          };
        }
        return obj;
      })
    );
  };
  return (
    <div ref={ref} className="paper">
      <div style={{background: `linear-gradient(45deg, ${color.x}, ${color.y})`}} className="paper__navbar">
        <h2 contentEditable={state}>Narxlar Ro'yxati</h2>
        <h4 contentEditable={state}>Yuqori sifatli homashyo mahsulotlaridan ishlab chiqarilgan poriplopin quvulari va fitinglari.</h4>
        <p contentEditable={state}>25.02.2023</p>
      </div>
      <div className="paper__content">
        {data.map(({ id, img }) => (
          <div key={id} className="paper__item">
            <h2 style={{color:color.x}} contentEditable={state}>Troynik perexodnik</h2>
            <div className="paper__item-container">
              <div className="paper__image">
                {img && <img src={img} alt="" />}
                {state && (
                  <input onChange={(e) => changePhoto(e, id)} type="file" />
                )}
              </div>
              <div className="paper__table">
                <div className="paper__table-row">
                  <div  contentEditable={state} className="paper__table-col bold">Razmer</div>
                  <div  contentEditable={state} className="paper__table-col bold">Upakovka</div>
                  <div  contentEditable={state} className="paper__table-col bold">Narx</div>
                </div>
                {new Array(8).fill("").map((i, inx) => (
                  <div key={inx} className="paper__table-row">
                    <div
                      contentEditable={state}
                      className="paper__table-col"
                    ></div>
                    <div
                      contentEditable={state}
                      className="paper__table-col"
                    ></div>
                    <div
                      contentEditable={state}
                      className="paper__table-col bold"
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{background: `linear-gradient(45deg, ${color.x}, ${color.y})`}} className="paper__footer">
        <h3 contentEditable={state}>Brand</h3>
        <p><FiPhoneCall/> <span contentEditable={state}>+998 91 343 0668</span></p>
      </div>
    </div>
  );
});
