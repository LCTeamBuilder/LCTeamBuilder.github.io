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

const WCorpL3CleanupAgentRyoshuDefense: Skill = {
    Name: "Charged Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -4,
    SkillDescription: 
        [new SkillDescriptionPart("Base Power +1 per 5 [Charge] Count (Max 3)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/ChargedEvadeUT4.png"
}

const WCorpL3CleanupAgentRyoshuSkill1: Skill = {
    Name: "E.C.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("At 10+ [Charge] Count, deal +10% damage<br>"+
            "At 15+ [Charge] Count, deal additional +10% damage"), 
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/EC.png"
}

const WCorpL3CleanupAgentRyoshuSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Pride,
    BaseValue: 2,
    Coins: 3,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +7 [Charge] Count<br>"+
            "At 10+ [Charge] Count, gain +1 Coin Power<br>"+
            "At 15+ [Charge] Count, gain additional +1 Coin Power"),
        new SkillDescriptionPart("[On Hit] At 10+ [Charge] Count, inflict 2 [Slash Fragility]", 1),
        new SkillDescriptionPart("[On Hit] If target's HP is below 30%, deal +30% damage<br>"+
            "[On Kill] Gain 3 [Haste] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/Leap.png"
}

const WCorpL3CleanupAgentRyoshuSkill3: Skill = {
    Name: "D.D.E.D.R.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 7-14 [Charge] Count<br>"+
            "Consume all [Charge] Count,<br>"+
            "And consume 3 x (15 - [Charge] Count Consumed)% HP to gain +5 Coin Power<br>"+
            "[On Use] Consume 15 [Charge] Count to gain +5 Coin Power"),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 1),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 2),
        new SkillDescriptionPart("[Heads Hit] The final Coin deals +10% damage", 3),
        new SkillDescriptionPart("[On Kill] If the skill consumed 15 [Charge] Count upon use, apply 7 [Charge Barrier] to self and 1 other ally", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/WCorpL3CleanupAgent/DDEDR.png"
}

export const WCorpL3CleanupAgentRyoshu: Identity = {
    Id: 10405,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 66,
    HealthPerLevel: 2.28,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentRyoshuSkill1, 
            WCorpL3CleanupAgentRyoshuSkill2, 
            WCorpL3CleanupAgentRyoshuSkill3, 
            WCorpL3CleanupAgentRyoshuDefense],
    Passives: [
        new Passive("Dimensional Demon Edge",
            PassiveTypeEnum.Combat,
            "Upon defeating an enemy, gain +3 [Charge] Count (3 times per turn)",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dimensional Refraction Edge - Type: Blade Mk7",
            PassiveTypeEnum.Support,
            "When an ally with the lowest Max HP defeats an enemy, they gain +3 [Charge] Count (Once per turn)",
            [{ sin: SinEnum.Pride, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/WCorpL3CleanupAgent/10405gacksunginfo.png"
}