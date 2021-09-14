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
            name: affairName,
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
            if (x.name.toLowerCase() == affairName.toLowerCase())
                return true;
        });
        if (index == -1) {
            console.warn("Missing Affair");
            return;
        }
        if (!this.affairs[index].memebers.includes(memberName)) {
            this.affairs[index].memebers.push(memberName);
        }
        else {
            console.log("Member already exists.");
            return;
        }
    }
    findMemberNames(query) {
        return this.findListName(this.members, query);
    }
    findAffairNames(query) {
        return this.findListName(this.affairs, query);
    }
    findOrganizationNames(query) {
        return this.findListName(this.organization, query);
    }
    findListName(passedArray, query) {
        let reg = new RegExp(query.toLowerCase());
        return passedArray.filter(element => {
            if (reg.test(element.name.toLowerCase())) {
                return true;
            }
        }).map(x => {
            return x.name;
        });
    }
    modifyAffair(affairName, title, time = undefined) {
        let index = this.affairs.findIndex(x => {
            if (x.name.toLowerCase() == affairName.toLowerCase()) {
                return true;
            }
        });
        if (index == -1) {
            console.warn("Missing Affair.");
            return;
        }
        if (title)
            this.affairs[index].name = title;
        if (time)
            this.affairs[index].date = time;
    }
    addAffairToOrganization(affairName, organizationName) {
        let index = this.organization.findIndex(x => { if (x.name.toLowerCase() == organizationName.toLowerCase())
            return true; });
        if (!this.organization[index].affairs.includes(affairName)) {
            this.organization[index].affairs.push(affairName);
        }
        else {
            console.log("Affair already in Organization");
            return;
        }
    }
    getMembers(affairName) {
        let temp = this.affairs.find(x => {
            if (x.name.toLowerCase() == affairName.toLowerCase()) {
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