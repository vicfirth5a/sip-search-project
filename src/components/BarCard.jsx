import { useNavigate } from "react-router-dom";
export default function BarCard({
  id,
  title,
  description,
  region,
  type,
  imagesUrl,
  likes,
}) {
  const navigate = useNavigate();
  const handleBarClick = () => {
    navigate(`/barContent/${id}`);
  };

  return (
    <div className="bar-results-item">
      <div
        className="txt"
        style={{
          backgroundImage: `url(${imagesUrl})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="title d-flex  ">
          <h3>{title}</h3>
          <span className="likes-icon d-flex align-items-center">
            <span class="material-symbols-outlined">favorite</span>
            {likes}
          </span>
        </div>

        <p className="description">
          {description.length > 50
            ? description.substring(0, 50) + "..."
            : description}
        </p>

        <div className="tags">
          <span className="region">{region}</span>
          <span className="type">{type}</span>
        </div>

        <a className="button" onClick={handleBarClick}>
          立即前往
        </a>
      </div>
    </div>
  );
}
