import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class HookOfficeFixerHongLuSkill3 implements Skill {
    readonly Name: string = "Rampage";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Pride;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +2;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 6+ Speed, Coin Power +1<br>"+
            "Deal more damage based on target's missing HP (+0.5% damage per 1% missing HP)"),
        new SkillDescriptionPart("[Heads Hit] Heal 1 SP per [Bleed] on target (Max 10)", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Pierce;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/HongLu/HookOfficeFixer/Rampage.png";
}