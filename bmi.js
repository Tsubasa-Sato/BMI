(function(){
    'use strict';

    var weightForm = document.getElementById('weight');
    var toldForm = document.getElementById('told');
    var btn = document.getElementById('btn');
    var resultArea = document.getElementById('result');

    weightForm.onclick = function(){
        this.select();
    };
    toldForm.onclick = function() {
        this.select();
    };

    btn.onclick = function() {
        var weight = parseFloat(weightForm.value);
        var told = parseFloat(toldForm.value);

        if (weight.length === 0) {
            return;
        }
        if (told.length === 0) {
            return;
        }

        var answer = weight / (told*told);
        answer = (answer * 10000);
        answer = Math.floor(answer * 100)/100;

        if (weight > 0 && told > 0){

        if(answer < 18.5) {
            resultArea.innerHTML = (answer + ': 低体重です。');
        } else if((18.5 <= answer) && (answer < 25)) {
            resultArea.innerHTML = (answer + ': 普通体重です。');
        } else if((25 <= answer) && (answer < 30)){
            resultArea.innerHTML = (answer + ': 肥満（1度）です。');
        } else if ((30 <= answer) && (answer < 35)) {
            resultArea.innerHTML = (answer + ': 肥満（2度）です。');
        } else if ((35 <= answer) && (answer < 40)) {
            resultArea.innerHTML = (answer + ': 肥満（3度）です。');
        } else if (answer >= 40) {
            result.innerHTML = (answer + ': 肥満（4度）です。');
        }
        } else {
            result.innerHTML = ('入力内容に誤りがあります。もう一度入力してください。');
        }
    };

})();
