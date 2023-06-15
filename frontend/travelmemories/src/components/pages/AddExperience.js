import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../url-config";

export default function AddExperience() {
  const [formdata, setFormdata] = useState({
    tripName: "",
    nameOfHotels: "",
    totalCost: 0,
    placesVisited: "",
    image: "",
    shortDesc:"",
    experience:"",
    startDateOfJourney: "",
    endDateOfJourney: "",
    featured:false,
    tripType:""
  })
  const submitForm = () => {
    console.log(formdata)
    axios.post(`${baseUrl}/trip`, formdata)
  }

  return (
    <div>
      <div style={{ margin: "2%" }}>
        <div class="mb-3">
          <label for="tripName" class="form-label">
            Trip Name
          </label>
          <input
            type="text"
            class="form-control"
            id="tripName"
            placeholder="Trip Name"
            value={formdata.tripName}
            onChange={(e) => setFormdata({...formdata, tripName: e.target.value})}
          ></input>
        </div>
        <div class="mb-3">
          <label>Trip Date</label>
          <div class="row">
            <div class="col-6">
              <input id="startDate" class="form-control" type="date" value={formdata.startDateOfJourney} 
              onChange={(e) => setFormdata({...formdata, startDateOfJourney: e.target.value})} />
            </div>
            <div class="col-6">
              <input id="endDate" class="form-control" type="date" value={formdata.endDateOfJourney} 
              onChange={(e) => setFormdata({...formdata, endDateOfJourney: e.target.value})}/>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="nameOfHotels" class="form-label">
            Name of Hotels
          </label>
          <input
            type="text"
            class="form-control"
            id="nameOfHotels"
            placeholder="Hotel Name"
            value={formdata.nameOfHotels}
            onChange={(e) => setFormdata({...formdata, nameOfHotels: e.target.value})}
          ></input>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-6">
              <label for="tripType" class="form-label">
                Trip Type
              </label>
              <select class="form-select" aria-label="tripType" id="tripType" value={formdata.tripType} onChange={(e) => setFormdata({...formdata, tripType: e.target.value})}>
                <option selected value="backpacking">
                  Select One
                </option>
                <option value="backpacking">Backpacking</option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div class="col-6">
              <label for="totalCost" class="form-label">
                Total Cost
              </label>
              <input
                type="number"
                class="form-control"
                id="totalCost"
                placeholder="100000"
                value={formdata.totalCost}
                onChange={(e)=> setFormdata({...formdata, totalCost: e.target.value})}
              ></input>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="placesVisited" class="form-label">
            Places Visited
          </label>
          <input
            type="text"
            class="form-control"
            id="placesVisited"
            placeholder="Paris, Delhi, etc..."
            value={formdata.placesVisited}
            onChange={(e) => setFormdata({...formdata, placesVisited: e.target.value})}
          ></input>
        </div>
        <div class="mb-3">
          <label class="form-label">Featured Trip?</label>
          <div class="form-check" >
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="true"
              value={true}
              onChange={(e)=> setFormdata({...formdata, featured: JSON.parse(e.target.value)})}
              checked={formdata.featured === true}
            ></input>
            <label class="form-check-label" for="true">
              True
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="false"
              value={false}
              onChange={(e)=> setFormdata({...formdata, featured: JSON.parse(e.target.value)})}
              checked={formdata.featured === false}
            ></input>
            <label class="form-check-label" for="false">
              False
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="image" class="form-label">
            Image Link
          </label>
          <input
            type="text"
            class="form-control"
            id="image"
            placeholder="https://xyz.com/pic.png"
            value={formdata.image}
            onChange={(e) => setFormdata({...formdata, image: e.target.value})}
          ></input>
        </div>
        <div class="mb-3">
          <label for="shortDesc" class="form-label">
            Short Description
          </label>
          <textarea class="form-control" id="shortDesc" rows="3" value={formdata.shortDesc}
            onChange={(e) => setFormdata({...formdata, shortDesc: e.target.value})}></textarea>
        </div>
        <div class="mb-3">
          <label for="experience" class="form-label">
            Experience
          </label>
          <textarea class="form-control" id="experience" rows="3" value={formdata.experience}
            onChange={(e) => setFormdata({...formdata, experience: e.target.value})}></textarea>
        </div>
        <div class="mb-3" style={{ textAlign: "center" }}>
          <button type="submit" class="btn btn-primary" onClick={submitForm}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
