var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { util } from '@joint/plus';
import { Node, calculateHeight } from '../node';
import * as cv from '@techstark/opencv-js';
import { App } from '../../app';
export class Tint extends Node {
    
    constructor(attributes, options) {
        super(attributes, options);
        
        this.on('change', (el, options) => {
            if (!options.inspector && !options.commandManager)
                return;
            
            if (options.propertyPath === 'properties/intensity') {
                App.processor.process(this.id);
            }
        });
    }
    
    defaults() {
        const defaults = super.defaults();
        return util.defaultsDeep({
            type: 'processor.Tint',
            name: 'Tint',
            group: 'filters',
            properties: {
                intensity: 20,
            },
            size: {
                width: 120,
                height: calculateHeight(2)
            },
            inputSettings: [{
                    name: 'Image',
                    type: 'image',
                    property: 'image'
                }, {
                    name: 'Color',
                    type: 'color',
                    property: 'color',
                    defaultValue: {
                        r: 255,
                        g: 255,
                        b: 255
                    }
                }],
            outputSettings: [{
                    name: 'Image',
                    type: 'image',
                }]
        }, defaults);
    }
    
    action() {
        return __awaiter(this, void 0, void 0, function* () {
            const { image, color, intensity } = this.properties;
            
            if (!image)
                return [null];
            
            try {
                const imageChannels = new cv.MatVector;
                cv.split(image, imageChannels);
                const tintImage = new cv.Mat(image.rows, image.cols, image.type(), new cv.Scalar(color.r, color.g, color.b, 255));
                const tintedImage = new cv.Mat();
                cv.addWeighted(image, 1 - (intensity / 100), tintImage, intensity / 100, 0, tintedImage);
                const tintedImageChannels = new cv.MatVector;
                cv.split(tintedImage, tintedImageChannels);
                tintedImageChannels.set(3, imageChannels.get(3));
                
                const result = new cv.Mat();
                cv.merge(tintedImageChannels, result);
                
                return [result];
            }
            catch (error) {
                return [null];
            }
        });
    }
    
    getInspectorConfig() {
        const nodeConfig = super.getInspectorConfig();
        return util.defaultsDeep({
            groups: {
                tint: {
                    label: 'Tint',
                    index: 2
                }
            },
            inputs: {
                properties: {
                    intensity: {
                        type: 'range',
                        min: 0,
                        max: 100,
                        step: 1,
                        unit: '%',
                        label: 'Intensity',
                        group: 'tint'
                    }
                }
            }
        }, nodeConfig);
    }
    
    getFileAttributes() {
        return super.getFileAttributes().concat(['properties/intensity']);
    }
}
