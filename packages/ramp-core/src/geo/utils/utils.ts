// This will collate all the util stuff into one endpoint

// this makes the module that gets exposed on GeoAPI under .util(s)
// TODO add proper comments

import {
    APIScope,
    AttributeAPI,
    InstanceAPI,
    ProjectionAPI,
    QueryAPI,
    SymbologyAPI
} from '@/api/internal';
import { GeometryAPI, SharedUtilsAPI } from '@/geo/api';

/*
import HighlightService from './HighlightService';
import OgcService from './OgcService';
*/

export class UtilsAPI extends APIScope {
    attributes: AttributeAPI;
    geom: GeometryAPI;
    proj: ProjectionAPI;
    query: QueryAPI;
    shared: SharedUtilsAPI;
    symbology: SymbologyAPI;

    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.attributes = new AttributeAPI(iApi);

        // Refer to same instance
        this.geom = RAMP.GEO.geom;
        this.proj = RAMP.GEO.proj;
        this.shared = RAMP.GEO.sharedUtils;

        this.query = new QueryAPI(iApi);
        this.symbology = new SymbologyAPI(iApi);
        console.log('UTILS');
        console.trace();

        /*
        this.highlight = new HighlightService(infoBundle);
        */
    }
}
