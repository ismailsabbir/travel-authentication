import React from "react";
import "./ServiceSearch.css";
const ServiceSearch = () => {
  return (
    <div className="activitysearch-container">
      <h3>We provide the best golf tours service</h3>
      <p>
        Search for tour. Travel Tour Golf vacation packages offers a selection
        of the best golf courses, carefully selected hotels and VIP
        transportation.
      </p>
      <div className="activity-container">
        <div className="activity">
          <form>
            <select id="activity" name="activity">
              <option value="activity1">Activity1</option>
              <option value="activity2">Activity2</option>
            </select>
          </form>
        </div>
        <div className="activity">
          <form>
            <select id="activity" name="activity">
              <option value="activity1">Activity1</option>
              <option value="activity2">Activity2</option>
            </select>
          </form>
        </div>
        <div className="activity">
          <form>
            <select id="activity" name="activity">
              <option value="activity1">Activity1</option>
              <option value="activity2">Activity2</option>
            </select>
          </form>
        </div>
        <div>
          <button className="activity-btn">Search</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceSearch;
