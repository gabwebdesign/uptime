const models = {
    usersModel:require('./nosql/users'),
    projectsModel:require('./nosql/projects'),
    skillsModel:require('./nosql/skills'),
    statesModel:require('./nosql/states')
}

module.exports = models;