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

const NineTwoFaustAwakening: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 18,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Before Attack] At 4+ (Highest Lust A-Reson), +1 Atk Weight<br>"+
            "At 6+ (Highest Lust A-Reson), additional +1 Atk Weight"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Burn]<br>"+
            "[On Hit] Convert 2 [Burn] on target to 1 [Defense Level Down] (Max 10)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/92/20205awakenprofile.png'
}

const NineTwoFaustCorrosion: Skill = {
    Name: "9:2",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Lust,
    BaseValue: 28,
    Coins: 1,
    CoinValue: -12,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets Randomly<br>"+
            "[Before Attack] At 4+ (Highest Lust A-Reson), +1 Atk Weight<br>"+
            "At 6+ (Highest Lust A-Reson), additional +1 Atk Weight"),
        new SkillDescriptionPart("[Tails Hit] Inflict 2 [Bind] next turn<br>"+
            "[On Hit] Inflict 4 [Burn]<br>"+
            "[On Hit] Convert 2 [Burn] on target to 1 [Defense Level Down] (Max 10)", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Faust/EGO/92/20205awakenprofile.png'
}

export const NineTwoFaust: Ego = {
    Id: 20205,
    Name: "9:2",
    Sinner: SinnerEnum.Faust,
    RiskLevel: RiskLevelEnum.TETH,
    AwakeningSkill: NineTwoFaustAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: NineTwoFaustCorrosion,
    CorrosionSanityCost: 20,
    Passive: new Passive("Flamebrand", PassiveTypeEnum.Ego, "On Heads Hit with a Lust affinity Skill, inflict 1 [Burn] on target (6 times per turn)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 1 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 2 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 3 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Faust/EGO/92/20205cg.png'
}