import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const TheMiddleLittleSisterDonQuixoteDefense: Skill = {
    Name: "Multifold Retribution",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] If at 6+ Envy A-Reson including this Skill, use 'A Just Vengeance' as Counter.<br>"+
            "Upon activating the above effect, the Skill's affinity is changed to Envy.<br>"+
            "(Leftmost 'Multifold Retribution' is activated first. Activates 2 times per turn)"),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 1),
        new SkillDescriptionPart("[On Hit] Lower user's Stagger Threshold by 5", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/MultifoldRetribution.png"
}

const TheMiddleLittleSisterDonQuixoteSkill1: Skill = {
    Name: "Checking the Book",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Heal 5 SP"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/CheckingTheBook.png"
}

const TheMiddleLittleSisterDonQuixoteSkill2: Skill = {
    Name: "Proof of Loyalty",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] Inflict 1 [Damage Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/ProofOfLoyalty.png"
}

const TheMiddleLittleSisterDonQuixoteSkill3: Skill = {
    Name: "A Just Vengeance",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] This Skill gains 1 'Offense Level' by (highest A-Reson./2) (Max 6)<br>"+
            "If the Highest A-Reson is Envy A-Reson., boost 'Offense Level' gained by the above effect by 50% (rounded down)<br>"+
            "Gain double the 'Offense Level' from the above effects in Focused Encounters with 7 or fewer Participant Limits."),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Bleed]", 3),
        new SkillDescriptionPart("[After Attack] If target is defeated, 1 ally with the least SP heals 6 SP", 4)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/TheMiddleLittleSister/AJustVengeance1.png"
}

export const TheMiddleLittleSisterDonQuixote: Identity = {
    Id: 10306,
    Name: "The Middle Little Sister",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 86,
    HealthPerLevel: 2.95,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheMiddleLittleSisterDonQuixoteSkill1, 
            TheMiddleLittleSisterDonQuixoteSkill2, 
            TheMiddleLittleSisterDonQuixoteSkill3, 
            TheMiddleLittleSisterDonQuixoteDefense],
    Passives: [
        new Passive("Vengeance Tattoo",
            PassiveTypeEnum.Combat,
            "- Gain 1 [Envy DMG Up] next turn every time the enemies strike an ally (including this unit) 3 times. (Max 5)<br>"+
            "- Apply [Vengeance Mark] to the unit that dealt the most Skill damage to an ally.<br>"+
            "- If the main target has [Vengeance Mark], Coin Power +1",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Favoritism",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Max HP gains 1 [Blunt DMG Up] next turn every time the enemies strike an ally (not including this unit) 6 times. (Max 2)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/TheMiddleLittleSister/10306gacksunginfo.png"
}