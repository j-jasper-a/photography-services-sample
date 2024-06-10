import { Triangle } from "lucide-react";
import Link from "next/link";

const FloatingHome = () => {
  return (
    <Link href="/" className="fixed bottom-4 right-4 z-40 bg-brand p-2">
      <Triangle size={20} className="fill-light stroke-light" />
    </Link>
  );
};

export default FloatingHome;
