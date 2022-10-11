import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getAreasData, selectAreasStatus } from "../../App/slices/areas-slice";

// ------------- Top level - Containers / Layouts -------------- //
import AsideLayoutContainer from "../../Layouts/aside-container.layout";
import PageLayoutContainer from "../../Layouts/page-container.layout";
import MainLayoutContainer from "../../Layouts/main-container.layout";
import CenterLayoutContainer from "../../Layouts/center-container";

// -------------  Top level React Components ------------------- //
import Navigation from "../../Components/navigation/navigation.component";
import TitlePage from "../../Components/title-page/title-page.component";
import Spinner from "../../Components/spinner/spinner.component";

// ------------ Page's Sections ----------------- //
import AreasSection from "./sections/areas-section/areas-section";
import DescriptionSection from "./sections/description-section/description-section";
import PartsSection from "./sections/parts-section/parts-section";

// ------------ Page's React Components ----------------- //

// ------------- Lego --------------- //
const AreasPage = () => {
    const dispatch = useDispatch();
    const current = useSelector(selectAuthUid);
    const status = useSelector(selectAreasStatus);

    useEffect(() => {
        if (status === 'reload') {
            dispatch(getAreasData(current))
        }
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
                            <AsideLayoutContainer >
                                <TitlePage titleName='Areas' />
                                <AreasSection />
                            </AsideLayoutContainer>
                            <MainLayoutContainer>
                                <Navigation />
                                <DescriptionSection />
                                <PartsSection uid={current} />
                            </MainLayoutContainer>
                        </PageLayoutContainer>

            }
        </>
    )
}

export default AreasPage;