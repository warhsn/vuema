export interface _Pager {
    current_page: number
    from: number
    to: number
    last_page: number
    total: number
    per_page: number
    first_page_url: string
    last_page_url?: string
    next_page_url?: string
    prev_page_url?: string
    path?: string
    links: Array<any>
    data: Array<any>
}