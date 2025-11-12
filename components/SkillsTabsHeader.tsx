import { Database, Palette, Wrench } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

const SkillsTabsHeader = () => {
  const tabStyle1 =
    "flex item-center gap-2 sm:text-[15px] min-[400px]:text-sm text-xs font-medium py-2 rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white";

  return (
    <div className="flex items-center justify-center">
      <Tabs defaultValue="frontend">
        <TabsList className="rounded-full sm:gap-2 gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 text-white min-[400px]:py-[22px] py-[20px] px-1">
          <TabsTrigger value="frontend" className={tabStyle1}>
            <Palette className="min-[400px]:size-4 size-3.5" />
            Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className={tabStyle1}>
            <Database className="min-[400px]:size-4 size-3.5" />
            Backend
          </TabsTrigger>
          <TabsTrigger value="tools" className={tabStyle1}>
            <Wrench className="min-[400px]:size-4 size-3.5" />
            Tools
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default SkillsTabsHeader;
