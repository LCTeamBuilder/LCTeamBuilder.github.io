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

const ShiAssocSouthSection5HeathcliffDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Wrath,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Lose 5 HP<br>"+
            "At 3+ [Poise] Count, Damage +50%")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/Counter.png"
}

const ShiAssocSouthSection5HeathcliffSkill1: Skill = {
    Name: "Extreme Edge",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At less than 50% HP, Skill Power +2<br>"+
            "[On Use] Gain +3 [Poise] Count")],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/ExtremeEdge.png"
}

const ShiAssocSouthSection5HeathcliffSkill2: Skill = {
    Name: "Flying Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At less than 50% HP, +2 Skill Power<br>"+
            "[On Use] Gain 3 [Poise]")],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/FlyingSword.png"
}

const ShiAssocSouthSection5HeathcliffSkill3: Skill = {
    Name: "Flashing Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Poise] Count, Skill Power +2<br>"+
            "At less than 50% HP, +1 Atk Weight."),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP, +50% Skill Damage for this Coin", 1),
        new SkillDescriptionPart("[Before Attack] Lose 5 HP, +50% Skill Damage for this Coin", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Heathcliff/ShiAssociationSouthSection5/FlashingStrike.png"
}

export const ShiAssocSouthSection5Heathcliff: Identity = {
    Id: 10702,
    Name: "Shi Assoc. South Section 5",
    Sinner: SinnerEnum.Heathcliff,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [80, 60],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ShiAssocSouthSection5HeathcliffSkill1, 
            ShiAssocSouthSection5HeathcliffSkill2, 
            ShiAssocSouthSection5HeathcliffSkill3, 
            ShiAssocSouthSection5HeathcliffDefense],
    Passives: [
        new Passive("Repspiration",
            PassiveTypeEnum.Combat,
            "After taking damage from attacks this turn, deal +10% damage.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Self-neglect",
            PassiveTypeEnum.Support,
            "1 ally with the least HP deals and takes +20% damage.",
            [{ sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksung.png",
    PortraitImageDir: "./assets/Sinners/Heathcliff/Identities/ShiAssociationSouthSection5/10702gacksunginfo.png"
}