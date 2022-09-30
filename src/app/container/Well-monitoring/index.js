import React, { useEffect, useState } from "react";

export default function WellMonitoring() {

    return (
        <div className="modal-content">
            <div className="modal-header">
                <div className="row">
                    <div className="col-md-10">
                        <h4 className="modal-title" >
                            Well Monitoring</h4>
                    </div>
                    <div className="col-md-2">
                        <button type="button" className="close" data-dismiss="modal" aria-hidden="true">
                        </button>
                    </div>
                    <div className="modal-body" id="tbl_OngcDetailwrapper">
                        <div id="gridDatatable">
                            <div id="tbl_OngcDetail_wrapper" className="dataTables_wrapper form-inline dt-bootstrap no-footer"><div className="dt-toolbar">
                                <div className="col-md-6 col-lg-6 col-xs-12 col-sm-6">
                                    <div className="dataTables_length" id="tbl_OngcDetail_length">
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12">
                                </div>
                                <div className="col-md-6 col-lg-6 hidden-sm hidden-xs">
                                </div>
                                <div id="tbl_OngcDetail_filter" className="dataTables_filter">
                                    <label>
                                        <span className="input-group-addon">
                                            <i className="glyphicon glyphicon-search"></i>
                                        </span>
                                    </label>
                                </div>
                            </div>
                                <div className="dataTables_scroll">
                                    <div className="dataTables_scrollHead" >
                                        <div className="dataTables_scrollHeadInner" >
                                            <table className="table table-striped table-success table-bordered table-responsive no-footer dataTable" role="grid" aria-describedby="tbl_OngcDetail_info">
                                                <thead>
                                                    <tr role="row">
                                                        <th className="sorting_asc" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="No: activate to sort column descending" aria-sort="ascending">No</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Area: activate to sort column ascending">Area</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="GGS: activate to sort column ascending">GGS</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Well No: activate to sort column ascending">Well No</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Well Type: activate to sort column ascending">Well Type</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Panel Type: activate to sort column ascending">Panel Type</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Timer Status: activate to sort column ascending">Timer Status</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Operational Mode: activate to sort column ascending">Operational Mode</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Well Operational Status: activate to sort column ascending">Well Operational Status</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Power Supply: activate to sort column ascending">Power Supply</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Last Updated Time (DD-MM-YYYY hh:mm:ss): activate to sort column ascending">Last Updated Time <span>(DD-MM-YYYY hh:mm:ss)</span></th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Comm.: activate to sort column ascending">Comm.</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Well Operational Hrs.: activate to sort column ascending">Well Operational Hrs.</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Electrical Parameter: activate to sort column ascending">Electrical Parameter</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="Protection Status: activate to sort column ascending">Protection Status</th>
                                                        <th className="sorting" tabindex="0" aria-controls="tbl_OngcDetail" rowspan="1" colspan="1" aria-label="VFD Parameter: activate to sort column ascending">VFD Parameter</th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="dataTables_scrollBody">
                                        <table className="table table-striped table-success table-bordered table-responsive no-footer dataTable" role="grid" aria-describedby="tbl_OngcDetail_info">
                                            <tbody>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">1</td>
                                                    <td>Area V</td><td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=77&quot;)">LNC#107</a></td>
                                                    <td>
                                                        <center>SRP</center>
                                                    </td>
                                                    <td>
                                                        <center>DOL</center>
                                                    </td>
                                                    <td>Timer Mode</td>
                                                    <td>Flowing</td>
                                                    <td>
                                                        <span className="center-block label count" >OFF</span></td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span></td>
                                                    <td>
                                                        <span><a href="javascript:void(0);" rel="tooltip" title="" data-original-title="Communication Status : Live">
                                                            {/* <img src="img/communication-green.png"></a> */}</a>
                                                        </span>
                                                    </td>
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
                                                            <b>Voltage : </b>
                                                            <span>
                                                                430.66, <span>430.20</span>
                                                                , <span>428.42</span>
                                                                <b>V</b> </span>

                                                            <span>
                                                                <b>Current : </b>
                                                                <span>0.00,
                                                                    <span>0.00,
                                                                    </span>0.00</span>
                                                                <b>A</b>
                                                            </span>

                                                            <span>
                                                                <b>Power : </b>
                                                                <span>
                                                                    0.00</span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span>
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.00</span>
                                                                </span>
                                                            </span>

                                                        </span>

                                                    </td>
                                                    <td><b>SPP</b> :<a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                        {/* <img src="img/SppGreen.png" className="protectionimg"> */}

                                                    </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">2</td>
                                                    <td>Area V</td><td>Linch GGS</td>
                                                    <td><a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=79&quot;)">LNC#118</a></td>
                                                    <td><center>PCP</center></td>
                                                    <td><center>VFD</center></td>
                                                    <td>Continuous</td>
                                                    <td>Temporary Sick</td>
                                                    <td>
                                                        <span className="center-block label countcolor" >On</span></td>
                                                    <td>
                                                        <span className="center-block label count" >Fail</span></td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <span>07-08-2022</span>
                                                        <span>09:27:38</span>
                                                    </td>
                                                    <td>
                                                        <span><b>RSSI</b>:Poor (15)</span>
                                                    </td><td><center>02:56</center>
                                                    </td>
                                                    <td>
                                                        <span><b>Voltage : </b><span>0.00,
                                                            <span>0.00</span> , <span>0.00</span> <b>V</b></span>
                                                            <span><b>Current : </b>
                                                                <span>0.12, <span>0.12, </span>0.17</span> <b>A</b> </span>
                                                            <span><b>Power : </b><span>0.00</span>
                                                                <b>KW</b> <span>
                                                                    <span ><b>PF : </b>
                                                                    </span>
                                                                    <span>0.00</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :<a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>OLR</b> :<a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a><b>VFD</b> :<a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="VFD Status: Normal"><i className="fa fa-bug" ></i></a></td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>
                                                            0.00&nbsp;<b>V</b>
                                                            <span>
                                                                <span >
                                                                    <b>Current : </b>0.00&nbsp;<b>A</b>
                                                                    <span>
                                                                        <span >
                                                                            <b>Frequency : </b>0.00&nbsp;<b>Hz</b>

                                                                        </span>
                                                                        <span ><b>Torque : </b>0&nbsp;<b>%</b> </span>
                                                                        <span ><b>Speed : </b>0&nbsp;<b>RPM</b></span></span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">3</td>
                                                    <td>Area V</td><td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=80&quot;)">
                                                            LNC#76</a>
                                                    </td>
                                                    <td>
                                                        <center>SRP</center>
                                                    </td>
                                                    <td><center>DOL</center></td>
                                                    <td>Continuous</td>
                                                    <td>Flowing</td>
                                                    <td>
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td><span >
                                                        29-09-2022</span>

                                                        <span >11:45:01</span>
                                                    </td>
                                                    <td>
                                                        <span><b>RSSI</b>:Avg (21)</span>
                                                    </td>
                                                    <td><center>09:47</center></td>
                                                    <td>
                                                        <span>
                                                            <b>Voltage : </b>
                                                            <span>425.83,
                                                                <span>423.43</span>
                                                                , <span>424.67</span>
                                                                <b>V</b>
                                                            </span>

                                                            <span>
                                                                <b>Current : </b>
                                                                <span>31.84,
                                                                    <span>31.12,
                                                                    </span>31.22</span>
                                                                <b>A</b> </span>
                                                            <span>
                                                                <b>Power : </b><span>-0.75</span>
                                                                <b>KW</b> <span>
                                                                    <span >
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.08</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}

                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="even"><td className="sorting_1">4</td>
                                                    <td>Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=83&quot;)">LNC#50</a>
                                                    </td>
                                                    <td><center>SRP</center></td>
                                                    <td><center>DOL</center></td>
                                                    <td>Continuous</td>
                                                    <td>Temporary Sick</td><td>
                                                        <span className="center-block label count" >OFF</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label count" >Fail</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <span >10-09-2022</span>

                                                        <span >12:09:11</span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <b>RSSI</b>:Poor (14)</span>
                                                    </td>
                                                    <td>
                                                        <center>00:00</center>
                                                    </td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>
                                                            <span>0.00, <span>
                                                                0.00</span> ,
                                                                <span>0.00</span>
                                                                <b>V</b>
                                                            </span>
                                                            <span ><b>Current : </b>
                                                                <span>0.00, <span>
                                                                    0.00,
                                                                </span>
                                                                    0.00</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span >
                                                                <b>Power : </b>
                                                                <span>0.00</span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span >
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.00</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}

                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">5</td>
                                                    <td>Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=87&quot;)">LNC#190</a>
                                                    </td>
                                                    <td>
                                                        <center>SRP</center>
                                                    </td>
                                                    <td><center>DOL</center></td>
                                                    <td>Timer Mode</td>
                                                    <td>Flowing</td>
                                                    <td><span className="center-block label countcolor" >On</span></td>
                                                    <td><span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>
                                                    </td>
                                                    <td>
                                                        <span >29-09-2022</span>

                                                        <span >11:45:02</span>
                                                    </td>
                                                    <td>
                                                        <span><b>RSSI</b>:Poor (14)</span>
                                                    </td>
                                                    <td><center>07:18</center></td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>
                                                            <span>429.91,
                                                                <span>430.66</span>
                                                                , <span>427.57</span>
                                                                <b>V</b>
                                                            </span>

                                                            <span><b>Current : </b>
                                                                <span>2.29, <span>4.57, </span>4.02</span>
                                                                <b>A</b>
                                                            </span>

                                                            <span >
                                                                <b>Power : </b>
                                                                <span>1.15</span>
                                                                <b>KW</b>
                                                                <span>

                                                                    <span >
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.99</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b>
                                                        :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>

                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}

                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="even"><td className="sorting_1">6</td>
                                                    <td>
                                                        Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td><a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=88&quot;)">NDN#162</a></td>
                                                    <td><center>SRP</center></td>
                                                    <td><center>DOL</center></td>
                                                    <td>Continuous</td>
                                                    <td>Flowing</td>
                                                    <td>
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <span >29-09-2022</span>
                                                        <span >11:45:04</span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <b>RSSI</b>:Poor (15)</span>
                                                    </td>
                                                    <td>
                                                        <center>09:36</center>
                                                    </td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>
                                                            <span>425.03,
                                                                <span>421.77</span>
                                                                ,
                                                                <span>421.65</span>
                                                                <b>V</b>
                                                            </span>
                                                            <span ><b>Current : </b><span>27.27, <span>28.36, </span>25.66</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span ><b>Power : </b><span>6.25</span> <b>KW</b> <span>
                                                                <span ><b>PF : </b></span>
                                                                <span>0.07</span>
                                                            </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd"><td className="sorting_1">7</td>
                                                    <td>Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=90&quot;)">LNC#122</a>
                                                    </td>
                                                    <td>
                                                        <center>PCP</center>
                                                    </td>
                                                    <td><center>VFD</center></td>
                                                    <td>Timer Mode</td>
                                                    <td>Flowing</td>
                                                    <td>
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <span >29-09-2022</span>
                                                        <span >11:05:06</span>
                                                    </td>
                                                    <td>
                                                        <span><b>RSSI</b>:Avg (19)</span>
                                                    </td>
                                                    <td>
                                                        <center>11:02</center>
                                                    </td>
                                                    <td>
                                                        <span ><b>Voltage : </b><span>431.98,
                                                            <span>432.68</span>
                                                            , <span>436.03</span> <b>V</b> </span>
                                                            <span >
                                                                <b>Current : </b>
                                                                <span>4.64, <span>4.80, </span>5.68</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span ><b>Power : </b><span>
                                                                3.20
                                                            </span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span >
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.97</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>VFD</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="VFD Status: Normal">
                                                            <i className="fa fa-bug" ></i>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>0.00&nbsp;<b>V</b>
                                                            <span>
                                                                <span >
                                                                    <b>Current : </b>0.00&nbsp;<b>A</b>
                                                                    <span>
                                                                        <span >
                                                                            <b>Frequency : </b>0.00&nbsp;<b>Hz</b>
                                                                        </span>
                                                                        <span >
                                                                            <b>Torque : </b>0&nbsp;<b>%</b>
                                                                        </span>
                                                                        <span >
                                                                            <b>Speed : </b>0&nbsp;<b>RPM</b>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">8</td>
                                                    <td>Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=100&quot;)">LNC#127</a>
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
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor">Available</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <span >29-09-2022</span>
                                                        <span >11:45:01</span>
                                                    </td>
                                                    <td>
                                                        <span>
                                                            <b>RSSI</b>:Poor (11)</span>
                                                    </td>
                                                    <td>
                                                        <center>11:44</center>
                                                    </td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>
                                                            <span>425.94,
                                                                <span>426.46</span>
                                                                , <span>424.03</span>
                                                                <b>V</b>
                                                            </span>
                                                            <span >
                                                                <b>Current : </b>
                                                                <span>3.10,
                                                                    <span>3.43,
                                                                    </span>3.27</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span >
                                                                <b>Power : </b>
                                                                <span>1.21</span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span >
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.99</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}

                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}

                                                        </a>
                                                        <b>VFD</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="VFD Status: Normal">
                                                            <i className="fa fa-bug" ></i>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span ><b>Voltage : </b>118.00&nbsp;
                                                            <b>V</b>
                                                            <span>
                                                                <span >
                                                                    <b>Current : </b>23.53&nbsp;<b>A</b>
                                                                    <span>
                                                                        <span >
                                                                            <b>Frequency : </b>14.42&nbsp;<b>Hz</b>
                                                                        </span>
                                                                        <span ><b>Torque : </b>-41&nbsp;<b>%</b>
                                                                        </span>
                                                                        <span ><b>Speed : </b>30&nbsp;<b>RPM</b>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="odd">
                                                    <td className="sorting_1">9</td>
                                                    <td>Area V</td>
                                                    <td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=106&quot;)">LNC#151</a>
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
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>

                                                    </td>
                                                    <td>
                                                        <span >29-09-2022</span>
                                                        <span >11:45:01</span>
                                                    </td>
                                                    <td>
                                                        <span><b>RSSI</b>:Poor (12)</span>
                                                    </td>
                                                    <td>
                                                        <center>11:44</center>
                                                    </td>
                                                    <td>
                                                        <span ><b>Voltage : </b><span>
                                                            424.48,
                                                            <span>423.19</span>
                                                            ,
                                                            <span>423.81</span>
                                                            <b>V</b>
                                                        </span>

                                                            <span >
                                                                <b>Current : </b>
                                                                <span>22.17,
                                                                    <span>21.63,
                                                                    </span>21.85</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span >
                                                                <b>Power : </b>
                                                                <span>-4.55</span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span>
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>0.37</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>OLR</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                            {/* <img src="img/crane-green.png" className="protectionimg"> */}
                                                        </a>
                                                        <b>VFD</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="VFD Status: Normal">
                                                            <i className="fa fa-bug" >
                                                            </i>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <span >
                                                            <b>Voltage : </b>0.00&nbsp;<b>V</b>
                                                            <span>
                                                                <span >
                                                                    <b>Current : </b>0.00&nbsp;<b>A</b>
                                                                    <span>
                                                                        <span >
                                                                            <b>Frequency : </b>0.00&nbsp;<b>Hz</b>
                                                                        </span>
                                                                        <span >
                                                                            <b>Torque : </b>0&nbsp;<b>%</b>
                                                                        </span>
                                                                        <span >
                                                                            <b>Speed : </b>0&nbsp;<b>RPM</b>
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr role="row" className="even">
                                                    <td className="sorting_1">10</td>
                                                    <td>Area V</td><td>Linch GGS</td>
                                                    <td>
                                                        <a onclick="window.open(&quot;https://ongcwms.hkapl.in/index.html#ajax/ongc-monitoring.html?qscsno=111&quot;)">LNC#157</a>
                                                    </td>
                                                    <td>
                                                        <center>SRP</center>
                                                    </td>
                                                    <td><center>DOL</center></td>
                                                    <td>Timer Mode</td>
                                                    <td>Flowing</td><td>
                                                        <span className="center-block label countcolor" >On</span>
                                                    </td>
                                                    <td>
                                                        <span className="center-block label countcolor" >Available</span>
                                                    </td>
                                                    <td>

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
                                                            <b>Voltage : </b>
                                                            <span>431.39,
                                                                <span>430.85</span>
                                                                , <span>427.52</span>
                                                                <b>V</b>
                                                            </span>
                                                            <span>
                                                                <b>Current : </b>
                                                                <span>19.88, <span>19.95, </span>20.47</span>
                                                                <b>A</b>
                                                            </span>
                                                            <span>
                                                                <b>Power : </b><span>-1.24</span>
                                                                <b>KW</b>
                                                                <span>
                                                                    <span>
                                                                        <b>PF : </b>
                                                                    </span>
                                                                    <span>-0.01</span>
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </td>
                                                    <td>
                                                        <b>SPP</b> :
                                                        <a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="SPP Status: Normal">
                                                            {/* <img src="img/SppGreen.png" className="protectionimg"> */}

                                                        </a>
                                                        <b>OLR</b> :<a className="wellstatusimg" href="javascript:void(0);" rel="tooltip" title="" data-original-title="OLR Status: Normal">
                                                        </a>
                                                    </td>
                                                    <td>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="dt-toolbar-footer">
                                    <div className="col-sm-6 col-xs-12">
                                        <div className="dataTables_paginate paging_simple_numbers" id="tbl_OngcDetail_paginate">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}