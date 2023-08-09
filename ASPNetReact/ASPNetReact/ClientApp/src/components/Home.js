import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import { HomeHeader } from "./HomeHeader";
import { Link } from 'react-router-dom';

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <HomeHeader h1Name="Trần Thoại Thông" h2Name="Web Developer">
                    <div className="row">
                        <div className="col-sm-6 py-2">
                            <div style={{ fontSize: "45px", textAlign: "left" }}>"</div>
                            <h3 style={{ textIndent: "45px", color: "#6a4928" }}>
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("<strong>I'm </strong>")
                                            .callFunction(() => { })
                                            .pauseFor(550)
                                            .typeString(" Tran Thoai Thong")
                                            .pauseFor(1000)
                                            .deleteChars(17)
                                            .typeString(" a Developer")
                                            .pauseFor(1000)
                                            .deleteChars(12)
                                            .typeString(" a Designer")
                                            .pauseFor(1000)
                                            .start();
                                    }}
                                />
                            </h3>
                            <h3 style={{ textIndent: "45px" }}>My name is Tran Thoai Thong. And I am a developer, worked in web and game companies. If you would want to know me, this page should give you an overview.
                                My contacts is at the bottom bar or you can visit <Link to='contacts'>HERE</Link>.
                            </h3>
                            <div style={{ fontSize: "45px", textAlign: "right" }}>"</div>
                            <Link to="/home#Skills">Skills</Link>, <Link to="/home#Careers">Careers</Link>, <Link to="/home#Education">Education</Link><br/>
                            <Link to="/projects">Project</Link>, <Link to="/projects#Personal">Personal</Link>
                        </div>
                        <div className="col-sm-6">
                            <img className="w-100 h-100" src="Images/avatar2small.jpg" alt="" />
                        </div>
                    </div>
                </HomeHeader>
                <div id="Skills" />
                <HomeHeader h1Name="Skills" imgTint="220">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </HomeHeader>
                <div id="Careers" />
                <HomeHeader h1Name="Careers" imgTint="280">
                    <div id="MOPA" >
                        <h3>MOPA - Project Manager
                            <span style={{ float: "right" }} className="fixed-right">NOVEMBER  2021 - DECEMBER 2022,  DISTRICT 10</span></h3>
                    </div>
                    <p>Project Manager of 2 game projects: <Link to="/projects#FishIO">Fish IO</Link> and <Link to="/projects#BoomerangIO">Boomerang War.IO</Link>.<br />
                        Design, plan the game features and release schedules.<br />
                        Design tracking data structure. Build queries for team common usages.<br />
                        Support developer team on data structures.</p>

                    <div id="Spirit Bomb" >
                        <h3>Spirit Bomb - Unity Developer
                            <span style={{ float: "right" }} className="fixed-right">NOVEMBER  2020 - DECEMBER 2021,  DISTRICT 4</span></h3>
                    </div>
                    <p>Maintain existing mobile games: <Link to="/projects#SkyChamp">Sky Champ</Link> and <Link to="/projects#AtlantisInvaders">Atlantis Invaders</Link>.<br />
                        Build new game prototypes: <Link to="/projects#SpaceGuardians">Space Guardians</Link></p>

                    <div id="Spirit Bomb" >
                        <h3>LEAP VN - Web Developer
                            <span style={{ float: "right" }} className="fixed-right">OCTOBER  2019 - JUNE  2020,  BINH THANH</span></h3>
                    </div>
                    <p>Develop front-end and back-end on an  established web product for human resource management.<br />
                        Spring REST Framework for BackEnd development.<br />
                        Technical analysis, development and code reviewing in several features.<br />
                        Setup integration test and unit test in Oracle SQL.<br />
                        Work with business logic on <a href="https://www.loyco.ch/?lang=en">Loyco</a> products.</p>

                    <div id="Spirit Bomb" >
                        <h3>Gameloft - C++ Developer
                            <span style={{ float: "right" }} className="fixed-right">MAY 2018 - NOVEMBER 2018,  TAN BINH</span></h3>
                    </div>
                    <p>Instant app version of <Link to="/projects#DML">Dragon Mania Legends</Link>.<br />
                        Maintain code and events on the Android version of Dragon Mania Legends.</p>

                </HomeHeader>
                <div id="Education" />
                <HomeHeader h1Name="Education" imgTint="340">
                    <div className="row">
                        <div className="col-sm-8 py-3">
                            <h3 style={{ textIndent: "55px" }}>University of Science</h3>
                            <p>University of Science is a high-ranked university in teaching Computer Science in Vietnam.</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="w-100 h-100" src="Images/UniversityOfScience.png" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8 py-3">
                            <h3 style={{ textIndent: "55px" }}>Le Hong Phong High School for the Gifted</h3>
                            <p>Consolation prize for National excellent student in Computer Science (C++) in 2015.</p>
                        </div>
                        <div className="col-sm-4">
                            <img className="w-100 h-100" src="Images/lehongphong.jpg" alt="" />
                        </div>
                    </div>
                </HomeHeader>
            </div>
        );
    }
}
