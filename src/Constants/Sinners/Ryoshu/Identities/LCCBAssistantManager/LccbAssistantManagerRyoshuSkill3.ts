import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const LccbAssistantManagerRyoshuSkill3: Skill = {
    Name: "O.O.F",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 4 [Poise]<br>"+
            "Gain +1 Coin Power for every 7 [Poise] on self (Max 2)"),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Crit] Double the application of [Tremor] and [Rupture] Potency and Count<br>"+
            "[On Hit] Inflict 4 [Tremor] and +2 [Tremor] Count<br>"+
            "[On Hit] Inflict 4 [Rupture] and +2 [Rupture] Count<br>"+
            "[On Hit] Trigger [Tremor Burst]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/OOF.png"
}