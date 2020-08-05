const getNavigation = () => {

    const authLinks = [
        {
            title: 'Начало',
            link: '/'
        },
        {
            title: 'Добави обява',
            link: '/create-ad'
        },
        {
            title: 'Профил',
            link: `/profile`
        },
        {
            title: 'Отпиши се',
            link: '/logout'
        }
    ]

    const guestLinks = [
        {
            title: 'Начало',
            link: '/'
        },
        {
            title: 'Регистрация',
            link: '/register'
        },
        {
            title: 'Впиши се',
            link: '/login'
        },
    ]

    return authLinks
}

export default getNavigation;