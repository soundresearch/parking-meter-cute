import pm_img from "../assets/pm.png";
import pm_cr_img from "../assets/pm-cr.png";

const ParkingMeter = ({ cardInserted }) => {
    return (
      <div className="pm-wrapper">
        {!cardInserted ? (
          <img className="pm-img" src={pm_img} alt="Parking Meter" />
        ) : (
          <img className="pm-img" src={pm_cr_img} alt="Parking Meter With Credit Card Inserted" />
        )}
      </div>
    );
  }
  
  export default ParkingMeter;