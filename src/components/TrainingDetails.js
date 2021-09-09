import React from "react";

const TrainingDetails = ({
  trainingTitle,
  trainingPeriod,
  trainingContent,
}) => {
  return (
    <div className="cvTrainingDetailsContainer">
      <h4> {trainingTitle} </h4>
      <h6> {trainingPeriod} </h6>
      <ul>
        <li> {trainingContent} </li>
      </ul>
    </div>
  );
};

export default TrainingDetails;
