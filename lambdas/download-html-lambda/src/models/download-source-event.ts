import { Source, Target } from "@infra/models";

export interface DownloadSourceEvent {
    source: Source;
    target: Target;
}