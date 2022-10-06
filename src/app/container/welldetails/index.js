import { Link } from "react-router-dom";
import { RoutePath } from "../../routes/route-path";

export default function WellDetails() {

    return (
        <>
            <div className="col-md-12">
                <div className="headersettings" role="heading">
                    <span className="widget-icon"><i className="fa fa-table"></i></span>
                    <div className="card-header border-0">
                        <h4> Well Details </h4>
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
            </div>

            <>
                <div className='container-fluid mt-1'>
                    <table className="table table-striped table-bordered" >
                        <tbody>
                            <tr className='table-dark'>
                                {/* <th></th>
                                <th></th> */}
                                <th>Well Opr History</th>
                                <th>Well Sick History</th>
                                <th>Update Well Status</th>
                                <th>IMEI No</th>
                                <th>Area</th>
                                <th>Installation</th>
                                <th>Well No</th>
                                <th>Mode</th>
                                <th>Timer Status</th>
                                <th>Operational Mode</th>
                                <th>Feeder</th>
                                <th>Sub Station</th>
                                <th>SRP SURFACE UNIT</th>
                                <th>PCP DRIVE HEAD</th>
                                <th>Year of Installation of Unit</th>
                                <th>SAP ID</th>
                                <th>Unit Id</th>
                                <th>Panel Id</th>
                                <th>SRP Moter(HP)</th>
                                <th>SRP ELECT. PANNEL TYPE</th>
                                <th>Meter Connection No.</th>
                                <th>Latitude</th>
                                <th>Longitude</th>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>865006041017121</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#140
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Permanent Sick</td>
                                <td className=" text-center1">UMIYAJGY FEEDER</td>
                                <td className=" text-center1">MUDURDASS SUBSTATION</td>
                                <td className=" text-center1">NSE-228</td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1">1995</td>
                                <td className=" text-center1">PA32020038</td>
                                <td className=" text-center1">144-SRP</td>
                                <td className=" text-center1">931</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1">28314101575</td>
                                <td className=" text-center1">23.44444628</td>
                                <td className=" text-center1">72.34913817</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033705435</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#118
                                    </Link>
                                </td>
                                <td className=" text-center1">PCP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Temporary Sick</td>
                                <td className=" text-center1">LINCH SURAJ FEEDER</td>
                                <td className=" text-center1">SURAJSS SUBSTATION</td>
                                <td className=" text-center1">NA</td>
                                <td className=" text-center1">KUDU</td>
                                <td className=" text-center1">2015-2016</td>
                                <td className=" text-center1">22A132730037</td>
                                <td className=" text-center1">27-PCP</td>
                                <td className=" text-center1">39-PCP</td>
                                <td className=" text-center1">30</td>
                                <td className="text-center1 sorting_1">VFD</td>
                                <td className=" text-center1">20814053734</td>
                                <td className=" text-center1">23.40173869</td>
                                <td className=" text-center1">72.31842054</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033673914</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#76
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Flowing</td>
                                <td className=" text-center1">LINCH SURAJ FEEDER</td>
                                <td className=" text-center1">MUDURDASS SUBSTATION</td>
                                <td className=" text-center1">CH-320</td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1">2004</td>
                                <td className=" text-center1">22A132110011</td>
                                <td className=" text-center1">178-SRP</td>
                                <td className=" text-center1">924</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1">20814052274</td>
                                <td className=" text-center1">23.40049369</td>
                                <td className=" text-center1">72.32581946</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033682519</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#50
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Temporary Sick</td>
                                <td className=" text-center1">LINCH SURAJ FEEDER</td>
                                <td className=" text-center1">SURAJSS SUBSTATION	</td>
                                <td className=" text-center1">CH-320</td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1">2004</td>
                                <td className=" text-center1">22A132110013</td>
                                <td className=" text-center1">192-SRP</td>
                                <td className=" text-center1">929</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1">20808050532</td>
                                <td className=" text-center1">23.41165293</td>
                                <td className=" text-center1">72.3360625</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033723339</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#190
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Timer Mode</span></td>
                                <td className=" text-center1">Flowing</td>
                                <td className=" text-center1">DIVYA FEEDER	</td>
                                <td className=" text-center1">MANDALISS SUBSTATION	</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">1056-SRP</td>
                                <td className=" text-center1">1033-SRP</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">23.4308</td>
                                <td className=" text-center1">72.3758</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033662990</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        NDN#162
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Flowing</td>
                                <td className=" text-center1">VADPURA FEEDER</td>
                                <td className=" text-center1">NANDASANSS SUBSTATION</td>
                                <td className=" text-center1">CH-228</td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1">2005</td>
                                <td className=" text-center1">22A132020041</td>
                                <td className=" text-center1">196-SRP</td>
                                <td className=" text-center1">922</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">23.38348992</td>
                                <td className=" text-center1">72.3885975</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>865006041018541</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#122
                                    </Link>
                                </td>
                                <td className=" text-center1">PCP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Flowing</td>
                                <td className=" text-center1">LINCH SURAJ FEEDER</td>
                                <td className=" text-center1">SURAJSS SUBSTATION</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">KUDU</td>
                                <td className=" text-center1">2015-2016</td>
                                <td className=" text-center1">22A132730064</td>
                                <td className=" text-center1">41-PCP</td>
                                <td className=" text-center1">35</td>
                                <td className=" text-center1">15</td>
                                <td className="text-center1 sorting_1">VFD</td>
                                <td className=" text-center1">28314101575</td>
                                <td className=" text-center1">23.40443083	</td>
                                <td className=" text-center1">72.32739066</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>865006041017121</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#76
                                    </Link>
                                </td>
                                <td className=" text-center1">SRP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Permanent Sick</td>
                                <td className=" text-center1">UMIYAJGY FEEDER</td>
                                <td className=" text-center1">MUDURDASS SUBSTATION</td>
                                <td className=" text-center1">NSE-228</td>
                                <td className=" text-center1">ONGC</td>
                                <td className=" text-center1">1995</td>
                                <td className=" text-center1">PA32020038</td>
                                <td className=" text-center1">144-SRP</td>
                                <td className=" text-center1">931</td>
                                <td className=" text-center1">25</td>
                                <td className="text-center1 sorting_1">DOL</td>
                                <td className=" text-center1">28314101575</td>
                                <td className=" text-center1">23.44444628</td>
                                <td className=" text-center1">72.34913817</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td></td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#127
                                    </Link>
                                </td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Permanent Sick</td>
                                <td className=" text-center1">UMIYAJGY FEEDER</td>
                                <td className=" text-center1">MUDURDASS SUBSTATION</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1"></td>
                                <td className="text-center1 sorting_1"></td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">23.44444628</td>
                                <td className=" text-center1">72.34913817</td>
                            </tr>
                            <tr>
                                <td>
                                    <a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips welloperationalhistory" data-toggle="tooltip" data-placement="right">
                                        <i className="fa fa-history" aria-hidden="true"></i>
                                    </a>
                                </td>
                                <td><a attrid="92" data-container="body" data-original-title="Edit" className=" tooltips wellsickhistory" data-toggle="tooltip" data-placement="right"><i className="fa fa-history" aria-hidden="true"></i></a></td>
                                <td></td>
                                <td>867322033731019</td>
                                <td className=" text-center1"><span >Area V</span></td>
                                <td className="text-center1"><span >Linch GGS</span></td>
                                <td>
                                    <Link to={RoutePath.liveMonitory}>
                                        LNC#169
                                    </Link>
                                </td>
                                <td className=" text-center1">PCP</td>
                                <td className=" text-center1"><span>Continuous</span></td>
                                <td className=" text-center1">Flowing</td>
                                <td className=" text-center1">DIVYA FEEDER</td>
                                <td className=" text-center1">MANDALISS SUBSTATION</td>
                                <td className=" text-center1"></td>
                                <td className=" text-center1">KUDU</td>
                                <td className=" text-center1">2015-2016</td>
                                <td className=" text-center1">22A132730162</td>
                                <td className=" text-center1">117-PCP</td>
                                <td className=" text-center1">37-PCP</td>
                                <td className=" text-center1">15</td>
                                <td className="text-center1 sorting_1">VFD</td>
                                <td className=" text-center1">28314101575</td>
                                <td className=" text-center1">23.43087611</td>
                                <td className=" text-center1">72.37583361</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </>
        </>
    );
}