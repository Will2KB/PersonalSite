import { Establishment } from "./establishment";
import { City } from "./city";
import { Skill } from "./skill";
import { SkillType } from './skillType';

export class Experience {

	public establishment!: Establishment;
	public city!: City;
	public description!: string;
	public skills!: Skill[];

	constructor() {
	};

	public static fromJson(json:any):Experience{
		const exp = new Experience();
		exp.description = json.description;
		exp.city = City.fromJson(json.city);	
		exp.establishment = Establishment.fromJson(json.establishment);
		exp.skills = (json.skills ?? []).filter((jsonSkill: any)=>jsonSkill.enable)
								.map((jsonSkill :any) => Skill.fromJson(jsonSkill));
								
		console.log(exp);
		return exp;
	}

	public getSkillsOfType(skillType: SkillType) {
		if (skillType === SkillType.all) {
			return this.skills ?? [];
		} else {
			return (this.skills ?? []).filter(skill => skill.typeName === skillType) ?? [];
		}
	}

	public hasSkillsOfType(skillType: SkillType) {
		const skillOfType: Skill[] = this.getSkillsOfType(skillType);
		return !!skillOfType && skillOfType.length > 0;
	}

	public showSkills(skillType: SkillType): string {
		const skillOfType: Skill[] = this.getSkillsOfType(skillType);
		return skillOfType?.length ? skillOfType.map(n => n.name).join(', ') : 'Non spécifié';
	}
}