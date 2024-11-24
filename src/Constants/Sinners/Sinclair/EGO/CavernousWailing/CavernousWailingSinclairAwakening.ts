import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CavernousWailingSinclairAwakening implements Skill{
    readonly Name: string = "Cavernous Wailing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 16;
    readonly Coins: number = 1;
    readonly CoinValue: number = +8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = -2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Gain (highest Reson. - 2) Atk Weight (max 2)"),
        new SkillDescriptionPart("[After Attack] Apply 20% of this unit's max HP as Shield to self and (1 + (highest Reason. - 2)) allies with the least current HP, and apply 2 [Blubberbubble] as well<br>"+
            "(max of other allies that gain [Blubberbubble]: 3)<br>"+
            "- If the affected unit already has [Blubberbubble], change the [Blubberbubble] value to 2<br>"+
            "- At 4+ highest Gloom A-Reason., this Skill's above effects change to 'apply 3 [Blubberbubble]' and 'change the [Blubberbubble] value to 3' instead.", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006awakenprofile.png";
}