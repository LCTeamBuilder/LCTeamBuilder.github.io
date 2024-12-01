import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RegretMeursaultAwakening: Skill = {
    Name: "Regret",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] Remove 2 random removable negative effects applied to self"),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count, Inflict (Wrath A-Reson. /3) additional [Tremor] Count<br>"+
            "[On Hit] Trigger [Tremor Burst] If the target does not have a Stagger Threshold upon [Tremor Burst], Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised.", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Regret/20505awakenprofile.png"
}