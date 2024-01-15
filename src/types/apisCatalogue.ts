export interface ApisCatalogue {
  data: ShallowAPI[];
  meta: Meta;
}

export interface ShallowAPI {
  id: number;
  attributes: ShallowAPIAttributes;
}

export interface ShallowAPIAttributes {
  Category: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  apis: Apis;
}

export interface DatumAttributes {
  id?: number;
  name: string;
  apisID: number;
  revisionID: number;
  documentationLink?: string;
  highlighted: boolean;
  swagger?: Object;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  description: string;
  version: string;
  documentation?: Apis;
  tags: Apis;
  tag: string;
  appCount?: number;
}

export interface Datum {
  id: number;
  attributes: DatumAttributes;
}

export interface Apis {
  id?: number;
  data: Datum[] | null;
}
export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
