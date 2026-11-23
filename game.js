// 正解の数字(1~100のランダムな整数)を作って変数answerに入れる
// Math.randaom()は 0.0以上1.0未満の小数を返すので、100倍して切り捨てし、+1している
let answer = Math.floor(Math.random() * 100) + 1;

// 何回チャレンジしたかを数える変数(Javaの int attempts = 0; と同じ)
let attemps = 0;

// 「判定する」ボタンが押されたときに実行される関数(Javaのメソッドに相当)
function checkGuess() {
    // HTMLの中から id="gessInput" と id="resultMessage" の部分(要素)を取得する
    const input = document.getElementById("guessInput");
    const message = document.getElementById("resultMessage");
    
    // 入力欄の文字(String)を数値(Number)に変換する(Javaの Integer.parseInt() に近い処理)
    const userGuess = Number(input.value);

    // バリテーション(入力チェック)：空欄だったり、1~100の範囲外なら警告を出して処理を終了(return)
    if (!userGuess || userGuess < 1 || userGuess > 100) {
        message.textContent = "⚠️1~100の数字を入れてください！";
        return;
    }

    // 試行回数を1増やす
    attempts++;

    // 正解・大小の判定(JavaScriptでは厳密な一致を調べるとき === とイコール3つ使うのが基本)
    if (userGuess === answer) {
        // 文字列の中に変数を埋め込むときは、バッククォート(`)で囲んで ${変数名}と書ける
        message.textContent = `🎉正解！ ${attempts}回目で当たりました！`;
    } else if (userGuess < answer) {
        message.textContent = `⬆️ もっと大きい数字です！ (現在 ${attempts}回目)`;
    } else {
        message.textContent = `⬇️ もっと小さい数字です！ (現在 ${attempts}回目)`;
    }
}

// 「リセット」ボタンが押されたときに実行される関数
function resetGame() {
    // 正解の数字を新しく作り直す
    answer = Math.floor(Math.random() * 100) + 1;
    // 試行回数を0に戻す
    attempts = 0;
    // 入力欄の中身を空っぽにする
    document.getElementById("guessInput").value = "";
    // メッセージを初期状態に戻す
    document.getElemantById("resultMessage").textContent = "リセットしました！新しい数字を当ててね";
}