export interface IDrivers {
  data: Datum[]
  meta: Meta
}

export interface IDriver {
  data: Datum
  meta: Meta
}

export interface Datum {
  id: number
  attributes: Attributes
}

export interface Attributes {
  createdAt: string
  updatedAt: string
  publishedAt: string
  nft_id: string
  payable_address: null
  available: null
  name: null
}

export interface Meta {
  pagination: Pagination
}

export interface Pagination {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
