const restartBtns = document.querySelectorAll('.restart-btn');
restartBtns.forEach(btn => btn.onclick = theSPA.startQuiz.bind(theSPA));

