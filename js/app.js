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

    switch (selectedTool) {
        case Tool.TOOL_LINE:
            console.log('Line tool selected');
        case Tool.TOOL_RECTANGLE:
        case Tool.TOOL_CIRCLE:
        case Tool.TOOL_TRIANGLE:
        case Tool.TOOL_PAINT_BUCKET:
        case Tool.TOOL_PENCIL:
        case Tool.TOOL_BRUSH:
        case Tool.TOOL_ERASER:
        default:
        
      
    }
  });
});

function toggleClassOnTool(tool, className) {
  document.querySelector("[data-tool].selected").classList.remove(className);
  tool.classList.toggle(className);
}