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

const KurokumoClanCaptainGregorDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/GuardUT4.png"
}

const KurokumoClanCaptainGregorSkill1: Skill = {
    Name: "Lenticular Rend",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +2<br>"+
            "[Clash Win] Inflict 1 [Bleed]"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Bleed] Count", 1)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/LenticularRend.png"
}

const KurokumoClanCaptainGregorSkill2: Skill = {
    Name: "Shadow Cloud",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +2"),
        new SkillDescriptionPart("[Heads Hit] Inflict 2 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Attack Power Down] next turn", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/ShadowCloud.png"
}

const KurokumoClanCaptainGregorSkill3: Skill = {
    Name: "Shadowcloud Shattercleave",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gloom,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] If the target has 7+ [Bleed], Clash Power +1<br>"+
            "[On Use] If the target has 10+ [Bleed], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Offense Level Down]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Offense Level Down] next turn", 2),
        new SkillDescriptionPart("[Heads Hit] Inflict 3 [Bleed]<br>"+
            "[On Hit] If the target has 7+ [Bleed], inflict 1 [Plus Coin Drop] next turn", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Gregor/KurokumoClanCaptain/ShadowcloudShattercleave.png"
}

export const KurokumoClanCaptainGregor: Identity = {
    Id: 11208,
    Name: "Kurokumo Clan Captain",
    Sinner: SinnerEnum.Gregor,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [KurokumoClanCaptainGregorSkill1, 
            KurokumoClanCaptainGregorSkill2, 
            KurokumoClanCaptainGregorSkill3, 
            KurokumoClanCaptainGregorDefense],
    Passives: [
        new Passive("Dark Cloud Blade",
            PassiveTypeEnum.Combat,
            "Clash Win: inflict 1 [Bleed] (3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Dark Cloud Style",
            PassiveTypeEnum.Support,
            "When 1 ally with the slowest Speed hits and enemy with 7+ [Bleed], inflict 1 [Offense Level Down] next turn (3 times per turn)",
            [{ sin: SinEnum.Lust, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksung.png",
    PortraitImageDir: "./assets/Sinners/Gregor/Identities/KurokumoClanCaptain/11208gacksunginfo.png"
}