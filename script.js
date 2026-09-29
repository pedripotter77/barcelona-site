"use strict";
console.log("Visca el Barça! Visca Catalunya!");

const playersdata = {
    Raphinha: {
        name: "Raphinha",
        stats: "8 matches, 14 goals, 3 assists",
        video: "https://www.youtube.com/embed/y-fzFcFqOvs?si=MXaDZO3aq0pGAkSF",
    },
    Yamal: {
        name: "Lamine Yamal",
        stats: "8 matches, 8 goals, 6 assists",
        video: "https://www.youtube.com/embed/LMu9x6HsSQc?si=yLF2J9a4hxE7lNR0",
    },
    Gordon: {
        name: "Anthony Gordon",
        stats: "7 matches, 0 goals, 4 assists",
        video: "https://www.youtube.com/embed/0LugT1Mnm1Y?si=7pQW0S7NcrqoDGYK",
    },
    Adeyemi: {
        name: "Karim Adeyemi",
        stats: "8 matches, 3 goals, 2 assists",
        video: "https://www.youtube.com/embed/HbeDQwIcIHE?si=KLw2RbGfrblrrnoX",
    },
    Pedri: {
        name: "Pedri",
        stats: "9 matches, 1 goal, 2 assists",
        video: "https://www.youtube.com/embed/4eTcA7LeCyg?si=YL_ginJsWCZ9D0ga",
    },
    Rodri: {
        name: "Rodri",
        stats: "8 matches, 0 goals, 0 assists",
        video: "https://www.youtube.com/embed/t2NZS4qeLC8?si=I0Dog5K1Mhu7Ainh",
    },
    Olmo: {
        name: "Olmo",
        stats: "9 matches, 0 goals, 4 assists",
        video: "https://www.youtube.com/embed/oegtrbMA5KY?si=2qXVabtNcHa-9uul",
    },
    Fermin: {
        name: "Fermin",
        stats: "7 matches, 4 goals, 2 assists",
        video: "https://www.youtube.com/embed/lkeGfF23srI?si=iFlPfPhLzLfpNGKc",
    },
    Cubarsi: {
        name: "Cubarsi",
        stats: "6 matches",
        video: "https://www.youtube.com/embed/eV6NzWqZF3I?si=3heqiiCO5pDjdnYq",
    },
    Espart: {
        name: "Espart",
        stats: "5 matches, 1 goal",
        video: "https://www.youtube.com/embed/hpSN0bpXYZc?si=ogsej9TcNN7Y-CZT",
    },
    Eric: {
        name: "Eric",
        stats: "7 matches",
        video: "https://www.youtube.com/embed/hXuDMN7nTYQ?si=KEz-xX0-ilXK5DoG",
    },
    Kounde: {
        name: "Kounde",
        stats: "7 matches",
        video: "https://www.youtube.com/embed/mfvYCrOgpYM?si=Np4VV1MhGiX8XQFr",
    },
    Szczesny: {
        name: "Szczesny",
        stats: "1 match",
        video: "https://www.youtube.com/embed/XzdYYpDGWsk?si=eVpGRlv3iaQwdkj5",
    },
    Garcia: {
        name: "Joan Garcia",
        stats: "7 matches, 6 conceded goals",
        video: "https://www.youtube.com/embed/7_rZA9SZbqg?si=MhPVr7IyQ3xXJCfM",
    },
    Livakovic: {
        name: "Livakovic",
        stats: "1 match",
        video: "https://www.youtube.com/embed/sWnqNiJAgvg?si=ZHBHbnzSQfqt6SsX",
    },
};

const modal = document.getElementById("playermodal");
const modalname = document.getElementById("modalname");
const modalstats = document.getElementById("modalstats");
const closeModal = document.getElementById("closeModal");
const modalvideo = document.getElementById("modalvideo");

const cards = document.querySelectorAll(".player-card");

cards.forEach(function(card) {
    card.onclick = function () {
       let playerId = card.dataset.player;

       let player = playersdata[playerId];

       if (player) {
        modalname.textContent = player.name;
        modalstats.textContent = player.stats;

        if (player.video) {
            modalvideo.src = player.video;
        } else {
            modalvideo.src = "";
        }

        modal.style.display = "flex";
       }
    };
});

closeModal.onclick = function() {
   modal.style.display = "none";
   modalvideo.src = "";
}