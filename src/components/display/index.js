import React from "react";
import "./style.css";
import { Button, useToast } from "@chakra-ui/react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ImCopy } from "react-icons/im";
import Typical from "react-typical";

const Display = ({ result, KeyGen, setResult, setCopied }) => {
  const toast = useToast();
  return (
    <div className="display">
      <div className="code">
        <Typical steps={[result]} loop={1} wrapper="p" />{" "}
        {result ? (
          <CopyToClipboard text={result} onCopy={() => setCopied(true)}>
            <ImCopy
              className="copy-icon"
              onClick={() =>
                toast({
                  title: "Status : Copied",
                  description: "Key a was copied to the clipboard.",
                  status: "success",
                  duration: 900,
                  isClosable: true,
                })
              }
            />
          </CopyToClipboard>
        ) : null}
      </div>
      <div className="generate">
        <Button
          width="200px"
          colorScheme="teal"
          size="lg"
          onClick={() => (
            KeyGen(),
            setCopied(false),
            toast({
              title: "Status : Generate",
              description: "Key is generated.",
              status: "success",
              duration: 900,
              isClosable: true,
            })
          )}
        >
          <div className="btn-name">Generate</div>
        </Button>
        <Button
          width="200px"
          colorScheme="teal"
          size="lg"
          onClick={() => (setResult(""), setCopied(false))}
        >
          <div className="btn-name">Clean</div>
        </Button>
      </div>
    </div>
  );
};
export default Display;
