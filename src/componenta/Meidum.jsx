import React from "react";
import { Link } from "react-router-dom";
import "./board.css"

export default function Medium(props) {
  return (
      <div>
      <div id="pobtn">
        <button
          onClick={() => {
            props.easy();
          }}
        >
          start
        </button><br /><br /><br /><br /><br /><br />
        <button
          onClick={() => {
            props.checkSudoku();
          }}
        >
          check
        </button><br /><br /><br /><br /><br /><br /><br />
        <Link to={"/Choice"}>
          <button>Choose a level</button>
        </Link><br /><br /><br /><br />
        </div>
        <h1>GOOD LUCK!!</h1>
        <table id="box">
          <tr>
            <td className="t1 t3">
              {" "}
              <input
                id="td00"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td01"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td02"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td03"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td04"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td05"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td06"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td07"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t4">
              {" "}
              <input
                id="td08"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t3">
              {" "}
              <input
                id="td10"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td11"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td12"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td13"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td14"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td15"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td16"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td17"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t4">
              {" "}
              <input
                id="td18"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td className="t3">
              {" "}
              <input
                id="td20"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td21"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td22"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td23"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td24"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td25"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td26"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td27"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t4">
              {" "}
              <input
                id="td28"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t1 t3">
              {" "}
              <input
                id="td30"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td31"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td32"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td33"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td34"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td35"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td36"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td37"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t4">
              {" "}
              <input
                id="td38"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t3">
              {" "}
              <input
                id="td40"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td41"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td42"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td43"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td44"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td45"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td46"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td47"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t4">
              {" "}
              <input
                id="td48"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t3">
              {" "}
              <input
                id="td50"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td51"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td52"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td53"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td54"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td55"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td56"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
            </td>
            <td>
              {" "}
              <input
                id="td57"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t4">
              {" "}
              <input
                id="td58"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t1 t3">
              {" "}
              <input
                id="td60"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td61"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td62"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td63"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td64"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td65"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1 t3">
              {" "}
              <input
                id="td66"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t1">
              {" "}
              <input
                id="td67"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
            </td>
            <td className="t1 t4">
              {" "}
              <input
                id="td68"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              ></input>
            </td>
          </tr>
          <tr>
            <td className="t3">
              {" "}
              <input
                id="td70"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td71"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td72"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td73"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td74"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td75"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t3">
              {" "}
              <input
                id="td76"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td>
              {" "}
              <input
                id="td77"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t4">
              {" "}
              <input
                id="td78"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
          <tr>
            <td className="t2 t3">
              {" "}
              <input
                id="td80"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2">
              {" "}
              <input
                id="td81"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2">
              {" "}
              <input
                id="td82"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2 t3">
              {" "}
              <input
                id="td83"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2">
              {" "}
              <input
                id="td84"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2">
              {" "}
              <input
                id="td85"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2 t3">
              {" "}
              <input
                id="td86"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2">
              {" "}
              <input
                id="td87"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
            <td className="t2 t4">
              {" "}
              <input
                id="td88"
                type="text"
                maxLength={1}
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
              />
            </td>
          </tr>
        </table>
      </div>
  );
}
