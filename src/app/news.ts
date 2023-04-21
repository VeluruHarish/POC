export class news {
    constructor(public location: string, public doc_type: string, public source_name: string, public url: string, public published_at: any = new Date(), public full_text: any, public author: string, public summary: string, public header: string, public keywords: any, public country: string) { }
}