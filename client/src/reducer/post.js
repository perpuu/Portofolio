const defaultValue = {
    item: [{
            "id": 1,
            "title": "book-book",
            "description": "An online book selling website that anyone can use",
            "techStack": "Vue.js , Pinia, Vue-Router, JWT, Bcyrptjs, Tailwind, BOOKS API,Convert Currency(freecurrencyapi), Midtrans, Nodemailer, Oauth Google",
            "webDeploy": "https://bookbook-8b74f.web.app/"
        },
        {
            "id": 2,
            "title": "Nubirtnews (CMS-Admin Site)",
            "description": "an application that consists of cms and users, in cms-site there is a CRUD feature where we as admins on the cms web, and on the user-site we can see a list of news that is displayed on the landing page and we can see the details of the news being targeted",
            "techStack": "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,JWT,Bcrypt.js,Sequelize.js,AWS,Firebase,Supabase",
            "webDeploy": "https://client-admin-2670a.web.app/login"
        },
        {
            "id": 3,
            "title": "Nubirtnews (Client Site)",
            "description": "an application that consists of cms and users, in cms-site there is a CRUD feature where we as admins on the cms web, and on the user-site we can see a list of news that is displayed on the landing page and we can see the details of the news being targeted",
            "techStack": "React.js,Redux,ReduxThunk,React-Router,Tailwind.css,React-Router,JWT,Bcrypt.js,Sequelize.js,AWS,Firebase,Supabase",
            "webDeploy": "https://client-user-c60b3.web.app/"
        }
    ]
}
export default function postReducer(state = defaultValue, action) {
    return state
}