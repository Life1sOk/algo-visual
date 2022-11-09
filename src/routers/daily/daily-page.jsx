import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";

import { getCombinedAreas, selectCombinedStatus } from '../../App/slices/combined-areas.slice';

// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";
import CenterLayoutContainer from "../../Layouts/center-container";

// -------------  Top level React Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";
import Spinner from "../../Components/spinner/spinner.component";

// ------------ Page's Sections ----------------- //
import SwitchSection from "./sections/switch/switch.section";
import CombinedQuests from "./sections/combined/combined.section";

// ------------- Lego --------------- //
const DailyPage = () => {
    const dispatch = useDispatch();
    const uid = useSelector(selectAuthUid);
    const status = useSelector(selectCombinedStatus);

    useEffect(() => {
        if (status === '') dispatch(getCombinedAreas(uid));
    }, [])

    return (
        <>
            {
                status === 'loading' ?
                    <CenterLayoutContainer>
                        <Spinner />
                    </CenterLayoutContainer>
                    :
                    status === 'rejected' ?
                        <div>Error</div>
                        :
                        <PageLayoutContainer>
                            <AsideLayoutContainer>
                                <TitlePage titleName='Tomorrow' />
                                <SwitchSection />
                            </AsideLayoutContainer>
                            <MainLayoutContainer>
                                <CombinedQuests />
                            </MainLayoutContainer>
                        </PageLayoutContainer>
            }
        </>
    )
}

export default DailyPage;