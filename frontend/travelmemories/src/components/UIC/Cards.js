import React from "react";

export default function Cards(props) {
  const visitDetails = () => {
    
  }
  return (
    <div style={{marginBottom: "2%", marginTop: "2%"}}>
      <div class="card" style={{width: "10%;"}}>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
          <p class="card-text">
            {props.description}
          </p>
          <button onClick={visitDetails} class="card-link">
            More Details
          </button>
        </div>
      </div>
    </div>
  );
}
