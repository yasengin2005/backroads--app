import { serviceData } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceData.map((srv) => {
          return <Service key={srv.id} {...srv} />;
        })}
      </div>
    </section>
  );
};

export default Services;
