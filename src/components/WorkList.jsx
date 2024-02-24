import { BsArrowRight } from "react-icons/bs";
import PageLayout from "./PageLayout"; 
import WorkStatisticCard from "./WorkStatisticCard";
import worksList from "../json/work.json";

const WorkList = async () => {
  return (
    <PageLayout>
      <div className="my-16">
        <div>
          <h2 className="text-[#20B15A] uppercase font-medium">Work List</h2>
          <h1 className="font-semibold my-2 text-2xl">
            We provide the Perfect Solution <br /> to your business growth
          </h1>
        </div>
        <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-3 my-20  gap-10 place-items-center">
          {worksList.map((work, idx) => {
            const { step_number, description, details } = work || {};
            return (
              <div className="w-full px-7" key={idx}>
                <div className="bg-[#D7F5DC] w-16 h-14 rounded-lg flex items-center justify-center text-xl font-semibold">
                  {step_number}
                </div>
                <h1 className="my-3 font-bold text-[18px]">{description}</h1>
                <p className="my-3">{details}</p>
                <button className="flex items-center gap-2 my-10 ml-5 border px-5 py-3 rounded-md shadow-lg">
                  Learn More <BsArrowRight />
                </button>
              </div>
            );
          })}
        </div>

        <div className="grid gird-col-1 md:grid-cols-2 lg:grid-cols-4 my-20 gap-10 ">
          <WorkStatisticCard
            title="Followers"
            amount="100+"
            image="/images/svg/group.svg"
          />
          <WorkStatisticCard
            title="Solved Problems"
            amount="100+"
            image="/images/svg/like.svg"
          />
          <WorkStatisticCard
            title="Happy Customers"
            amount="56+"
            image="/images/svg/happy.svg"
          />
          <WorkStatisticCard
            title="Projects"
            amount="153+"
            image="/images/svg/scan.svg"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default WorkList;
