import React from "react";

// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// -------------  Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";
import TitlePage from "../../Components/title-page/title-page.component";

// ------------ Page's Sections ----------------- //
import AreasSection from "./sections/areas-section/areas-section";
import GoalsSection from "./sections/goals-section/goals-section";

// ------------ Page's React Components ----------------- //

// ------------- Lego --------------- //
const AreasPage = () => {
    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <TitlePage titleName='Areas' />
                <AreasSection />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
                <GoalsSection />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default AreasPage;