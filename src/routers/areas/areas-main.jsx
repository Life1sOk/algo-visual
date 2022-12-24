import React from "react";

import { useSelector } from "react-redux";
import { selectCombinedActive, selectCombinedDone, selectCombinedExpired } from "../../App/slices/combined-areas.slice";
import { selectDisplaySectionTitle, selectParts } from "../../App/slices/areas-slice";

import { MainLayout } from "../../Global-style/layouts";

import StatisticSection from "./sections/statistic-section/statistic-section";
import PartsSection from "./sections/parts-section/parts-section";
import QuestsSection from "./sections/quests-section/quests-section";

const AreasMain = () => {
    const displayTitle = useSelector(selectDisplaySectionTitle);
    const partsCount = useSelector(selectParts).length;

    const activeQuests = useSelector(selectCombinedActive);
    const filteredActiveQuests = activeQuests?.filter(quest => quest.title === displayTitle);

    const doneQuests = useSelector(selectCombinedDone);
    const filteredDoneQuests = doneQuests?.filter(quest => quest.title === displayTitle);

    const expiredQuests = useSelector(selectCombinedExpired);
    const filteredExpiredQuests = expiredQuests?.filter(quest => quest.title === displayTitle);

    const currentAreaStatistic = {
        areaTitle: displayTitle,
        parts: partsCount,
        active: filteredActiveQuests?.length,
        done: filteredDoneQuests?.length,
        expired: filteredExpiredQuests?.length,
        total: filteredActiveQuests?.length + filteredDoneQuests?.length + filteredExpiredQuests?.length,
    }

    return(
        <MainLayout>
            <StatisticSection areaStatistic={currentAreaStatistic}/>
            <PartsSection />
            <QuestsSection displayTitle={displayTitle} fActive={filteredActiveQuests} fDone={filteredDoneQuests} fExpired={filteredExpiredQuests}/>
        </MainLayout>
    )
}

export default AreasMain;