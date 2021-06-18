import { LatLong } from '@/geo/api';

export interface GenericObjectType {
    [key: string]: string;
}

// config object is used by all query classes
export interface MainConfig {
    geoNameUrl: string;
    geoLocateUrl: string;
    categories: string[];
    sortOrder: string[];
    maxResults: number;
    officialOnly: boolean;
    language: string;
    types: Types;
    provinces: Provinces;
}

export interface NameResponse {
    name: string;
    location: string;
    province: { code: string };
    concise: { code: string };
    latitude: number;
    longitude: number;
    bbox: number[];
}

export interface Types {
    allTypes: GenericObjectType;
    validTypes: GenericObjectType;
    filterValidTypes(exclude?: string | string[]): GenericObjectType;
}

export interface Provinces {
    list: GenericObjectType;
    fsaToProvinces(fsa: string): GenericObjectType;
}

export interface RawNameResult {
    items: NameResponse[];
}

export interface FSAResult {
    fsa: string; // "H0H"
    code: string; // "FSA"
    desc: string; // "Forward Sortation Area"
    province: string; // Ontario
    _provinces: GenericObjectType; // {ON: "Ontario"} or {ON: "Ontario", MB: "Manitoba"}
    LatLon: LatLong;
}

export interface NTSResult {
    nts: string; // 064D or 064D06
    location: string; // "NUMABIN BAY"
    code: string; // "NTS"
    desc: string; // "National Topographic System"
    LatLon: LatLong;
    bbox: number[];
}

export interface LatLongResult {
    latlong: string; // "54.54,-91.45"
    desc: string; // "Latitude/Longitude",
    LatLon: LatLong;
    bbox: number[];
}

// defines results from a geoNames search
export interface NameResult {
    name: string;
    location: string;
    province: string; // "Ontario"
    type: string; // "Lake"
    LatLon: LatLong;
    bbox: number[];
}

export interface LocateResponse {
    title: string;
    bbox?: number[];
    geometry: { coordinates: number[] };
}

export type LocateResponseList = LocateResponse[];
export type NameResultList = NameResult[];
export type NTSResultList = NTSResult[];
export type queryFeatureResults =
    | FSAResult
    | NTSResult
    | LatLongResult
    | undefined;
