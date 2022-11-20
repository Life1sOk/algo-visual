import React from "react";

// ------------- Containers / Layouts -------------- //
import { AsideLayout, MainLayout, PageLayout } from "../../Global-style/layouts";

// ------------- React's Components ------------------- //
import TitlePage from "../../Components/title-page/title-page.component";

// ------------- Lego --------------- //
const PostsPage = () => {
    return (
        <PageLayout>
            <AsideLayout >
                <TitlePage titleName='Posts' />
            </AsideLayout>
            <MainLayout>
            </MainLayout>
        </PageLayout>
    )
}

export default PostsPage;