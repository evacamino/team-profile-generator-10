

class Manager {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return "Manager";
  }
}


class Intern {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

class Engineer {
  constructor(name,id,email, github) {
    super(name, id, email);
    this.github = github
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Enginer"
  }
}


module.exports = {Manager,Engineer,Intern}

//inquierer