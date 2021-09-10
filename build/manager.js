"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AffairManager = void 0;
class AffairManager {
    constructor() {
        this.members = [];
        this.organization = [];
        this.affairs = [];
    }
    addMember(name, email) {
        this.members.push({
            name: name,
            email: email
        });
    }
    addAffair(affairName, zipcode, date) {
        this.affairs.push({
            title: affairName,
            zipcode: zipcode,
            date: date,
            memebers: []
        });
    }
    addOrganization(organizationName) {
        this.organization.push({
            name: organizationName,
            members: [],
            affairs: []
        });
    }
    addMemberToAffair(memberName, affairName) {
        let index = this.affairs.findIndex(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase())
                return true;
        });
        if (index == -1) {
            return;
        }
        if (!this.affairs[index].memebers.includes(memberName))
            this.affairs[index].memebers.push(memberName);
    }
    findMemberNames(query) {
        let temp = [];
        let reg = new RegExp(query.toLowerCase());
        this.members.forEach(element => {
            if (reg.test(element.name.toLowerCase())) {
                temp.push(element.name);
            }
        });
        return temp;
    }
    findAffairNames(query) {
        let temp = [];
        let reg = new RegExp(query.toLowerCase());
        this.affairs.forEach(element => {
            if (reg.test(element.title.toLowerCase())) {
                temp.push(element.title);
            }
        });
        return temp;
    }
    findOrganizationNames(query) {
        let temp = [];
        let reg = new RegExp(query.toLowerCase());
        this.organization.forEach(element => {
            if (reg.test(element.name.toLowerCase())) {
                temp.push(element.name);
            }
        });
        return temp;
    }
    modifyAffair(affairName, title, time = undefined) {
        let index = this.affairs.findIndex(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase()) {
                return true;
            }
        });
        if (index == -1) {
            return;
        }
        if (title)
            this.affairs[index].title = title;
        if (time)
            this.affairs[index].date = time;
    }
    addAffairToOrganization(affairName, organizationName) {
        let index = this.organization.findIndex(x => { if (x.name.toLowerCase() == organizationName.toLowerCase())
            return true; });
        if (!this.organization[index].affairs.includes(affairName))
            this.organization[index].affairs.push(affairName);
    }
    getMembers(affairName) {
        let temp = this.affairs.find(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase()) {
                return true;
            }
        }).memebers.map(x => {
            let member = this.getMember(x);
            return member.name + "\t" + member.email;
        });
        return temp;
    }
    getMember(member) {
        return this.members.find(x => {
            if (x.name.toLowerCase() == member.toLowerCase()) {
                return true;
            }
        });
    }
}
exports.AffairManager = AffairManager;
//# sourceMappingURL=manager.js.map