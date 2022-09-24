import React from "react";

import { useSelector } from "react-redux";
import { selectTomorrow } from '../../App/slices/tomorrow.slice';

import QuestCard from "../../Components/quest-card/quest-card.component";

// ------------- Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";

// ------------- React's Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Lego --------------- //
const DailyPage = () => {
    const tomorrow = useSelector(selectTomorrow);

    return (
        <PageLayoutContainer>
            <AsideLayoutContainer >
                <TitlePage titleName='Tomorrow' />
                <QuestCard title='Will need to do!' color='rgb(224, 62, 26)' type='add' quests={tomorrow} />
            </AsideLayoutContainer>
            <MainLayoutContainer>
                <Navigation />
            </MainLayoutContainer>
        </PageLayoutContainer>
    )
}

export default DailyPage;