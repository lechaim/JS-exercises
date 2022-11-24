// var MarkMass = 78
// var MarkHeight = 1.69

// var JohnMass = 92
// var JohnHeight = 1.95

// var MarkBMI = MarkMass / MarkHeight ** 2
// var JohnBMI = JohnMass / JohnHeight ** 2


// let markHigherBMI = MarkBMI > JohnBMI
// console.log(MarkBMI, JohnBMI, markHigherBMI)

// var MarkMass = 95
// var MarkHeight = 1.88

// var JohnMass = 85
// var JohnHeight = 1.76

// var MarkBMI = MarkMass / MarkHeight ** 2
// var JohnBMI = JohnMass / JohnHeight ** 2

// markHigherBMI = MarkBMI > JohnBMI
// console.log(MarkBMI, JohnBMI, markHigherBMI)

let averageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3


let dolphinScore = averageScore(85, 54, 41)
let pandaScore = averageScore(23, 34, 27)

console.log(dolphinScore)
console.log(pandaScore)

function checkWinner(dolphinScore, pandaScore) {
    if (dolphinScore > pandaScore && dolphinScore / pandaScore >= 2) {
        return `Dolphin win ${dolphinScore} vs ${pandaScore}.`
    }

    if (pandaScore > dolphinScore && pandaScore / dolphinScore >= 2) {
        return `Panda win ${pandaScore} vs ${dolphinScore}.`
    }

    return "Draw!"

}

console.log(checkWinner(dolphinScore, pandaScore))