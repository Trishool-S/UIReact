// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/route-path";

export default function WellMonitoring() {

    return (
        <>
            <div className="mt-1">
                <div className="col-md-12">
                    <div className="card-header border-0">
                        <h4> Well Monitoring </h4>
                    </div>
                </div>
                <div className="container-fluid">
                    <form className="row g-3">
                        <div className="col-sm-3">
                            <label className="form-label fw-bold">Asset</label>
                            <select name="assetname" className="form-select"
                            // onChange={(event) => changeParam(event.target.value)}
                            // value={currentparameter}
                            >
                                <option>--Select Asset--</option>
                                <option value="Pressure">Mehsana</option>
                                <option value="Pressure">Selan</option>

                            </select>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label fw-bold">Area</label>
                            <select className="form-select" name="areaname"
                            // onChange={(event) => changeStepsize(event.target.value)}
                            // value={currentstepsize}
                            >
                                <option value="">--All--</option>
                                <option>Area V</option>
                            </select>
                        </div>
                        <div className="col-sm-3">
                            <label className="form-label fw-bold">GGS</label>
                            <select className="form-select" name="ggs"
                            // onChange={(event) => changeStepsize(event.target.value)}
                            // value={currentstepsize}
                            >
                                <option value="">--All--</option>
                                <option>Linch GGS</option>
                            </select>
                        </div>
                        <div className="col-mt-1">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <>
                <div className='container-fluid mt-1'>
                    <table className="table table-striped table-bordered" >
                        <tbody>
                            <tr className='table-dark'>
                                <th>No</th>
                                <th>Area</th>
                                <th>GGS</th>
                                <th>Well No</th>
                                <th>Well Type</th>
                                <th>Panel Type</th>
                                <th>Timer Status</th>
                                <th>Operational Mode</th>
                                <th>Well Operational Status</th>
                                <th>Power Supply</th>
                                <th>Last Updated Time (DD-MM-YYYY hh:mm:ss)</th>
                                <th>Comm.</th>
                                <th>Well Operational Hrs.</th>
                                <th>Electrical Parameter</th>
                                <th>Protection Status</th>
                                <th>VFD Parameter</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#107
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td>
                                    <center>DOL</center>
                                </td>
                                <td>Timer Mode</td>
                                <td>Flowing</td>
                                <td>
                                    <span>OFF</span>
                                </td>
                                <td>
                                    <span >Available</span></td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:45:02</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Poor (16)</span>
                                </td>
                                <td><center>03:57</center></td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>
                                            430.66, <span>430.20</span>
                                            , <span>428.42</span>
                                            <b>V</b> </span>
                                        <span>
                                            <b>Current: </b>
                                            <span>0.00,
                                                <span>0.00,
                                                </span>0.00</span>
                                            <b>A</b>
                                        </span>
                                        <span>
                                            <b>Power: </b>
                                            <span>
                                                0.00</span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.00</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :
                                    <b>OLR</b> :
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Area V</td><td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#118
                                    </Link>
                                </td>
                                <td><center>PCP</center></td>
                                <td><center>VFD</center></td>
                                <td>Continuous</td>
                                <td>Temporary Sick</td>
                                <td>
                                    <span >On</span></td>
                                <td>
                                    <span>Fail</span></td>
                                <td>
                                    <span>07-08-2022</span>
                                    <span>09:27:38</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Poor (15)</span>
                                </td>
                                <td><center>02:56</center>
                                </td>
                                <td>
                                    <span><b>Voltage: </b><span>0.00,
                                        <span>0.00</span>, <span>0.00</span> <b>V</b></span>
                                        <span><b>Current: </b>
                                            <span>0.12, <span>0.12, </span>0.17</span> <b>A</b> </span>
                                        <span><b>Power: </b><span>0.00</span>
                                            <b>KW</b> <span>
                                                <span><b>PF: </b>
                                                </span>
                                                <span>0.00</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :
                                    <b>OLR</b> :
                                    <b>VFD</b> :
                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        0.00&nbsp;<b>V</b>
                                        <span>
                                            <span>
                                                <b>Current: </b>0.00&nbsp;<b>A</b>
                                                <span>
                                                    <span>
                                                        <b>Frequency: </b>0.00&nbsp;<b>Hz</b>
                                                    </span>
                                                    <span><b>Torque: </b>0&nbsp;<b>%</b> </span>
                                                    <span><b>Speed: </b>0&nbsp;<b>RPM</b></span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Area V</td><td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#76
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td>
                                    <center>DOL</center>
                                </td>
                                <td>Continuous</td>
                                <td>Flowing</td>
                                <td>
                                    <span>On</span>
                                </td>
                                <td>
                                    <span>Available</span>
                                </td>
                                <td>
                                    <span>
                                        29-09-2022</span>
                                    <span>11:45:01</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Avg (21)</span>
                                </td>
                                <td><center>09:47</center></td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>425.83,
                                            <span>423.43</span>
                                            , <span>424.67</span>
                                            <b>V</b>
                                        </span>
                                        <span>
                                            <b>Current: </b>
                                            <span>31.84,
                                                <span>31.12,
                                                </span>31.22</span>
                                            <b>A</b> </span>
                                        <span>
                                            <b>Power: </b><span>-0.75</span>
                                            <b>KW</b> <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.08</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :
                                    <b>OLR</b> :
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Area V</td>
                                <td>
                                    Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#50
                                    </Link>
                                </td>
                                <td><center>SRP</center></td>
                                <td><center>DOL</center></td>
                                <td>Continuous</td>
                                <td>Temporary Sick</td><td>
                                    <span >OFF</span>
                                </td>
                                <td>
                                    <span >Fail</span>
                                </td>
                                <td>
                                    <span>10-09-2022</span>
                                    <span>12:09:11</span>
                                </td>
                                <td>
                                    <span>
                                        <b>RSSI</b>:Poor (14)</span>
                                </td>
                                <td>
                                    <center>00:00</center>
                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>0.00, <span>
                                            0.00</span> ,
                                            <span>0.00</span>
                                            <b>V</b>
                                        </span>
                                        <span><b>Current: </b>
                                            <span>0.00, <span>
                                                0.00,
                                            </span>
                                                0.00</span>
                                            <b>A</b>
                                        </span>
                                        <span>
                                            <b>Power: </b>
                                            <span>0.00</span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.00</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :
                                    <b>OLR</b> :
                                </td>
                            </tr>
                            <tr>
                                <td >5</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#190
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td><center>DOL</center></td>
                                <td>Timer Mode</td>
                                <td>Flowing</td>
                                <td><span >On</span></td>
                                <td><span >Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>

                                    <span>11:45:02</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Poor (14)</span>
                                </td>
                                <td><center>07:18</center></td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>429.91,
                                            <span>430.66</span>
                                            , <span>427.57</span>
                                            <b>V</b>
                                        </span>

                                        <span><b>Current: </b>
                                            <span>2.29, <span>4.57, </span>4.02</span>
                                            <b>A</b>
                                        </span>

                                        <span>
                                            <b>Power: </b>
                                            <span>1.15</span>
                                            <b>KW</b>
                                            <span>

                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.99</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b>
                                    :
                                    <b>OLR</b> :
                                </td>
                            </tr>
                            <tr>
                                <td >6</td>
                                <td>
                                    Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        NDN#162
                                    </Link>
                                </td>
                                <td><center>SRP</center></td>
                                <td><center>DOL</center></td>
                                <td>Continuous</td>
                                <td>Flowing</td>
                                <td>
                                    <span >On</span>
                                </td>
                                <td>
                                    <span>Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:45:04</span>
                                </td>
                                <td>
                                    <span>
                                        <b>RSSI</b>:Poor (15)</span>
                                </td>
                                <td>
                                    <center>09:36</center>
                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>425.03,
                                            <span>421.77</span>
                                            ,
                                            <span>421.65</span>
                                            <b>V</b>
                                        </span>
                                        <span><b>Current: </b><span>27.27, <span>28.36, </span>25.66</span>
                                            <b>A</b>
                                        </span>
                                        <span><b>Power: </b><span>6.25</span> <b>KW</b> <span>
                                            <span><b>PF: </b></span>
                                            <span>0.07</span>
                                        </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :

                                    <b>OLR</b> :

                                </td>

                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#122
                                    </Link>
                                </td>
                                <td>
                                    <center>PCP</center>
                                </td>
                                <td><center>VFD</center></td>
                                <td>Timer Mode</td>
                                <td>Flowing</td>
                                <td>
                                    <span>On</span>
                                </td>
                                <td>
                                    <span>Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:05:06</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Avg (19)</span>
                                </td>
                                <td>
                                    <center>11:02</center>
                                </td>
                                <td>
                                    <span><b>Voltage: </b><span>431.98,
                                        <span>432.68</span>
                                        , <span>436.03</span> <b>V</b> </span>
                                        <span>
                                            <b>Current: </b>
                                            <span>4.64, <span>4.80, </span>5.68</span>
                                            <b>A</b>
                                        </span>
                                        <span><b>Power: </b><span>
                                            3.20
                                        </span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.97</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :

                                    <b>OLR</b> :

                                    <b>VFD</b> :

                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>0.00&nbsp;<b>V</b>
                                        <span>
                                            <span>
                                                <b>Current: </b>0.00&nbsp;<b>A</b>
                                                <span>
                                                    <span>
                                                        <b>Frequency: </b>0.00&nbsp;<b>Hz</b>
                                                    </span>
                                                    <span>
                                                        <b>Torque: </b>0&nbsp;<b>%</b>
                                                    </span>
                                                    <span>
                                                        <b>Speed: </b>0&nbsp;<b>RPM</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#127
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td>
                                    <center>VFD</center>
                                </td>
                                <td>Continuous</td>
                                <td>Flowing</td>
                                <td>
                                    <span >On</span>
                                </td>
                                <td>
                                    <span >Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:45:01</span>
                                </td>
                                <td>
                                    <span>
                                        <b>RSSI</b>:Poor (11)</span>
                                </td>
                                <td>
                                    <center>11:44</center>
                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>425.94,
                                            <span>426.46</span>
                                            , <span>424.03</span>
                                            <b>V</b>
                                        </span>
                                        <span>
                                            <b>Current: </b>
                                            <span>3.10,
                                                <span>3.43,
                                                </span>3.27</span>
                                            <b>A</b>
                                        </span>
                                        <span>
                                            <b>Power: </b>
                                            <span>1.21</span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.99</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :

                                    <b>OLR</b> :

                                    <b>VFD</b> :

                                </td>
                                <td>
                                    <span><b>Voltage: </b>118.00&nbsp;
                                        <b>V</b>
                                        <span>
                                            <span>
                                                <b>Current: </b>23.53&nbsp;<b>A</b>
                                                <span>
                                                    <span>
                                                        <b>Frequency: </b>14.42&nbsp;<b>Hz</b>
                                                    </span>
                                                    <span>
                                                        <b>Torque: </b>-41&nbsp;<b>%</b>
                                                    </span>
                                                    <span>
                                                        <b>Speed: </b>30&nbsp;<b>RPM</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td >9</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#151
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td>
                                    <center>VFD</center>
                                </td>
                                <td>Continuous</td>
                                <td>Flowing</td>
                                <td>
                                    <span >On</span>
                                </td>
                                <td>
                                    <span >Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:45:01</span>
                                </td>
                                <td>
                                    <span><b>RSSI</b>:Poor (12)</span>
                                </td>
                                <td>
                                    <center>11:44</center>
                                </td>
                                <td>
                                    <span><b>Voltage: </b><span>
                                        424.48,
                                        <span>423.19</span>
                                        ,
                                        <span>423.81</span>
                                        <b>V</b>
                                    </span>

                                        <span>
                                            <b>Current: </b>
                                            <span>22.17,
                                                <span>21.63,
                                                </span>21.85</span>
                                            <b>A</b>
                                        </span>
                                        <span>
                                            <b>Power: </b>
                                            <span>-4.55</span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>0.37</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :

                                    <b>OLR</b> :

                                    <b>VFD</b> :

                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>0.00&nbsp;<b>V</b>
                                        <span>
                                            <span>
                                                <b>Current: </b>0.00&nbsp;<b>A</b>
                                                <span>
                                                    <span>
                                                        <b>Frequency: </b>0.00&nbsp;<b>Hz</b>
                                                    </span>
                                                    <span>
                                                        <b>Torque: </b>0&nbsp;<b>%</b>
                                                    </span>
                                                    <span>
                                                        <b>Speed: </b>0&nbsp;<b>RPM</b>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <td >10</td>
                                <td>Area V</td>
                                <td>Linch GGS</td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#157
                                    </Link>
                                </td>
                                <td>
                                    <center>SRP</center>
                                </td>
                                <td><center>DOL</center></td>
                                <td>Timer Mode</td>
                                <td>Flowing</td><td>
                                    <span >On</span>
                                </td>
                                <td>
                                    <span >Available</span>
                                </td>
                                <td>
                                    <span>29-09-2022</span>
                                    <span>11:45:01</span>
                                </td>
                                <td>
                                    <span>
                                        <b>RSSI</b>:Poor (13)
                                    </span>
                                </td>
                                <td>
                                    <center>11:43</center>
                                </td>
                                <td>
                                    <span>
                                        <b>Voltage: </b>
                                        <span>431.39,
                                            <span>430.85</span>
                                            , <span>427.52</span>
                                            <b>V</b>
                                        </span>
                                        <span>
                                            <b>Current: </b>
                                            <span>19.88, <span>19.95, </span>20.47</span>
                                            <b>A</b>
                                        </span>
                                        <span>
                                            <b>Power: </b><span>-1.24</span>
                                            <b>KW</b>
                                            <span>
                                                <span>
                                                    <b>PF: </b>
                                                </span>
                                                <span>-0.01</span>
                                            </span>
                                        </span>
                                    </span>
                                </td>
                                <td>
                                    <b>SPP</b> :

                                    <b>OLR</b> :
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
            {/* </div>
            </div> */}
        </>
    );
}