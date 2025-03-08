var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

function selectCarousel(num) {
    document.querySelector('.carousel-item-selected').classList.remove('carousel-item-selected');

    document.querySelector(`#csi-${num}`).classList.add('carousel-item-selected');

    document.querySelector('.carousel-leftside img').setAttribute('src', carouselImages[num]);

    document.querySelector('.carousel-leftside .--h3').innerHTML = `${carouselTitles[num]}`;

    document.querySelector('.carousel-leftside .cltc-ps-container').innerHTML = `${carouselTexts[num]}`;
}

var carouselImages = [
    '',
    './assets/images/Revenue Share to Stakers.png',
    './assets/images/Revenue Share to Stakers.png',
    './assets/images/Revenue Share to Stakers.png',
    './assets/images/Revenue Share to Stakers.png',
    './assets/images/Revenue Share to Stakers.png'
]

var carouselTitles = [
    '',
    '💰 60% Revenue Share to stakers',
    '🪂Airdrop Campaigns',
    '🔥 Buyback and Burn',
    '🎁 VIP Rewards',
    '🎫 $DRAFT Lottery'
]

var carouselTexts = [
    '',
    `<p class="--p3 --mwhite-60">Get ahead with our advanced AI-driven fantasy picks, tailored to boost
                        your
                        lineup success.</p>
                    <p class="--p3 --mwhite-60">By analyzing real-time data, player stats, and historical performance
                        trends, our AI delivers precise recommendations designed to help you win big. </p>`,
    `<p class="--p3 --mwhite-60">Get ahead with our advanced AI-driven fantasy picks, tailored to boost
                        your
                        lineup success.</p>
                    <p class="--p3 --mwhite-60">By analyzing real-time data, player stats, and historical performance
                        trends, our AI delivers precise recommendations designed to help you win big. </p>`,
    `<p class="--p3 --mwhite-60">Get ahead with our advanced AI-driven fantasy picks, tailored to boost
                        your
                        lineup success.</p>
                    <p class="--p3 --mwhite-60">By analyzing real-time data, player stats, and historical performance
                        trends, our AI delivers precise recommendations designed to help you win big. </p>`,
    `<p class="--p3 --mwhite-60">Get ahead with our advanced AI-driven fantasy picks, tailored to boost
                        your
                        lineup success.</p>
                    <p class="--p3 --mwhite-60">By analyzing real-time data, player stats, and historical performance
                        trends, our AI delivers precise recommendations designed to help you win big. </p>`,
    `<p class="--p3 --mwhite-60">Get ahead with our advanced AI-driven fantasy picks, tailored to boost
                        your
                        lineup success.</p>
                    <p class="--p3 --mwhite-60">By analyzing real-time data, player stats, and historical performance
                        trends, our AI delivers precise recommendations designed to help you win big. </p>`
]

function openMenu() {
    document.querySelector('.mobile-menu-container').classList.add('mmc-open');

    // var announcementHeight = document.querySelector('.section-announcement').clientHeight;
    // var headerHeight = document.querySelector('.section-header').clientHeight;

    // heightSum = announcementHeight + headerHeight;

    // document.querySelector('.mobile-menu-container').style.height = 'auto';
    // document.querySelector('.mobile-menu-container').style.top = `${heightSum}px`;
}

function closeMenu() {
    document.querySelector('.mobile-menu-container').classList.remove('mmc-open');
}