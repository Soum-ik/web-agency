import Image from "next/image";
import PageLayout from "./PageLayout"; 
 

const Brands = async() => {
 

  return (
    <div className="  ">
      {/* <PageLayout> */}
        {/* <div className="grid place-items-center grid-cols-4 gap-5 my-3 w-full">
          {brands.map((brand, idx) => {
            return(
              <Image
            src={brand?.image}
            width={500}
            height={500}
            alt="Picture of the author"
            key={idx}
            className="max-h-[70px] w-auto"
          />
            )
          })}
        </div> */}
      {/* </PageLayout> */}
    </div>
  );
};

export default Brands;
