const menuHTML = `
    <header class="portfolio-header">
        <div class="logo">🚀 슈퍼 풀스택 포트폴리오</div>
        <nav class="pc-menu">
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="guestbook.html">Guestbook</a></li>
            </ul>
        </nav>
        <div class="hamburger" onclick="toggleMenu()">🍔</div>
    </header>

    <div class="mobile-menu" id="mobile-menu">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="projects.html">Projects</a></li>
            <li><a href="guestbook.html">Guestbook</a></li>
        </ul>
    </div>
`;

// 🌟 안전장치: menu-container가 있는 방에서만 메뉴를 조립합니다!
const container = document.getElementById("menu-container");
if (container) {
    container.innerHTML = menuHTML;
}

function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// =========================================
// ⏳ 로딩 화면 스르륵 숨기기 (모든 페이지 공통 적용!)
// =========================================
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    if(loader) {
        setTimeout(function() {
            loader.style.opacity = '0'; // 투명해짐
            setTimeout(function() {
                loader.style.display = 'none'; // 완전히 사라짐
            }, 500);
        }, 800); // 0.8초 동안 팽이 감상 타임!
    }
});