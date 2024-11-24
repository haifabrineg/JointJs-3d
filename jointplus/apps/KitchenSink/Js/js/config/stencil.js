/*! JointJS+ v4.0.1 - HTML5 Diagramming Framework - TRIAL VERSION

Copyright (c) 2024 client IO

 2024-10-18 


This Source Code Form is subject to the terms of the JointJS+ Trial License
, v. 2.0. If a copy of the JointJS+ License was not distributed with this
file, You can obtain one at https://www.jointjs.com/license
 or from the JointJS+ archive as was distributed by client IO. See the LICENSE file.*/


var App = App || {};
App.config = App.config || {};

(function() {

    'use strict';

    App.config.stencil = {};

    App.config.stencil.groups = {
        standard: { index: 1, label: 'Standard shapes' }
    };

    App.config.stencil.shapes = {};

    App.config.stencil.shapes.standard = [
        {
            type: 'standard.Rectangle',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Rectangle',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    rx: 2,
                    ry: 2,
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'rect',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'standard.Ellipse',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Ellipse',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'ellipse',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'app.RectangularModel',
            size: { width: 90, height: 67.5 },
            allowOrthogonalResize: false,
            attrs: {
                root: {
                    dataTooltip: 'Rectangle with ports',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    rx: 2,
                    ry: 2,
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'rect',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            ports: {
                items: [
                    { group: 'in' },
                    { group: 'in' },
                    { group: 'out' }
                ]
            }
        },
        {
            type: 'app.CircularModel',
            size: { width: 90, height: 54 },
            allowOrthogonalResize: false,
            attrs: {
                root: {
                    dataTooltip: 'Ellipse with ports',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0',
                },
                label: {
                    text: 'ellipse',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            },
            ports: {
                items: [
                    { group: 'in' },
                    { group: 'in' },
                    { group: 'out' }
                ]
            }
        },
        {
            type: 'standard.Polygon',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Rhombus',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    points: 'calc(0.5 * w),0 calc(w),calc(0.5 * h) calc(0.5 * w),calc(h) 0,calc(0.5 * h)',
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'rhombus',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'standard.Cylinder',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Cylinder',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                top: {
                    fill: '#31d0c6',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'cylinder',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'standard.Image',
            size: { width: 90, height: 71 },
            attrs: {
                root: {
                    dataTooltip: 'Image',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                image: {
                    xlinkHref: 'assets/image-icon1.svg'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                label: {
                    text: 'image',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    fill: '#c6c7e2'
                }
            }
        },
        {
            type: 'standard.EmbeddedImage',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Card',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                image: {
                    xlinkHref: 'assets/image-icon1.svg'
                },
                label: {
                    text: 'card',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'standard.InscribedImage',
            size: { width: 60, height: 60 },
            attrs: {
                root: {
                    dataTooltip: 'Icon',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                border: {
                    stroke: '#31d0c6',
                    strokeWidth: 3,
                    strokeDasharray: '0'
                },
                background: {
                    fill: 'transparent'
                },
                image: {
                    xlinkHref: 'assets/image-icon1.svg'
                },
                label: {
                    text: 'icon',
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0
                }
            }
        },
        {
            type: 'standard.HeaderedRectangle',
            size: { width: 90, height: 54 },
            attrs: {
                root: {
                    dataTooltip: 'Rectangle with header',
                    dataTooltipPosition: 'left',
                    dataTooltipPositionSelector: '.joint-stencil'
                },
                body: {
                    fill: 'transparent',
                    stroke: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0'
                },
                header: {
                    stroke: '#31d0c6',
                    fill: '#31d0c6',
                    strokeWidth: 2,
                    strokeDasharray: '0',
                    height: 20
                },
                bodyText: {
                    textWrap: {
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur molestie.',
                        width: -10,
                        height: -20,
                        ellipsis: true
                    },
                    fill: '#c6c7e2',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0,
                    y: 'calc(h/2 + 10)',
                },
                headerText: {
                    text: 'header',
                    fill: '#f6f6f6',
                    fontFamily: 'Roboto Condensed',
                    fontWeight: 'Normal',
                    fontSize: 11,
                    strokeWidth: 0,
                    y: 10
                }
            }
        }
    ];
})();
