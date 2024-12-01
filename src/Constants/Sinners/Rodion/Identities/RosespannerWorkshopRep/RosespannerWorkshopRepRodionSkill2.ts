import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopRepRodionSkill2: Skill = {
    Name: "Vibration Compression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 10+ [Tremor] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]<br>"+
            "At 3+ [Charge] Count, reuse this Coin if it lands Heads (Up to 2 times)<br>"+
            "Inflict 2 more [Tremor] each time the Coin is reused<br>"+
            "If the Coin is reused twice, inflict [Tremor], then trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/VibrationCompression.png"
}