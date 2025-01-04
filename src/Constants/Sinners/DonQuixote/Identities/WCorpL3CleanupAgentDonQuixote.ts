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

const WCorpL3CleanupAgentDonQuixoteDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/EvadeUT4.png"
}

const WCorpL3CleanupAgentDonQuixoteSkill1: Skill = {
    Name: "Rip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Charge] Count, Coin Power +2"), 
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]<br>"+
            "[Heads Hit] Gain +4 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/Rip.png"
}

const WCorpL3CleanupAgentDonQuixoteSkill2: Skill = {
    Name: "Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Charge] Count, Coin Power +1"),
            new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 1),
            new SkillDescriptionPart("[On Hit] Gain +4 [Charge] Count", 2),
            new SkillDescriptionPart("[Heads Hit] Inflict 2 [Fragile]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/Leap.png"
}

const WCorpL3CleanupAgentDonQuixoteSkill3: Skill = {
    Name: "Rip Space",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 1,
    Coins: 5,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Spend 10 [Charge] Count to gain +4 Coin Power<br>"+
        "At less than 10 [Charge] Count, lose 20% HP"),
        new SkillDescriptionPart("[Heads Hit] Inflict 5 [Rupture]", 5)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/DonQuixote/WCorpL3CleanupAgent/RipSpace.png"
}

export const WCorpL3CleanupAgentDonQuixote: Identity = {
    Id: 10302,
    Name: "W Corp. L3 Cleanup Agent",
    Sinner: SinnerEnum.DonQuixote,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 73,
    HealthPerLevel: 2.51,
    SpeedMin: 3,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: -1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupAgentDonQuixoteSkill1, 
            WCorpL3CleanupAgentDonQuixoteSkill2, 
            WCorpL3CleanupAgentDonQuixoteSkill3, 
            WCorpL3CleanupAgentDonQuixoteDefense],
    Passives: [
        new Passive("Quick Recharge",
            PassiveTypeEnum.Combat,
            "At the start of the combat phase, gain [Charge] Count by (Gloom Reson. / 3).",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Broken Spirit",
            PassiveTypeEnum.Support,
            "1 ally with the highest Speed gains +1 final Power for their first skill.",
            [{ sin: SinEnum.Gloom, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksung.png",
    PortraitImageDir: "./assets/Sinners/DonQuixote/Identities/WCorpCleanupCrew/10302gacksunginfo.png"
}