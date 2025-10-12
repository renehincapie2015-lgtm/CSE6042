export const CommerceNav = [
    {
        icon: 'pe-7s-look',
        label: 'Consultas',
        content: [
            {
                label: 'Administradores',
                to: '/tables/consulta-administradores',
            },
            {
                label: 'Clientes',
                to: '/tables/consulta-clientes',

            },
            {
                label: 'Categorias',
                to: '/tables/consulta-categorias',
            },
            {
                label: 'Formas Pago',
                to: '/tables/consulta-formas-pago',
            },
            {
                icon: 'pe-7s-portfolio',
                label: 'Productos',
                to: '/tables/consulta-producto',
            },
        ],
    },
    {
        icon: 'pe-7s-tools',
        label: 'Gestion',
        content: [
            {
                icon: 'pe-7s-add-user',
                label: 'Nuevo Usuario',
                to: '/forms/gestion-usuarios',
            },
        ],
    },
];