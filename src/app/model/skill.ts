import { SkillType } from './skillType';

export class Skill {
	public name!: string;
	public typeName!: SkillType;
	public enable!: boolean;
	
	constructor(name:string, enable: boolean, typeName:string) {
		this.name = name;
		this.typeName = SkillType[typeName as keyof typeof SkillType];
		this.enable = enable;
	 };
	
	public static fromJson(json:any):Skill{
		return new Skill(json.name, json.enable, json.typeName);
	}
}