import { tourData } from '../data'
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="our" subTitle="tours" />
      <div className="section-center featured-center">

        {tourData.map(dt => {
          const { id, img, date, title, text, country, days, price } = dt;
          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {country}
                  </p>
                  <p>{days}</p>
                  <p>{price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};


export default Tours;
