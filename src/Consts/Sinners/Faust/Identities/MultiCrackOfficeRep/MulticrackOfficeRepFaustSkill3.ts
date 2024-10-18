import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class MulticrackOfficeRepFaustSkill3 implements Skill {
    readonly Name: string = "40Y-3 Charge";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 4;
    readonly Coins: number = 4;
    readonly CoinValue: number = +3;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +3;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("Coin Power +1 for every [Charge] (max 4)"),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 1),
            new SkillDescriptionPart("[On Hit] Gain +([Charge] + 5) [Charge] Count (max 8)", 2),
            new SkillDescriptionPart("At 3+ [Charge], deal +8% more damage for every [Charge] (max 40%)<br>"+
                "[On Hit] Inflict 1 [Envy Fragility] next turn<br>"+
                "- At 2+ [Charge], inflict 1 additional [Envy Fragility]", 4)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Faust/MultiCrackOfficeRep/40Y3Charge.png";
}