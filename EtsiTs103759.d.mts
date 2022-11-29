import type {iSequence} from 'asnjs'

declare module "EtsiTs103759js" {
    export class AidSpecificReport extends iSequence{
        aid: number
        content: any
    }
    export class EtsiTs103759Data extends iSequence{
        version: number
        generationTime: time
        observationLocation: any
        report: AidSpecificReport
    }
}