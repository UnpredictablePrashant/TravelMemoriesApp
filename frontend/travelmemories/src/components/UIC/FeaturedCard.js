import React from "react";
import { useNavigate } from "react-router-dom";

export default function FeaturedCard(props) {
  const navigate = useNavigate();
  const visitDetails = () => {
    navigate(`/experiencedetails/${props.id}`)
  }
  return (
    <div>
      <div class="card">
        <div class="card-header">Featured</div>
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.description}</p>
          <button onClick={visitDetails} class="btn btn-primary">
            More
          </button>
        </div>
      </div>
    </div>
  );
}
