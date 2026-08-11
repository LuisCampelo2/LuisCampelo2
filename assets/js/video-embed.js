document.querySelectorAll(".video-facade").forEach((facade) => {
  facade.addEventListener("click", () => {
    const videoId = facade.dataset.yt;
    const label = facade.getAttribute("aria-label") || "Vídeo incorporado do YouTube";
    const frame = facade.closest(".video-frame");
    if (!videoId || !frame) return;

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`;
    iframe.title = label;
    iframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
    iframe.setAttribute("allowfullscreen", "");
    iframe.className = "video-iframe";

    frame.replaceChildren(iframe);
  });
});
