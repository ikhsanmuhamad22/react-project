export default function Places({
  title,
  places,
  fallbackText,
  onSelectPlace,
  style,
}) {
  return (
    <section className={style.placesCategory}>
      <h2>{title}</h2>
      {places.length === 0 && (
        <p className={style.fallbackText}>{fallbackText}</p>
      )}
      {places.length > 0 && (
        <ul className={style.places}>
          {places.map((place) => (
            <li key={place.id} className={style.placeItem}>
              <button onClick={() => onSelectPlace(place.id)}>
                <img src={place.image.src} alt={place.image.alt} />
                <h3>{place.title}</h3>
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
