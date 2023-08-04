import React, { Component } from 'react';
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
                            <h3 style={{ textIndent: "55px" }}>Hi. My name is Tran Thoai Thong. And I am a developer, worked in web and game companies. If you would want to know me, this page should give you an overview.
                                My contacts is at the bottom bar or you can visit HERE.</h3>
                            <div style={{fontSize: "55px", textAlign: "right"}}>"</div>
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
                    <h2>MOPA - Project Manager</h2>
                    <p>NOVEMBER  2021 - DECEMBER 2022,  DISTRICT 10</p>
                    <p>Project Manager of 2 game projects.<br />
                        Fish IO ⇗ and Boomerang War.IO ⇗<br />
                        Design, plan the game features and release schedules.<br />
                        Design tracking data structure. Build queries for team common usages.<br />
                        Support developer team on data structures.</p>

                    <h2>Spirit Bomb - Unity Developer</h2>
                    <p>NOVEMBER  2020 - DECEMBER 2021,  DISTRICT 4</p>
                    <p>Unity Developer at Spirit Bomb.<br/>
                        Maintain existing mobile games: Sky Champ ⇗ and Atlantis Invaders ⇗.<br />
                        Build new game prototypes: Space Guardians ⇗.</p>

                    <h2>LEAP VN / Web Developer</h2>
                    <p>OCTOBER  2019 - JUNE  2020,  BINH THANH, HCMC</p>
                    <p>Develop front-end and back-end on an  established web product for human resource management.<br />
                        Spring REST Framework for BackEnd development.<br />
                        Oracle ADF for front-end development  and connect with Backend.<br />
                        Oracle SQL for database.<br />
                        Technical analysis, development and code reviewing in several features.<br />
                        Setup integration test and unit test in Oracle SQL.<br />
                        Work with business logic on Loyco products.</p>
                </HomeHeader>
                <HomeHeader h1Name="Education" imgTint="340">
                    <div class="row">
                        <div class="col-sm-6">
                            <img className="" src="Images/lehongphong.jpg" alt="" />
                        </div>
                        <div class="col-sm-6 bg-success">
                            This is a home page.
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            aaaaaaaaaaaaaa
                        </div>
                        <div class="col-sm-6">
                            <img className="" src="Images/UniversityOfScience.png" alt="" />
                        </div>
                    </div>
                </HomeHeader>
            </div>
        );
    }
}
