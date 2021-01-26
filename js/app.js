import Tool from "./classes/Tools.js";
import MyCanvas from "./classes/MyCanvas.js";

let myCanvas = new MyCanvas("canvas");
myCanvas.activeTool = Tool.TOOL_PENCIL;
myCanvas.init();
const widthPicker = document.getElementById("line-width");
const colorPicker = document.getElementById("color");
const clearBtn = document.getElementById("clear-btn");
const downloadBtn = document.getElementById("download-btn");
const canvasWidthSetting = document.getElementById("canvas-width-inpt");
const canvasHeightSetting = document.getElementById("canvas-height-inpt");
widthPicker.value = myCanvas._lineWidth;

canvasWidthSetting.value = parseInt(myCanvas.canvas.width);
canvasHeightSetting.value = parseInt(myCanvas.canvas.clientHeight);

document.querySelectorAll("[data-tool").forEach((tool) => {
    tool.addEventListener("click", (e) => {
        toggleClassOnTool(e.target, "selected");
        let selectedTool = e.target.getAttribute("data-tool");
        myCanvas.activeTool = selectedTool;
    });
});

widthPicker.addEventListener("change", (e) => {
    myCanvas.lineWidth = parseInt(e.target.value);
});

colorPicker.addEventListener("change", (e) => {
    myCanvas.lineColor = e.target.value;
});

function toggleClassOnTool(tool, className) {
    document.querySelector("[data-tool].selected").classList.remove(className);
    tool.classList.toggle(className);
}

clearBtn.addEventListener("click", (e) => {
    myCanvas.clearWorkspace();
});

downloadBtn.addEventListener("click", (e) => {
    myCanvas.getJpeg();
    togglePopup("download-popup");
});

canvasWidthSetting.addEventListener("change", (e) => {
    myCanvas.canvas.width = parseInt(e.target.value);
});

canvasHeightSetting.addEventListener("change", (e) => {
    myCanvas.canvas.height = parseInt(e.target.value);
});
