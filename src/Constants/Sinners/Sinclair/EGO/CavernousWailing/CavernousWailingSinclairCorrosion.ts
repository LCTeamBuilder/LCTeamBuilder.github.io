import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class CavernousWailingSinclairCorrosion implements Skill{
    readonly Name: string = "Cavernous Wailing";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Gloom;
    readonly BaseValue: number = 24;
    readonly Coins: number = 1;
    readonly CoinValue: number = -8;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = 0;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[Before Attack] Gain (highest Reson. - 2) Atk Weight (max 2)<br>"+
            "[Before Attack] Gain +10 [Aggro] to this Skill Slot next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sinking] and +3 [Sinking] Count<br>"+
            "[After Attack] Gain (20 + 5(highest Reason.))% of this unit's max HP as Shield to self and gain 2 [Blubberbubble]. (max 40%)<br>"+
            "- If this unit already has [Blubberbubble] , change the [Blubberbubble] value to 2<br>"+
            "- At 4+ highest Gloom A-Reason., this Skill's above effects change to 'apply 3 [Blubberbubble]' and 'change the [Blubberbubble] value to 3' instead.<br>"+
            "- At 4+ Gloom Reason., gain additional Shield equal to 10% of this unit's max HP", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Sinclair/EGO/CavernousWailing/21006erosionprofile.png";
}