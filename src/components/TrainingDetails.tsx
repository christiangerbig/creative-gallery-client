interface TrainingItem {
  trainingTitle: string;
  trainingPeriod: string;
  trainingContent: string;
}

interface Props {
  trainingItem: TrainingItem;
}

const TrainingDetails = ({ trainingItem }: Props) => {
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
