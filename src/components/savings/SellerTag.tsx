import { Check as CheckIcon } from "lucide-react";

const SellerTag = ({ tag }: { tag: string }) => {
  return (
    <div className="flex items-center gap-1">
      <CheckIcon size={16} className="text-brand" />
      <p className="font-light opacity-70 md:text-sm">{tag}</p>
    </div>
  );
};

export default SellerTag;
