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

const PursuanceMeursaultAwakening: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 26,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Heal 2 other allies with the least HP for 30% of Max HP, Apply 2 [Protection] next turn"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Pursuance/20503awakenprofile.png"
}

const PursuanceMeursaultCorrosion: Skill = {
    Name: "Pursuance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Sloth,
    BaseValue: 34,
    Coins: 1,
    CoinValue: -8,
    AttackWeight: 3,
    SkillLevel: -1,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Apply 2 [Fragile] and 3 [Damage Up] next turn to 2 other allies with the least HP"),
        new SkillDescriptionPart("[On Hit] Trigger [Tremor Burst]", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Meursault/EGO/Pursuance/20503awakenprofile.png"
}

export const PursuanceMeursault: Ego = {
    Id: 20503,
    Name: "Pursuance",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: PursuanceMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: PursuanceMeursaultCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Revelation from Above", PassiveTypeEnum.Ego, "After winning a clash with the leftmost skill on the Dashboard, apply 1 [Attack Power Up] or 1 [Defense Power Up] to a random ally next turn."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 0.5 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.75 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Sloth, amount: 4 },
            { sin: SinEnum.Gloom, amount: 1 },
            { sin: SinEnum.Pride, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Meursault/EGO/Pursuance/20503cg.png"
}