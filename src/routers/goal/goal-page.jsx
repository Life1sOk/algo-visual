import React from "react";

// ------------- Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- React's Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Page sections ------------------- //
import GoalProgressSection from "./sections/goal-progress/goal-progress.section";
import SetGoalSection from "./sections/set-goal/set-goal.section";
import DotsSection from "./sections/dots/dots.section";
import PathSection from "./sections/path/path.section";

// ------------- Lego --------------- //
const GoalPage = () => {
    return (
        <PageLayout>
            <AsideLayout >
                <TitlePage titleName='Goals' />
                <GoalProgressSection />
            </AsideLayout>
            <MainLayout>
                <SetGoalSection />
                <DotsSection />
                <PathSection />
            </MainLayout>
        </PageLayout>
    )
}

export default GoalPage;