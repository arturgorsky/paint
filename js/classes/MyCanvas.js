import Point from "./Point.js";
import Tool from "./Tools.js";

export default class MyCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = canvas.getContext("2d");
    }

    set activeTool(tool) {
        this.tool = tool;
    }

    init() {
        this.canvas.onmousedown = (e) => this.onMouseDown(e);
    }

    onMouseDown(e) {
        this.savedData = this.context.getImageData(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
        this.canvas.onmousemove = (e) => this.onMouseMove(e);
        document.onmouseup = (e) => this.onMouseUp(e);
        this.startPoint = new Point(e.layerX, e.layerY);
    }

    onMouseMove(e) {
        this.currentPoint = new Point(e.layerX, e.layerY);

        switch (this.tool) {
            case Tool.TOOL_LINE:
                this.drawLine();
                break;
            case Tool.TOOL_RECTANGLE:
                this.drawRect();
                break;
            default:
                break;
        }
    }

    onMouseUp(e) {
        this.canvas.onmousemove = null;
        document.onmouseup = null;
    }

    startDrawing() {
        this.context.putImageData(this.savedData, 0, 0);
        this.context.beginPath();
        this.context.moveTo(this.startPoint.x, this.startPoint.y);
    }

    drawLine() {
        this.startDrawing();
        this.context.lineTo(this.currentPoint.x, this.currentPoint.y);
        this.context.stroke();
    }

    drawRect() {
        this.startDrawing();
        this.context.rect(
            this.startPoint.x,
            this.startPoint.y,
            this.currentPoint.x - this.startPoint.x,
            this.currentPoint.y - this.startPoint.y
        );
        this.context.stroke();
    }
}
