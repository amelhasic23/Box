const Boxescontainer = document.getElementById("Boxes");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    try {
        Boxescontainer.classList.toggle("big");
        if (!Boxescontainer.hasChildNodes()) {
            createBoxes();
        }
    } catch (error) {
        console.error("Error toggling class or creating boxes:", error);
    }
});

function createBoxes() {
    try {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                const box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
                Boxescontainer.appendChild(box);
            }
        }
    } catch (error) {
        console.error("Error creating boxes:", error);
    }
}
