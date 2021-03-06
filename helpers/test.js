module.exports = {
  placeholderResponse: {
    message: 'under construction',
  },
  fakeUser: {
    username: 'nealtaylorjs',
    email: 'nealtyalor@gmail.com',
    firstName: 'Neal',
    lastName: 'Taylor',
    coins: 4,
    stars: 3.5,
    profileImage: '12k3jhd.jpg',
    bio: 'Hello I am Neal Taylor and I am very young!',
    city: 'New Orleans',
    state: 'LA',
  },
  stringifyUser: function neo4jStringify1(object) {
    const keys = Object.keys(object);
    return keys.map((key) => `user.${key}= {${key}}`).join(', ');
  },
  stringifyTask: function neo4jStringify1(object) {
    const keys = Object.keys(object);
    return keys.map((key) => `task.${key}= {${key}}`).join(', ');
  },
  stringifyAssigneeRating: function neo4jStringify1(object) {
    const keys = Object.keys(object);
    return keys.map((key) => `rating.assignee${key}= {${key}}`).join(', ');
  },
  stringifyRequestorRating: function neo4jStringify1(object) {
    const keys = Object.keys(object);
    return keys.map((key) => `rating.requestor${key}= {${key}}`).join(', ');
  },
};
