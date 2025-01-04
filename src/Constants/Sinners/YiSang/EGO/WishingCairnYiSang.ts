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

const WishingCairnYiSangAwakening: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 22,
    Coins: 1,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("Targets the rearmost unit (In regular encounters)"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Sloth Fragility]<br>"+
            "[Heads Hit] Inflict 3 [Paralyze]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103awakenprofile.png"
}

const WishingCairnYiSangCorrosion: Skill = {
    Name: "Wishing Cairn",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 29,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: -2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Sloth Fragility]<br>"+
            "[On Hit] Inflict 2 [Paralyze]<br>"+
            "[Heads Hit] Inflict 3 [Bind] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103erosionprofile.png"
}

export const WishingCairnYiSang: Ego = {
    Id: 20103,
    Name: "Wishing Cairn",
    Sinner: SinnerEnum.YiSang,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: WishingCairnYiSangAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: WishingCairnYiSangCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Dol Hareubang", PassiveTypeEnum.Ego, "At the start of the turn, gain 3 [Blunt Protection] and [Sloth Protection]."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 1 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/YiSang/EGO/WishingCairn/20103cg.png"
}