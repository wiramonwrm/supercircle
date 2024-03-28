import * as speechCommands from "@tensorflow-models/speech-commands";
import * as tf from "@tensorflow/tfjs";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./FindComponent.css";

function FindBear() {
  const [model, setModel] = useState(null);
  const [action, setAction] = useState(null);
  const [label, setLabel] = useState(null);
  const screenWidth = window.innerWidth;
  const Tensorflow = tf.sequential();
  var x_max = 360;
  if (screenWidth >= 360) {
    x_max = 720;
  }
  if (screenWidth > 720) {
    x_max = 1280;
  }
  var y_max = 0.55 * x_max;
  var y_min = 240;
  var x_start = x_max / 2;
  var y_start = (y_max + y_min) / 2;
  const x_delta = Math.floor(Math.random() * 201) - 100;
  const y_delta = Math.floor(Math.random() * 201) - 100;
  const [moving, setMoving] = useState(false);
  const handleClick = () => {
    console.log("STARTED. . .");
    recognizeCommands();
  };

  const stopListening = () => {
    console.log("STOPPED");
    model.stopListening();
  };

  const [xoffset, setXoffset] = useState(x_start);
  const [yoffset, setYoffset] = useState(y_start);

  const move1 = () => {
    if (
      xoffset >= 0 &&
      xoffset <= x_max &&
      yoffset >= y_min &&
      yoffset <= y_max
    ) {
      setXoffset(xoffset + x_delta);
      setYoffset(yoffset + y_delta);
    } else {
      setXoffset(x_start);
      setYoffset(y_start);
    }
  };

  useEffect(() => {
    loadModel();
    const interval = setInterval(() => {
      moving && move1();
    }, 1000);
    return () => clearInterval(interval);
  }, [xoffset, yoffset, moving]);

  function argMax(arr) {
    return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
  }

  const loadModel = async () => {
    // const URL = "https://teachablemachine.withgoogle.com/models/k5lPQJAP0/";
    // const checkpointURL = URL + "model.json"; // model topology
    // const metadataURL = URL + "metadata.json"; // model metadata
    const recognizer = speechCommands.create(
      "BROWSER_FFT", // fourier transform type, not useful to change
      undefined // speech commands vocabulary feature, not useful for your models
      // checkpointURL,
      // metadataURL
    );
    console.log("Model Loaded");
    await recognizer.ensureModelLoaded();
    console.log(recognizer.wordLabels());
    setLabel(recognizer.wordLabels());
    setModel(recognizer);
  };

  const recognizeCommands = async () => {
    console.log("listening. . . .. ");
    model.listen(
      (result) => {
        console.log(label[argMax(Object.values(result.scores))]);
        if (label[argMax(Object.values(result.scores))] == "go") {
          setMoving(true);
          console.log("----------------GO---------------------------");
          console.log(action);
        } else if (label[argMax(Object.values(result.scores))] == "stop") {
          setMoving(false);
          console.log("----------------STOP---------------------------");
          console.log(action);
        }
      },
      {
        includeSpectrogram: true,
        probabilityThreshold: 0.75,
        // invokeCallbackOnNoiseAndUnknown: true,
        // overlapFactor: 0.5,
      }
    );
  };

  return (
    <>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/images/white-bear-img.png"}
          alt="white-bear"
          className="img-component"
          style={{
            position: "absolute",
            left: `${xoffset}px`,
            top: `${yoffset}px`,
          }}
        />
      </div>
      <div className="btn-container">
        <Link>
          <div className="moving-btn" onClick={handleClick}>
            Start Listening
          </div>
        </Link>
        <Link>
          <div className="moving-btn" onClick={stopListening}>
            Stop Listening
          </div>
        </Link>
      </div>
    </>
  );
}

export default FindBear;
