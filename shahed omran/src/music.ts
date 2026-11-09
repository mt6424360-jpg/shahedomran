const musicFileName = "[@download_it_bot mp3] خريجين 2026   #تخرج.mp3"
const musicUrl = `/${encodeURIComponent(musicFileName)}`
const invitationMusic = new Audio(musicUrl)
invitationMusic.loop = true
invitationMusic.preload = "auto"
invitationMusic.volume = 0.8

function tryPlayInvitationMusic() {
  void invitationMusic.play().catch((error: unknown) => {
    console.warn("Invitation music did not start:", error)
  })
}

function handleEnvelopeClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) return
  if (!target.closest(".envelope-button, .open-prompt")) return

  document.removeEventListener("click", handleEnvelopeClick)
  tryPlayInvitationMusic()
}

document.addEventListener("click", handleEnvelopeClick)
