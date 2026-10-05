import Image from "next/image";

import Banners from "./components/homepage/Banners";
import CategoryList from "./components/homepage/CategoryList";
import BestSeller from "./components/homepage/BestSeller";
import TrendingStoreFavorites from "./components/homepage/TrendingStoreFavorites";
import OrderNow from "./components/homepage/OrderNow";

export default function Home() {
  return (
    <>
      <Banners />
      <CategoryList />
      <BestSeller />
      <TrendingStoreFavorites showFreshnessGuarantee={false} />
      <OrderNow />
      <TrendingStoreFavorites showFreshnessGuarantee={true} />
      <OrderNow bg={"bg-green25"} />
    </>
  );
}
