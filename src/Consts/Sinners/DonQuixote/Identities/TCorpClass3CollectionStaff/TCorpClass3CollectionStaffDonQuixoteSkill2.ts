import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TCorpClass3CollectionStaffDonQuixoteSkill2 implements Skill {
    readonly Name: string = "T Corp. Accelerated Amputator";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 3;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +3 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Consume up to 3 [Tremor] on target, and gain double the amount consumed as [Tremor] Count on self<br>"+
            "Inflict ([Tremor] - 1) [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 2),
        new SkillDescriptionPart("[On Hit] If this Skill's Coin effects consumed [Tremor] on target, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/DonQuixote/TCorpClass3CollectionStaff/TCorpAcceleratedAmputator.png";
}