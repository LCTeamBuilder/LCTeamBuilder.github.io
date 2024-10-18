import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RegretMeursaultCorrosion implements Skill{
    readonly Name: string = "Regret";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 30;
    readonly Coins: number = 1;
    readonly CoinValue: number = -10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +5;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] If this unit has a negative status effect, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50% of [Tremor] on target.<br>"+
            "If the target does not have a Stagger Threshold upon [Tremor Burst],<br>"+
            "Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised<br>"+
            "Reduce [Tremor] Count by 1<br>"+
            "[After Attack] Gain 3 [Bind] and 1 [Blunt Power Up] next turn.")];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/Regret/20505erosionprofile.png";
}