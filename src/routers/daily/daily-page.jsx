import React from "react";

// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// -------------  Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";
import TitlePage from "../../Components/title-page/title-page.component";

// ------------ Page's Sections ----------------- //
import SwitchSection from "./sections/switch/switch.section";

// ------------- Lego --------------- //
const DailyPage = () => {

    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <TitlePage titleName='Tomorrow' />
                <SwitchSection />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default DailyPage;