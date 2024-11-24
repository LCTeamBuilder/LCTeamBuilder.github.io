import { DamageTypeEnum, 
        DefenseTypeEnum, 
        SinEnum,
        SkillTierEnum,
        SkillTypeEnum } from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export class RegretMeursaultAwakening implements Skill{
    readonly Name: string = "Regret";
    readonly SkillType: SkillTypeEnum = SkillTypeEnum.Attack;
    readonly SkillTier: SkillTierEnum = SkillTierEnum.Skill3;
    readonly Affinity: SinEnum = SinEnum.Wrath;
    readonly BaseValue: number = 20;
    readonly Coins: number = 1;
    readonly CoinValue: number = +10;
    readonly AttackWeight: number = 1;
    readonly SkillLevel: number = +2;
    readonly SkillDescription: SkillDescriptionPart[] = 
        [new SkillDescriptionPart("[Before Attack] Remove 2 random removable negative effects applied to self"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count; Inflict (Wrath A-Reson. /3) additional [Tremor] Count<br>"+
            "[On Hit] Trigger [Tremor Burst] If the target does not have a Stagger Threshold upon [Tremor Burst], Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised.", 1)];
    readonly DamageType?: DamageTypeEnum | undefined = DamageTypeEnum.Blunt;
    readonly DefenseType?: DefenseTypeEnum | undefined = undefined;
    readonly SkillImageDir: string = "./assets/Sinners/Meursault/EGO/Regret/20505awakenprofile.png";
}