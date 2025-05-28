import React from "react";

export default function ProgressBar(props) {
    return (
        <>
            <h1>Progress Bar</h1>
            <div
                className="progressBar"
                style={{
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                }}
            >
                <div
                    style={{
                        width: `${props.progress}%`,
                        backgroundColor: "#007bff",
                        height: "28px",
                        borderRadius: "4px",
                    }}
                ></div>
            </div>
            <p>{props.progress}% Complete</p>
        </>
    );
}
