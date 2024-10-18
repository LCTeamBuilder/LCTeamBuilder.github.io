import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TCorpClass2CollectionStaffRodionSkill1 implements Skill {
    readonly Name: string = "Prepare To Collect";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 3;
    readonly Coins: number = 2;
    readonly CoinValue: number = +4;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Tremor] Count<br>"+
            "[On Use] Clash Power +1 for every 6 [Tremor] on target (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Gain +1 [Tremor] Count<br>"+
            "[Hit After Clash Win] Inflict +1 [Tremor] Count", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Rodion/TCorpClass2CollectionStaff/PrepareToCollect.png";
}