import Image from "next/image";
import Graphic from "./Graphic";
import ServiceList from "./ServicesList";
import Help from "./Help";
import SearchBar from "./SearchBar";

const Services = () => {
  return (
    <section className="mx-auto max-w-screen-2xl p-6">
      <div className="md:grid md:grid-cols-2 md:gap-4">
        <Graphic />
        <div className="flex h-full flex-col justify-between gap-4">
          <Help />
          <SearchBar />
          <ServiceList />
        </div>
      </div>
    </section>
  );
};

export default Services;
