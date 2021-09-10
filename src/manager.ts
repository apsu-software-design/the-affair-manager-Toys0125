//your code goes here!
type Affaris = {
    title: string,
    zipcode: string,
    date: string,
    memebers: Array<string>
}
type Members = {
    name: string,
    email: string
}
type Organization = {
    name: string,
    members: Array<string>,
    affairs: Array<string>
}
export class AffairManager {
    members: Array<Members>;
    organization: Array<Organization>;
    affairs: Array<Affaris>;
    constructor() {
        this.members = [];
        this.organization = [];
        this.affairs = [];
    }
    addMember(name: string, email: string) {
        this.members.push({
            name: name,
            email: email
        })
    }
    addAffair(affairName: string, zipcode: string, date: string) {
        this.affairs.push({
            title: affairName,
            zipcode: zipcode,
            date: date,
            memebers: []
        });
    }
    addOrganization(organizationName: string) {
        this.organization.push({
            name: organizationName,
            members: [],
            affairs: []
        })
    }
    addMemberToAffair(memberName: string, affairName: string) {
        let index: number = this.affairs.findIndex(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase()) return true;
        })
        if (index == -1) {
            return;
        }
        if (!this.affairs[index].memebers.includes(memberName)) this.affairs[index].memebers.push(memberName);
    }
    findMemberNames(query: string): string[] {
        let temp: Array<string> = [];
        let reg: RegExp = new RegExp(query.toLowerCase());
        this.members.forEach(element => {
            if (reg.test(element.name.toLowerCase())) {
                temp.push(element.name);
            }
        });
        return temp;
    }
    findAffairNames(query: string): Array<string> {
        let temp: Array<string> = [];
        let reg: RegExp = new RegExp(query.toLowerCase());
        this.affairs.forEach(element => {
            if (reg.test(element.title.toLowerCase())) {
                temp.push(element.title);
            }
        })
        return temp;
    }
    findOrganizationNames(query: string): Array<string> {
        let temp: Array<string> = [];
        let reg: RegExp = new RegExp(query.toLowerCase());
        this.organization.forEach(element => {
            if (reg.test(element.name.toLowerCase())) {
                temp.push(element.name);
            }
        })
        return temp;
    }
    modifyAffair(affairName: string, title: string, time: string = undefined) {
        let index: number = this.affairs.findIndex(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase()) {
                return true;
            }
        })
        if (index == -1) {
            return;
        }
        if (title) this.affairs[index].title = title;
        if (time) this.affairs[index].date = time;
    }
    addAffairToOrganization(affairName: string, organizationName: string) {
        let index: number = this.organization.findIndex(x => { if (x.name.toLowerCase() == organizationName.toLowerCase()) return true })
        if (!this.organization[index].affairs.includes(affairName)) this.organization[index].affairs.push(affairName);
    }
    getMembers(affairName: string): Array<string> {
        let temp: Array<string> = this.affairs.find(x => {
            if (x.title.toLowerCase() == affairName.toLowerCase()) {
                return true;
            }}).memebers.map(x => {
                let member: Members = this.getMember(x)
                return member.name + "\t" + member.email;
            })

        return temp;
    }
    getMember(member: string): Members {
        return this.members.find(x => {
            if (x.name.toLowerCase() == member.toLowerCase()) { return true; }
        })
    }
}


