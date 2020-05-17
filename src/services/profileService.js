const { details, projects } = require('../components/helpers/data');

const ProfileService = {
  getPersonalDetails() {
    return new Promise((res) => res(details));
  },

  getProjects() {
    return new Promise((res) => res(projects));
  }
};

export default ProfileService;
