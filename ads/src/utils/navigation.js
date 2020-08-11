const getNavigation = (user) => {

    const authLinks = [
        {
            title: 'Начало',
            link: '/'
        },
        {
            title: 'Добави обява',
            link: '/create'
        },
        {
            title: 'Профил',
            link: `/profile/${user} && user.id`
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

    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
}

export default getNavigation;