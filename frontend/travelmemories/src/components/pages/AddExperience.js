import React from "react";
import Header from "../UIC/Header";

export default function AddExperience() {
  return (
    <div>
      <Header></Header>
      <div style={{ margin: "2%" }}>
        <div class="mb-3">
          <label for="tripName" class="form-label">
            Trip Name
          </label>
          <input
            type="email"
            class="form-control"
            id="tripName"
            placeholder="Trip Name"
          ></input>
        </div>
        <div class="mb-3">
          <label>Trip Date</label>
          <div class="row">
            <div class="col-6">
              <input id="startDate" class="form-control" type="date" />
            </div>
            <div class="col-6">
              <input id="endDate" class="form-control" type="date" />
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="hotelName" class="form-label">
            Name of Hotels
          </label>
          <input
            type="email"
            class="form-control"
            id="hotelName"
            placeholder="Hotel Name"
          ></input>
        </div>
        <div class="mb-3">
          <div class="row">
            <div class="col-6">
              <label for="tripType" class="form-label">
                Trip Type
              </label>
              <select class="form-select" aria-label="tripType" id="tripType">
                <option selected value="backpacking">
                  Backpacking
                </option>
                <option value="leisure">Leisure</option>
                <option value="business">Business</option>
              </select>
            </div>
            <div class="col-6">
              <label for="totalCost" class="form-label">
                Total Cost
              </label>
              <input
                type="email"
                class="form-control"
                id="totalCost"
                placeholder="100000"
              ></input>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <label for="placesVisited" class="form-label">
            Places Visited
          </label>
          <input
            type="email"
            class="form-control"
            id="placesVisited"
            placeholder="Paris, Delhi, etc..."
          ></input>
        </div>
        <div class="mb-3">
          <label class="form-label">Featured Trip?</label>
          <div class="form-check">
            <input
              class="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="true"
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
              checked
            ></input>
            <label class="form-check-label" for="false">
              False
            </label>
          </div>
        </div>
        <div class="mb-3">
          <label for="imageLink" class="form-label">
            Image Link
          </label>
          <input
            type="email"
            class="form-control"
            id="imageLink"
            placeholder="https://xyz.com/pic.png"
          ></input>
        </div>
        <div class="mb-3">
          <label for="shortDesc" class="form-label">
            Short Description
          </label>
          <textarea class="form-control" id="shortDesc" rows="3"></textarea>
        </div>
        <div class="mb-3">
          <label for="experience" class="form-label">
            Experience
          </label>
          <textarea class="form-control" id="experience" rows="3"></textarea>
        </div>
        <div class="mb-3" style={{ textAlign: "center" }}>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
