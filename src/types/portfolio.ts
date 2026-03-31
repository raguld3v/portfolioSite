export type NavItem = {
    label: string;
    id: string;
};

export type Resume = {
    name: string;
    link: string;
}

export type Home = {
    availability: string,
    name: string,
    role: string,
    desc: string,
    primaryBtn: {
        name: string,
        route: string
    },
    secondaryBtn: {
        name: string,
        link: string
    }
}

export type PortfolioData = {
    name: string;
    brandIcon: string;
    downloadBtn: Resume;
    navItems: NavItem[];
    home: Home;
};