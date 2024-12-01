import {
    DamageTypeEnum,
    SinEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../../Enums/Index";
import { Skill, SkillDescriptionPart } from "../../../../../Models/Index";

export const RosespannerWorkshopRepRodionSkill3: Skill = {
    Name: "Let's Rack Up Some Scores",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 6+ [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Inflict +2 [Tremor] Count", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1", 2),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]<br>"+
            "After bursting [Tremor], reduce [Tremor] Count by 1<br>"+
            "[On Hit] If target is Staggered, deal 25% of damage dealt as bonus damage")],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Rodion/RosespannerWorkshopRep/LetsRackUpSomeScores.png"
}