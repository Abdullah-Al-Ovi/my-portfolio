
import ClockLoader
from "react-spinners/ClockLoader";
import './loading.css';

const Loading = ({ loading }) => {
  return (
    <div className="loading">
      <ClockLoader
        color={'hsl(271, 76%, 53%)'} 
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
