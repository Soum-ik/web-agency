import FeaturedProject from "@/components/FeaturedProject";
import Hero from "@/components/Hero";
import Subscribe from "@/components/Subscribe";
import WorkList from "@/components/WorkList";
import heroList from "@/json/ourService.json";

export const metadata = {
  title: "Home - WebAgency",
};

const page = async () => {
  const { image1, image2, image3, image4 } = heroList[1] || {};

  return (
    <>
      <Hero images={[image1, image2, image3, image4]} />
      <WorkList />
      <FeaturedProject />
      <Subscribe />
    </>
  );
};

export default page;
