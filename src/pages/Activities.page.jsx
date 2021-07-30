import React from "react";

// component
import Posterplay from "../components/Poster/posterplay.component";
import PlaysFilter from "../components/PlaysFilters/PlaysFilters.component";

const Activities = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="w-full lg:flex lg:flex-row-reverse">
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">Activities in Bengaluru</h2>
            <div className="flex flex-wrap lg:mr-20">
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312640-hmkbthtqxc-portrait.jpg"
                  title="Big Banyan Vineyard Tour"
                  subtitle="₹332 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-VGh1LCAyOSBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00310275-tfdgasccgy-portrait.jpg"
                  title="Imagica open ticket"
                  subtitle="₹170 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312387-szsmwjkjdh-portrait.jpg"
                  title="Sit Down Buffet"
                  subtitle="₹605 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U2F0LCAzMSBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312759-pmmlmgcdws-portrait.jpg"
                  title="Virtual Tour to HAMPI"
                  subtitle="₹100"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00309721-zayphtsqva-portrait.jpg"
                  title="Lakeside Camping in Kanva"
                  subtitle="₹1349 onwards"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAzMCBKdWw%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00076407-qxlwrwvedu-portrait.jpg"
                  title="My Hikes- Kudermukh Trek"
                  subtitle="₹4499"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/nmcms/events/banner/mobile/media-mobile-mystery-rooms-online-offline-escape-experience-0-2021-2-15-t-18-8-28.jpg"
                  title="Mystery Rooms-Escape Experience"
                  subtitle="₹5480"
                />
              </div>
              <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3">
                <Posterplay
                  src="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyNiBKdWwgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00312054-zcwsemxtkq-portrait.jpg"
                  title="Prasad from Jagannath Puri"
                  subtitle="₹499"
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
                tags={["Unique Tours","Food and Drink","Gaming","Adventure","Amusement Parks","Antiques,Heritage,Museums",
                        "Hospitals"]}
              />
            
               <PlaysFilter
                title="More Filters"
                tags={["Online Streaming", "Kids Allowed", "Amateur","Kids Activites","Outdoor Events","Romantic Dining",
                        "Stay Pckages","Brunch","Buffet"]}
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

export default Activities;