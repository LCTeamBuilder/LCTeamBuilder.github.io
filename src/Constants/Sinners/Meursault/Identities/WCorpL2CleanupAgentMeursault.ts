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

const WCorpL2CleanupAgentMeursaultDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 12,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Gain +2 [Charge] Count")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/GuardUT4.png"
}

const WCorpL2CleanupAgentMeursaultSkill1: Skill = {
    Name: "Rip",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 2 [Slash Protection]<br>"+
            "Gain +3 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +3 [Charge] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/Rip.png"
}

const WCorpL2CleanupAgentMeursaultSkill2: Skill = {
    Name: "Energy Cycle",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gloom,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If at 5+ [Charge] Count, Coin Power +1"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 1),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Rupture]<br>"+
            "[On Hit] Spend 3 [Charge] Count to inflict 2 [Slash Fragility]", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/EnergyCycle.png"
}

const WCorpL2CleanupAgentMeursaultSkill3: Skill = {
    Name: "Energy Current",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 5,
    Coins: 4,
    CoinValue: +2,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("If at 5+ [Charge] Count, Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 2),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 3),
        new SkillDescriptionPart("[On Hit] Spend 2 [Charge] Count to inflict 2 [Defense Level Down]", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Meursault/WCorpL3CleanupAgent/EnergyCurrent.png"
}

export const WCorpL2CleanupAgentMeursault: Identity = {
    Id: 10503,
    Name: "W Corp. L2 Cleanup Agent",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.73,
    SpeedMin: 4,
    SpeedMax: 8,
    StaggerHpPercentThresholds: [60, 30],
    DefenseLevel: +4,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL2CleanupAgentMeursaultSkill1, 
            WCorpL2CleanupAgentMeursaultSkill2, 
            WCorpL2CleanupAgentMeursaultSkill3, 
            WCorpL2CleanupAgentMeursaultDefense],
    Passives: [
        new Passive("Enduring Spirit",
            PassiveTypeEnum.Combat,
            "When attacked, gain +1 [Charge] Count.<br>"+
            "(Up to 6 times)<br>"+
            "After losing a clash, gain +1 [Charge] Count. (Up 6 times, counted independently of hits taken)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Taciturn",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed inflicts +1 [Rupture].",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/WCorpCleanupCrew/10503gacksunginfo.png"
}