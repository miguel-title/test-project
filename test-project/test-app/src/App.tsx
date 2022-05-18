import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [text_theme, setText_theme] = useState("");
  const [text_btn, setText_btn] = useState("");

  const [number, setNumber] = useState("");

  const [textArray, setTextArray] = useState<string[]>([]);
  const [btnArray, setBtnArray] = useState<string[]>([]);

  const [bool, setBool] = useState(true);

  useEffect(() => {
    console.log("text:", text);
  }, [text]);

  useEffect(() => {
    console.log("textArray:", textArray);
  }, [textArray]);

  useEffect(() => {
    console.log("btnArray:", btnArray);
  }, [btnArray]);

  const handleChange = () => {
    setText("");
    console.log(text);
    // setBool(!bool);
    setTextArray([...textArray, text]);
  };
  const themeChange = () => {
    setText_theme(new Date() + "Theme was set");
    // console.log(text);
    setTextArray([...textArray, text_theme]);
    setBool(!bool);
  };
  const addButton = () => {
    setText_btn(new Date() + "button " + (btnArray.length + 2) + " " + "added");
    // console.log(text);
    setTextArray([...textArray, text_btn]);
    setNumber("1");
    console.log(number);
    setBtnArray([...btnArray, number]);
  };
  // const handleTextarea = (value) => {
  //   if (value != '') {

  //   }
  // }
  return (
    <div className={bool ? "theme-dark" : "theme-light"}>
      <header className="App-header">
        <p>TEST(React.js/Asp.Net.Core)</p>
      </header>
      <body className="App-body">
        <div className="App-body-left">
          <div>
            <textarea
              className="message"
              value={text}
              name="body"
              onChange={(e) => setText(e.target.value)}
            />
            {text.length > 0 && (
              <button className="btn_send" onClick={() => handleChange()}>
                <span className="btn_name">Message Sent</span>
              </button>
            )}
          </div>
          <div>
            <button className="btn_add" onClick={() => addButton()}>
              <span className="btn_name">Add Button {btnArray.length + 1}</span>
            </button>
          </div>
          <div>
            {btnArray.map((item, key) => {
              return (
                <button className="btn_add">
                  <span className="btn_name">Button {key + 1}</span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="App-body-right">
          <div>
            <label id="switch" className="switch">
              <input
                type="checkbox"
                onChange={() => themeChange()}
                id="slider"
              />
              <span className="slider round"></span>
            </label>
          </div>
          <div>
            {textArray.map((item, key) => {
              return (
                <p className="right_text" key={key}>
                  {item}
                </p>
              );
            })}
          </div>
        </div>
      </body>
    </div>
  );
}
export default App;
