import React from "react";

// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Sports = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Sports in Bengaluru</h2>
            <div className="flex flex-wrap lg:mr-20">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-knight-chess-championship-0-2021-6-29-t-17-26-13.jpg"
                  title="Knight Chess Championship"
                  subtitle="₹129 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00122514-ybhsgpeqbh-portrait.jpg"
                  title="Call of Duty Mobile Tournament"
                  subtitle="₹300 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311494-tpcplhdwuq-portrait.jpg"
                  title="Lost Treasure of Sundarbans"
                  subtitle="₹149"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00311497-yncssersnf-portrait.jpg"
                  title="Flight 9032"
                  subtitle="₹199"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00134925-hxxsbaxswm-portrait.jpg"
                  title="Free Fire Solo and Squad"
                  subtitle="₹100 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyNSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00131705-tcgwckgzud-portrait.jpg"
                  title="No Escape Play From Home"
                  subtitle="₹150"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312550-rkmxnlvdwg-portrait.jpg"
                  title="BGMI TOURNAMENT"
                  subtitle="₹100 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310870-xxrvrfdqwp-portrait.jpg"
                  title="BRUCE Project 2"
                  subtitle="₹1199"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/12 ">
            <h2 className="text-2xl font-bold mb-4 ml-20">Filters</h2>
            <div>
              <PlaysFilter
                title="Date"
                tags={["Today", "Tomorrow", "This Weekend"]}
              />
            
               <PlaysFilter
                title="Categories"
                tags={["E Sports","Cricket"]}
              />
            
               <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed","Kids Activites","Outdoor Events"]}
              />
              <PlaysFilter
               title="Price"
               tags={["Free", "0-500", "501-2000","Above 2000"]}
             />
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
};

export default Sports;