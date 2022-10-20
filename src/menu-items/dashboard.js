// assets
import { IconDashboard } from '@tabler/icons';
import { IconPencil } from '@tabler/icons';
import { IconClipboardList } from '@tabler/icons';

// constant
const icons = { IconDashboard, IconPencil, IconClipboardList };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard',
            icon: icons.IconDashboard,
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

export default dashboard;
