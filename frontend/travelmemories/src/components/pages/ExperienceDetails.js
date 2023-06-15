import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../url-config";

export default function ExperienceDetails(props) {
  const { id } = useParams();
  const [val, setVal] = useState();

  useEffect(() => {    
    axios
      .get(`${baseUrl}/trip/${id}`)
      .then((val) => setVal(val.data));
  }, [id]);
  if (val) {
    return (
      <div style={{ margin: "2%" }}>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8" style={{ textAlign: "center" }}>
            <h1>{val.tripName}</h1>
          </div>
          <div class="col-2"></div>
        </div>

        <div class="row">
          <div class="col-2"></div>
          <div class="col-8" style={{ textAlign: "center" }}>
            <img
              src={val.image}
              alt="meaning"
            ></img>
          </div>
          <div class="col-2"></div>
        </div>
        <br></br>
        <div class="container">
          <div class="row">
            <div class="col-3"></div>
            <div class="col-6 border bg-light">
              <div class="row">
                <div class="col-6">Start: {val.startDateOfJourney}</div>
                <div class="col-6">End: {val.endDateOfJourney}</div>
              </div>
              <div class="row">
                <div class="col-12">
                  Name of Hotel: {val.nameOfHotels}
                </div>
              </div>
              <div class="row">
                <div class="col-12">Places Visited: {val.placesVisited}</div>
              </div>
              <div class="row">
                <div class="col-12">Total Cost: {val.totalCost}</div>
              </div>
              <div class="row">
                <div class="col-12">Trip Type: {val.tripType}</div>
              </div>
            </div>

            <div class="col-2"></div>
          </div>
        </div>
        <br></br>
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
            {val.experience}
          </div>
          <div class="col-1"></div>
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
}
