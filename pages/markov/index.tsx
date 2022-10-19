import { useCallback, useEffect, useMemo, useState } from "react";
import * as markov from "markov";
import lowerCase from "lodash/lowerCase";
import Spacer from "../../components/Spacer";

const PLACEHOLDER_TEXT =
  "I like oranges because they are oranges I also like cheese because it is orange";

export default function index() {
  const [trainingText, setTrainingText] = useState(PLACEHOLDER_TEXT);
  const [completingText, setCompletingText] = useState("oranges");

  const trainedModel = useMemo(
    () => markov.train(trainingText),
    [trainingText]
  );

  const nextWords = useMemo(() => {
    if (completingText.length == 0) {
      return null;
    }

    const words = completingText.split(" ").filter((s) => s.length > 0);
    return trainedModel.compute_next_words(
      lowerCase(words[words.length - 1]),
      6
    );
  }, [trainedModel, completingText]);

  const autocompleteWord = useCallback(() => {
    const words = completingText.split(" ").filter((s) => s.length > 0);

    if (words != null && words.length > 0) {
      const next = trainedModel.random_next_word(
        lowerCase(words[words.length - 1]),
        Math.random() * 10000
      );

      if (next != null) {
        setCompletingText(completingText + " " + next);
      }
    }
  }, [completingText, trainedModel]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      if (e.code === "ArrowRight") {
        autocompleteWord();
      }
    };

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [autocompleteWord]);

  useEffect(() => {
    const oldTraining = localStorage.getItem("markov-training");
    const oldCompleting = localStorage.getItem("markov-completing");

    if (oldTraining != null) {
      setTrainingText(oldTraining);
    }

    if (oldCompleting != null) {
      setCompletingText(oldCompleting);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("markov-training", trainingText);
  }, [trainingText]);

  useEffect(() => {
    localStorage.setItem("markov-completing", completingText);
  }, [completingText]);

  return (
    <>
      <div className="v-container full-width">
        <h2>Training</h2>
        <textarea
          className="readable-text border small-pad full-width"
          onChange={(e) => setTrainingText(e.target.value)}
          rows={10}
          value={trainingText}
        />
      </div>
      <div className="h-container">
        <div style={{ width: "60%" }} className="v-container">
          <h2 className="full-width left-text">Scratch</h2>
          <textarea
            className="readable-text border small-pad full-width"
            onChange={(e) => setCompletingText(e.target.value)}
            rows={20}
            value={completingText}
          />
        </div>
        <div
          className="v-container right-text"
          style={{
            alignSelf: "start",
            alignItems: "end",
          }}
        >
          <h2 className="full-width">Possible Next Words</h2>
          <ul className="unstyled-list readable-text full-width">
            <li>
              <button
                className="border small-pad small-margin full-width"
                onClick={autocompleteWord}
              >
                Choose Word
              </button>
            </li>
            {nextWords != null ? (
              nextWords.map((word) => (
                <li
                  key={word}
                  className="small-pad clickable"
                  onClick={() => setCompletingText(completingText + " " + word)}
                >
                  {word}
                </li>
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
