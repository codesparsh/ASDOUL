import React, { Component } from 'react';
import './Home.css'
import asset1 from '../assets/asset1.svg';
import icon1 from '../assets/icon1.svg';
import icon2 from '../assets/icon2.svg';
import icon3 from '../assets/icon3.svg';
import icon4 from '../assets/icon4.svg';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)

        console.log(this.props);
    }

    render() {


        console.log(this.props);
        const item = (this.props.apps || []).map((app) => {
            const appStat = (this.props.stats[app.id] || []).reduce((acc, stat) => {
                for (const [freatureName, featureCount] of Object.entries(stat)) {
                    if (!acc[freatureName]) {
                        acc[freatureName] = 0;
                    }
                    acc[freatureName] += featureCount;
                }

                return acc;
            }, {});

            const millions = (num=0)=>{
                if(num.toString().length > 6) return (num.toString().substr(0,num.toString().length-6)+"M") 
                else return num.toString();
            }
            return (
                <li key={app.id} className="col-10 card mt-5">
                    <div className="card-body">
                        <div className="row my-4">
                            <div className="col-2 tiles py-4 rounded">

                            </div>
                            <div className="col-10">
                                <Link to={`/apps/${app.id}`}><i className="fa fa-arrow-right fa-lg float-right text-muted"></i></Link>
                                <h5 className="card-title">{app.appName}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{app.publisherName}</h6>
                            </div>
                        </div>

                        <div className="row d-flex justify-content-start">
                            <div className="col mx-3">
                                <div className="row d-flex flex-column">
                                    <p className="my-0 mx-auto" >Revenue</p>
                                    <h2 className="my-0 mx-auto" >${appStat.revenue}</h2>
                                </div>
                            </div>
                            <div className="col mx-3">
                                <div className="row d-flex flex-column">
                                    <p className="my-0 mx-auto" >Ad Requests</p>
                                    <h2 className="my-0 mx-auto" >{millions(appStat.adRequest)}</h2>
                                </div>
                            </div>
                            <div className="col mx-3">
                                <div className="row d-flex flex-column">
                                    <p className="my-0 mx-auto" >Ad Response</p>
                                    <h2 className="my-0 mx-auto" >{millions(appStat.adResponse)}</h2>
                                </div>
                            </div>
                            <div className="col mx-3">
                                <div className="row d-flex flex-column">
                                    <p className="my-0 mx-auto" >Impressions</p>
                                    <h2 className="my-0 mx-auto" >{millions(appStat.impressions)}</h2>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
            );
        })

        return (
            <div className="row">
                <div className="left-side col-lg-6 fixed-top">
                    <div className="row">
                        <div className="up col-12">
                            <div className="row">
                                <div className="col-10 offset-1 my-4">
                                    <h2>ADSOUL</h2>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center my-4">
                                <div className="col-5">
                                    <img className="img-box img-fluid" src={asset1} alt="" />
                                </div>
                            </div>

                        </div>

                        <div className="down col-12">
                            <div className="row">
                                <div className="col-10 offset-1 my-5">
                                    <h1>Revenue Optimization</h1>
                                </div>

                            </div>

                            <div className="row d-flex flex-column">
                                <div className="col-9 offset-1 d-flex justify-content-between">
                                    <div className="features col-4">
                                        <img className="img-fluid" src={icon1} alt="" />
                                        <h6 className="mt-3">Fill Rate</h6>
                                    </div>

                                    <div className="features col-4">
                                        <img className="img-fluid" src={icon2} alt="" />
                                        <h6 className="mt-3">Improve CTR</h6>
                                    </div>
                                </div>


                                <div className="col-9 offset-1 d-flex justify-content-between mt-5">
                                    <div className="features col-4">
                                        <img className="img-fluid" src={icon3} alt="" />
                                        <h6 className="my-3">Refresh Rate</h6>
                                    </div>

                                    <div className="features col-4">
                                        <img className="img-fluid" src={icon4} alt="" />
                                        <h6 className="my-3">Quick Integration</h6>
                                    </div>
                                </div>
                            </div>

                            <div className="row">

                            </div>
                        </div>
                    </div>
                </div>

                <div className="right-side col-md-6 bg-light">
                    <div className="nav bg-white">
                        <div className="row d-flex align-items-end">
                            <div className="col-10 offset-2">
                                <h1>Apps</h1>
                            </div>
                        </div>
                    </div>

                    <ul className="row d-flex justify-content-center p-0">
                        {!this.props.isAppsLoading && !this.props.isStatsLoading ? null : <p>Loading...</p>}
                        {!this.props.apps != null && this.props.stats != null ? item : null}
                    </ul>
                </div>
            </div>
        );
    };
}

export default Home