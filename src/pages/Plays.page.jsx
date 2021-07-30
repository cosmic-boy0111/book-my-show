import React from "react";

// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Plays = () => {
  return (
    <><h1>
      play pages
    </h1>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Plays in Pune</h2>
            <div className="flex flex-wrap ">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:oi-discovery-catalog@@icons@@bundle-icon-shadow-4x.png,ox-15,oy-15,ow-50/et00312833-kepyqfqpxl-portrait.jpg"
                  title="Admission - 31st July (Saturday)"
                  subtitle="English -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309176-acvpbmcyev-portrait.jpg"
                  title="`Sri Venkateswara Udbhavam` Surabhi Theatre Play"
                  subtitle="Telugu -> ₹400"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAxNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                  title="`Kanthamathi` (Sadarame) Surabhi Theatre Play"
                  subtitle="Telugu -> ₹150"             
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309050-fsgpqjlfhw-portrait.jpg"
                  title="`BHAKTHA PRAHLADA` Surabhi Theatre Play"
                  subtitle="Telugu -> ₹100"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311987-grtmzzwwnt-portrait.jpg"
                  title="Crazy Thieves in Palavakkam"
                  subtitle="Telugu -> ₹156"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VHVlLCAyNyBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309077-pjltpphfsh-portrait.jpg"
                  title="``Mayabazaar`` Surabhi Theatre Play"
                  subtitle="Telugu -> ₹130"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311722-azatyzfqut-portrait.jpg"
                  title="TVK Presents Amarar Kalki in Sivagamiyin Sabatham"
                  subtitle="Telugu -> ₹199"
                />
              </div>

            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
              <PlaysFilter
                title="Language"
                tags={["Tamil", "Telegu", "English"]}
              />
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Plays;