import PageHeader from "@/components/PageHeader";
import PageLayout from "@/components/PageLayout";
import PageTitle from "@/components/PageTitle";
import Subscribe from "@/components/Subscribe";
import TeamCard from "@/components/TeamCard";
import teamList from "@/json/team.json";
import React from "react";

export const metadata = {
  title: "Team - WebAgency",
};

const page = async () => {
  return (
    <>
      <PageHeader />
      <div className="py-8">
        <PageLayout>
          <PageTitle
            title="Our Team Member"
            pageDes="Check our awesome team members"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-7">
            {teamList.map((team, idx) => {
              const { name, image, facebook, twitter, instagram, role } =
                team || {};
              return (
                <TeamCard
                  name={name}
                  imgSrc={image}
                  facebook={facebook}
                  twitter={twitter}
                  instagram={instagram}
                  key={idx}
                  role={role}
                />
              );
            })}
          </div>
        </PageLayout>
      </div>
      <Subscribe />
    </>
  );
};

export default page;
