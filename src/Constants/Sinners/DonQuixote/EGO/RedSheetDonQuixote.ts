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

const RedSheetDonQuixoteAwakening: Skill = {
    Name: "Red Sheet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 16,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 3,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Hit] Inflict (4 + Gluttony Reson.) [Twisted Curse Talisman] (max 10)", 1),
        new SkillDescriptionPart("Deal +5% damage for every [Twisted Curse Talisman] on target (max 50%)<br>" +
            "[On Hit] Inflict ([Twisted Curse Talisman] on target / 2) [Rupture] (max 4, rounded down)<br>" +
            "[On Hit] Inflict +([Twisted Curse Talisman] on target / 4) [Rupture] Count (max 2, rounded down)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/RedSheet/20308awakenprofile.png'
}

const RedSheetDonQuixoteCorrosion: Skill = {
    Name: "Red Sheet",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 26,
    Coins: 2,
    CoinValue: -10,
    AttackWeight: 3,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>"+
            "Targets randomly"),
        new SkillDescriptionPart("[On Hit] Inflict (6 + Gluttony Reson.) [Twisted Curse Talisman] (max 10)", 1),
        new SkillDescriptionPart("Deal +10% damage for every [Twisted Curse Talisman] on target (max 100%)<br>" +
            "[On Hit] Inflict ([Twisted Curse Talisman] on target / 2) [Rupture] (max 4, rounded down)<br>" +
            "[On Hit] Inflict +([Twisted Curse Talisman] on target / 3) [Rupture] Count (max 2, rounded down)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/RedSheet/20308erosionprofile.png'
}

export const RedSheetDonQuixote: Ego = {
    Id: 20308,
    Name: "Red Sheet",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.HE,
    AwakeningSkill: RedSheetDonQuixoteAwakening,
    AwakeningSanityCost: 25,
    CorrosionSkill: RedSheetDonQuixoteCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Enfeebling Talisman", PassiveTypeEnum.Ego, "On Hit with this unit's Skills: if the target either has 15+ [Rupture], or if this unit dealt a Critical Hit, inflict 1 [Defense Level Down] (max 6)<br>" +
        "- When this Passive activates, its effects do not stack with the effects of E.G.O Gift \"Old Wooden Doll\"."),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 2 },
                { sin: SinEnum.Lust, resistance: 0.75 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 1 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 2 },
                { sin: SinEnum.Envy, resistance: 0.5 }],
    Cost: [{ sin: SinEnum.Lust, amount: 1 },
            { sin: SinEnum.Gluttony, amount: 5 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 1 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/RedSheet/20308cg.png'
}