const roles = {
    admin: {
        permissions: {
            write: true,
            update: true,
            delete: true,
        },
    },
    writer: {
        permissions: {
            write: true,
            update: true,
            delete: true,
        },
    },
    editor: {
        permissions: {
            write: false,
            update: true,
            delete: false,
        },
    },
    user: {
        permissions: {
            write: false,
            update: false,
            delete: false,
        },
    },
    guest: {
        permissions: {
            write: false,
            update: false,
            delete: false,
        },
    },
}

export default roles
