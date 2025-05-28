import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
    const [progress, setProgress] = useState(0);
    const [progressHovered, setProgressHovered] = useState(false);
    const [resetHovered, setResetHovered] = useState(false);

    function updateProgress() {
        if (progress != 100) {
            setProgress(progress + 10);
        }
    }

    function handleResetProgress() {
        if (progress != 0) {
            setProgress(0);
        }
    }

    function handleProgressMouseEnter() {
        setProgressHovered(true);
    }

    function handleProgressMouseLeave() {
        setProgressHovered(false);
    }

    function handleResetMouseEnter() {
        setResetHovered(true);
    }

    function handleResetMouseLeave() {
        setResetHovered(false);
    }

    return (
        <div>
            <ProgressBar progress={progress} />
            <button
                className="progress-button ${progressHovered ? 'hovered' : ''}"
                onClick={updateProgress}
                onMouseEnter={handleProgressMouseEnter}
                onMouseLeave={handleProgressMouseLeave}
            >
                Progress Up
            </button>
            <button
                className="reset-button ${resetHovered ? 'hovered' : ''}"
                onClick={handleResetProgress}
                onMouseEnter={handleResetMouseEnter}
                onMouseLeave={handleResetMouseLeave}
            >
                Reset progress
            </button>
        </div>
    );
}

export default App;
