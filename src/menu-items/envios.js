// assets
import { IconDashboard } from '@tabler/icons';
import { IconPencil } from '@tabler/icons';
import { IconClipboardList } from '@tabler/icons';
import { IconList } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconPencil, IconClipboardList, IconList };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const envios = {
    id: 'envios',
    title: 'Envios',
    type: 'group',
    children: [
        {
            id: 'dashborad',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'shipments',
            title: 'Listar Envios',
            type: 'item',
            url: '/listagem',
            icon: icons.IconList,
            breadcrumbs: false
        },
        {
            id: 'cadastro3',
            title: 'Cadastrar Animais',
            type: 'item',
            url: '/cadastro',
            icon: icons.IconPencil,
            target: true
        },
        {
            id: 'exames3',
            title: 'Registrar Exames',
            type: 'item',
            url: '/exames',
            icon: icons.IconClipboardList,
            target: true
        }
    ]
};

export default envios;
