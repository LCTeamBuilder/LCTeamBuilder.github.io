import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class LccbAssistantManagerRyoshuSkill1 implements Skill {
    readonly Name: string = "Shove";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 5;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 7+ Poise, Coin Power +1"),
        new SkillDescriptionPart("[On Crit] Target loses 8 SP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/Shove.png";
}