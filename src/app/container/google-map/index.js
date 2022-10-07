import React, { useEffect } from "react";

function GoogleMap(){
    useEffect(()=>{
        const ifameData=document.getElementById("iframeId")
        const lat=22.309425;
        const lon=72.136230;
        ifameData.src=`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`
    })
    return(
        <div>
            <iframe id="iframeId" height="1000px" width="100%"></iframe>
        </div>
    );
}
export default GoogleMap;