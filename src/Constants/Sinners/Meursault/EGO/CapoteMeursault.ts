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

const CapoteMeursaultAwakening: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 20,
    Coins: 1,
    CoinValue: +25,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[After Attack] Gain 2 [Haste], 1 [Wrath Power Up] and 1 [Blunt Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 10 [Burn]<br>"+
            "[On Hit] Inflict [Tremor] by target's [Burn] Count<br>"+
            "[On Hit] Inflict 3 [Burn] on 5 random enemies<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, If the [Tremor Burst] Staggered the target, inflict +3 [Burn] Count on 5 random enemies", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/Capote/20504awakenprofile.png'
}

const CapoteMeursaultCorrosion: Skill = {
    Name: "Capote",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 37,
    Coins: 1,
    CoinValue: -15,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly<br>"+
            "[After Attack] Gain 2 [Haste], 1 [Wrath Power Up] and 1 [Blunt Power Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 12 [Burn]<br>"+
            "[On Hit] Inflict [Tremor] by [Burn] on target<br>"+
            "[On Hit] Inflict 3 [Burn] on 5 random enemies<br>"+
            "[On Hit] Trigger [Tremor Burst], then reduce [Tremor] Count by 2, If the [Tremor Burst] Staggered the target, inflict +4 [Burn] Count on 5 random units", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/Meursault/EGO/Capote/20504erosionprofile.png'
}

export const CapoteMeursault: Ego = {
    Id: 20504,
    Name: "Capote",
    Sinner: SinnerEnum.Meursault,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: CapoteMeursaultAwakening,
    AwakeningSanityCost: 20,
    CorrosionSkill: CapoteMeursaultCorrosion,
    CorrosionSanityCost: 25,
    Passive: new Passive("Untempered Agitation", PassiveTypeEnum.Ego, "At the start of the combat phase, if targeted by 2 or more skills, this unit's skills have +1 Base Power, when hit, inflict 1 [Burn] on the attacker. (5 times per turn.)"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 0.75 },
                { sin: SinEnum.Gloom, resistance: 2 },
                { sin: SinEnum.Pride, resistance: 1 },
                { sin: SinEnum.Envy, resistance: 1 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Sloth, amount: 2 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/Meursault/EGO/Capote/20504cg.png'
}