export const asyncLoader = (opts: {type: string; container: string; width: string; height: string;}) => {
 
  const loaderEl = document.createElement("div");
  const loaderOverlay = "loaderOverlay";
  const getOptsContainer = document.getElementById(opts.container) as HTMLElement;

  if (opts.type === "start" && getOptsContainer) {
    loaderEl.id = loaderOverlay;

    const loadingCircle = document.createElement("div");

    loadingCircle.id = "loader";
    loadingCircle.style.height = opts.height ? `${opts.height}px` : "35px";
    loadingCircle.style.width = opts.width ? `${opts.width}px` : "35px";

    loaderEl.appendChild(loadingCircle);
    getOptsContainer.appendChild(loaderEl);
    document.getElementById(loaderOverlay)!.style.display = "block";
  } else if (opts.type === "stop" && document.getElementById(loaderOverlay)) {
    document.getElementById(loaderOverlay)?.remove();
  }
};

