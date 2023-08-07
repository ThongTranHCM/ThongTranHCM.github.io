import React, { Component } from 'react';
import { ProjectTab } from "./ProjectTab";

export class Projects extends Component {
    static displayName = Projects.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <ProjectTab h1Name="Fish IO" imgSource="fishIO.png">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </ProjectTab>

                <ProjectTab h1Name="Boomerang IO" imgSource="boomerangIO.png">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </ProjectTab>

                <ProjectTab h1Name="Atlantis Invaders" imgSource="atlantisInvader.png">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </ProjectTab>

                <ProjectTab h1Name="Space Guardians" imgSource="spaceGuardian.png">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </ProjectTab>

                <ProjectTab h1Name="Sky Champ" imgSource="skyChamp.png">
                    <h2>Programming Languages</h2>
                    <p>4 years experience of C#. 1 and a half  year experience of Backend development. 2 years of experience with SQL.</p>
                    <h2>Web Frameworks</h2>
                    <p>React, ASP.NET, Oracle ADF, Spring Framework</p>
                    <h2>Work Management</h2>
                    <p>Git Control, JIRA, Slack, Confluence</p>
                    <h2>Communication</h2>
                    <p>IELTS 7.0</p>
                </ProjectTab>
            </div>
        );
    }
}
