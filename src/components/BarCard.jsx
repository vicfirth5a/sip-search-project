import { Button } from "bootstrap";

export default function BarCard({
  title,
  description,
  region,
  imagesUrl,
  likes,
}) {
  return (
    <div className="bar-results-item">
      <div className="pic">
        <img src={imagesUrl} />
      </div>

      <div className="txt">
        <div className="title d-flex align-items-center ">
          <h3>{title}</h3>
          <span className="likes-icon d-flex align-items-center">
            <span class="material-symbols-outlined">favorite</span>
            {likes}
          </span>
        </div>

        <p className="description">{description}</p>
        <span className="region">{region}</span>

        <a className="button">立即前往</a>
      </div>
    </div>
  );
}
