import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum, 
        SkillTypeEnum, 
        SkillTierEnum  } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class ShiAssocSouthSection5HeathcliffSkill3 implements Skill {
    readonly Name: string = "Flashing Strike";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Envy;
    readonly BaseValue: number = 5;
    readonly Coins: number = 2;
    readonly CoinValue: number = +6;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +1;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("At 10+ [Poise] Count, Skill Power +2<br>"+
            "At less than 50% HP, +1 Atk Weight."),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP; +50% Skill Damage for this Coin", 1),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP; +50% Skill Damage for this Coin", 2)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Slash;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/FlashingStrike.png";
}