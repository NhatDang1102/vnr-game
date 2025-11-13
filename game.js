// Questions Data
const questions = [
  {
    "question": "Đại hội VI (1986) mở ra đường lối gì cho đất nước?",
    "options": [
      "Đường lối bảo thủ kinh tế",
      "Đường lối đổi mới toàn diện",
      "Đường lối chiến tranh",
      "Đường lối tự cung tự cấp"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Nguyên nhân chính dẫn đến công cuộc đổi mới năm 1986 là gì?",
    "options": [
      "Ảnh hưởng của chiến tranh lạnh",
      "Do khủng hoảng kinh tế kéo dài",
      "Do yêu cầu hội nhập quốc tế",
      "Do tăng trưởng cao"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Kinh tế Việt Nam sau đổi mới phát triển theo mô hình nào?",
    "options": [
      "Kinh tế kế hoạch hóa tập trung",
      "Kinh tế thị trường tự do",
      "Kinh tế thị trường định hướng XHCN",
      "Kinh tế hỗn hợp"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Thành tựu nổi bật của thời kỳ 1986–1996 là gì?",
    "options": [
      "Chiến thắng chiến tranh biên giới",
      "Thoát khỏi khủng hoảng kinh tế – xã hội",
      "Gia nhập WTO",
      "Phát triển hạt nhân"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Trong thời kỳ đổi mới, yếu tố được coi là trung tâm phát triển là gì?",
    "options": [
      "Khoa học công nghệ",
      "Con người",
      "Kinh tế",
      "Chính trị"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Đại hội VI được xem là dấu mốc gì trong lịch sử Đảng?",
    "options": [
      "Kết thúc thời kỳ chiến tranh",
      "Mở đầu thời kỳ đổi mới",
      "Bắt đầu thời kỳ hội nhập",
      "Chuyển đổi thể chế"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Giai đoạn 1986–1996 đạt được thành tựu gì nổi bật?",
    "options": [
      "Tăng trưởng kinh tế cao, ổn định xã hội",
      "Bị khủng hoảng tài chính",
      "Tăng nợ công",
      "Lạm phát tăng mạnh"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Công nghiệp hóa, hiện đại hóa bắt đầu được nhấn mạnh từ khi nào?",
    "options": [
      "Sau 1975",
      "Từ Đại hội VII",
      "Từ Đại hội VIII",
      "Sau năm 2000"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Tư duy đổi mới của Đảng chủ yếu tập trung vào lĩnh vực nào đầu tiên?",
    "options": [
      "Văn hóa",
      "Giáo dục",
      "Kinh tế",
      "Chính trị"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Hội nhập quốc tế trong đổi mới nhằm mục tiêu gì?",
    "options": [
      "Cạnh tranh quân sự",
      "Phát triển kinh tế, nâng vị thế đất nước",
      "Giảm dân số",
      "Phát triển du lịch"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Đặc trưng nổi bật của nền kinh tế thị trường định hướng XHCN là gì?",
    "options": [
      "Có sự quản lý của Nhà nước và vai trò chủ đạo của DNNN",
      "Cạnh tranh tự do không giới hạn",
      "Nhà nước không can thiệp",
      "Tư nhân chiếm lĩnh toàn bộ nền kinh tế"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Bài học lớn nhất Đảng rút ra từ công cuộc đổi mới là gì?",
    "options": [
      "Dựa vào vốn nước ngoài",
      "Kiên định mục tiêu độc lập dân tộc và CNXH",
      "Ưu tiên xuất khẩu",
      "Cải cách hành chính"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Giai đoạn 1996 đến nay tập trung vào nhiệm vụ nào?",
    "options": [
      "Ổn định chính trị",
      "Xóa đói giảm nghèo",
      "Đẩy mạnh CNH, HĐH và hội nhập quốc tế",
      "Bảo vệ biên giới"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Hạn chế chủ yếu trong thời kỳ đổi mới là gì?",
    "options": [
      "Không có tăng trưởng",
      "Tăng trưởng chưa bền vững, tham nhũng",
      "Thiếu nhân lực",
      "Mất ổn định xã hội"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Bản chất của đổi mới là gì?",
    "options": [
      "Thay đổi mục tiêu CNXH",
      "Đổi mới toàn diện nhưng giữ vững mục tiêu CNXH",
      "Từ bỏ mô hình XHCN",
      "Chỉ đổi mới kinh tế"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Vì sao Đảng xác định 'lấy con người làm trung tâm phát triển'?",
    "options": [
      "Vì con người là nguồn lực quan trọng nhất",
      "Vì phù hợp xu thế toàn cầu hóa",
      "Do yêu cầu CNH-HĐH",
      "Vì chính trị ổn định"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Sự kết hợp sức mạnh dân tộc và sức mạnh thời đại thể hiện điều gì?",
    "options": [
      "Hội nhập quốc tế trên nền tảng độc lập dân tộc",
      "Phụ thuộc vào nước ngoài",
      "Mở cửa toàn diện",
      "Không hội nhập"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Chủ trương hội nhập quốc tế toàn diện được thông qua tại Đại hội nào?",
    "options": [
      "VII",
      "IX",
      "X",
      "XI"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Vì sao nền kinh tế thị trường định hướng XHCN là mô hình phù hợp với Việt Nam?",
    "options": [
      "Kết hợp phát triển và công bằng xã hội",
      "Cho phép tư nhân chiếm lĩnh",
      "Theo hướng tư bản chủ nghĩa",
      "Không cần vai trò nhà nước"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Trong công cuộc đổi mới, yếu tố nào giúp Việt Nam vượt qua khủng hoảng?",
    "options": [
      "Chính sách đổi mới tư duy kinh tế",
      "Tăng cường nhập khẩu",
      "Cắt giảm đầu tư công",
      "Tăng thuế xuất"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Đại hội XIII diễn ra năm nào?",
    "options": [
      "2021",
      "2011",
      "2025",
      "2016"
    ],
    "correctAnswer": 0
  },
  {
    "question": "Tầm nhìn đến 2045 của Đại hội XIII là?",
    "options": [
      "Tăng dân số",
      "Nước phát triển, phồn vinh, hạnh phúc",
      "Quốc phòng mạnh",
      "Nông nghiệp hiện đại"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Một trong ba đột phá chiến lược của Đại hội XIII là?",
    "options": [
      "Tăng thuế",
      "Giảm chi tiêu",
      "Hoàn thiện thể chế phát triển",
      "Dừng hội nhập"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Thanh niên được xác định là lực lượng gì?",
    "options": [
      "Dự bị",
      "Phụ",
      "Rường cột nước nhà",
      "Không quan trọng"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Giải pháp giúp thanh niên nâng cao nhận thức là?",
    "options": [
      "Giảm hoạt động đoàn",
      "Đổi mới giáo dục lý tưởng",
      "Không tuyên truyền",
      "Tập trung giải trí"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Quan điểm chỉ đạo của Đại hội XIII là?",
    "options": [
      "Chuyển sang tư bản",
      "Phụ thuộc nước ngoài",
      "Kiên định CN Mác–Lênin, tư tưởng Hồ Chí Minh",
      "Tập trung quân sự"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Đột phá nhân lực trong Đại hội XIII là?",
    "options": [
      "Giảm nhân lực",
      "Nâng cao chất lượng, gắn với KH-CN",
      "Tự phát triển",
      "Lao động phổ thông"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Hạ tầng ưu tiên xây dựng là?",
    "options": [
      "Nhà ở xã hội",
      "Du lịch",
      "Thông tin, viễn thông, thích ứng BĐKH",
      "Giao thông nông thôn"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Trách nhiệm của thanh niên là?",
    "options": [
      "Tránh chính trị",
      "Học tập, lao động sáng tạo, làm chủ KH-CN",
      "Giải trí",
      "Học lý thuyết"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Phương thức tuyên truyền mới cho thanh niên là?",
    "options": [
      "Họp trực tiếp",
      "Internet, mạng xã hội",
      "Không tuyên truyền",
      "Thư tay"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Ba đột phá chiến lược của Đại hội XIII gồm?",
    "options": [
      "Giáo dục – y tế – quốc phòng",
      "Thể chế – nhân lực – hạ tầng",
      "Văn hóa – dân số – du lịch",
      "Chính trị – kinh tế – xã hội"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Mục tiêu chiến lược Đại hội XIII đặt ra đến giữa thế kỷ XXI là?",
    "options": [
      "Cường quốc quân sự",
      "Khu du lịch",
      "Trở thành nước phát triển theo định hướng XHCN",
      "Trung tâm thương mại"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Quan điểm về lợi ích quốc gia trong Đại hội XIII là?",
    "options": [
      "Xem nhẹ",
      "Đặt lên hàng đầu",
      "Không nhấn mạnh",
      "Phụ thuộc"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Kinh tế được xác định là gì trong Đại hội XIII?",
    "options": [
      "Phụ",
      "Trung tâm",
      "Phụ thuộc",
      "Không quan trọng"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Văn hóa được xem là gì theo Đại hội XIII?",
    "options": [
      "Bổ sung",
      "Nền tảng tinh thần của xã hội",
      "Công cụ chính trị",
      "Kinh tế"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Công tác xây dựng Đảng theo Đại hội XIII chú trọng điều gì?",
    "options": [
      "Tăng số lượng Đảng viên",
      "Chống tham nhũng, chỉnh đốn Đảng",
      "Mở rộng liên kết",
      "Cắt giảm tổ chức"
    ],
    "correctAnswer": 1
  },
  {
    "question": "Chuyển đổi số quốc gia là nội dung của nhiệm vụ nào?",
    "options": [
      "Tăng thuế",
      "Giảm xuất khẩu",
      "Phát triển kinh tế số, ứng dụng KH-CN",
      "Giảm giáo dục"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Vai trò của thanh niên trong giai đoạn mới là?",
    "options": [
      "Lực lượng dự bị",
      "Tập trung chính trị",
      "Lực lượng xung kích trong phát triển KH-CN",
      "Hạn chế vai trò"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Giải pháp xây dựng tổ chức Đoàn TNCS Hồ Chí Minh là?",
    "options": [
      "Giảm số lượng đoàn viên",
      "Hạn chế hoạt động",
      "Vững mạnh, đồng hành cùng thanh niên",
      "Giải thể"
    ],
    "correctAnswer": 2
  },
  {
    "question": "Yếu tố giúp nâng cao nhận thức công dân của thanh niên là?",
    "options": [
      "Giới hạn giáo dục",
      "Kết hợp gia đình – nhà trường – xã hội",
      "Không cần thiết",
      "Học trực tuyến"
    ],
    "correctAnswer": 1
  }
];

// Game State
let currentQuestionIndex = 0;
let usedQuestions = [];
let monkeyPositions = [0, 0, 0, 0]; // Positions for 4 teams (0-20 steps)
const MAX_POSITION = 20;
const STEP_HEIGHT = 20; // pixels per step (reduced for 20 steps)

let timer = 30;
let timerInterval = null;
let backgroundMusic = null;

// DOM Elements
const showQuestionBtn = document.getElementById('show-question-btn');
const questionModal = document.getElementById('question-modal');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const timerDisplay = document.getElementById('timer');
const showAnswerBtn = document.getElementById('show-answer-btn');
const closeModalBtn = document.getElementById('close-modal-btn');
const upButtons = document.querySelectorAll('.up-btn');
const downButtons = document.querySelectorAll('.down-btn');
const monkeys = document.querySelectorAll('.monkey');

// Initialize Game
function initGame() {
    console.log(`Đã load ${questions.length} câu hỏi`);

    backgroundMusic = document.getElementById('background-music');

    // Event Listeners
    showQuestionBtn.addEventListener('click', showQuestion);
    showAnswerBtn.addEventListener('click', showAnswer);
    closeModalBtn.addEventListener('click', closeModal);

    // Up/Down buttons
    upButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const team = parseInt(btn.dataset.team);
            moveMonkey(team, 1);
        });
    });

    downButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const team = parseInt(btn.dataset.team);
            moveMonkey(team, -1);
        });
    });

    // Initialize monkey positions
    updateAllMonkeyPositions();

    // Initialize progress bar
    document.getElementById('total-questions').textContent = questions.length;
    updateProgress();
}

// Update Progress Bar
function updateProgress() {
    const currentQuestion = usedQuestions.length;
    const totalQuestions = questions.length;
    const percentage = (currentQuestion / totalQuestions) * 100;

    document.getElementById('current-question').textContent = currentQuestion;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Move Monkey
function moveMonkey(team, direction) {
    const newPosition = monkeyPositions[team] + direction;

    if (newPosition >= 0 && newPosition <= MAX_POSITION) {
        monkeyPositions[team] = newPosition;
        updateMonkeyPosition(team, direction);

        // Play monkey sound
        playMonkeySound();

        // Check if monkey reached the top
        if (newPosition === MAX_POSITION) {
            setTimeout(() => {
                createConfetti();
                alert(`🎉 Nhóm ${team + 1} đã leo đến đỉnh cây! Chúc mừng!`);
            }, 500);
        }
    }
}

// Update Monkey Position
function updateMonkeyPosition(team, direction = 0) {
    const monkey = monkeys[team];
    const container = monkey.parentElement;
    const bottomPosition = monkeyPositions[team] * STEP_HEIGHT;

    // Add animation class
    if (direction > 0) {
        monkey.classList.remove('descending');
        monkey.classList.add('climbing');
    } else if (direction < 0) {
        monkey.classList.remove('climbing');
        monkey.classList.add('descending');
    }

    // Remove animation class after animation completes
    setTimeout(() => {
        monkey.classList.remove('climbing', 'descending');
    }, 600);

    container.style.bottom = `${bottomPosition}px`;
}

// Update All Monkey Positions
function updateAllMonkeyPositions() {
    for (let i = 0; i < 4; i++) {
        updateMonkeyPosition(i);
    }
}

// Show Question
function showQuestion() {
    if (usedQuestions.length >= questions.length) {
        alert('Đã hết câu hỏi! Trò chơi kết thúc.');
        return;
    }

    // Get random unused question
    let questionIndex;
    do {
        questionIndex = Math.floor(Math.random() * questions.length);
    } while (usedQuestions.includes(questionIndex));

    usedQuestions.push(questionIndex);
    currentQuestionIndex = questionIndex;

    // Update progress bar
    updateProgress();

    const question = questions[currentQuestionIndex];

    // Display question
    questionText.textContent = question.question;

    // Display options
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
        optionDiv.dataset.index = index;
        optionsContainer.appendChild(optionDiv);
    });

    // Reset timer
    timer = 30;
    timerDisplay.textContent = timer;
    timerDisplay.classList.remove('warning');

    // Show modal
    questionModal.style.display = 'block';

    // Start timer and music
    startTimer();
    playMusic();

    // Hide show answer button initially
    showAnswerBtn.style.display = 'inline-block';
}

// Start Timer
function startTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    timerInterval = setInterval(() => {
        timer--;
        timerDisplay.textContent = timer;

        if (timer <= 10) {
            timerDisplay.classList.add('warning');
        }

        if (timer <= 0) {
            clearInterval(timerInterval);
            showAnswer();
        }
    }, 1000);
}

// Play Music
function playMusic() {
    if (backgroundMusic) {
        backgroundMusic.currentTime = 0;
        backgroundMusic.play().catch(error => {
            console.log('Không thể phát nhạc:', error);
        });
    }
}

// Stop Music
function stopMusic() {
    if (backgroundMusic) {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0;
    }
}

// Play Monkey Sound
function playMonkeySound() {
    const monkeySound = document.getElementById('monkey-sound');
    if (monkeySound) {
        monkeySound.currentTime = 0;
        monkeySound.play().catch(error => {
            console.log('Không thể phát tiếng khỉ:', error);
        });
    }
}

// Show Answer
function showAnswer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    stopMusic();

    const question = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    options.forEach((option, index) => {
        option.classList.add('disabled');
        if (index === question.correctAnswer) {
            option.classList.add('show-correct');
        }
    });

    showAnswerBtn.style.display = 'none';
    timerDisplay.classList.remove('warning');
}

// Close Modal
function closeModal() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }

    stopMusic();

    questionModal.style.display = 'none';

    // Reset timer display
    timerDisplay.textContent = '30';
    timerDisplay.classList.remove('warning');
}

// Create Confetti Effect
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#ffa500', '#ff1493'];
    const confettiCount = 100;

    // Create confetti container if it doesn't exist
    let confettiContainer = document.getElementById('confetti-container');
    if (!confettiContainer) {
        confettiContainer = document.createElement('div');
        confettiContainer.id = 'confetti-container';
        document.body.appendChild(confettiContainer);
    }

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
        confettiContainer.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    // Remove container after all confetti is done
    setTimeout(() => {
        if (confettiContainer && confettiContainer.children.length === 0) {
            confettiContainer.remove();
        }
    }, 5000);
}

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // ESC to close modal
    if (e.key === 'Escape' && questionModal.style.display === 'block') {
        closeModal();
    }

    // Space to show answer
    if (e.key === ' ' && questionModal.style.display === 'block' && showAnswerBtn.style.display !== 'none') {
        e.preventDefault();
        showAnswer();
    }

    // Number keys 1-4 for team up
    if (questionModal.style.display !== 'block') {
        if (e.key === '1') moveMonkey(0, 1);
        if (e.key === '2') moveMonkey(1, 1);
        if (e.key === '3') moveMonkey(2, 1);
        if (e.key === '4') moveMonkey(3, 1);
    }
});

// Spinning Wheel
let wheelCanvas, wheelCtx;
let currentRotation = 0;
let isSpinning = false;

const teams = [
    { name: 'Nhóm 1', color: '#e74c3c' },
    { name: 'Nhóm 2', color: '#3498db' },
    { name: 'Nhóm 3', color: '#2ecc71' },
    { name: 'Nhóm 4', color: '#f39c12' }
];

function initWheel() {
    wheelCanvas = document.getElementById('wheel-canvas');
    if (!wheelCanvas) return;

    wheelCtx = wheelCanvas.getContext('2d');
    drawWheel();

    const spinBtn = document.getElementById('spin-wheel-btn');
    const closeWheelBtn = document.getElementById('close-wheel-btn');
    const wheelModal = document.getElementById('wheel-modal');

    spinBtn.addEventListener('click', () => {
        wheelModal.style.display = 'block';
    });

    closeWheelBtn.addEventListener('click', () => {
        wheelModal.style.display = 'none';
    });

    wheelCanvas.addEventListener('click', spinWheel);
}

function drawWheel() {
    const centerX = wheelCanvas.width / 2;
    const centerY = wheelCanvas.height / 2;
    const radius = 180;
    const sliceAngle = (2 * Math.PI) / teams.length;

    wheelCtx.clearRect(0, 0, wheelCanvas.width, wheelCanvas.height);
    wheelCtx.save();
    wheelCtx.translate(centerX, centerY);
    wheelCtx.rotate(currentRotation);

    teams.forEach((team, index) => {
        const startAngle = index * sliceAngle;
        const endAngle = startAngle + sliceAngle;

        // Draw slice
        wheelCtx.beginPath();
        wheelCtx.arc(0, 0, radius, startAngle, endAngle);
        wheelCtx.lineTo(0, 0);
        wheelCtx.fillStyle = team.color;
        wheelCtx.fill();
        wheelCtx.strokeStyle = '#fff';
        wheelCtx.lineWidth = 3;
        wheelCtx.stroke();

        // Draw text
        wheelCtx.save();
        wheelCtx.rotate(startAngle + sliceAngle / 2);
        wheelCtx.textAlign = 'center';
        wheelCtx.fillStyle = '#fff';
        wheelCtx.font = 'bold 24px Arial';
        wheelCtx.fillText(team.name, radius * 0.6, 10);
        wheelCtx.restore();
    });

    // Draw center circle
    wheelCtx.beginPath();
    wheelCtx.arc(0, 0, 30, 0, 2 * Math.PI);
    wheelCtx.fillStyle = '#fff';
    wheelCtx.fill();
    wheelCtx.strokeStyle = '#2c3e50';
    wheelCtx.lineWidth = 3;
    wheelCtx.stroke();

    wheelCtx.restore();
}

function spinWheel() {
    if (isSpinning) return;

    isSpinning = true;

    const spinDuration = 3000; // 3 seconds
    const spinRevolutions = 5 + Math.random() * 3; // 5-8 revolutions
    const totalRotation = spinRevolutions * 2 * Math.PI;
    const startTime = Date.now();
    const startRotation = currentRotation;

    function animate() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / spinDuration, 1);

        // Easing function for smooth deceleration
        const easeOut = 1 - Math.pow(1 - progress, 3);
        currentRotation = startRotation + totalRotation * easeOut;

        drawWheel();

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            isSpinning = false;
        }
    }

    animate();
}

// Initialize when page loads
window.addEventListener('load', () => {
    initGame();
    initWheel();
});
