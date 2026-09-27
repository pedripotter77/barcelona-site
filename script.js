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
        stats: "8 matches, 8 goals, 6 assists"
    },
    Gordon: {
        name: "Anthony Gordon",
        stats: "7 matches, 0 goals, 4 assists"
    },
    Adeyemi: {
        name: "Karim Adeyemi",
        stats: "8 matches, 3 goals, 2 assists"
    }
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