const getNavigation = () => {

    const authLinks = [
        {
            title: 'Начало',
            link: '/'
        },
        {
            title: 'Добави обява',
            link: '/share'
        },
        {
            title: 'Профил',
            // link: `/profile/${user && user.id}`
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

    return guestLinks
}

export default getNavigation;