import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Ego, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const SnagharpoonIshmaelAwakening: Skill = {
    Name: "Snagharpoon",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 19,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[On Hit] Inflict 6 [Bind] next turn<br>"+
            "[On Hit] Inflict 3 [Tremor]<br>"+
            "[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Ishmael/EGO/Snagharpoon/20801awakenprofile.png"
}

export const SnagharpoonIshmael: Ego = {
    Id: 20801,
    Name: "Snagharpoon",
    Sinner: SinnerEnum.Ishmael,
    RiskLevel: RiskLevelEnum.ZAYIN,
    AwakeningSkill: SnagharpoonIshmaelAwakening,
    AwakeningSanityCost: 10,
    CorrosionSkill: undefined,
    CorrosionSanityCost: undefined,
    Passive: new Passive("Compulsion", PassiveTypeEnum.Ego, "Clash Power +2 in clashes whose win rate is in the unit's favor. Clash Power -2 in clashes whose win rate is against the unit's favor."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 2 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Ishmael/EGO/Snagharpoon/20801cg.png"
}