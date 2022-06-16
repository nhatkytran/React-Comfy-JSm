import { servicies } from "../utils/constants";
import { ServicesStyles } from "./styledComponents";

function Services() {
  return (
    <ServicesStyles>
      <div className="app">
        <div className="services">
          <div className="title">
            <h2 className="underline">Built Only For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              iusto.
            </p>
          </div>
          <div className="cards">
            {servicies.map((service) => {
              return (
                <div key={service.id} className="card">
                  <div className="card-icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ServicesStyles>
  );
}

export default Services;
