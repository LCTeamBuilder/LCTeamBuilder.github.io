import {
    DamageTypeEnum,
    PassiveTypeEnum,
    RiskLevelEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from '../../../../Enums/Index';
import { Ego, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const NineTwoSinclairAwakening: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 26,
    Coins: 1,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Lust Reson.), +1 Atk Weight<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson.), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] If target has no [Burn], inflict 4 [Burn]<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[Tails Hit] If target has 10+ [Burn], inflict 1 [Attack Power Down] and 1 [Defense Power Down] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/92/21005awakenprofile.png'
}

const NineTwoSinclairCorrosion: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 33,
    Coins: 1,
    CoinValue: -16,
    AttackWeight: 3,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] At 4+ (Lust Reson.), +1 Atk Weight<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson.), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] If target has no [Burn], inflict 6 [Burn]<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[Tails Hit] If target has 10+ [Burn], inflict 2 [Lust Fragility] next turn", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Sinclair/EGO/92/21005erosionprofile.png'
}

export const NineTwoSinclair: Ego = {
    Id: 21005,
    Name: "9:2",
    Sinner: SinnerEnum.Sinclair,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: NineTwoSinclairAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: NineTwoSinclairCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Prophecy of Ruin", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, lower this unit and the target's SP by 4.<br>"+
        "(Does not work against without Sanity)<br>"+
        "Gain 5 Lust E.G.O resource On Kill with a Lust affinity Skill"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 5 },
            { sin: SinEnum.Envy, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Sinclair/EGO/92/21005cg.png'
}