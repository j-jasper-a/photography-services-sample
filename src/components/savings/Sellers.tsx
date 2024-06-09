import { sellers } from "@/config/sellers";
import SellerCard from "./SellerCard";

const Sellers = () => {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xl font-semibold">Top sellers this month</p>
      <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 md:grid-rows-1">
        {sellers.map((seller) => (
          <SellerCard key={seller.name} {...seller} />
        ))}
      </div>
    </div>
  );
};

export default Sellers;
