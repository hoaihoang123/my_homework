import React, { useState } from "react";

const buttonValues = [
  ["7", "8", "9", "÷"],
  ["4", "5", "6", "×"],
  ["1", "2", "3", "-"],
  ["0", ".", "C", "+"],
];
export default function Calculator() {
  const [display, setDisplay] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => {
    if (value === "C") {
      setDisplay("");
      setResult("");
    } else if (value === "=") {
      try {
        // Replace symbols for eval
        const exp = display.replace(/÷/g, "/").replace(/×/g, "*");
        // eslint-disable-next-line no-eval
        setResult(eval(exp).toString());
      } catch {
        setResult("Error");
      }
    } else {
      setDisplay(display + value);
      setResult("");
    }
  };

  return (
    <div
      style={{
        width: 250,
        margin: "24px auto",
        padding: 16,
        border: "2px solid #ddd",
        borderRadius: 12,
        background: "#fff",
      }}
    >
      <div
        style={{
          height: 40,
          marginBottom: 12,
          border: "1px solid #bbb",
          borderRadius: 6,
          background: "#fafafa",
          textAlign: "right",
          padding: "8px 12px",
          fontSize: 20,
          overflowX: "auto",
        }}
      >
        {result || display || "0"}
      </div>
      <div>
        {buttonValues.map((row, i) => (
          <div key={i} style={{ display: "flex", marginBottom: 8 }}>
            {row.map((btn) => (
              <button
                key={btn}
                onClick={() => handleClick(btn)}
                style={{
                  flex: 1,
                  margin: 2,
                  height: 40,
                  fontSize: 18,
                  borderRadius: 6,
                  border: "none",
                  color: btn === "C" ? "#fff" : "#fff",
                  background:
                    btn === "C"
                      ? "#e74c3c"
                      : ["÷", "×", "-", "+"].includes(btn)
                      ? "#f4a742"
                      : "#222",
                }}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
        <button
          onClick={() => handleClick("=")}
          style={{
            width: "100%",
            height: 40,
            fontSize: 20,
            borderRadius: 8,
            background: "#5fc86c",
            color: "#fff",
            border: "none",
            marginTop: 8,
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}
