type TrainingItem = {
  trainingTitle: string;
  trainingPeriod: string;
  trainingContent: string;
};

type TrainingDetailsProps = {
  trainingItem: TrainingItem;
};

const TrainingDetails = ({ trainingItem }: TrainingDetailsProps) => {
  const { trainingTitle, trainingPeriod, trainingContent } = trainingItem;

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
