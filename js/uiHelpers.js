document.querySelectorAll("[data-tool").forEach((tool) => {
  tool.addEventListener("click", (e) => {
    toggleClassOnTool(e.target, "selected");
  });
});

function toggleClassOnTool(tool, className) {
  document.querySelector("[data-tool].selected").classList.remove(className);
  tool.classList.toggle(className);
}
