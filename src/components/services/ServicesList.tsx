import { services } from "@/config/services";
import ServiceCard from "./ServiceCard";

const ServiceList = () => {
  return (
    <div className="grid grid-rows-2 gap-4">
      {services.map((service) => (
        <ServiceCard key={service.name} {...service} />
      ))}
    </div>
  );
};

export default ServiceList;
