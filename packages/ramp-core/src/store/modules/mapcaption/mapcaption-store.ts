import { ActionContext } from 'vuex';
import { make } from 'vuex-pathify';

import { MapCaptionState } from './mapcaption-state';
import { RootState } from '@/store';
import { Attribution, LatLong, ScaleBarProperties } from '@/geo/api';

type MapCaptionContext = ActionContext<MapCaptionState, RootState>;

const getters = {};

const actions = {
    setAttribution: (context: MapCaptionContext, attribution: Attribution) => {
        context.commit('SET_ATTRIBUTION', attribution);
    },
    setLatLongCoords: (context: MapCaptionContext, latLong: LatLong) => {
        context.commit('SET_LATLONG', latLong);
    },
    setScale: (context: MapCaptionContext, scale: ScaleBarProperties) => {
        context.commit('SET_SCALE', scale);
    },
    toggleScale: (context: MapCaptionContext) => {
        context.commit('TOGGLE_SCALE');
    }
};

const mutations = {
    SET_ATTRIBUTION: (state: MapCaptionState, value: Attribution) => {
        state.attribution = value;
    },
    SET_LATLONG: (state: MapCaptionState, value: LatLong) => {
        state.latLongCursor = value;
    },
    SET_SCALE: (state: MapCaptionState, value: ScaleBarProperties) => {
        state.scale = value;
    },
    TOGGLE_SCALE: (state: MapCaptionState) => {
        state.scale.isImperialScale = !state.scale.isImperialScale;
    }
};

export enum MapCaptionStore {
    /**
     * (State) attribution: Attribution
     */
    attribution = 'mapcaption/attribution',
    /**
     * (Action) setAttribution: (attribution: any)
     */
    setAttribution = 'mapcaption/setAttribution!',
    /**
     * (State) latLongCursor: LatLong
     */
    latLongCursor = 'mapcaption/latLongCursor',
    /**
     * (Action) setLatLongCoords: (latLong: LatLong)
     */
    setLatLongCoords = 'mapcaption/setLatLongCoords!',
    /**
     * (State) scale: any
     */
    scale = 'mapcaption/scale',
    /**
     * (Action) setScale: (scale: any)
     */
    setScale = 'mapcaption/setScale!',
    /**
     * (Action) toggleScale: ()
     */
    toggleScale = 'mapcaption/toggleScale!'
}

export function mapcaption() {
    const state = new MapCaptionState(
        {
            text: { disabled: true },
            logo: { disabled: true }
        },
        { label: '0km', width: '0px', isImperialScale: false },
        { lat: 0, lon: 0 }
    );

    return {
        namespaced: true,
        state,
        getters: { ...getters },
        actions: { ...actions, ...make.actions(state) },
        mutations: { ...mutations, ...make.mutations(state) }
    };
}
