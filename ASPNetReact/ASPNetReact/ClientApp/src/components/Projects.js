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
                <div style={{ backgroundColor: "#e4d7bd" }}>
                    <div id="Top" className="align-middle text-center" style={{ paddingBlock: "8em" }}>
                        <h1>PROJECTS</h1>
                        <a href="projects#Personal">Personal</a>
                    </div>
                    <ProjectTab h3Name="Fish IO" imgSource="fishIO.png" googleplayurl="https://play.google.com/store/apps/details?id=com.mpt.narwhal">
                        One of the success title that startup MOPA team. An IO game where players control fishes with swords. Goal of the game is too survive while kill othe player fishes and giant bosses.
                    </ProjectTab>

                    <ProjectTab h3Name="Boomerang IO" imgSource="boomerangIO.png" googleplayurl="https://play.google.com/store/apps/details?id=com.mpt.boomerangwario">
                        A successor of FISH IO, but as an experiment with 3D visuals. It has interesting gameplay but did not have potential to grow.
                    </ProjectTab>

                    <ProjectTab h3Name="Atlantis Invaders" imgSource="atlantisInvader.png" googleplayurl="https://play.google.com/store/apps/details?id=atlantis.invaders.subnautica.space.shooter">
                        A successor of Sky Champ. With a much more in-depth meta games, introducing swap ship mechanics. It became a stable-income for Spirit Bomb.
                    </ProjectTab>

                    <ProjectTab h3Name="Space Guardians" imgSource="spaceGuardian.png" googleplayurl="https://play.google.com/store/apps/details?id=galaxy.shooters.space.guardians">
                        One spin off of Sky Champ with a more cartoon look of the monsters and a space theme.
                    </ProjectTab>

                    <ProjectTab h3Name="Sky Champ" imgSource="skyChamp.png" googleplayurl="https://play.google.com/store/apps/details?id=co.spiritbomb.skychamp">
                        Sky Champ is a shoot em up game. It is one of the original successful title of Spirit Bomb.
                    </ProjectTab>

                    <ProjectTab h3Name="LOYCO Human Resources" imgSource="loyco.png">
                        Handling business logics and data generation/manipulation around Human Resources, day off and salary.
                    </ProjectTab>

                    <ProjectTab h3Name="LOYCO Insurances" imgSource="loyco.png">
                        Handling business logics and data generation/manipulation around Insurances, including humans and vehicles.
                    </ProjectTab>

                    <ProjectTab h3Name="Dragon Mania Legends" imgSource="dragonManiaLegends.png" googleplayurl="https://play.google.com/store/apps/details?id=com.gameloft.android.ANMP.GloftDOHM">
                        Dragon mania legends is a town building merged with hero collecting RPG. You hatch, grow and breed dragons, and take them into battles.
                    </ProjectTab>

                    <div id="Personal" className="align-middle text-center" style={{ paddingBlock: "8em" }}>
                        <h1>PERSONAL PROJECTS</h1>
                    </div>

                    <ProjectTab h3Name="Untitled Shoot Em Up" imgSource="untitledShootEmUp.png" githuburl="https://github.com/ThongTranHCM/ShipShooter">
                        A Shoot Em Up inspired project with a lot of powerups.
                    </ProjectTab>

                    <ProjectTab h3Name="Untitled Puzzle Game" imgSource="untitledPuzzleGame.png" githuburl="https://github.com/ThongTranHCM/TileLayingGame">
                        A Puzzle game, target for PC platform. It started as a simulation for a board game. But later I design its own game design and multiple game modes.
                    </ProjectTab>
                </div>
            </div>
        );
    }
}
