'use strict';

const Audit = require('lighthouse').Audit;

const MAX_TIME  = 3000;

class LoadAudit extends Audit {
    static get meta() {
        return {
            category: 'MyPerformance',
            name: 'time-audit',
            description: 'Tiempo de respuesta del API',
            failureDescription: 'La API responde de manera lenta',
            helpText: 'Tiempo de respuesta desde la primer peticion hasta la primer respuesta',
            requiredArtifacts: ['MetroTime']
        };
    }

    static audit(artifacts) {
        const responseTime = artifacts.MetroTime;
        const belowThresholdTime = responseTime <= MAX_TIME;

        return {
            rawValue: responseTime,
            score: belowThresholdTime
        };
    }
}

module.exports = LoadAudit;
