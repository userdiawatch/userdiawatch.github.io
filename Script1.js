// Фиктивные данные для таблицы лидеров
const leaderboardData = [
  { name: 'User1', score: 100 },
  { name: 'User2', score: 80 },
  { name: 'User3', score: 70 },
  { name: 'User4', score: 60 },
  { name: 'User5', score: 50 }
];

// Функция для обновления таблицы лидеров
function updateLeaderboard() {
  const leaderboardList = document.getElementById('leaderboard-list');

  // Очищаем существующие записи
  leaderboardList.innerHTML = '';

  // Добавляем новые записи
  leaderboardData.forEach((entry, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${index + 1}. ${entry.name} - ${entry.score} points
      ${index + 1 === 1 ? '<img src="gold-cup.png" alt="Gold Cup"> ' : ''}
    `;
    leaderboardList.appendChild(li);
  });
}


// Вызываем функцию для обновления таблицы лидеров
updateLeaderboard();

// Добавляем функцию для форматирования времени в формат HH:MM:SS
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Функция для обновления таймера
function updateTimer() {
  const timerElement = document.getElementById('timer');

  // Пока не дошли до нуля, обновляем таймер
  if (timeRemaining > 0) {
    timerElement.textContent = formatTime(timeRemaining);
    timeRemaining--;
  } else {
    // Когда время вышло, обновляем таймер и сбрасываем timeRemaining
    timeRemaining = initialTime;
  }
}

// Инициализация начального времени (в секундах)
const initialTime = 86399; // 1 час
let timeRemaining = initialTime;

// Устанавливаем интервал обновления таймера (каждую секунду)
setInterval(updateTimer, 1000);

// Обработчик для кнопки "Участвовать"
const joinButton = document.getElementById('join-button');
const overlay = document.querySelector('.overlay');
const joinMenu = document.getElementById('join-menu');
const closeButton = document.getElementById('close-button');

joinButton.addEventListener('click', () => {
  overlay.style.display = 'block';
  joinMenu.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  overlay.style.display = 'none';
  joinMenu.style.display = 'none';
});

// Обработчик нажатия на кнопку "Присоединиться"
document.getElementById('join-submit').addEventListener('click', function () {
  // Получаем значения из полей ввода
  const email = document.getElementById('email').value;
  const nickname = document.getElementById('nickname').value;

  // Регулярное выражение для проверки формата email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Регулярное выражение для проверки формата никнейма
  const nicknamePattern = /^[a-zA-Z0-9_\-]+$/;

  // Проверяем email и никнейм на соответствие формату
  if (!email.match(emailPattern)) {
    alert('Пожалуйста, введите корректный email.');
    return; // Прерываем выполнение функции, если email некорректен
  }

  if (!nickname.match(nicknamePattern)) {
    alert('Пожалуйста, введите корректный никнейм (Допускаются буквы латиницы, цифры, _ , -).');
    return; // Прерываем выполнение функции, если никнейм некорректен
  }  

// Закрываем всплывающее меню
  document.getElementById('join-menu').style.display = 'none';
  
  // Показываем сообщение "Спасибо"
  document.getElementById('thanks-message').style.display = 'block';

  // Открываем оверлей (разрешаем клики)
  document.getElementById('overlay').style.display = 'none';
});
