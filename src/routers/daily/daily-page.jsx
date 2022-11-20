import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";

import { getCombinedAreas, selectCombinedStatus } from '../../App/slices/combined-areas.slice';

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, CenterLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

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
                    <CenterLayout>
                        <Spinner />
                    </CenterLayout>
                    :
                    status === 'rejected' ?
                        <div>Error</div>
                        :
                        <PageLayout>
                            <AsideLayout>
                                <TitlePage titleName='Tomorrow' />
                                <SwitchSection />
                            </AsideLayout>
                            <MainLayout>
                                <CombinedQuests />
                            </MainLayout>
                        </PageLayout>
            }
        </>
    )
}

export default DailyPage;