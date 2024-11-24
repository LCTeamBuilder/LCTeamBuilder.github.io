import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class TingtangGangGangleaderHongLuSkill2 implements Skill {
    readonly Name: string = "Shank";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill2;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 3;
    readonly Coins: number = 3;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("If target has 7+ [Bleed] , deal +20% damage"),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 1),
        new SkillDescriptionPart("[Heads Hit] Damage +3", 2),
        new SkillDescriptionPart("[Heads Hit] If target is below 25% HP, use this Coin an additional time if target survives<br>"+
            "Heads: +50% Damage for this Coin<br>"+
            "[Reuse - Heads Hit] +50% Damage for this Coin", 3)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/TingtangGangGangleader/Shank.png";
}