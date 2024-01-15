export interface Categories {
  data: CategoriesData[];
  meta: Meta;
}

export interface CategoriesData {
  id: number;
  attributes: CategoriesAttributes;
}

export interface CategoriesAttributes {
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  title: string;
  description: string;
  slug: string;
  qnas: Qnas;
}

export interface Qnas {
  data: QnasData[];
}

export interface QnasData {
  id: number;
  attributes: QnaAttributes;
}

export interface QnaAttributes {
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  slug: string;
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
