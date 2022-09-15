import "./Comparestand.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Compareslider } from "../../feature/Compareslider";
import { Voslogicimages } from "../../feature/Voslogicimages";

const Comparestand = () => {
  return (
    <div className="Comparestand">
      <div className="container-xxl">
        <div className="row">
          <div className="col-7 col-md-12 m-auto">
            <h2
              className="section---title--comp  "
              style={{ marginTop: "50px" }}
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
      </div>
      <Tabs>
        <div className="container-fluid">
          <div className="row">
            <div className="col p-0">
              <div className="tabss---cutom">
                <TabList className="specilist_class_grTabs p-0">
                  {Compareslider.map((element, index) => {
                    return (
                      <Tab key={index}>
                        <div className="slider---box--">
                          <img
                            src={element.img}
                            alt={element.title}
                            className="animate---float--bouncing"
                          />
                          <h3 className="silder---ttile---compare">
                            {element.title}
                          </h3>
                        </div>
                      </Tab>
                    );
                  })}
                </TabList>
              </div>
            </div>
          </div>
        </div>
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
              <img src={Voslogicimages.brigth} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-12">
              <img src={Voslogicimages.vocodia} alt="" className="img-fluid" />
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
      </Tabs>
    </div>
  );
};

export default Comparestand;
