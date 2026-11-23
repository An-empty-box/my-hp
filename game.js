let answer = Math.floor(Math.random() * 100) + 1;
let attemps = 0;

function checkGuess() {
    const input = document.getElementById("guessInput");
    const message = document.getElementById("resultMessage");
    const userGuess = Number(input.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️1~100の数字を入れてください！";
        return;
    }

    attempts++;

    if (userGuess === answer) {
        message.textContent = `🎉正解！ ${attempts}回目で当たりました！`;
    } else if (userGuess < answer) {
        message.textContent = `⬆️ もっと大きい数字です！ (現在 ${attempts}回目)`;
    } else {
        message.textContent = `⬇️ もっと小さい数字です！ (現在 ${attempts}回目)`;
    }
}

function resetGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = "";
    document.getElemantById("resultMessage").textContent = "リセットしました！新しい数字を当ててね";
}