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

const WCorpL3CleanupCaptainOutisDefense: Skill = {
    Name: "Deploy Plasma",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 10,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Base Power +1 for every [Charge] Count on self (max 10)<br>"+
            "[On Use] Gain +2 [Charge] Count (3 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/DeployPlasmaUT4.png"
}

const WCorpL3CleanupCaptainOutisSkill1: Skill = {
    Name: "Ripple",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At 4+ [Charge] Count, Base Power +1<br>"+
            "[On Use] Clash Power +1 for every 5 [Charge] Count on self (max 2)<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/Ripple.png"
}

const WCorpL3CleanupCaptainOutisSkill2: Skill = {
    Name: "Charged Leap",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Consume 6 [Charge] Count on self to gain Coin Power +1<br>"+
            "- If this unit consumed [Charge] Count, apply ([Charge] + 2) [Charge] Barrier to self and 2 other allies with the least [Charge] Count.<br>"+
            "(Max 8 [Charge Barrier] per ally. Activates 2 times per turn max)<br>"+
            "[On Use] Gain +2 [Charge] Count"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Charge] Count<br>"+
            "[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] If this Skill consumed [Charge] Count on use, inflict 2 [Bind] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/ChargedLeap.png"
}

const WCorpL3CleanupCaptainOutisSkill3: Skill = {
    Name: "Rip Dimension",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 4,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: 0,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] To self and (highest Reson.) allies with [Charge]: apply [Load] equal to [Charge] on self<br>"+
            "(Max 5 other allies)<br>"+
            "[On Use] At 2+ [Charge] and 7-14 [Charge] Count, consume all [Charge] Count on self to gain Coin Power +2<br>"+
            "[On Use] Consume 15 [Charge] Count to gain Coin Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 2),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Rupture]", 3),
        new SkillDescriptionPart("[On Hit] If this Skill consumed 15 [Charge] Count on use, inflict 3 [Rupture]<br>"+
            "[On Hit] Gain (5 - [Charge]) [Charge] Count (Min 0)", 4)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Outis/WCorpL3CleanupCaptain/RipDimension.png"
}

export const WCorpL3CleanupCaptainOutis: Identity = {
    Id: 11110,
    Name: "W Corp. L3 Cleanup Capitan",
    Sinner: SinnerEnum.Outis,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 70,
    HealthPerLevel: 2.32,
    SpeedMin: 3,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [WCorpL3CleanupCaptainOutisSkill1, 
            WCorpL3CleanupCaptainOutisSkill2, 
            WCorpL3CleanupCaptainOutisSkill3, 
            WCorpL3CleanupCaptainOutisDefense],
    Passives: [
        new Passive("Overcharge / Cleanup Order",
            PassiveTypeEnum.Combat,
            "Gain 1 [Charge] every time this unit consume 10 cumulative [Charge] Count in this Encounter<br>"+
            "Turn End: Apply 1 [Clash Power Up] next turn to ([Charge]) W Corp. employees, including this unit, in reverse Deployment order (max: 5 allies)",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Refraction",
            PassiveTypeEnum.Support,
            "1 ally who has the most [Charge] Count at Turn Start: deal +10% more damage with Skills that consumed 7+ [Charge] Count (once per turn)",
            [{ sin: SinEnum.Envy, amount: 4 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksung.png",
    PortraitImageDir: "./assets/Sinners/Outis/Identities/WCorpL3CleanupCaptain/11110gacksunginfo.png"
}