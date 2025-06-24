export default function OpeningHours({ bar }) {
  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const dayLabels = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"];

  return (
    <div className="bar-contact-info__hours">
      <h3 className="bar-contact-info__hours-title bg-primary1 py-4 mb-1">
        營業時間
      </h3>

      <ul className="bar-contact-info__hours-list">
        {days.map((day, i) => (
          <li className="bar-contact-info__hours-item" key={day}>
            <span>{dayLabels[i]}</span>
            <span>{bar.contactInfo.openingHours[day]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
