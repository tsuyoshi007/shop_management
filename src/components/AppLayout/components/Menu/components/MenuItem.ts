import Home from '@material-ui/icons/Home'

export interface MenuItem {
    icon: any,
    label: string,
    url: string
}

const createMenuStructure = ():MenuItem[] => {
    return [
        {
            icon: Home,
            label: "Home",
            url: '/'
        }
    ]
}

export default createMenuStructure