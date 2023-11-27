import { createInstance } from '@/main';

window.debugInstance = null;

const urlParams = new URLSearchParams(window.location.search);
const url = urlParams.get('url');
const loadDefaultFixtures = !!urlParams.get('defaultFixtures');
const loadDefaultEvents = !!urlParams.get('defaultEvents');
const startRequired = !!urlParams.get('startRequired');

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(text => {
        let config = JSON.parse(text);

        let options = {
            loadDefaultFixtures,
            loadDefaultEvents,
            startRequired
        };

        const rInstance = createInstance(
            document.getElementById('app'),
            config,
            options
        );

        window.debugInstance = rInstance;
    })
    .catch(e => {
        console.log('Error loading sample.', e);
    });
