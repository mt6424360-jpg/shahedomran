const musicFileName = "[@download_it_bot mp3] خريجين 2026   #تخرج.mp3"
const invitationMusic = new Audio(`/${encodeURIComponent(musicFileName)}`)
invitationMusic.loop = true
invitationMusic.preload = "auto"

// Start playback from the envelope click so browsers allow the audio.
function handleEnvelopeClick(event: MouseEvent) {
  const target = event.target
  if (
    !(target instanceof Element) ||
    !target.closest(".envelope-button, .open-prompt")
  ) {
    return
  }

  document.removeEventListener("click", handleEnvelopeClick)
  void invitationMusic.play().catch((error: unknown) => {
    console.error("Could not play invitation music:", error)
  })
}

document.addEventListener("click", handleEnvelopeClick)
