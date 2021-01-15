import React, { useState } from "react";
import "./style.css";
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";
import bg from "../../assets/img/4608699.png";
import Display from "../display";

const Choice = () => {
  const [choice, setChoice] = useState("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789");
  const [size, setSize] = useState("8");
  const [result, setResult] = useState("");
  const [copied, setCopied] = useState(false);

  const KeyGen = () => {
    let CleWpa = "";

    for (let i = 0; i < size; i++)
      CleWpa += choice.charAt(Math.floor(Math.random() * choice.length));

    return setResult(CleWpa);
  };
  return (
    <>
      <div className="options">
        <div className="left">
          <img className="bg-img" src={bg} alt="img" />
          <div className="titre">KEY-GENERATOR</div>
          <div className="status">
            <div className="status-state">
              {copied ? (
                <>
                  {" "}
                  <ImCheckboxChecked style={{ color: "#FFC800" }} />
                  <div style={{ color: "#FFC800", marginLeft: "4%" }}>
                    Copied
                  </div>
                </>
              ) : (
                <>
                  <ImCheckboxUnchecked style={{ color: "gray" }} />
                  <div style={{ color: "gray", marginLeft: "4%" }}>Copied</div>
                </>
              )}
            </div>
            <div className="status-state">
              {result ? (
                <>
                  {" "}
                  <ImCheckboxChecked style={{ color: "#FFC800" }} />
                  <div style={{ color: "#FFC800", marginLeft: "4%" }}>
                    Generate
                  </div>
                </>
              ) : (
                <>
                  <ImCheckboxUnchecked style={{ color: "gray" }} />
                  <div style={{ color: "gray", marginLeft: "4%" }}>
                    Generate
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="right">
          <div className="selection">
            {" "}
            <div className="selection-contente">
              <label className="label">Complexity :</label>
              <RadioGroup onChange={setChoice} value={choice}>
                <Stack direction="column">
                  <Radio value="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789">
                    Simple 64 bits
                  </Radio>
                  <Radio value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789">
                    Medium 160 bits
                  </Radio>
                  <Radio value="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.;:,?!*%ù$=)àç_è-()é²'^@]}`|[#~">
                    Complex 504 bits
                  </Radio>
                </Stack>
              </RadioGroup>
            </div>
            <div className="selection-contente">
              <label className="label">Length :</label>
              <RadioGroup onChange={setSize} value={size}>
                <Stack direction="column">
                  <Radio value="8">WPA (8 characters)</Radio>
                  <Radio value="20">WPA 2 (20 characters)</Radio>
                  <Radio value="60">WPA 2 (63 characters)</Radio>
                </Stack>
              </RadioGroup>
            </div>
          </div>
        </div>
      </div>
      <Display
        copied={copied}
        setCopied={setCopied}
        KeyGen={KeyGen}
        result={result}
        setResult={setResult}
      />
    </>
  );
};

export default Choice;
