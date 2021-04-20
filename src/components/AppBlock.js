import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './AppBlock.css'



class AppBlock extends Component {

    render() {
        const table =(this.props.stats || []).map((data, index) => {
            return (
                <tr key={data.date}>
                    <td>{data.date}</td>
                    <td>{data.revenue}</td>
                    <td>{data.adRequest}</td>
                    <td>{data.adResponse}</td>
                    <td>{data.impressions}</td>
                    <td>{data.clicks}</td>
                    <td>{((data.impressions / data.adResponse) * 100).toPrecision(4)}%</td>
                </tr>
            );
            })
        

        return (
            <React.Fragment>
                <nav className="navbar ">
                    <div className="container-fluid">
                        <div className="title h5 m-3">ADSOUL</div>
                    </div>
                </nav>

                {
                    this.props.isAppsLoading || typeof(this.props.apps)=='undefined' ? <p>Loading...</p>: 
                
                <div className="container-fluid">
                    <div className="row my-4">
                        <div className="col-1 d-flex justify-content-center my-auto">
                            <Link to="/Home"><i className="fa fa-arrow-left fa-lg float-left text-muted"></i></Link>

                        </div>
                        <div className="col-11 d-flex flex-row">
                            <div className="col-1 ">
                                <div className="tile rounded"></div>
                            </div>
                            <div>
                            <h2 className="card-title">{this.props.apps.appName}</h2>
                            <h4 className="card-subtitle mb-2 text-muted">{this.props.apps.publisherName}</h4>
                            </div>
                        </div>
                    </div>

                    <div className="row d-flex justify-content-center">
                        <div className="col-md-11 col-sm-10">
                            <table class="table table-borderless">
                                <thead className="">
                                    <tr>
                                        <th scope="col">Date</th>
                                        <th scope="col">Revenue</th>
                                        <th scope="col">Ad Request</th>
                                        <th scope="col">Ad Responses</th>
                                        <th scope="col">Impressions</th>
                                        <th scope="col">Clicks</th>
                                        <th scope="col">Render Rate</th>
                                    </tr>
                                </thead>
                                <tbody className="">
                                     {!this.props.isAppsLoading && !this.props.isStatsLoading ?null:<p>Loading...</p>}
                                     {!this.props.apps!=null && this.props.stats!=null ?table:null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
    }
            </React.Fragment>
        );

    }
}

export default AppBlock