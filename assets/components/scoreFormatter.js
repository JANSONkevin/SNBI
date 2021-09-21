function formatScore(score) {
    let formattedScore = score.toString().split("");
    formattedScore = formattedScore.slice(0, formattedScore.length - 3).join('') + " " + formattedScore.slice(formattedScore.length - 3).join("")
    return formattedScore;
}
export default formatScore;