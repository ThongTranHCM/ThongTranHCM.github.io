import React, { Component } from 'react';
import Typewriter from "typewriter-effect";
import { HomeHeader } from "./HomeHeader";

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <HomeHeader h1Name="Trần Thoại Thông" h2Name="Web Developer">
                    <div class="row">
                        <div class="col-sm-6 py-3">
                            <div style={{ fontSize: "55px", textAlign: "left" }}>"</div>
                            <h3 style={{ textIndent: "55px", color: "#6a4928" }}>
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
                                            .start();
                                    }}
                                />
                            </h3>
                            <h3 style={{ textIndent: "55px" }}>My name is Tran Thoai Thong. And I am a developer, worked in web and game companies. If you would want to know me, this page should give you an overview.
                                My contacts is at the bottom bar or you can visit <a href='contacts'>HERE</a>.
                            </h3>
                            <div style={{ fontSize: "55px", textAlign: "right" }}>"</div>
                        </div>
                        <div class="col-sm-6">
                            <img className="w-100 h-100" src="Images/avatar2.jpg" alt="" />
                        </div>
                    </div>
                </HomeHeader>
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
                <HomeHeader h1Name="Careers" imgTint="280">
                    <h3 style={{ textIndent: "55px" }}>MOPA - Project Manager</h3>
                    <p>NOVEMBER  2021 - DECEMBER 2022,  DISTRICT 10</p>
                    <p>Project Manager of 2 game projects: <a href="https://play.google.com/store/apps/details?id=com.mpt.boomerangwario">Fish IO</a> and <a href="https://play.google.com/store/apps/details?id=com.mpt.boomerangwario">Boomerang War.IO</a>.<br />
                        Design, plan the game features and release schedules.<br />
                        Design tracking data structure. Build queries for team common usages.<br />
                        Support developer team on data structures.</p>

                    <h3 style={{ textIndent: "55px" }}>Spirit Bomb - Unity Developer</h3>
                    <p>NOVEMBER  2020 - DECEMBER 2021,  DISTRICT 4</p>
                    <p>Unity Developer at Spirit Bomb.<br />
                        Maintain existing mobile games: Sky Champ ⇗ and Atlantis Invaders ⇗.<br />
                        Build new game prototypes: Space Guardians ⇗.</p>

                    <h3 style={{ textIndent: "55px" }}>LEAP VN - Web Developer</h3>
                    <p>OCTOBER  2019 - JUNE  2020,  BINH THANH, HCMC</p>
                    <p>Develop front-end and back-end on an  established web product for human resource management.<br />
                        Spring REST Framework for BackEnd development.<br/>
                        Technical analysis, development and code reviewing in several features.<br />
                        Setup integration test and unit test in Oracle SQL.<br />
                        Work with business logic on <a href="https://www.loyco.ch/?lang=en">Loyco</a> products.</p>
                </HomeHeader>
                <HomeHeader h1Name="Education" imgTint="340">

                    <div class="row">
                        <div class="col-sm-8 py-3">
                            <h3 style={{ textIndent: "55px" }}>University of Science</h3>
                            <p>University of Science is a high-ranked university in teaching Computer Science in Vietnam.</p>
                        </div>
                        <div class="col-sm-4">
                            <img className="w-100 h-100" src="Images/UniversityOfScience.png" alt="" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-8 py-3">
                            <h3 style={{ textIndent: "55px" }}>Le Hong Phong High School for the Gifted</h3>
                            <p>Consolation prize for National excellent student in Computer Science (C++) in 2015.</p>
                        </div>
                        <div class="col-sm-4">
                            <img className="w-100 h-100" src="Images/lehongphong.jpg" alt="" />
                        </div>
                    </div>
                </HomeHeader>
            </div>
        );
    }
}
