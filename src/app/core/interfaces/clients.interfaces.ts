export interface Clients {
    id?: number;
    sharedKey?: string;
    bussinessId: string;
    email: string;
    phone: string;
    dataAdded?: string;
}

export interface AdvancedSearch {
    name?: string;
    phone?: string;
    email?: string;
    startDate?: string;
    endDate?: string;
}