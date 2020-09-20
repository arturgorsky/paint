import Tool from './classes/Tools.js';
import MyCanvas from './classes/MyCanvas.js';

let myCanvas = new MyCanvas('canvas');
myCanvas.activeTool = Tool.TOOL_LINE;
myCanvas.init();

document.querySelectorAll("[data-tool").forEach((tool) => {
  tool.addEventListener("click", (e) => {
    toggleClassOnTool(e.target, "selected");
    let selectedTool = e.target.getAttribute("data-tool");
    myCanvas.activeTool = selectedTool;
  });
});

function toggleClassOnTool(tool, className) {
  document.querySelector("[data-tool].selected").classList.remove(className);
  tool.classList.toggle(className);
}