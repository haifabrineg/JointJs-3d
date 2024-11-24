import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-three-ddiagram',
  templateUrl: './three-ddiagram.component.html',
  styleUrls: ['./three-ddiagram.component.css']
})
export class ThreeDDiagramComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer', { static: false }) rendererContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.rendererContainer && this.rendererContainer.nativeElement) {
        this.loadSplineIframe();
      } else {
        console.error('Renderer container is null or undefined after timeout');
      }
    }, 100);
  }

  ngOnInit(): void {}

  // Load Spline iframe from provided JSON of the JointJS modeler
  loadSplineIframe(): void {
    //ToDo replace with dynamic json diagram from BE
    const jointJson = {
      "cells": [
        {
          "type": "app.AreaModel",
          "position": {
            "x": 500,
            "y": 200
          },
          "size": {
            "width": 1000,
            "height": 1000
          },
          "angle": 0,
          "link": "https://my.spline.design/miniroomartcopycopy-20522ce34fdd2e4d41b1c51510272357/",
          "id": "d863f6a3-43c3-4ef6-bbf8-eb36026b1e40",
          "z": 1,
          "attrs": {
            "image": {
              "xlinkHref": "assets/default-area.png"
            }
          }
        },
        {
          "type": "app.ActivityModel",
          "position": {
            "x": 500,
            "y": 400
          },
          "size": {
            "width": 1000,
            "height": 1000
          },
          "angle": 0,
          "link": "https://my.spline.design/securingdata-4965718d09a9959c95e11d340eab3ac6/",
          "id": "dac8d2e-9b1f-4988-b57b-c5e24bfa5910",
          "z": 2,
          "attrs": {
            "image": {
              "xlinkHref": "assets/default-activity.png"
            }
          }
        }
      ]
    };

    jointJson.cells.forEach((cell, index) => {
      if (cell.link) {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.left = `${cell.position.x}px`;
        container.style.top = `${cell.position.y}px`;
        container.style.width = `${cell.size.width}px`;
        container.style.height = `${cell.size.height}px`;
        container.style.transform = 'scale(0.5)'; // Adjust the scale to make the content smaller
        container.style.transformOrigin = '0 0'; // Ensure the scaling starts from the top-left corner
        container.style.border = '2px solid red'; // Define an outline for each element
        container.style.cursor = 'move'; // Set cursor to indicate draggable
        container.id = `container-${index}`;
        this.rendererContainer.nativeElement.appendChild(container);

        const iframe = document.createElement('iframe');
        iframe.src = cell.link;
        iframe.width = cell.size.width.toString(); // Original size
        iframe.height = cell.size.height.toString(); // Original size
        iframe.style.border = 'none';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        container.appendChild(iframe);

        // Create drag handle
        const dragHandle = document.createElement('div');
        dragHandle.style.position = 'absolute';
        dragHandle.style.right = '0px';
        dragHandle.style.top = '0px';
        dragHandle.style.width = '20px';
        dragHandle.style.height = '20px';
        dragHandle.style.background = 'rgba(0, 0, 0, 0.5)';
        dragHandle.style.cursor = 'grab';
        dragHandle.style.zIndex = '10';
        container.appendChild(dragHandle);

        // Make the container draggable via the drag handle
        this.makeContainerDraggable(container, dragHandle);
      }
    });
  }

  // Function to make container draggable using the drag handle
  makeContainerDraggable(container: HTMLDivElement, dragHandle: HTMLDivElement): void {
    let offsetX = 0, offsetY = 0;
    let isDragging = false;

    dragHandle.addEventListener('mousedown', (event) => {
      isDragging = true;
      offsetX = event.clientX - container.getBoundingClientRect().left;
      offsetY = event.clientY - container.getBoundingClientRect().top;
      event.preventDefault(); // Prevent interaction while dragging
      dragHandle.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const left = event.clientX - offsetX;
        const top = event.clientY - offsetY;

        container.style.left = `${left}px`;
        container.style.top = `${top}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      dragHandle.style.cursor = 'grab';
    });
  }
}
