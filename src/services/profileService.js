const { details, projects } = require('./data')

const ProfileService = {
    getPersonalDetails() {
        return new Promise((res) => res(details))
    },

    getProjects() {
        return new Promise(res => res(projects))
    }
}

export default ProfileService;