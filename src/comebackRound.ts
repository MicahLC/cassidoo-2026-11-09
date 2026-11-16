export function comebackRound(rounds: number[][]): number {
    const firstRound = rounds?.[0];
    if (!rounds || !firstRound || firstRound.length === 0) {
        return -3;
    }
    const scores: number[] = Array(firstRound.length).fill(0);

    let leader = -1;
    let headStartRound = -1;
    rounds.forEach((round, roundIdx) => {
        let roundLeader = -1;
        let roundMax = -1;
        round.forEach((score, scoreIdx) => {
            if (scoreIdx >= 0 && scoreIdx < scores.length) {
                const currentScore = scores[scoreIdx] ?? 0;
                scores[scoreIdx] = currentScore + score;
                if (scores[scoreIdx] > roundMax) {
                    roundMax = scores[scoreIdx];
                    roundLeader = scoreIdx;
                    console.log(`round max is now ${roundMax}, held by ${roundLeader}`);
                }
            }
        });
        // check if there's a tie
        if (scores.filter(v => v === scores[roundLeader]).length > 1) {
            console.log(`there was a tie in round ${roundIdx}`)
            leader = -1;
            headStartRound = -1;
        }
        else if (roundLeader != leader) {
            leader = roundLeader;
            headStartRound = roundIdx;
        }
        console.log(scores, roundLeader, headStartRound);
    });

    /*if (scores.filter(v => v === scores[leader]).length > 1) {
        return -1;
    }*/
    if (headStartRound === -1) {
        return -1;
    }

    return headStartRound + 1;
}