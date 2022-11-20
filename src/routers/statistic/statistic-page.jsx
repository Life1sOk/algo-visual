import React from "react";

// ------------- Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- React's Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Lego --------------- //
const StatisticPage = () => {
    return (
        <PageLayout>
            <AsideLayout>
                <TitlePage titleName='Statistic' />
            </AsideLayout>
            <MainLayout>
            </MainLayout>
        </PageLayout>
    )
}

export default StatisticPage;