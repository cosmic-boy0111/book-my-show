import React from "react";

// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";
import StickyFooter from "../components/Footer/footer";

const Events = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Events in Bengaluru</h2>
            <div className="flex flex-wrap lg:mr-20">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00131881-dxumkukndl-portrait.jpg"
                  title="Vipul Goyal Live"
                  subtitle="₹599 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxIEF1ZyBvbndhcmRz,ots-29,otc-FFFFFF,oy-612,ox-24/et00312495-rdgtjvrcyd-portrait.jpg"
                  title="Uncensored - LIVE"
                  subtitle="₹149"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312494-bvsctmpewc-portrait.jpg"
                  title="No-Filter Comedy Live"
                  subtitle="₹149"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00308489-dvcsrjyhvp-portrait.jpg"
                  title="Sudoku by EMPHLI"
                  subtitle="₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304000-jueghxcwha-portrait.jpg"
                  title="Executive PG Programming in Machine Learning and AI"
                  subtitle="149"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCA2IEF1Zw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312818-maeqktksuh-portrait.jpg"
                  title="Line Up Show ft. Sorabh Pant & Aakash Mehta"
                  subtitle="349"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAxNSBBdWc%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00304419-rypsvkxjnv-portrait.jpg"
                  title="Still Standing by Abhijit Ganguly"
                  subtitle="₹499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312493-qgewhgdruc-portrait.jpg"
                  title="Stand Up Comedy Live"
                  subtitle="₹149"
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
                title="Language"
                tags={["English","Hindi","Telugu","Marathi","Sanskrit","Urdu","French","Spanish"]}
              />
               <PlaysFilter
                title="Categories"
                tags={["Workshop","Kids","Comedy Shows","Performances","Online Streaming Events","Music Shows","Vaccination",
                         "Screening","Talks","Celebrity Wishes","Spiritiuality","Meetups"]}
              />
            
               <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Amateur","Kids Activites","Outdoor Events"]}
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

export default Events;