export const environment = {
    production: false,
    api: 'http://localhost:9090/api/v1/',
    endPoints: {
        users: {
            path: 'users/',
            login: 'login/'
        },
        clients: {
            path: 'clients/',
            list: 'list/',
            search: 'search/?alias=',
            advancedSearch:'advanced-search/',
            created: 'created/',
            modified: 'modified/',
            deleted: 'deleted/?id=',
            export: 'export/'
        }
    }
};
