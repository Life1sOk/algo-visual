import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectAuthUid } from "../../App/slices/auth.slice";
import { getAreasData, selectAreasStatus } from "../../App/slices/areas-slice";

// ------------- Top level - Containers / Layouts -------------- //
import { AsideLayout, CenterLayout, PageLayout } from "../../Global-style/layouts";

// -------------  Top level React Components ------------------- //
import Spinner from "../../Components/spinner/spinner.component";
import TitlePage from "../../Components/title-page/title-page.component";

// ------------ Page's Sections ----------------- //
import AreasSection from "./sections/areas-section/areas-section";

import AreasMain from "./areas-main";

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
                    <CenterLayout>
                        <Spinner />
                    </CenterLayout>
                    :
                    status === 'rejected' ?
                        <div>Error</div>
                        :
                        <PageLayout>
                            <AsideLayout >
                                <TitlePage titleName='Areas' />
                                <AreasSection />
                            </AsideLayout>
                            <AreasMain />
                        </PageLayout>
            }
        </>
    )
}

export default AreasPage;