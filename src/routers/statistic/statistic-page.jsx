import React from "react";

// ------------- Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// ------------- React's Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Lego --------------- //
const StatisticPage = () => {
    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <TitlePage titleName='Statistic' />
            </AsideLayoutContainer>
            <MainLayoutContainer>
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default StatisticPage;