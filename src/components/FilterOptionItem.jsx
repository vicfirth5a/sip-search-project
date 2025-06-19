import barOptions from "../barOptions";

export default function FilterOptionItem({
  activeFilters,
  area,
  districts,
  handleFilterClick,
}) {
  return (
    <div className="option-item d-flex align-items-center gap-6">
      <h3 className="option-title">{area}</h3>
      <ul className="option-values">
        {districts.map((district) => (
          <li
            className={`option-value
                  ${activeFilters.includes(district) ? "active" : ""}
                  `}
            key={district}
            onClick={() => handleFilterClick(district)}
          >
            {district}
          </li>
        ))}
      </ul>
    </div>
  );
}
