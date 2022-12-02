import React from "react";

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// -------------  Top level React Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";
import Timer from "../../Components/timer/timer.component";

// ------------ Page's Sections ----------------- //
import SwitchSection from "./sections/switch/switch.section";
import CombinedQuests from "./sections/combined/combined.section";

// ------------- Lego --------------- //
const DailyPage = () => {

    return (
        <PageLayout>
            <AsideLayout>
                <TitlePage titleName='Tomorrow' />
                <SwitchSection />
            </AsideLayout>
            <MainLayout>
                <Timer />
                <CombinedQuests />
            </MainLayout>
        </PageLayout>
    )
}

export default DailyPage;