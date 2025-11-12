import SkillCard from "./SkillCard";
import { allSkills, backendData, frontendData, toolsData } from "./skillsdata";
import SkillsTabsHeader from "./SkillsTabsHeader";
import { Tabs } from "./ui/tabs";

const SkillsTabs = () => {
  return (
    <Tabs
      defaultValue="all"
      className="flex flex-col items-center justify-center w-full"
    >
      <SkillsTabsHeader />
      <SkillCard tabValue="all" skillData={allSkills} />
      <SkillCard tabValue="frontend" skillData={frontendData} />
      <SkillCard tabValue="backend" skillData={backendData} />
      <SkillCard tabValue="tools" skillData={toolsData} />
    </Tabs>
  );
};

export default SkillsTabs;
