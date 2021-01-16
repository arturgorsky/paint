import Point from "./Point.js";
import Tool from "./Tools.js";
import { calculateRadius } from "../utils.js";

export default class MyCanvas {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = canvas.getContext("2d");
    }

    set activeTool(tool) {
        this.tool = tool;
    }

    set lineWidth(linewidth) {
        this._lineWidth = linewidth;
        this.context.lineWidth = this._lineWidth;
    }

    set lineColor(linecolor) {
        console.log(linecolor);
        this._lineColor = linecolor;
        this.context.strokeStyle = this._lineColor;
    }

    init() {
        this._lineWidth = 4;
        this._lineColor = "#000000";
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
        if(this.tool === Tool.TOOL_PENCIL) {
            this.context.moveTo(this.startPoint.x, this.startPoint.y);
        }
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
            case Tool.TOOL_CIRCLE:
                this.drawCircle();
                break;
            case Tool.TOOL_TRIANGLE:
                this.drawTriangle();
                break;
            case Tool.TOOL_PENCIL:
                this.drawPencilLine();
                break;
            default:
                break;
        }
    }

    onMouseUp(e) {
        this.canvas.onmousemove = null;
        document.onmouseup = null;
        this.context.beginPath();
    }

    startDrawing() {
        this.context.putImageData(this.savedData, 0, 0);
        this.context.beginPath();
    }

    drawLine() {
        this.startDrawing();
        this.context.moveTo(this.startPoint.x, this.startPoint.y);
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

    drawCircle() {
        this.startDrawing();
        let radius = calculateRadius(this.startPoint, this.currentPoint);
        this.context.arc(
            this.startPoint.x,
            this.startPoint.y,
            radius,
            0,
            2 * Math.PI
        );
        this.context.stroke();
    }

    drawTriangle() {
        this.startDrawing();
        let topCorner = new Point(
            this.startPoint.x +
                Math.floor(
                    Math.abs(this.startPoint.x - this.currentPoint.x) / 2
                ),
            this.startPoint.y
        );
        this.context.moveTo(topCorner.x, topCorner.y);
        this.context.lineTo(this.startPoint.x, this.currentPoint.y);
        this.context.lineTo(this.currentPoint.x, this.currentPoint.y);
        this.context.lineTo(topCorner.x, topCorner.y);
        this.context.stroke();
    }

    drawPencilLine() {
        this.context.lineTo(this.currentPoint.x, this.currentPoint.y);
        this.context.stroke();
    }

    clearWorkspace() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
