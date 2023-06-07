import React from 'react'

export default function FeaturedCard(props) {
  return (
    <div>
        <div class="card">
  <div class="card-header">
    Featured
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.description}</p>
    <a href="#" class="btn btn-primary">More</a>
  </div>
</div>
    </div>
  )
}
