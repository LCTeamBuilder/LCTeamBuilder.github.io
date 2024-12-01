import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RegretMeursaultCorrosion: Skill = {
    Name: "Regret",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 30,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] If this unit has a negative status effect, +2 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "Amount of Stagger Threshold raised by [Tremor Burst] increases by 50% of [Tremor] on target.<br>"+
            "If the target does not have a Stagger Threshold upon [Tremor Burst],<br>"+
            "Deal Wrath Damage by (12 + 3x(Wrath A-Reson.))% of the final Stagger Threshold raised<br>"+
            "Reduce [Tremor] Count by 1<br>"+
            "[After Attack] Gain 3 [Bind] and 1 [Blunt Power Up] next turn.")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Regret/20505erosionprofile.png"
}