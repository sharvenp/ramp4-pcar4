import { Attribution, LatLong, ScaleBarProperties } from '@/geo/api';

export class MapCaptionState {
    attribution: Attribution;
    scale: ScaleBarProperties;
    latLongCursor: LatLong;

    constructor(
        attrib: Attribution,
        scale: ScaleBarProperties,
        latLong: LatLong
    ) {
        this.attribution = attrib;
        this.scale = scale;
        this.scale = scale;
        this.latLongCursor = latLong;
    }
}
