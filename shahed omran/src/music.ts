const musicFileName = "[@download_it_bot mp3] خريجين 2026   #تخرج.mp3"
const musicUrl = `${import.meta.env.BASE_URL}${encodeURIComponent(musicFileName)}`
const invitationMusic = new Audio(musicUrl)
invitationMusic.loop = true
invitationMusic.preload = "auto"
invitationMusic.volume = 0.8

function handleEnvelopeClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  if (!target.closest(".envelope-button, .open-prompt")) return

  // Keep the listener for repeat opens if playback was blocked or failed.
  void invitationMusic.play().catch((error: unknown) => {
    console.error("Invitation music playback failed:", musicUrl, error)
  })
}

// Capture the real user click before React handlers can stop propagation.
document.addEventListener("click", handleEnvelopeClick, true)
