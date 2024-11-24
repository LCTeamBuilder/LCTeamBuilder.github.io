import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TCorpClass3CollectionStaffDonQuixoteSkill1 implements Skill {
    readonly Name: string = "Let Us Prepare To Collect";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Gluttony;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Gain Clash Power +1 for every 6 [Tremor] on target (max 2)<br>"+
            "[On Use] Gain +3 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Gain +4 [Aggro] to this Skill Slot next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/LetUsPrepareToCollect.png";
}