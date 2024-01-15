export interface StatusResponse {
  data: Status[];
}

export interface Status {
  operation: string;
  operationId: number;
  totalCount: number;
  statusLastHour: null;
  latencyLastHour: null;
  statusLast24Hours: number | null;
  latencyLast24Hours: number | null;
  statusLastWeek: number | null;
  latencyLastWeek: number | null;
  statusLastMonth: number;
  latencyLastMonth: number;
}
