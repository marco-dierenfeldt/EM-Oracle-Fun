import React from 'react';

class CrudeOracleComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            goals:this.randomizeGoals()
        }

        this.getWinner.bind(this);
    }
    render() {
        return (
            <div>
                <h2 data-testid="matchHeadline">{this.props.team_1} - {this.props.team_2}</h2>
                <p data-testid="gameResult">{this.props.team_1} - {this.props.team_2} {this.state.goals[0]}:{this.state.goals[1]} <br></br>
                    <span data-testid="winnerProclamation">{this.getWinner()} is the Winner!</span>
                </p>
            </div>
        )
    }

    getWinner() {
        var winner = this.props.team_1;

        if (this.state.goals[1] > this.state.goals[0]) {
            winner = this.props.team_2;
        }

        return winner;
    }

    randomizeGoals() {
        const MAX_GOALS = 7;

        const goals_1 = Math.floor( Math.random() * MAX_GOALS);
        const goals_2 = Math.floor( Math.random() * MAX_GOALS);

        return [goals_1, goals_2];
    }
}

export default CrudeOracleComponent;