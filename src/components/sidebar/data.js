export var type = 'mini';
export var navTree = [{
    product: {
        folded: true,
        name: '标题',
        tooltip: {
            title: '描述',
            placement: 'right'
        }
    },
    serviceList: [{
        name: '日历',
        href: '#canlendar',
        icon: 'fa-calendar',
        active: true,
        tooltip: {
            title: '描述日历',
            placement: 'right'
        }
    }, {
        name: '云',
        href: '#cloud',
        icon: 'fa-cloud',
        active: false,
        tooltip: {
            title: '描述云',
            placement: 'right'
        }
    }]
}, {
    product: {
        folded: false,
        name: '标题2',
        tooltip: {
            title: '描述2',
            placement: 'right'
        }
    },
    serviceList: [{
        name: '数据库',
        href: '#',
        icon: 'fa-database',
        active: false,
        tooltip: {
            title: '数据库',
            placement: 'right'
        }
    }]
}];
