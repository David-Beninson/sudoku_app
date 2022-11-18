import { HashRouter, Routes, Route } from "react-router-dom";
import Choice from "./componenta/Choice";
import Easy from "./componenta/Easy";
import Meidum from "./componenta/Meidum";
import Hard from "./componenta/Hard";
import SignIn from "./componenta/SignIn";
import { useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  const addUser = (fullname) => {
    setUser([
      ...user,
      {
        fullname: fullname,
      },
    ]);
  };

  const mat = [
    [
      [5, 3, 4, 6, 7, 8, 9, 1, 2],
      [6, 7, 2, 1, 9, 5, 3, 4, 8],
      [1, 9, 8, 3, 4, 2, 5, 6, 7],
      [8, 5, 9, 7, 6, 1, 4, 2, 3],
      [4, 2, 6, 8, 5, 3, 7, 9, 1],
      [7, 1, 3, 9, 2, 4, 8, 5, 6],
      [9, 6, 1, 5, 3, 7, 2, 8, 4],
      [2, 8, 7, 4, 1, 9, 6, 3, 5],
      [3, 4, 5, 2, 8, 6, 1, 7, 9],
    ],
    [
      [7, 3, 5, 6, 1, 4, 8, 9, 2],
      [8, 4, 2, 9, 7, 3, 5, 6, 1],
      [9, 6, 1, 2, 8, 5, 3, 7, 4],
      [2, 8, 6, 3, 4, 9, 1, 5, 7],
      [4, 1, 3, 8, 5, 7, 9, 2, 6],
      [5, 7, 9, 1, 2, 6, 4, 3, 8],
      [1, 5, 7, 4, 9, 2, 6, 8, 3],
      [6, 9, 4, 7, 3, 8, 2, 1, 5],
      [3, 2, 8, 5, 6, 1, 7, 4, 9],
    ],
    [
      [4, 5, 3, 8, 2, 6, 1, 9, 7],
      [8, 9, 2, 5, 7, 1, 6, 3, 4],
      [1, 6, 7, 4, 9, 3, 5, 2, 8],
      [7, 1, 4, 9, 5, 2, 8, 6, 3],
      [5, 8, 6, 1, 3, 7, 2, 4, 9],
      [3, 2, 9, 6, 8, 4, 7, 5, 1],
      [9, 3, 5, 2, 1, 8, 4, 7, 6],
      [6, 7, 1, 3, 4, 5, 9, 8, 2],
      [2, 4, 8, 7, 6, 9, 3, 1, 5],
    ],
  ];
  let board;

  function easy() {
    //Call to the number delete function by easy level

    deletingNum(24);
  }

  function medium() {
    //Call to the number delete function by medium level
    deletingNum(38);
  }
  function hard() {
    //Call to the number delete function by hard level
    deletingNum(49);
  }
  //delete
  function deletingNum(difficulty) {
    let chooseBoard = Math.floor(Math.random() * 3);
    board = mat[chooseBoard];
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        document.getElementById(`td${row}${col}`).value = board[row][col];
        document.getElementById(`td${row}${col}`).style.backgroundColor =
          "white";
      }
    }
    let counter = 0;
    while (counter < difficulty) {
      //   //The amount of numbers to delete
      let row = Math.floor(Math.random() * 9);
      let col = Math.floor(Math.random() * 9);

      let temp = document.getElementById(`td${row}${col}`).value;
      if (temp !== "") {
        //     //Check if we have not already deleted the input
        document.getElementById(`td${row}${col}`).value = "";
        document.getElementById(`td${row}${col}`).style.backgroundColor =
          "lightBlue";
      } else {
        counter--; //If we have already deleted the input, so that they actually delete the required number of inputs
      }
      counter++;
    }
  }

  //בדיקת תקינות

  function checkSudoku() {
    let counter = 0;
    for (let i = 0; i < mat.length; i++) {
      let board = mat[i];
      let count = 0;
      counter++;
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (
            document.getElementById(`td${row}${col}`).value == board[row][col]
          ) {
            count++;
          }
        }
        if (count === 81) {
          return alert("GOOD-JOB!!!");
        }
      }
      if (counter >= 3) {
        return alert("Try again");
      }
    }
  }

  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<SignIn addUser={addUser} setUser={setUser} />}
          />
          {user.map((val) => {
            return (
              <Route
                path={`/Choice`}
                element={<Choice user={user} name={val.fullname} />}
              />
            );
          })}

          <Route path="/Easy" element={<Easy easy={easy} checkSudoku={checkSudoku} />} />
          <Route path="/Meidum" element={<Meidum medium={medium} checkSudoku={checkSudoku} />} />
          <Route
            path="/Hard"
            element={<Hard hard={hard} checkSudoku={checkSudoku} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
