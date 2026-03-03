// Sahifa yuklanganda elementlarning sekin chiqib kelishi
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    console.log("Gojo, saytingiz muvaffaqiyatli yuklandi!");
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const profileImg = document.querySelector('.hero-image img');
if(profileImg) {
    profileImg.addEventListener('mouseover', () => {
        console.log("Gojo, kimsan rasmga tegayotgan? 😎");
    });
}


window.addEventListener('load', () => {
    const mainTitle = document.querySelector('.hero-text h1');
    mainTitle.style.borderRight = "3px solid #a855f7";
    

    let i = 0;
    let txt = 'JavaScript olamiga xush kelibsan, Gojo!';
    function typeWriter() {
        if (i < txt.length) {
            process.stdout.write(txt.charAt(i)); 
            i++;
        }
    }
    console.log("%c " + txt, "color: #a855f7; font-size: 20px; font-weight: bold;");
});


const themeBtn = document.createElement('button');
themeBtn.innerText = "🌓";
themeBtn.style.cssText = "position:fixed; top:20px; right:20px; z-index:1000; padding:10px; cursor:pointer; border-radius:50%; border:none; background:var(--primary-color); color:white;";
document.body.appendChild(themeBtn);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    themeBtn.innerText = document.body.classList.contains('light-theme') ? "🌙" : "☀️";
});

function updateStatus() {
    const statusText = document.getElementById('status');
    const hour = new Date().getHours();
    
    if (hour >= 9 && hour < 18) {
        statusText.innerText = "Hozir: Yangi loyihalar ustida ishlayapman 🚀";
    } else if (hour >= 18 && hour < 23) {
        statusText.innerText = "Hozir: JavaScript o'rganyapman 📚";
    } else {
        statusText.innerText = "Hozir: Dam olyapman (Zzz...) 😴";
    }
}
setInterval(updateStatus, 1000);

const quotes = [
    "Dasturlash - bu sehrgarlik, faqat tayoqcha o'rniga klaviatura!",
    "Xato (Bug) - bu shunchaki kutilmagan imkoniyat.",
    "JavaScript o'rganish - bu kelajakka eng yaxshi investitsiya.",
    "To'xtama, Gojo! Eng zo'r kod hali yozilmadi."
];

const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
console.log("%c" + randomQuote, "color: #a855f7; font-style: italic;");