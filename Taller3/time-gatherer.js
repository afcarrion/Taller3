'use strict';

const Gatherer = require('lighthouse').Gatherer;

class MetroTime extends Gatherer {
    afterPass(options) {
        const driver = options.driver;

        return driver.evaluateAsync('window.timeLoad')
            .then(timeLoad => {
                if (!timeLoad) {

                    throw new Error('Unable to find api metrics in page');
                }
                return timeLoad;
            });
    }
}

module.exports = MetroTime;