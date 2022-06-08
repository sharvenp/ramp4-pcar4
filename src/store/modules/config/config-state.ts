import type { RampBasemapConfig } from '@/geo/api';
import type { RampConfig } from '@/types';

export class ConfigState {
    config: RampConfig;
    activeBasemapConfig: RampBasemapConfig | undefined;
    // change if decide need to support registering multiple configs per lang
    registeredConfigs: { [key: string]: RampConfig };
    registeredLangs: { [key: string]: string };

    constructor(config: any) {
        this.config = config;
        this.registeredConfigs = {};
        this.registeredLangs = {};
    }
}