import React from "react";

export default function ExperienceDetails(props) {
  return (
    <div style={{ margin: "2%" }}>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" style={{textAlign: "center"}}>
          <h1>Switzerland Trip</h1>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div class="col-2"></div>
        <div class="col-8" style={{textAlign: "center"}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiaiKoyZjrkjs_ENa9fsKNvelTVDOurTFWxhvsV_8&s" alt="meaning"></img>
        </div>
        <div class="col-2"></div>
      </div>
      <br></br>
      <div class="container">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 border bg-light">
            <div class="row">
              <div class="col-6">Start: 12-12-2022</div>
              <div class="col-6">End: 12-12-2022</div>
            </div>
            <div class="row">
              <div class="col-12">
                Name of Hotel: Backpackers Hostel, Traveller Hostel
              </div>
            </div>
            <div class="row">
              <div class="col-12">
               Places Visited: Paris, Nice, Toulouse
              </div>
            </div>
            <div class="row">
              <div class="col-12">
              Total Cost: 100000
              </div>
            </div>
            <div class="row">
              <div class="col-12">
              Trip Type: backpacking
              </div>
            </div>
          </div>

          <div class="col-2"></div>
        </div>
      </div>
      <br></br>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-10">
          Switzerland, officially the Swiss Confederation, is a landlocked
          country located at the confluence of Western, Central and Southern
          Europe. It is bordered by Italy to the south, France to the west,
          Germany to the north and Austria and Liechtenstein to the east.
          Switzerland is geographically divided among the Swiss Plateau, the
          Alps and the Jura; the Alps occupy the greater part of the territory,
          whereas most of the country's population of 8.7 million are
          concentrated on the plateau, which hosts the largest cities and
          economic centres, including Zürich, Geneva and Basel.
        </div>
        <div class="col-1"></div>
      </div>
    </div>
  );
}
