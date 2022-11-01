import React, { useState, useEffect } from 'react';
import {
  MDBIcon,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import "./style.css";
import "./spinner.css";
import { CSVLink } from "react-csv";
import { Container } from "react-bootstrap";
import { Bar, Line } from 'react-chartjs-2';
import { DateRangePicker } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { Button } from 'react-bootstrap';
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";
import 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
} from 'chart.js';
import annotationPlugin from "chartjs-plugin-annotation";
import { Chart, registerables } from 'chart.js';
ChartJS.register(annotationPlugin);
Chart.register(...registerables);


function LiveMonitory() {


  const [iconsActive, setIconsActive] = useState('tab1');
  const [Sensor_data, setSensor_data] = useState([]);
  const [Data, setData] = useState([]);
  const [Data1, setData1] = useState([]);
  const [entity, setEntity] = useState([]);
  const [currentparameter, setCurrentparameter] = useState('--Select Parameter--')
  const [currentstepsize, setCurrentstepsize] = useState('--Select StepSize--')
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [isLoading, setIsLoading] = useState(false)
  const [isloading, setIsloading] = useState(false)
  const [showNavSecond, setShowNavSecond] = useState(false);
  const [averageTemp, setAverageTemp] = useState([]);
  const [averageTemp1, setAverageTemp1] = useState([]);
  const [date, setDate] = useState([]);
  const [date1, setDate1] = useState([]);
  const [Data2, setData2] = useState([]);
  const [time, setTime] = useState([]);
  const [param, setParam] = useState([]);
  const [param_value, setValue] = useState([]);
  const [entity_name, setEntity_name] = useState([]);
  const [entity_type, setEntity_type] = useState([]);




  const handleIconsClick = (value) => {
    if (value === iconsActive) {
      return;
    }

    setIconsActive(value);
  };



  const changeParam = (newparam) => {
    setCurrentparameter(newparam)
  }

  const changeStepsize = (newparam) => {
    setCurrentstepsize(newparam)
  }

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  const toTimestamp = (startDate, endDate) => {
    const dt = Date.parse(startDate, endDate);
    return dt / 1000;
  }
  var start_time = (toTimestamp(startDate));
  var end_time = (toTimestamp(endDate));


  const headers = [
        { label: "entity_name", key: "entity_name" },
        { label: "entity_type", key: "entity_type" },
        { label: currentparameter, key: "Sensor_details.Pressure" },
        { label: "Timestamp", key: "Sensor_details.Timestamp" },
        // { label: currentparameter, key: "Sensor_details.temperature" },
        // { label: "average_value", key: "average_value" },
        // { label: "min_value", key: "min_value" },
        // { label: "max_value", key: "max_value" },
    ];
    const data_1 = [
        {
            entity_name: entity.map(item => item.entity_name),
            entity_type: entity.map(item => item.entity_type),
            // average_value: Sensor_data.map(item => item.average_value),
            // min_value: Sensor_data.map(item => item.min_value),
            // max_value: Sensor_data.map(item => item.max_value),
        },
        {
            Sensor_details:
                { Pressure: Data.map(o => parseFloat(o.Pressure)), temperature: Data.map(o => parseFloat(o.temperature)) ,Timestamp:date  },
        }
        
    ];

    const data__1 = [
      // {"Timestamp": "2022-10-20 18:00:00", "Pressure": 18.43}, 
      // {"Timestamp": "2022-10-20 18:05:00", "Pressure": 20.3},
      //  {"Timestamp": "2022-10-20 18:10:00", "Pressure": 21.32},
      //   {"Timestamp": "2022-10-20 18:15:00", "Pressure": 20.42}
        { Timestamp:date , Pressure: Data.map(o => parseFloat(o.Pressure)) }
      ]
   const exportcsv = () => {
    {
      const csvRow=[];
      const A = [['id','Timestamp','Pressure']]
      const result = data__1

      for (var item=0;item<result.length;item++)
      {
        A.push([result[item].Timestamp,result[item].Pressure])
      }
      for(var i=0;i<A.length;++i)
      {
        csvRow.push(A[i].join(","))
      }
      var csvString = csvRow.join("%0A");
      var a = document.createElement("a");
      a.href = 'data:attachment/csv'+ csvString;
      a.target = "_blank";
      a.download = "testfile.csv";
      document.body.appendChild(a)
      a.click();
      console.log(result)
      console.warn(csvString)
    }
  }



  const options = {
    plugins: {
      autocolors: false,
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            borderDash: [6, 6],
            borderWidth: 3,
            label: {
              display: true,
              content: "Min : " + Sensor_data.map(o => parseFloat(o.min_value)),
              position: 'end'
            },
            scaleID: 'y',
            value: Sensor_data.map(o => parseFloat(o.min_value)),
            yMin: Sensor_data.map(o => parseFloat(o.min_value)),
            yMax: Sensor_data.map(o => parseFloat(o.min_value)),
            borderColor: 'red',
          },
          line2: {
            type: 'line',
            borderDash: [6, 6],
            borderWidth: 3,
            label: {
              display: true,
              content: "Max : " + Sensor_data.map(o => parseFloat(o.max_value)),
              position: 'start'
            },
            scaleID: 'y',
            value: Sensor_data.map(o => parseFloat(o.max_value)),
            yMin: Sensor_data.map(o => parseFloat(o.max_value)),
            yMax: Sensor_data.map(o => parseFloat(o.max_value)),
            borderColor: 'green',
          },
          line3: {
            type: 'line',
            borderDash: [6, 6],
            label: {
              display: true,
              content: "Average : " + Sensor_data.map(o => parseFloat(o.average_value)),
              position: 'left'
            },
            scaleID: 'y',
            borderWidth: 3,
            value: Sensor_data.map(o => parseFloat(o.average_value)),
            yMin: Sensor_data.map(o => parseFloat(o.average_value)),
            yMax: Sensor_data.map(o => parseFloat(o.average_value)),
            borderColor: 'black',
          },
        }
      }
    }
  };
  // console.log(options)

  const data = {

    labels: Data.map(o => o.Timestamp),
    datasets: [

      {
        label: 'Pressure',
        fill: false,
        lineTension: 0.0,
        animationEnabled: true,
        backgroundColor: [
          'rgb(0, 176, 255)',

        ],
        borderColor: [
          'rgb(0, 176, 255)',
        ],
        borderWidth: 0,
        pointHitRadius: 0,
        data: Data.map(o => parseFloat(o.Pressure))
      },

      {
        label: 'temperature',
        fill: false,
        lineTension: 0.0,
        animationEnabled: true,
        backgroundColor: [
          'rgb(0, 176, 255)',
        ],
        borderColor: [
          'rgb(0, 176, 255)',
        ],
        borderWidth: 0,
        pointHitRadius: 0,
        data: Data.map(o => parseFloat(o.temperature))
      },
    ],
    options
  };

  useEffect(() => {
    if (LiveMonitory === true) {
      alert("Successfully Getting Response");
      window.location.href = "/charts";
      return;
    }
  }, []);

  async function Submit(e) {
    setIsLoading(true)
    e.preventDefault();
    // setIsLoading(true)
    const response = await fetch(`https://3wd7itxgcc.execute-api.ap-south-1.amazonaws.com/Prod/v1/sdoz/telemetry/sensor/2/agg?start_time=${start_time}&end_time=${end_time}&step_size=${currentstepsize}&param_name=${currentparameter}`);
    const json_data = await response.json();
    console.log(json_data);

    if (response.status === 404) {
      alert("Data Not Found!");
      window.location.href = "/live-monitory";
    } else if (response.status === 502) {
      alert("Bad Gateway!");
      window.location.href = "/live-monitory";
    } else if (response.status === 204) {
      alert("Undefined Content!");
      window.location.href = "/live-monitory";

    } else if (response.status === 504) {
      alert("Endpoint request Timed out");
      window.location.href = "/live-monitory";
    }

    let entity = [{ entity_name: json_data.entity_name, entity_type: json_data.entity_type }];
    let Sensor_data = [{ average_value: json_data.average_value, max_value: json_data.max_value, min_value: json_data.min_value }];

    setData(json_data.Sensor_details);
    setAverageTemp(json_data.Sensor_details?.map((item) => item.Pressure));
    setAverageTemp1(json_data.Sensor_details?.map((item) => item.temperature));
    setDate(json_data.Sensor_details?.map((item) => item.Timestamp));
    setDate1(json_data.Sensor_details?.map((item) => item.Timestamp));
    setEntity(entity)
    setSensor_data(Sensor_data)
    setIsLoading(false)
    console.warn(date)
  }
 

  async function Enter(e) {
    // setIsLoading(true)
    e.preventDefault();
    // setIsLoading(true)
    const response = await fetch(`https://3wd7itxgcc.execute-api.ap-south-1.amazonaws.com/Prod/fetch_files_s3/2/data?start_time=${start_time}&end_time=${end_time}&step_size=${currentstepsize}&param_name=${currentparameter}`);
    const json = await response.json();

    if (response.status === 200) {
      alert("Download CSV file..!");
      window.location.href = json.bucket_url;
    } else if (response.status === 404) {
      alert("Data Not Found!");
      window.location.href = "/charts";
    } else if (response.status === 502) {
      alert("Bad Gateway!");
      window.location.href = "/charts";
    } else if (response.status === 204) {
      alert("Undefined Content!");
      window.location.href = "/charts";

    } else if (response.status === 504) {
      alert("Endpoint request Timed out");
      window.location.href = "/charts";
    }
    setData1(json);

  }

  // useEffect(() => {
  //   setIsloading(true)
  //   fetch("https://3wd7itxgcc.execute-api.ap-south-1.amazonaws.com/Prod/v1/sdoz/telemetry/entity/5/latest")
  //     .then((result) => {
  //       result.json().then((res) => {
  //         // let time = [{ lastUpdatedTimeStamp: res.lastUpdatedTimeStamp}];
  //         // setTime(time)
  //         setParam(res.Parameters?.map((item) => item.name));
  //         setValue(res.Parameters?.map((item) => item.value));
  //         setTime(res.lastUpdatedTimeStamp);
  //         setData2(res)

  //       })
  //       setIsloading(false)
  //     })
  //   fetch()
  //   const interval = setInterval(() => fetch(), 10000)

  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);


  useEffect(() => {
    setIsloading(true)
    async function getAlerts() {
      const response = await fetch("https://3wd7itxgcc.execute-api.ap-south-1.amazonaws.com/Prod/v1/sdoz/telemetry/entity/2/latest");
      const res = await response.json();
      setData2(res)
      setParam(res.Parameters?.map((item) => item.name));
      setValue(res.Parameters?.map((item) => item.value));
      setTime(res.lastUpdatedTimeStamp);
      setEntity_name(res.entity_name)
      setEntity_type(res.entity_type)
      setIsloading(false)

    }
    getAlerts()
    const interval = setInterval(() => getAlerts(), 100000)

    return () => {
      clearInterval(interval);
    }
  }, []);

  // console.warn(Data2)
  console.warn(date)
  // console.warn(time)
  // console.warn(param)
  return (
    // <React.Fragment>
    //   <nav className="navbar navbar-expand-lg navbar-light bg-light1">
    //     <Link className="navbar-brand" to="/"></Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link active" aria-current="page" to="/well-info"><h4><b>wellinfo</b></h4></Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link" to="/trend"><h4><b>Monitory</b></h4></Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
    // </React.Fragment>
    <>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab1')} active={iconsActive === 'tab1'}>
            <MDBIcon fas icon='chart-pie' className='me-2' /> Well info
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab2')} active={iconsActive === 'tab2'}>
            <MDBIcon fas icon='chart-line' className='me-2' /> Monitory
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleIconsClick('tab3')} active={iconsActive === 'tab3'}>
            <MDBIcon fas icon='cogs' className='me-2' /> History
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
      <MDBTabsContent>
        <MDBTabsPane show={iconsActive === 'tab1'}>
          <>
            <div className="col-md-12">
              <div className="col-sm-12">
                <div className="padding-10">
                  <div className="col-sm-8">
                    <h5 className="margin-top-0" id="name_head"></h5>
                    <p className="p_address" id="consumerAdd"></p>
                    <h5 className="margin-top-0 det_2">
                      <i className="fa fa-life-bouy" aria-hidden="true"></i>&nbsp;&nbsp;<b>Well No :</b><span id="lblPnlNo">LNC#50</span>
                    </h5>
                    <h5 className="margin-top-0 det_2">
                      <i className="fa fa-dot-circle-o "></i>&nbsp;&nbsp;<b>Well Type :</b>
                      <span id="lblWellType">SRP</span>
                    </h5>
                    <h5 className="margin-top-0 det_2">
                      <i className="fa fa-cubes"></i>&nbsp;&nbsp;<b>Panel Type :</b>&nbsp;
                      <span id="lblPanelId">DOL</span>
                    </h5>
                    <h5 className="margin-top-0 det_2">
                      <i className="fa fa-clock-o"></i>&nbsp;&nbsp;<b>Timer Status :</b>&nbsp;
                      <span id="lblTimerId">Continuous</span>
                    </h5>
                    <h5>
                      <i className="fa fa-list-alt " aria-hidden="true"></i>&nbsp;&nbsp;<b>IMEI No :</b><span id="lblImeiNo">867322033682519</span>
                    </h5>
                    <h5>
                      <i className="fa fa-align-justify"></i>&nbsp;&nbsp;<b>GGS/CTF :</b><span id="lblGGS">Linch GGS</span>
                    </h5>
                    <h5>
                      <i className="fa fa-align-justify"></i>&nbsp;&nbsp;<b>Location :</b><span id="lblLatLng"><b>23.41165293 , 72.3360625</b></span>
                    </h5>
                    <div className="container-fluid">
                      <button type="submit" className="btn btn-outline-primary" data-mdb-ripple-color="dark">&nbsp;&nbsp;Asset Mapping&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="submit" className="btn btn-outline-primary" data-mdb-ripple-color="dark">&nbsp;&nbsp;IMEI Replacement&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="submit" className="btn btn-outline-primary" data-mdb-ripple-color="dark">&nbsp;&nbsp;Set Installation Date&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
                <div className="well padding-10">
                  <div className="container-fluid">
                    <div className="square border border-dark mt-4">
                      <div className="square border border-3 mt-1">
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>AREA</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblArea">Area V</span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Installation Date</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblYearOfInstallation">2021-08-30</span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Electrical Meter Connection No</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblMtrConNo">20808050532</span>
                        </h5>
                      </div>
                    </div>
                    <div className="square border border-dark mt-4">
                      <div className="square border border-3 mt-1">
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>DISTRICT</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblDistrict">Mahesana</span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>VILLAGE</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblvlg">Modhera</span>
                        </h5>
                      </div>
                    </div>
                    <div className="square border border-dark mt-4">
                      <div className="square border border-3 mt-1">
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Transformer Capacity (kVA)</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblTransformerCap"></span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Feeder</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblFeeder">LINCH SURAJ FEEDER</span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Sub Station</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblSubStation">SURAJSS SUBSTATION</span>
                        </h5>
                        <h5 className="margin-top-0 name_head_3">
                          <b><span>Asset</span>
                            <label>
                              :
                            </label></b>
                          <span className="m_span" id="lblAsset">Mehsana</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab2'}>
          <div className="container-fluid">
            <form className="row g-3" >
              <div className="col-sm-3">
                <label className="form-label fw-bold">Area</label>
                <select name="areaname" className="form-select"
                  onChange={(event) => changeParam(event.target.value)}
                  value={currentparameter}   >
                  <option>--All--</option>
                  <option value="Pressure">Area V</option>
                </select>
              </div>
              <div className="col-sm-3">
                <label className="form-label fw-bold">GGS</label>
                <select className="form-select" name="timeinterval"
                  onChange={(event) => changeStepsize(event.target.value)}
                  value={currentstepsize}  >
                  <option value="">--All--</option>
                  <option>Linch GGS</option>
                </select>
              </div>
              <div className="col-sm-3">
                <label className="form-label fw-bold">Well</label>
                <select className="form-select" name="well"
                  onChange={(event) => changeStepsize(event.target.value)}
                  value={currentstepsize}  >
                  <option value="">--Select Well--</option>
                  <option>LNC#107</option>
                  <option>LNC#118</option>
                  <option>LNC#76</option>
                  <option>LNC#190</option>
                  <option>LNC#122</option>
                  <option>LNC#169</option>
                </select>
              </div>
              <div className="col-mt-1">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>


          <div className='mt-1'>
            <div className='container-fluid'>
              <div id="wid-id-1" className="heartbeat">
                <div className="row">
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="glyphicon glyphicon-record txt-color-blue"></i>&nbsp;Entity Name
                        :
                        <span className="pull-right txt-color-blue">
                          <b id="lblsitenm">{entity_name}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="fa fa-pencil txt-color-purple"></i>&nbsp;IMEI No. :
                        <span className="pull-right txt-color-purple">
                          <b id="lblimeino">867322033662990</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="fa fa-sitemap txt-color-greenDark"></i>&nbsp;Device ID:
                        <span className="pull-right txt-color-greenDark">
                          <b id="lbldeviceid">5238519695094180198</b>
                        </span>
                      </div>
                    </div>
                    .
                  </div>
                </div>
                <div className="row">

                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="fa fa-clock-o"></i>&nbsp;Entity Type:
                        <span className="pull-right txt-color-greenDark">
                          <b id="lblRtcTime">{entity_type}</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="fa fa-signal" aria-hidden="true"></i>&nbsp;RSSI:
                        <span className="pull-right txt-color-greenDark">
                          <b id="lblrssi">16</b>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-12 col-sm-6 col-md-4">
                    <div className="well well-sm no-border">
                      <div className="fa-lg">
                        <i className="fa fa-signal" aria-hidden="true"></i>&nbsp;Status:
                        <div className="txt-color-greenDark">
                          {/* <!-- <i className="glyphicon glyphicon-sd-video" aria-hidden="true" id="lblsd"
                                className="txt-color-greenDark" title="SD Card"></i> --> */}
                          <i className="fa fa-file-o" id="lblsim" aria-hidden="true" rel="tooltip" title="" data-original-title="Sim Card"></i>
                          <img src="img/sim1.1.png" className="sim1" rel="tooltip" title="" data-original-title="Current Sim Slot" />
                          <img src="img/sim2.1.png" className="sim2" rel="tooltip" title="" data-original-title="Current Sim Slot" />
                          {/* <!-- <span className="fa-stack sim1" style="text-align: center; font-size: 10px;" rel="tooltip" title="Current Sim Slot">
                                    The icon that will wrap the number
                                    <span className="fa fa-square-o fa-stack-2x"></span>
                                    a strong element with the custom content, in this case a number
                                    <strong className="fa-stack-1x">
                                        1    
                                    </strong>
                                </span> 
                                <span className="fa-stack sim2" style="text-align: center; font-size: 10px;" rel="tooltip" title="Current Sim Slot">
                                    The icon that will wrap the number
                                    <span className="fa fa-square-o fa-stack-2x"></span>
                                    a strong element with the custom content, in this case a number
                                    <strong className="fa-stack-1x">
                                        2    
                                    </strong>
                                </span> --> */}
                          <i className="fa fa-sort-amount-desc" id="lblgprs" aria-hidden="true" rel="tooltip" title="" data-original-title="GPRS"></i>
                          <i className="glyphicon glyphicon-sort" aria-hidden="true" id="lblcon" rel="tooltip" title="" data-original-title="Connection"></i>
                          <i className="fa fa-desktop" aria-hidden="true" id="lblnw" rel="tooltip" title="" data-original-title="Network"></i>
                          <i className="fa fa-compress" rel="tooltip" title="" id="lblP1Fault" data-original-title="EM Port"></i>
                          <i className="fa fa-compress txt-color-red" rel="tooltip" title="" id="lblP2Fault" data-original-title="VFD Port"></i>
                          &nbsp;&nbsp;
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className="col-sm-12 col-md-6 col-lg-5">
                <div className='container-fluid'>
                  <div className="col-sm-12">
                    <div className="headersettings" role="heading">
                      <span className="widget-icon"><i className="fa fa-table"></i></span>
                      <div className="card-header border-0">
                        <h4> Meter </h4>
                      </div>
                      <div className="card">
                        <div id="bg-meter" className="totalEnergy bg-red">
                          <h4 className='text-center'>Last Updated Date and Time</h4>
                          <div className="enery_impirt">
                            <div className="col-md-4 col-xs-4 col-md-offset-4 col-xs-offset-4">
                              <div className="avatar">
                                <div className="border-trans energyReading" id="datetimeMaxMeter">
                                  {isloading && <div><LoadingSpinner /></div>}
                                  {time}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-xs-12">
                            </div>
                          </div>
                        </div>
                        <div className="card-footer-bordered padding-5 ">
                          <div className="row">
                            <div className="col-sm-3 text-center">
                            </div>
                            <div className="col-sm-3 text-center ">
                              <b></b></div>
                            <div className="col-sm-3 text-center">
                              <b></b>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                            </div>
                            <div className="col-sm-3 text-center">
                              <b></b>
                            </div>
                            <div className="col-sm-3 text-center">
                              <b></b>
                            </div>
                            <div className="col-sm-3 text-center">
                              <b></b>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-sm-3 text-center">
                              <div className="well-info">
                                <p className="r-red">{param[0]}</p>
                                <p className="y-green">{param[1]}</p>
                                <p className="b-blue"></p>
                              </div>
                            </div>
                            <div className="col-sm-3 text-center">
                              <div className="well-info">
                                <p id="lblVoltageRValC1069">{param_value[0]}</p>
                                <p id="lblVoltageYValC1069">{param_value[1]}</p>
                                {/* <p id="lblVoltageBValC1069">000.00</p> */}
                              </div>
                            </div>
                            {/* <div className="col-sm-3 text-center">
                            <div className="well-info">
                              <p id="lblCurrentRValC1069">000.00</p>
                              <p id="lblCurrentYValC1069">000.00</p>
                              <p id="lblCurrentBValC1069">000.00</p>
                            </div>
                          </div> */}
                            {/* <div className="col-sm-3 text-center">
                            <div className="well-info">
                              <p id="lblAPowerRValC1069">0.00</p>
                              <p id="lblAPowerYValC1069">0.00</p>
                              <p id="lblAPowerBValC1069">0.00</p>
                            </div>
                          </div> */}
                          </div>
                        </div>
                        {/* <div className="row">
                        <div className="bg-red active_power activepowerPF">
                          <div className="active_power_squre row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                              <p className="pull-left">
                                Total Active Power :&nbsp;&nbsp;
                                <span id="lbltotalActPower_valC1069">0.00&nbsp;
                                  <small>KW</small>
                                </span>
                              </p>
                            </div>
                            <div className="col-sm-6 col-xs-12">
                              <p className="pull-right">Avg. PF:&nbsp;&nbsp;
                                <span id="lblPFAvgvalC1069">0.00</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <Container> */}
              <div className="col-sm-12 col-md-6 col-lg-7">
                <div className="container-fluid">
                  <div className="col-sm-12">
                    <div className="headersettings" role="heading">
                      <span className="widget-icon"><i className="fa fa-table"></i></span>
                      <div className="card-header border-0">
                        <h4> Trend </h4>
                      </div>
                      <form className="row g-3" onSubmit={Submit} >
                        <div className="col-sm-3">
                          <label className="form-label fw-bold">Parameter Name</label>
                          <select name="parametername" className="form-select"
                            onChange={(event) => changeParam(event.target.value)}
                            value={currentparameter}   >
                            <option>--Select Parameter--</option>
                            <option value="Pressure">Pressure</option>
                            <option value="temperature">temperature</option>
                          </select>
                        </div>
                        <div className="col-sm-3">
                          <label className="form-label fw-bold">Time interval</label>
                          <select className="form-select" name="timeinterval"
                            onChange={(event) => changeStepsize(event.target.value)}
                            value={currentstepsize}  >
                            <option value="">--Select Time interval--</option>
                            <option>1</option>
                            <option>5</option>
                            <option>15</option>
                            <option>30</option>
                            <option>45</option>
                            <option>60</option>

                          </select>
                        </div>
                        <div className="col-sm-3">
                          <label className="form-label fw-bold">DateTime</label>
                          <DateRangePicker
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            // selectsrange
                            format="yyyy-MM-dd HH:mm:ss"
                            placeholder="--Select your date range--"
                          />
                        </div>
                        <div className="col-mt-1">
                          <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        <div className="col-sm-3">
                          <button
                            className="btn btn-primary"
                            type="submit"
                            onClick={Enter}
                            color="transparent"
                            target="_blank"
                            download>Export Data
                          </button>
                        </div>
                        {/* <div className="col-sm-3">
                                <CSVLink type="submit" className="btn btn-primary"
                                    headers={headers}
                                    data={data_1}
                                    filename="results.csv"
                                    target="_blank"
                                    download
                                >
                                    Export Data 
                                </CSVLink> 
                            </div> */}
                            {/* <button className="btn btn-primary" onClick={()=>{exportcsv()}}>Export Data</button> */}
                      </form>
                    </div>
                    {
                      entity.map((item) =>
                        <tr>
                          <th> Entity Name: </th>
                          <td className="fw-bold" key={item.entity_name}>{item.entity_name}&nbsp;&nbsp;&nbsp;</td>
                          <th>Entity Type: </th>
                          <td className="fw-bold">{item.entity_type}&nbsp;&nbsp;&nbsp;</td>
                        </tr>
                      )
                    }
                    {/* <div className="card"> */}
                    <div className="card-body">
                      {isLoading && <h1 className="mt-1 mb-3 fw-bold page"><LoadingSpinner /></h1>}
                      <Bar options={options} data={data} />
                    </div>
                  </div>
                  {/* </div> */}
                  {/* <Bar data={data} options={options} /> */}
                </div>
              </div>
            </div>
            {/* </Container > */}
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={iconsActive === 'tab3'}>
          <div className="col-sm-12">
            <div className="container-fluid">
              <div className="headersettings" role="heading">
                <span className="widget-icon"><i className="fa fa-table"></i></span>
                <div className="card-header border-0">
                  <h4> History </h4>
                </div>
                <form className="row g-3" onSubmit={Submit}>
                  <div className="">
                    <label className="form-label fw-bold">Group Name</label>
                    <select name="parametername" className="form-select"
                      onChange={(event) => changeParam(event.target.value)}
                      value={currentparameter}   >
                      <option>--Select Parameter--</option>
                      <option value="Pressure">Pressure</option>
                      <option value="temperature">temperature</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label fw-bold">Time interval</label>
                    <select className="form-select" name="timeinterval"
                      onChange={(event) => changeStepsize(event.target.value)}
                      value={currentstepsize}  >
                      <option value="">--Select Time interval--</option>
                      <option>1</option>
                      <option>5</option>
                      <option>15</option>
                      <option>30</option>
                      <option>45</option>
                      <option>60</option>
                    </select>
                  </div>
                  <div className="col-1">
                    <label className="form-label fw-bold">DateTime</label>
                    <DateRangePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      // selectsrange
                      format="yyyy-MM-dd HH:mm:ss"
                      placeholder="--Select your date range--"
                    />
                  </div>
                  <div className="col-mt-1">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
              {isLoading && <h1 className="mt-1 mb-3 fw-bold page"><LoadingSpinner /></h1>}
            </div>
          </div>
          <>
            <div className='mt-1'>
              <table className="table table-striped table-bordered" >
                <tbody>
                  <tr className='table-dark'>
                    <th>Timestamp</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                  </tr>
                  {
                    Data.map((item) =>
                      <tr>
                        <td>{item.Timestamp}</td>
                        <td>{item.temperature}</td>
                        <td>{item.Pressure}</td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
          </>
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );

};

export default LiveMonitory;
