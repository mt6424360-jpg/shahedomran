const musicFileName = "[@download_it_bot mp3] خريجين 2026   #تخرج.mp3"
const musicUrl = `${import.meta.env.BASE_URL}${encodeURIComponent(musicFileName)}`
const invitationMusic = new Audio(musicUrl)
invitationMusic.loop = true
invitationMusic.preload = "auto"
invitationMusic.volume = 0.8

function playInvitationMusic() {
  void invitationMusic.play().catch((error: unknown) => {
    console.error("Invitation music playback failed:", musicUrl, error)
  })
}

function handleEnvelopeClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  if (!target.closest(".envelope-button, .open-prompt")) return

  playInvitationMusic()
}

// Capture the user's click before React handlers run; browsers permit playback
// because this is called directly from the click gesture.
document.addEventListener("click", handleEnvelopeClick, true)
