import gsap from "gsap";

function animateBg() {
    const gestalt = document.querySelector(".gestalt");
    gsap.to(gestalt, {
        clipPath: "polygon(51% 39%, 62% 49%, 51% 59%, 41% 49%)",
        duration: 2,
        onComplete: () => {
            gsap.to(gestalt, {
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
                
            })
        }
    });
}

export default function animatePage() {

        window.addEventListener("load", () => {
            animateBg();
        });


}

