import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ThePriestOfLaManchalandGregorDefense implements Skill {
    readonly Name: string = "Faded Patience";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Defense;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill1;
    readonly Affinity: SinEnum = SinEnum.Lust;
    readonly BaseValue: number = 15;
    readonly Coins: number = 1;
    readonly CoinValue: number = +5;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Combat Start] At 40%+ HP, gain 5 [Bleed] and activate [Bleed] up to 3 times on self (once per turn; lose [Bleed] Count equal to the number of times it was activated)<br>"+
            "[Combat Start] At less than 40% HP, consume up to 20 [Bloodfeast] and heal the same value as HP (once per turn)<br>"+
            "[Combat Start] Gain 3 [Ailing Heart] (once per turn)")];
    readonly DamageType?: DamageTypeEnum | undefined = undefined;
    readonly DefenseType?: DefenseTypeEnum | undefined = DefenseTypeEnum.Guard;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Gregor/ThePriestOfLaManchaland/FadedPatienceUT4.png";
}