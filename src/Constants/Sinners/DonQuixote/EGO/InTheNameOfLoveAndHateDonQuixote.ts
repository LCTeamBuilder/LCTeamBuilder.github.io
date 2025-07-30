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

const InTheNameOfLoveAndHateDonQuixoteAwakening: Skill = {
    Name: "In the Name of Love and Hate - Major Arcana Slave!!!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 16,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 5,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Before Attack] Apply 1 [Magical Girls Chant] to (1 + (Envy Reson. / 2)) random other allies (max 4 allies)<br>" +
            "- If this unit has [Here Comes Magical Girl], apply 2 [Magical Girls Chant] to (1 + (Envy Reson. / 2)) random other allies instead (max 4 allies)<br><br>" +

            "[Before Attack] Gain +([Charge] - 1) Atk Weight (max 5)<br>" +
            "- If this unit has [Here Comes Magical Girl], gain ([Charge]) Atk Weight instead (max 5)<br><br>" +

            "[After Attack] Consume all [Charge] Count on self to heal (2 + (Envy Reson. / 2)) allies with the least HP by ([Charge] Count consumed)% HP (max 5 allies, max 10%)<br><br>" +

            "[After Attack] If this unit is Lobotomy E.G.O::In the Name of Love and Hate Don Quixote, gain 1 [Magical Arcana]"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Gain +2 [Charge] Count (10 per turn)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict [Mark of Villainy] on the main target next turn<br>" +
            "[On Hit] Inflict ([Charge] - 1) [Rupture] (max 4)<br>" +
            "- If this unit has [Here Comes Magical Girl], inflict +1 [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/InTheNameOfLoveAndHate/20309awakenprofile.png'
}

const InTheNameOfLoveAndHateDonQuixoteCorrosion: Skill = {
    Name: "Maximized Reversed Arcana Slave - Erasure of Hatred",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 31,
    Coins: 2,
    CoinValue: -12,
    AttackWeight: 5,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Indiscriminate]<br>" +
            "Targets randomly<br>" +
            "[Before Attack] Gain +([Charge]) Atk Weight (max 5)<br>" +
            "- If this unit has [Regressive Transformation - Reversed], gain +([Charge] + 1) Atk Weight instead (max 5)<br><br>" +

            "[Before Attack] Consume all [Charge] Count and deal +2.5% damage for every [Charge] Count consumed (max 50%)<br><br>" +

            "[Before Attack] If the main target has [Mark of Villainy], deal +5% damage for every [Charge] (max 25%)<br>" +
            "- If this unit has [Hysteria], deal +10% damage for every [Charge] instead (max 50%)<br><br>" +

            "[Before Attack] Deal +10% damage for every 2 Envy Reson. (max 30%, rounded down)<br><br>" +

            "[Before Attack] Base Power -12 for every Cracked Coin (max -24)<br><br>" +

            "[After Attack] If this unit is Lobotomy E.G.O::In the Name of Love and Hate Don Quixote, gain 1 [Hysteria]"),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Gain +2 [Charge] Count (14 per turn)", 1),
        new SkillDescriptionPart("[Unbreakable Coin]<br>" +
            "[On Hit] Inflict [Mark of Villainy] against the main target next turn<br>" +
            "[On Hit] Inflict ([Charge] - 1) [Sinking] (max 4)<br>" +
            "- If this unit has [Regressive Transformation - Reversed], inflict +1 [Sinking] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: './assets/Sinners/DonQuixote/EGO/InTheNameOfLoveAndHate/20309erosionprofile.png'
}

export const InTheNameOfLoveAndHateDonQuixote: Ego = {
    Id: 20309,
    Name: "In the Name of Love and Hate",
    Sinner: SinnerEnum.DonQuixote,
    RiskLevel: RiskLevelEnum.WAW,
    AwakeningSkill: InTheNameOfLoveAndHateDonQuixoteAwakening,
    AwakeningSanityCost: 30,
    CorrosionSkill: InTheNameOfLoveAndHateDonQuixoteCorrosion,
    CorrosionSanityCost: 30,
    Passive: new Passive("Arcana Aptitude Circuit", PassiveTypeEnum.Ego, "Gain 1 [Charge] every time this unit consumes 10 cumulative [Charge] Count<br>" +
        "- If this unit already gains [Charge] by consuming [Charge] Count on self, this effect does not stack with that effect<br>" +
        "- This unit's Base Attack Skills that consume [Charge] Count, deal +5% damage for every [Charge] on self (max 25%)<br><br>" +

        "If this unit is Lobotomy E.G.O::In the Name of Love and Hate Don Quixote, gain 1 additional Skill 3 use"),
    Resistances: [{ sin: SinEnum.Wrath, resistance: 0.5 },
                { sin: SinEnum.Lust, resistance: 2 },
                { sin: SinEnum.Sloth, resistance: 1 },
                { sin: SinEnum.Gluttony, resistance: 2 },
                { sin: SinEnum.Gloom, resistance: 1 },
                { sin: SinEnum.Pride, resistance: 0.5 },
                { sin: SinEnum.Envy, resistance: 0.75 }],
    Cost: [{ sin: SinEnum.Wrath, amount: 2 },
            { sin: SinEnum.Gloom, amount: 2 },
            { sin: SinEnum.Pride, amount: 2 },
            { sin: SinEnum.Envy, amount: 6 }],
    Keywords: [],
    FullImageDir: './assets/Sinners/DonQuixote/EGO/InTheNameOfLoveAndHate/20309cg.png'
}