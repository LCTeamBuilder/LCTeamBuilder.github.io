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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const WCorpL3CleanupAgentYiSangDefense: Skill = {
    Name: "Hollow Dimension",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 per 5 [Charge] Count (Max 2)<br>"+
            "[On Evade] +1 Potency when applying [Rupture] for the first time with a Skill effect next turn (Max +3 per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/HollowDimensionUT4.png'
}

const WCorpL3CleanupAgentYiSangSkill1: Skill = {
    Name: "Dimensional Slit",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Charge] Count<br>"+
            "At 10+ [Charge] Count, Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 2 [Rupture]", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/DimensionalSlit.png'
}

const WCorpL3CleanupAgentYiSangSkill2: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "[On Hit] At 10+ [Charge] Count, inflict 3 [Rupture] and +2 [Rupture] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/EnergyCycle.png'
}

const WCorpL3CleanupAgentYiSangSkill3: Skill = {
    Name: "Dimensional Rift",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At less than 15 [Charge] Count, consume 10 [Charge] Count to gain +1 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +2 Coin Power<br>"+
            "[Before Attack] If 15 [Charge] Count has been consumed, inflict +3 [Rupture] Count"),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture] for every 5 [Charge] Count consumed by the Skill (Max 9)<br>"+
            "[On Hit] If the Skill consumed 15 [Charge] Count upon use, inflict 2 [Dimensional Rift]<br>"+
            "[On Kill] Gain 5 [Charge Barrier]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/YiSang/WCorpL3CleanupAgent/DimensionalRift.png'
}

export const WCorpL3CleanupAgentYiSang: Identity = {
    Id: 10106,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentYiSangSkill1, 
            WCorpL3CleanupAgentYiSangSkill2, 
            WCorpL3CleanupAgentYiSangSkill3, 
            WCorpL3CleanupAgentYiSangDefense],
    Passives: [
        new Passive("Emptied Thought",
            PassiveTypeEnum.Combat,
            "- At Turn End, gain 1 [Haste] per 5 [Charge] Count on self next turn. (Max 3)<br>"+
            "- If this unit's Skill consumed [Charge] Count, apply 3 [Charge Barrier] to 1 ally with the lowest HP percentage",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Cleanup Demonstration",
            PassiveTypeEnum.Support,
            "1 Ally with the highest [Charge] Count deals more damage against targets with [Rupture] based on [Rupture] on target (+1.5% per [Rupture]. Max +15% damage)",
            [{ sin: SinEnum.Gluttony, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksung.png',
    PortraitImageDir: './assets/Sinners/YiSang/Identities/WCorpL3CleanupAgent/10106gacksunginfo.png'
}