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

const HexNailSinclairAwakening: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 9,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Before Attack] For every 3 Envy Reson. including this Skill, Atk Weight +1 (max 2)<br>"+
            "[After Attack] If the target has [Curse], immediately activate it twice and reduce it by 2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Curse]<br>"+
            "- Inflict 1 additional [Curse] for every 2 negative effect on the target that aren't [Curse] or [Nails] (max 2)<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] At 4+ [Curse], inflict 1 [Clash Power Down] (once per turn)<br>"+
            "[Heads Hit] Inflict 2 [Bind] next turn (once per turn)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/HexNail/21007awakenprofile.png"
}

const HexNailSinclairCorrosion: Skill = {
    Name: "Hex Nail",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 25,
    Coins: 2,
    CoinValue: -6,
    AttackWeight: 3,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] If the target has [Curse], immediately activate it twice and reduce it by 2"),
        new SkillDescriptionPart("[Tails Hit] Inflict 3 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Curse]<br>"+
            "[On Hit] Inflict 3 [Nails]<br>"+
            "[On Hit] At 4+ Envy Reson. including this Skill, inflict 1 [Clash Power Down] (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Bind] next turn (once per turn)<br>"+
            "[Tails Hit] Inflict 2 [Defense Level Down] next turn (once per turn)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "./assets/Sinners/Sinclair/EGO/HexNail/21007erosionprofile.png"
}

export const HexNailSinclair: Ego = {
    Id: 21007,
    Name: "Hex Nail",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: HexNailSinclairAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: HexNailSinclairCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Grimy Hide", PassiveTypeEnum.Ego, "Combat Start: if this unit has a negative effect, gain 1 [Clash Power Up] and 1 [Defense Power Up]<br>"+
        "- Gain 1 [Protection] for every 3 negative effect on self (max 2)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 1 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 0.75 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 2 }],
    Keywords: [],
    FullImageDir: "./assets/Sinners/Sinclair/EGO/HexNail/21007cg.png"
}