const invitationMusic = new Audio(
  "/[@download_it_bot%20mp3]%20%D8%AE%D8%B1%D9%8A%D8%AC%D9%8A%D9%86%202026%20%20%20%23%D8%AA%D8%AE%D8%B1%D8%AC.mp3",
)
invitationMusic.loop = true

// Start playback from the user's envelope click to satisfy browser autoplay rules.
document.addEventListener(
  "click",
  (event) => {
    const target = event.target
    if (
      !(target instanceof Element) ||
      !target.closest(".envelope-button, .open-prompt")
    ) {
      return
    }

    void invitationMusic.play().catch((error: unknown) => {
      console.error("Could not play invitation music:", error)
    })
  },
  { once: true },
)
