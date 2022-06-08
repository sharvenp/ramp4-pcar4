import { markRaw } from 'vue';
import { LegendAPI } from './api/legend';
import { legend } from './store/index';
import LegendScreenV from './screen.vue';

import messages from './lang/lang.csv?raw';

class LegendFixture extends LegendAPI {
    added() {
        console.log(`[fixture] ${this.id} added`);
        this.$iApi.panel.register(
            {
                legend: {
                    screens: {
                        'legend-screen': markRaw(LegendScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    alertName: 'legend.title',
                    button: {
                        tooltip: 'legend.title',
                        // https://material.io/resources/icons/?icon=layers&style=baseline
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'
                    }
                }
            },
            {
                i18n: { messages }
            }
        );

        this.$vApp.$store.registerModule('legend', legend());

        // parse legend section of config and store information in legend store
        // here we create a copy of the config because the config parser will mutate the layer ids in the config
        this._parseConfig(JSON.parse(JSON.stringify(this.config)));
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(JSON.parse(JSON.stringify(value)))
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: remove appbar button (blocked by #882)
            unwatch();
            this.$iApi.panel.remove('legend');
            this.$vApp.$store.unregisterModule('legend');
        };
    }
}

export default LegendFixture;