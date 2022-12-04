import React from "react";

import Area from "../../components/area/area.component";

const check = [
    {
        title: 'Environment',
        icon: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fenvironment%2Fenvironment.png?alt=media&token=34a29ac7-c3da-4675-ae2b-c36e953bbd76',
        mainColor: 'rgba(204,229,255, .75)',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fenvironment%2Fpage-img%2Fprev-environment.png?alt=media&token=fc655f87-af0f-4764-bf8d-99fc89421ccb',
    },
    {
        title: 'Growth',
        icon: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fgrowth%2Fgrowth.png?alt=media&token=a8ce9d2e-5a6c-49cd-8d41-dbc682c46866',
        mainColor: 'rgba(255,229,204, .75)',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fgrowth%2Fpage-img%2Fprev-growth.png?alt=media&token=a7904e2b-2b0c-4319-a03a-59473a577b87',
    },
    {
        title: 'Health',
        icon: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fhealth%2Fhealth.png?alt=media&token=19069467-cd49-4ae7-8aa8-6bf6d6573325',
        mainColor: 'rgba(153,255,255, .75)',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fhealth%2Fpage-img%2Fprev-health.png?alt=media&token=bfaf371d-526d-4ed6-a699-8d935591c6fc',
    },
    {
        title: 'People',
        icon: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fpeople%2Fpeople.png?alt=media&token=695a9e37-bfa3-45aa-a7e9-53c46fd65b05',
        mainColor: 'rgba(255,204,229, .75)',
        previewImg: 'https://firebasestorage.googleapis.com/v0/b/areas-todo.appspot.com/o/areas%2Fpeople%2Fpage-img%2Fprev-people.png?alt=media&token=816c70c1-8c70-4dbd-85df-d423fe96a970',
    },
];

const AreasSection = () => {

    return (
        <>
            {
                check.map((area, index) => <Area key={index} area={area} />)
            }
        </>
    )
}

export default AreasSection;