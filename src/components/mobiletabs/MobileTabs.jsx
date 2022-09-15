import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Compareslider } from "../../feature/Compareslider";
import { Voslogicimages } from "../../feature/Voslogicimages";

import "./MobileTabs.css";
const MobileTabs = () => {
  return (
    <>
      <section className="compare_mobile_tabs">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12 m-auto">
              <h2
                className="section---title--comp  "
                style={{
                  marginTop: "50px",
                }}
              >
                COMPARE US WHERE WE STAND{" "}
              </h2>
              <p className="paragagram">
                State of the art Data Centers and Tier 1 Telecommunication
                providers on our back end make us the most reliable solution for
                your telecommunication needs.
              </p>
            </div>
          </div>
          <div className="row tabs_section2">
            <div className="col-md-12">
              <Tabs>
                <TabList>
                  <Tab>Voice Conversational</Tab>
                  <Tab>Sentiment recoginition </Tab>
                  <Tab>intelligent assistance for agents</Tab>
                  <Tab>Scal </Tab>
                  <Tab>conversational</Tab>
                  <Tab>compliance</Tab>
                  <Tab>Control</Tab>
                </TabList>
                <section className="compare--us---bggg">
                  <div className="container-xxl p-0">
                    <div className="row">
                      <div className="col">
                        <div className="overlay---compare--us"></div>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="container-xxl companiesss--logo">
                  <div className="row p-0 m-0">
                    {Compareslider.map((element, index) => {
                      return (
                        <TabPanel key={index} className="panal_class_grTabs">
                          {<p className="para">{element.title}</p>}
                        </TabPanel>
                      );
                    })}
                  </div>
                  <div className="row  companiesss--wrapperr">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12 ">
                      <img
                        src={Voslogicimages.brigth}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                      <img
                        src={Voslogicimages.vocodia}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                      <img
                        src={Voslogicimages.callmarker}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                      <img
                        src={Voslogicimages.loogolarge}
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="row companiesss--wrapperr--2">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-12">
                      <span className="icon---comp">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <div className="col-lg-3  col-md-3 col-sm-6 col-12">
                      <span className="icon---comp">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <div className="col-lg-3  col-md-3 col-sm-6 col-12">
                      <span className="icon---comp">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <div className="col-lg-3  col-md-3 col-sm-6 col-12">
                      <span className="icon---comp">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                  </div>
                </div>

                {/* <div className="tabs_content_dispcription2"></div> */}
                {/* <div className="main_tablet_based_tab_content_wrapper">
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>GLOBAL PRESENCE</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>Fast & optimized</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>Api driven platfrom</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>GLOBAL PRESENCE</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>GLOBAL PRESENCE</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>GLOBAL PRESENCE</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <div className="tablet_bases_tab_content">
                      <h2>GLOBAL PRESENCE</h2>
                      <p>With access to worldwide routes connecting your</p>
                      <p>calls is a breeze with Vos logic</p>
                    </div>
                  </TabPanel>
                </div> */}
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileTabs;
